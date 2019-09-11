# webpack 配置优化

## code splitting

来源 https://github.com/frontend9/fe9-library/issues/242，讲解很透彻

### 为什么要做 code splitting

- 减少单一资源的大小（大小和数目之间有一个权衡）
- 对于多页或者动态加载下的多路由情况下减小冗余的内容（同样的模块在不同逻辑可能会被重复包含）
- 通过不同页面直接模块的复用提高缓存的作用
- 将长期不会改变的内容打包到一个文件中避免新的发布带来资源的更新，可以提高缓存的命中率

### chunk 概述

chunk 是指最终被打包出来的代码块（构建产物每个文件就是一个 chunk），code splitting 则是指如何生成这些代码块。做 code splitting 有如下四个方法：

- 多 entry，多 entry 不仅可以用来多个独立的应用的配置，还可以用来实现一个应用打包成为多个包。
- 动态加载（Dynamic Imports）。
- Prevent Duplication，配置 `optimization.splitChunks`，使用 [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) 这个插件。
- 配置 optimization.runtimeChunk。

其中前面两种是基本的方法，它们将 chunk 分为 initial 和 async 两种类型。

- initial 是指初始化 chunk，一般就是每个 entry 对应一个。
- async 是动态加载的部分，也就是项目里面通过 import() 函数来加载的部分。

后面两个方法是指通过 webpack 的配置，可以按照一定的规范来划分 chunk，也就是从上面两种基本的 chunk 中提取出更多 chunk，达到提高缓存命中率，降低冗余代码等优化，从而实现期望的优化目的。

一句话来说：webpack 会 以 entry 和 import 为切割点划分文件，然后按照 `optimization.splitChunks` 配置来做公共 chunk 的提取。

## 默认的 vue-cli3 配置

默认的配置如下，对初始的简单项目足够用了

```js
// vue-cli3 默认的 splitChunks 配置
// 单页面项目变大之后，提取文件也变的很大，需要继续优化拆分
splitChunks: {
  cacheGroups: {
    vendors: {
      name: 'chunk-vendors',
      test: /[\\\/]node_modules[\\\/]/,
      priority: -10,
      chunks: 'initial'
    },
    common: {
      name: 'chunk-common',
      minChunks: 2,
      priority: -20,
      chunks: 'initial',
      reuseExistingChunk: true
    }
  }
}
```

但项目变大之后，`chunk-vendors.xxx.js`、`app.xxx.js` 会达到 300K+(gzip 100K+)，就需要继续优化

## webpack 配置

先分清两个概念，chunk 和 module，可以这样简单的理解

- 我们项目中每一个引入的资源，都可以理解为一个 module
- 而 webpack 打包输出的每一个独立的文件，都是一个 chunk。一个 chunk 可以包含多个 module

在优化之前，我们先了解下 webpack 的 `splitChunks` 配置项[官方文档](https://webpack.js.org/plugins/split-chunks-plugin/)，其默认配置如下：

- chunk 是被复用的，或者是在 node_modules 下面的
- chunk 的大小大于 30kb（压缩和 gzip 之前）
- 每个页面的 chunk 数不大于 5 个
- 初始化页面的 chunk 数不大于 3 个

为了满足后面两个条件，webpack有可能受限于包的最大数量值，生成的代码体积往上增加。这就是为什么项目大了之后，输出的 chunk 会那么大了。

```js
// webpack 默认的 splitChunks 配置
module.exports = {
  // ...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000, // byte, 30kb
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 符合条件的就会被提取，不写默认选择所有模块
          priority: -10, // 优先级，当同一个模块同时包含在不同cacheGroup中，该模块将被划分到优先级高的组中
        },
        default: { // 默认缓存组的配置
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true, // 如果该chunk包含的modules都已经在另一个被分割的chunk中存在，那么直接引用已存在的chunk，不会再重新产生一个
        },
        common: { // 这个不是默认的，是 yutingzhao1991 加的
          filename: '[name].bundle.js', // chunks 为 initial 时有效。在 manifest 中最后会是 '[name].js': [name].bundle.js[TODO: 这个？]。webpack 默认值是 [name].js。
          name: 'common', // 和 filename 的作用类似
          chunks: 'initial',
          minChunks: 1,
          enforce: true, // 无视 maxInitialRequest maxAsyncRequests maxSize minSize 配置，都会生成这个 chunk
        },
      },
    },
  },
}
```

`splitChunks` 参数说明如下：

- chunks: 表示提取 chunks 的时候从哪里提取
  - async: (默认)表示对动态（异步）导入的模块进行分割提取
  - all: 不管是不是 async 的都可能被抽出 chunk
  - initial: 从非 async 里面提取
  - function: 通过函数也可以控制，如 `chunk: function (chunk) { return chunk.name === 'vuex' }`
  - 可以将此配置与`HtmlWebpackPlugin`结合使用，将抽取块直接注入 html
- minSize: byte单位字节, 默认 30kb。值越大那么单个文件越大，chunk 数就会变少（针对于提取公共 chunk 的时候，不管再大也不会把动态加载的模块合并到初始化模块中）当这个值很大的时候就不会做公共部分的抽取了
- maxSize: 文件的最大尺寸，默认为 0，即不限制。优先级：maxInitialRequest/maxAsyncRequests < maxSize < minSize，需要注意的是这个如果配置了，文件大了就会被拆开。
- minChunks: 被提取的一个模块至少需要在几个 chunk 中被引用，这个值越大，抽取出来的文件就越小。默认为 1，即不需要多次引用也可以被分割，保证代码块复用性）
- maxAsyncRequests: 在做一次按需加载的时候最多有多少个异步请求，为 1 的时候就不会抽取公共 chunk 了，默认为 5；
- maxInitialRequests: 针对一个 entry 做初始化模块分隔的时候的最大文件数，优先级高于 cacheGroup，所以为 1 的时候就不会抽取 initial common 了，默认为 3；
- automaticNameDelimiter: 文件名分隔符，默认为 `~`；
- automaticNameMaxLength: 允许为由 `SplitChunksPlugin` 生成的块名称设置最大字符数；
- name: chunk 的名称。默认 true，将根据块和缓存组密钥自动生成名称；
- cacheGroups: 缓存组。可以继承和/或覆盖上面的配置，并提供以下独有参数配置，如要禁用默认缓存组，将其设置为 false `cacheGroups: { default: false }`；
  - test: 表示要过滤 modules，默认为所有的 modules，可配置决定模块资源路径或 chunk 名字，当匹配的是 chunk 名字的时候，其里面的所有 modules 都会选中；
  - priority：表示抽取权重，数字越大表示优先级越高(默认为负)。因为一个 module 可能会满足多个 cacheGroups 的条件，那么抽取到哪个就由权重最高的说了算；
  - reuseExistingChunk：表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的；
  - filename: 允许在当且仅当它是初始块时覆盖文件名；
  - enforce: 将忽略 xxxSize, xxxRequests选择，只为这个缓存组创建块；

对此，可以对比 vue-cli3 的默认配置理解各参数配置

### 性能优化

来自 yutingzhao1991

**优化思路：**

- 总体目的是为了降低（最小可用）资源加载时间
- 提高缓存命中率
- 降低资源尺寸大小
- 预加载

**splitChunk 配置策略**

- 请求数和大小之间的权衡。HTTP2 普及后倾向于多文件，单个文件更小，提高缓存命中率和总体资源大小。

**优化建议**

- initial 的模块按照项目实际情况手动划分为几个部分，对于单页应用来说通常就是指把 node_modules 里面的内容单独抽取，比如可以把 react 相关抽取出来作为一个 chunk，然后其他工具抽取出来作为一个 chunk。这样固定的模式更容易保持构建产物在多次发布之间不改变。
- async 的模块设定一个合适的 minSize 即可，使得文件大小和个数最优。个人感觉也不需要单独把 node_modules 中的文件提取出来，这样可能会导致文件太多。
- 对于多 entry 的应用可以再抽取出公共的方法，通过 minChunks 来设定，比如超过两个引用就抽取到 commons 中。

**关于 external**

一些特别大的库可以加上 external，比如 data-set，g2，element-ui 这些

**关于runtimeChunk**

这个可以不设置

## 配置实战

### 如何优化

前面被总结的都差不多了，我们考虑下我们的场景现况和期望

对于 vue-cli3 默认配置并不能满足我们的需求，项目大了，输出文件就变得很大，我们需要继续拆分，而我们的模块类型大体如下

| 类型 | 复用率 | 更新频率 | 例子🌰 |
|:=====|:=====|:========|:======|
| 第三方库 | 高 | 低 | vue, vue-router, vuex, axios 等 |
| util库, UI库 | 高 | 中 | @dwdjs/utils, vant |
| 业务模块 | 低 | 高 | 业务逻辑代码，各种view |

拆分如下

- 提取第三方为独立包，如 vue, vue-router, vuex, axios 等
  - 不仅能跨端复用 cdn，还能充分利用浏览器缓存
  - 可使用 webpack dll 方案实现，还能提升构建速度
- 提取项目公共库，如 utils, api, tongji 等
  - 检查按需引入 Code Splitting 是否起到效果，比如 @dwdjs/utils 就全量引入了，并未按需加载
- 业务公用代码，按引用次数分割即可
- 页面逻辑，按需动态加载接口
  - 如果文件过小，是否可以合并？
- 启用 http2，充分利用多路复用加载资源
- 利用预加载、预解析
- 使用 Service worker？不支持 http2，多路复用还有效吗，速度是否快？
- 把 manifest 代码（这个文件很小，不值得一个 http 请求） inline 到 html 中

有了方向，剩下的就是产出配置了，这个还需要细节调试

### 示例

vue-cli3 配置

```js
chainWebpack: config => {
  config.optimization.splitChunks({
    chunks: 'all',
    minSize: 60000, // byte, 30kb
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    automaticNameMaxLength: 30,
    cacheGroups: {
      // 抽取第三方模块
      libs: {
        name: `chunk-lib`,
        test: /[\\/]node_modules[\\/](vue|vuex|vue-router|axios|register-service-worker)[\\/]/,
        priority: 0,
        chunks: 'initial',
      },
      vendors: {
        name: `chunk-vendors`,
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        chunks: 'initial',
      },
      common: {
        name: `chunk-common`,
        minChunks: 2,
        priority: -20,
        chunks: 'initial',
        reuseExistingChunk: true,
      },
    },
  })
}
```

## 加载 SourceMap

可以参看

- http://www.xbhub.com/wiki/webpack/3%E5%AE%9E%E6%88%98/3-21%E5%8A%A0%E8%BD%BDSourceMap.html

参考：

- [官方文档](https://webpack.js.org/plugins/split-chunks-plugin/)
- [webpack code splitting 解析](https://github.com/frontend9/fe9-library/issues/242)
- [webpack源码学习系列之二：code-splitting（代码切割）](https://github.com/youngwind/blog/issues/100)
- [webpack 4: import() and CommonJs](https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655)
- [webpack之module、chunk和缓存机制](https://fatshen3.cn/2018/03/02/webpack-module-and-chunk-and-chunkhash/)
