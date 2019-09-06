# vue-h5-pro

开箱即用的H5前端/设计解决方案(Vue)

此示例工程，基于 vue-cli 3 + vant 搭建。

## 贴近真实需求

### 功能增强

- [x] 采用 vw/vh 移动端适配方案
- [x] 区分router 在 dev/prod 模式下的引入方式，开发模式编译更快
- [x] 增加 debug 调试功能，引入 vConsole
- [ ] 封装 api 请求，并支持动态切换
- [ ] 优化推广或分享页面进入场景，先中转首页再进入目的页面，并优化 back 显示，灵活控制
- [ ] JSBridge/SDK 接入方案，多场景同时接入时，如何隔离
- [ ] 数据统计接入方案
- [ ] 错误上报统计功能
- [x] 添加 eslint + prettier 代码格式检查，参看[./docs/rule.md]
  - [ ] 添加 webpack 插件，开发环境支持使用 console.log，生产包自动删除

### 页面功能扩展

收集常见需求场景实现

- 增加 header 使用场景
  - [x] 灵活控制显示隐藏
  - [ ] 优化header左右按钮操作体验
  - [ ] 灵活控制 header 左中右三部分内容及 点击事件
  - [ ] 自适应窗口大小时，对 header 和 footer 进行显示优化，不能过高
- [x] 增加 tab-bar 使用场景，灵活控制显示隐藏
- [ ] 增加关键错误，显示错误页面逻辑，支持点击刷新
- [ ] 弹出经典注册/登录，OAuth 授权等
- [ ] 优惠券列表、领券、选择、使用等使用场景
- [ ] 地址列表、选择、添加、编辑等使用场景
- [ ] 公告、通知相关使用场景
- [ ] sku 选择相关逻辑
- [ ] 详情页配送地址相关逻辑
- [ ] 购物车相关逻辑
- 优化加载体验
  - [ ] 增加 loading 占位页面
  - [ ] 增加骨架屏使用场景示例

### 其他问题

- [ ] 如何封装请求，使用起来更方便灵活
- [ ] CPS 模式下如何更好的代码分割管理

## 运行

``` bash
# 安装依赖
yarn

# 本地开发
# 通过 localhost:8080 访问页面
npm run serve

# 生产环境构建
npm run build

# 代码格式校验
npm run lint
```
