(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-myCode-myCode"],{"1bd8":function(t,e,n){"use strict";var o=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var a=n("e66a"),i=o(n("3dd7")),r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},o={Accept:"application/json"},r=i.default.getters["getToken"];return o["token"]=r||null,new Promise((function(i,r){wx.request({url:a.baseUrl+t,data:e,method:n.method||"POST",header:o,success:function(t){console.log(t,"res",200!==t.data.code,t.data.desc),200!==t.data.code?setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),200):(console.log(t,"2222"),i(t.data))},fail:function(t){return uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500}),r("网络请求失败，请稍后再试")},complete:function(t){var e="",n=t&&t.statusCode;switch(n){case 400:e="错误请求",uni.showToast({icon:"none",title:e,duration:1500});break;case 401:e="未授权，请重新登录",uni.showToast({icon:"none",title:e,duration:1500});break;case 403:e="拒绝访问",uni.showToast({icon:"none",title:e,duration:1500});break;case 404:e="请求错误,未找到该资源",uni.showToast({icon:"none",title:e,duration:1500});break;case 405:e="请求方法未允许",uni.showToast({icon:"none",title:e,duration:1500});break;case 408:e="请求超时",uni.showToast({icon:"none",title:e,duration:1500});break;case 500:e="服务器端出错",uni.showToast({icon:"none",title:e,duration:1500});break;case 501:e="网络未实现",uni.showToast({icon:"none",title:e,duration:1500});break;case 502:e="网络错误",uni.showToast({icon:"none",title:e,duration:1500});break;case 503:e="服务不可用",uni.showToast({icon:"none",title:e,duration:1500});break;case 504:e="网络超时",uni.showToast({icon:"none",title:e,duration:1500});break;case 505:e="http版本不支持该请求",uni.showToast({icon:"none",title:e,duration:1500});break}uni.hideLoading()}})}))};e.request=r;var u=function(t,e){return r(t,e,{method:"POST",contentType:"form"})};e.post=u;var s=function(t,e){return r(t,e,{method:"POST",contentType:"json"})};e.postJson=s;var c=function(t,e){return r(t,e,{method:"put",contentType:"json"})};e.put=c;var d=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),r(t,e,{method:"GET"})};e.get=d},3803:function(t,e,n){"use strict";n.r(e);var o=n("abde"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"8d07":function(t,e,n){"use strict";var o=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getCode=i,e.getPromote=r;var a=o(n("1bd8"));function i(){return a.get("/books/promote/yards")}function r(t){return a.get("/books/promote/page",t)}},"924e":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("我的推广二维码")])],2),n("v-uni-image",{attrs:{src:t.baseUrl+t.url,mode:""}})],1)},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))},abde:function(t,e,n){"use strict";var o=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("8d07")),i=n("e66a"),r={data:function(){return{url:""}},computed:{baseUrl:function(){return i.baseUrl}},onLoad:function(t){},mounted:function(){this.getCodeAction()},methods:{getCodeAction:function(){var t=this;a.getCode().then((function(e){t.url=e.data}),(function(t){}))}}};e.default=r},c8d1:function(t,e,n){"use strict";n.r(e);var o=n("924e"),a=n("3803");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var r,u=n("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"40897898",null,!1,o["a"],r);e["default"]=s.exports},e66a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var o="http://47.244.209.81";e.baseUrl=o}}]);