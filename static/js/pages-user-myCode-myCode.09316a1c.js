(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-myCode-myCode"],{3803:function(t,e,n){"use strict";n.r(e);var o=n("abde"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},"5a31":function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("我的推广二维码")])],2),n("v-uni-image",{attrs:{src:t.baseUrl+"/books"+t.url,mode:""}})],1)},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}))},"8d07":function(t,e,n){"use strict";var o=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getCode=u,e.getPromote=a;var r=o(n("1bd8"));function u(){return r.get("/books/promote/yards")}function a(t){return r.get("/books/promote/page",t)}},abde:function(t,e,n){"use strict";var o=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("8d07")),u=n("e66a"),a={data:function(){return{url:""}},computed:{baseUrl:function(){return u.baseUrl}},onLoad:function(t){},mounted:function(){this.getCodeAction()},methods:{getCodeAction:function(){var t=this;r.getCode().then((function(e){t.url=e.data,console.log(u.baseUrl+"/books"+t.url,"二维码")}),(function(t){}))}}};e.default=a},c8d1:function(t,e,n){"use strict";n.r(e);var o=n("5a31"),r=n("3803");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);var a,c=n("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"35b79e1c",null,!1,o["a"],a);e["default"]=i.exports}}]);