(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-book-moreSend-moreSend"],{"1bd8":function(t,e,o){"use strict";var n=o("ee27");o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var i=o("e66a"),a=n(o("3dd7")),r=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},n={Accept:"application/json"},r=a.default.getters["getToken"];return n["token"]=r||null,new Promise((function(a,r){wx.request({url:i.baseUrl+t,data:e,method:o.method||"POST",header:n,success:function(t){console.log(t,"res",t.data.code,t.data.desc),200!==t.data.code?-1===t.data.code?setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),200):(console.log(t,"2222"),a(t.data))},fail:function(t){return uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500}),r("网络请求失败，请稍后再试")},complete:function(t){var e="",o=t&&t.statusCode;switch(o){case 400:e="错误请求",uni.showToast({icon:"none",title:e,duration:1500});break;case 401:e="未授权，请重新登录",uni.showToast({icon:"none",title:e,duration:1500});break;case 403:e="拒绝访问",uni.showToast({icon:"none",title:e,duration:1500});break;case 404:e="请求错误,未找到该资源",uni.showToast({icon:"none",title:e,duration:1500});break;case 405:e="请求方法未允许",uni.showToast({icon:"none",title:e,duration:1500});break;case 408:e="请求超时",uni.showToast({icon:"none",title:e,duration:1500});break;case 500:e="服务器端出错",uni.showToast({icon:"none",title:e,duration:1500});break;case 501:e="网络未实现",uni.showToast({icon:"none",title:e,duration:1500});break;case 502:e="网络错误",uni.showToast({icon:"none",title:e,duration:1500});break;case 503:e="服务不可用",uni.showToast({icon:"none",title:e,duration:1500});break;case 504:e="网络超时",uni.showToast({icon:"none",title:e,duration:1500});break;case 505:e="http版本不支持该请求",uni.showToast({icon:"none",title:e,duration:1500});break}uni.hideLoading()}})}))};e.request=r;var s=function(t,e){return r(t,e,{method:"POST",contentType:"form"})};e.post=s;var u=function(t,e){return r(t,e,{method:"POST",contentType:"json"})};e.postJson=u;var c=function(t,e){return r(t,e,{method:"put",contentType:"json"})};e.put=c;var d=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),r(t,e,{method:"GET"})};e.get=d},"5a7a":function(t,e,o){"use strict";o.r(e);var n=o("c802"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},7134:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".bookStyleWrap[data-v-096b5db6]{height:100vh}.loadMore[data-v-096b5db6]{font-size:%?30?%;color:#555;margin-bottom:%?20?%;text-align:center}.userinfo[data-v-096b5db6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.userinfo-avatar[data-v-096b5db6]{width:50px;height:50px;border-radius:50%;left:20px;margin-left:20px;object-fit:contain}.userinfo-nickname[data-v-096b5db6]{margin:20px}",""]),t.exports=e},"877b":function(t,e,o){"use strict";o.r(e);var n=o("940e"),i=o("5a7a");for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("fc4d");var r,s=o("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"096b5db6",null,!1,n["a"],r);e["default"]=u.exports},"940e":function(t,e,o){"use strict";var n,i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"bookStyleWrap bg-white"},[o("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[o("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),o("template",{attrs:{slot:"content"},slot:"content"},[t._v("打赏记录")])],2),o("v-uni-view",{staticClass:"bg-img bg-mask flex align-end",style:"background-image: url("+t.imgUrl+");height: 414upx;background-size: contain;"},[o("v-uni-view",{staticClass:"padding-xl text-white"},[o("v-uni-view",{staticClass:"padding-xs text-xxl text-bold"},[t._v(t._s(t.bookIdTitle))])],1)],1),o("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top mbottom bg-white"},t._l(t.bookContent,(function(e,n){return o("v-uni-view",{key:n,staticClass:"cu-item"},[o("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.userName||""))]),o("v-uni-view",{staticClass:"text-orange text-content text-df"},[t._v("赠送 "+t._s(e.userAmount||0)+" 个礼物给作者")]),o("v-uni-view",{staticClass:"margin-top-sm flex justify-between"})],1)],1)})),1),t.isLoadMore?o("v-uni-view",{staticClass:"loadMore text-center"},[t._v("加载中...")]):t._e()],1)},a=[];o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}))},b6802:function(t,e,o){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}o.d(e,"a",(function(){return n}))},bd98:function(t,e,o){"use strict";var n=o("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getbookPage=a,e.getbookDetail=r,e.getbookType=s,e.categoryPageList=u,e.getBookStyle=c,e.episodesContent=d,e.getCommentPage=l,e.getSendPage=b,e.categoryList=f,e.bookCollect=g,e.bookLike=m;var i=n(o("1bd8"));function a(){return i.get("/books/book/homePage")}function r(t){return i.get("/books/book/details",t)}function s(t){return i.get("/books/book/homePageList",t)}function u(t){return i.get("/books/book/categoryPageList",t)}function c(t){return i.get("/books/book/page",t)}function d(t){return i.get("/books/book/episodesContent",t)}function l(t){return i.get("/books/book/commentList",t)}function b(t){return i.get("/books/book/userSendList",t)}function f(t){return i.get("/books/book/categoryList",t)}function g(t){return i.get("/books/book/bookCollect",t)}function m(t){return i.get("/books/book/bookLike",t)}},c802:function(t,e,o){"use strict";var n=o("4a46"),i=o("ee27");o("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(o("d0ff")),r=n(o("bd98")),s=o("d33c"),u={data:function(){return{showSkeleton:!0,bookId:null,bookIdTitle:null,bookContent:[],pageNumber:1,pageSize:10,isLoadMore:!0}},onPullDownRefresh:function(){this.pageNumber=1,this.bookContent=[],this.showSkeleton=!0,this.getSendPageList()},onReachBottom:function(){this.isLoadMore?(this.pageNumber+=1,this.getSendPageList()):uni.showToast({icon:"none",title:"没有更多了",duration:1500})},onLoad:function(t){this.bookContent=[],this.bookId=t.bookId,this.bookIdTitle=t.title,this.imgUrl=t.img,this.category=t.category,this.getSendPageList()},methods:{timestampToTime:s.timestampToTime,getSendPageList:function(){var t=this,e={bookId:this.bookId,pageNumber:this.pageNumber,pageSize:this.pageSize};uni.showLoading({mask:!0}),r.getSendPage(e).then((function(e){var o=e.data.list;t.bookContent=[].concat((0,a.default)(t.bookContent),(0,a.default)(o)),t.pageTotal=e.data.total,t.bookContent.length>=t.pageTotal&&(t.isLoadMore=!1),uni.hideLoading(),uni.stopPullDownRefresh()}),(function(t){}))}}};e.default=u},d0ff:function(t,e,o){"use strict";o.r(e);var n=o("b6802");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}o("a4d3"),o("e01a"),o("d28b"),o("a630"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=o("dde1");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return i(t)||a(t)||Object(r["a"])(t)||s()}o.d(e,"default",(function(){return u}))},d33c:function(t,e,o){"use strict";function n(t){var e=new Date(t),o=e.getFullYear()+"年",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"月",i=e.getDate()<10?"0"+e.getDate():e.getDate()+"日",a=e.getHours()<10?"0"+e.getHours():e.getHours(),r=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return o+n+i+" "+a+":"+r+":"+s}Object.defineProperty(e,"__esModule",{value:!0}),e.timestampToTime=n},dde1:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));o("a630"),o("fb6a"),o("d3b7"),o("25f0"),o("3ca3");var n=o("b6802");function i(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Object(n["a"])(t,e):void 0}}},e66a:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var n="http://47.244.209.81";e.baseUrl=n},e67f:function(t,e,o){var n=o("7134");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("bced328c",n,!0,{sourceMap:!1,shadowMode:!1})},fc4d:function(t,e,o){"use strict";var n=o("e67f"),i=o.n(n);i.a}}]);