(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"147b":function(t,e,i){"use strict";var a=i("1f41"),n=i.n(a);n.a},"1f41":function(t,e,i){},"25c1":function(t,e,i){"use strict";i("8076"),i("d1c9")},4162:function(t,e,i){"use strict";var a=i("4c5b"),n=Object(a["a"])("col"),l=n[0],c=n[1];e["a"]=l({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],i=this.span,a=this.offset;return e(this.tag,{style:this.style,class:c((t={},t[i]=i,t["offset-"+a]=a,t)),on:{click:this.onClick}},[this.slots()])}})},7758:function(t,e,i){"use strict";i("8076"),i("d222")},"7f5c":function(t,e,i){"use strict";i.r(e);var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-index"},[i("van-cell-group",{attrs:{title:"demo"}},[i("van-cell",{attrs:{title:"详情页","data-link":"detail","is-link":""},nativeOn:{click:function(e){return t.goNext(e)}}}),i("van-cell",{attrs:{title:"购物车","data-link":"cart","is-link":""},nativeOn:{click:function(e){return t.goNext(e)}}}),i("van-cell",{attrs:{title:"个人中心","data-link":"profile","is-link":""},nativeOn:{click:function(e){return t.goNext(e)}}})],1)],1)},l=[],c=i("bd86"),r=(i("c1f0"),i("c40e")),s=(i("e0e9"),i("8b0d")),o=(i("25c1"),i("649f")),u=(i("7758"),i("4162")),d={components:(a={},Object(c["a"])(a,u["a"].name,u["a"]),Object(c["a"])(a,o["a"].name,o["a"]),Object(c["a"])(a,s["a"].name,s["a"]),Object(c["a"])(a,r["a"].name,r["a"]),a),methods:{goNext:function(t){var e=t.currentTarget.dataset.link;switch(e){case"detail":case"cart":case"profile":this.$router.push("".concat(e));break;default:}}}},b=d,f=(i("147b"),i("2877")),v=Object(f["a"])(b,n,l,!1,null,"7273ef94",null);e["default"]=v.exports},"8b0d":function(t,e,i){"use strict";var a=i("c31d"),n=i("2638"),l=i.n(n),c=i("4c5b"),r=i("6641"),s={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}},o=i("d1cd"),u=i("73d5"),d=i("649f"),b=Object(c["a"])("cell"),f=b[0],v=b[1];function p(t,e,i,a){var n=e.icon,c=e.size,s=e.title,b=e.label,f=e.value,p=e.isLink,g=e.arrowDirection,k=i.title||Object(r["b"])(s),h=i.default||Object(r["b"])(f),m=i.label||Object(r["b"])(b),O=m&&t("div",{class:[v("label"),e.labelClass]},[i.label?i.label():b]),j=k&&t("div",{class:[v("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[s]),O]),S=h&&t("div",{class:[v("value",{alone:!i.title&&!s}),e.valueClass]},[i.default?i.default():t("span",[f])]),w=i.icon?i.icon():n&&t(d["a"],{class:v("left-icon"),attrs:{name:n}}),x=i["right-icon"],N=x?x():p&&t(d["a"],{class:v("right-icon"),attrs:{name:g?"arrow-"+g:"arrow"}});function y(t){Object(o["a"])(a,"click",t),Object(u["a"])(a)}var C={center:e.center,required:e.required,borderless:!e.border,clickable:p||e.clickable};return c&&(C[c]=c),t("div",l()([{class:v(C),on:{click:y}},Object(o["b"])(a)]),[w,j,S,N,i.extra&&i.extra()])}p.props=Object(a["a"])({},s,{},u["c"]);e["a"]=f(p)},c1f0:function(t,e,i){"use strict";i("8076")},c40e:function(t,e,i){"use strict";var a=i("2638"),n=i.n(a),l=i("4c5b"),c=i("d1cd"),r=i("4f2f"),s=Object(l["a"])("cell-group"),o=s[0],u=s[1];function d(t,e,i,a){var l,s=t("div",n()([{class:[u(),(l={},l[r["c"]]=e.border,l)]},Object(c["b"])(a,!0)]),[i.default&&i.default()]);return e.title||i.title?t("div",[t("div",{class:u("title")},[i.title?i.title():e.title]),s]):s}d.props={title:String,border:{type:Boolean,default:!0}},e["a"]=o(d)},d222:function(t,e,i){},e0e9:function(t,e,i){"use strict";i("8076"),i("d1c9")}}]);
//# sourceMappingURL=index.c9786299.js.map