(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"static/js/"+({cart:"cart","common-debug":"common-debug",detail:"detail",fire:"fire",index:"index",login:"login",profile:"profile",sort:"sort"}[e]||e)+"."+{cart:"7ee2a8a3","common-debug":"ab88b572",detail:"5712a724",fire:"961c62d6",index:"b535bd1c",login:"b1f115bd",profile:"1848ae2a",sort:"56c005d3"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={cart:1,"common-debug":1,detail:1,index:1,login:1,profile:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="static/css/"+({cart:"cart","common-debug":"common-debug",detail:"detail",fire:"fire",index:"index",login:"login",profile:"profile",sort:"sort"}[e]||e)+"."+{cart:"798e31e1","common-debug":"05560fb5",detail:"be81f419",fire:"31d6cfe0",index:"f3fc5f8f",login:"1d5405d9",profile:"77243398",sort:"31d6cfe0"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-lib","chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"51be":function(e,t,r){"use strict";var n=!0,a={stage:"prod",routerBase:n?"/vue-h5-pro":"",routerMode:"history",apiEnv:"prod",apiBaseUrl:"https://m.api.xxx.com",isEnv:function(e){var t=this.stage;return t===e||Array.isArray(e)&&e.indexOf(t)>-1}};t["a"]=a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n,a=r("2b0e"),o=r("a516"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.classes,attrs:{id:"app"}},[r("van-nav-bar",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}],staticClass:"dwd-nav-bar van-hairline--bottom",attrs:{title:e.title,"left-arrow":e.showBack,border:!1},on:{"click-left":e.onBack,"click-right":e.onClickRight}}),r("keep-alive",[r("router-view",{staticClass:"page"})],1),r("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.showTabBar,expression:"showTabBar"}],staticClass:"dwd-tab-bar",model:{value:e.curTabBar,callback:function(t){e.curTabBar=t},expression:"curTabBar"}},[r("van-tabbar-item",{attrs:{name:"index",replace:"",to:"/index",icon:"home-o"}},[e._v("首页")]),r("van-tabbar-item",{attrs:{name:"sort",replace:"",to:"/sort",icon:"apps-o"}},[e._v("分类")]),r("van-tabbar-item",{attrs:{name:"fire",replace:"",to:"/fire",icon:"fire-o"}},[e._v("发现")]),r("van-tabbar-item",{attrs:{name:"cart",replace:"",to:"/cart?tabbar=1",icon:"shopping-cart-o"}},[e._v("购物车")]),r("van-tabbar-item",{attrs:{name:"profile",replace:"",to:"/profile",icon:"user-o"}},[e._v("我的")])],1)],1)},c=[],s=(r("6762"),r("a481"),r("bd86")),u=(r("b0b1"),r("fced")),l=(r("6724"),r("2ee8")),d=(r("75b9"),r("58cb")),f=["index","sort","fire","cart","profile"],p={components:(n={},Object(s["a"])(n,d["a"].name,d["a"]),Object(s["a"])(n,l["a"].name,l["a"]),Object(s["a"])(n,u["a"].name,u["a"]),n),data:function(){return{title:"",curTabBar:"index",showBack:!1,showTabBar:!1,showHeader:!1}},computed:{classes:function(){return{"has-nav-bar":this.showHeader,"has-tab-bar":this.showTabBar}}},watch:{$route:{handler:"watchRoute",immediate:!0}},created:function(){},methods:{onBack:function(){history.back()},onClickRight:function(){},watchRoute:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=e.name;this.curTabBar=e.name;var r,n=e.meta.title;this.title=n?n.replace(/-/g,""):"",this.showHeader=1!==e.query.hide_header,r="cart"===t?e.query.tabbar:f.includes(t),this.showTabBar=r,this.showBack=!r}}},m=p,b=(r("7c55"),r("2877")),h=Object(b["a"])(m,i,c,!1,null,null,null),v=h.exports,g=(r("ac6a"),r("8c4f")),w=r("51be");a["a"].use(g["a"]);var y=function(e){return function(){return r("9dac")("./".concat(e))}},x=[{path:"",name:"index",alias:"/index",component:y("index"),meta:{title:"首页"}},{name:"sort",component:y("sort"),meta:{title:"分类"}},{name:"fire",component:y("fire"),meta:{title:"发现"}},{name:"cart",component:y("cart"),meta:{title:"购物车"}},{name:"profile",component:y("profile"),meta:{title:"个人中心"}},{name:"detail",component:y("detail"),meta:{title:"商品详情"}},{name:"login",component:y("login"),meta:{title:"快捷登录"}}];w["a"].isEnv("prod")&&x.unshift({name:"debug",component:y("common/debug"),meta:{title:"Debug 调试页面",needAuth:!1}}),x.push({path:"*",redirect:"/"}),x.forEach(function(e){"undefined"===typeof e.path&&(e.path="/"+(e.name||""))});var k=new g["a"]({mode:w["a"].routerMode,base:w["a"].routerBase,routes:x}),O=k,j=r("9483");function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;setTimeout(function(){new a["a"]({el:"#app",router:O,render:function(e){return e(v)}})},e)}if(Object(j["a"])("".concat("","service-worker.js"),{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(e){console.error("Error during service worker registration:",e)}}),O.beforeEach(function(e,t,r){var n=e.meta,a=void 0===n?{}:n;return-1===a.status?r(!1):(a.title&&(document.title=a.title),r())}),w["a"].console){var T="https://dwdjs.github.io/vConsole/dist/vconsole.min.js";Object(o["loadJs"])(T,{async:!0,first:!0,onload:function(){"undefined"!==typeof VConsole&&(window.vConsole=new VConsole),B()}})}else B()},"7c55":function(e,t,r){"use strict";var n=r("7f1a"),a=r.n(n);a.a},"7f1a":function(e,t,r){},"9dac":function(e,t,r){var n={"./":["1e4b","index"],"./cart":["da83","cart"],"./cart.vue":["da83","cart"],"./common/debug":["00a0","common-debug"],"./common/debug.vue":["00a0","common-debug"],"./detail":["1000","detail"],"./detail.vue":["1000","detail"],"./fire":["0237","fire"],"./fire.vue":["0237","fire"],"./index":["1e4b","index"],"./index.vue":["1e4b","index"],"./login":["dd7b","login"],"./login.vue":["dd7b","login"],"./profile":["b3b1","profile"],"./profile.vue":["b3b1","profile"],"./sort":["84a6","sort"],"./sort.vue":["84a6","sort"]};function a(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],a=t[0];return r.e(t[1]).then(function(){return r(a)})}a.keys=function(){return Object.keys(n)},a.id="9dac",e.exports=a}});