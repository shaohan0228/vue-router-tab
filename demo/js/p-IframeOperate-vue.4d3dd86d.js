(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-IframeOperate-vue"],{7694:function(e,t,a){"use strict";var r=a("9612"),i=a.n(r);i.a},9612:function(e,t,a){},ccdb:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Iframe 页签操作")]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$tabs.openIframe(e.site.src,e.site.title,e.icon)}}},[e._v(" 打开“"+e._s(e.site.title)+"” ")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$tabs.refreshIframe(e.site.src)}}},[e._v(" 刷新“"+e._s(e.site.title)+"” ")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$tabs.closeIframe(e.site.src)}}},[e._v(" 关闭“"+e._s(e.site.title)+"” ")])]),a("p",[a("a",{staticClass:"demo-btn",attrs:{title:"XSS 跨站链接的 iframe 将展示空白页面"},on:{click:function(t){e.$tabs.openIframe("javascript:alert(window.parent.document.body.innerHTML)","XSS 跨站",e.icon)}}},[e._v(" XSS 跨站 ")])]),a("h3",[e._v("打开 Iframe 页签")]),a("div",{staticClass:"custom-iframe"},[a("label",[e._v(" 名称： "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.iframe.title,expression:"iframe.title"}],attrs:{name:"title",placeholder:"页签标题"},domProps:{value:e.iframe.title},on:{input:function(t){t.target.composing||e.$set(e.iframe,"title",t.target.value)}}})]),a("label",[e._v(" 网址： "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.iframe.src,expression:"iframe.src"}],attrs:{name:"src",placeholder:"请输入完整的网址"},domProps:{value:e.iframe.src},on:{input:function(t){t.target.composing||e.$set(e.iframe,"src",t.target.value)}}})]),a("a",{staticClass:"demo-btn primary",on:{click:function(t){e.iframe.src&&e.$tabs.openIframe(e.iframe.src,e.iframe.title,e.icon)}}},[e._v(" 打开页签 ")])]),/^\/iframe\//.test(e.$route.path)?[a("h3",{staticClass:"text-strong"},[e._v(" 提示： ")]),e._m(0)]:e._e()],2)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" 开启浏览器开发者工具的 console 页签，打开 Iframe 页签并查看 "),a("code",[e._v("iframe-mounted")]),e._v(" 和 "),a("code",[e._v("iframe-loaded")]),e._v(" 事件的参数打印 ")])}],s={name:"IframeOperate",data:function(){return{icon:"rt-icon-web",site:{src:"https://cn.vuejs.org",title:"Vue.js"},iframe:{src:"https://router.vuejs.org/zh/",title:"Vue Router"}}}},n=s,c=(a("7694"),a("2877")),o=Object(c["a"])(n,r,i,!1,null,"0a34e7f4",null);t["default"]=o.exports}}]);
//# sourceMappingURL=p-IframeOperate-vue.4d3dd86d.js.map