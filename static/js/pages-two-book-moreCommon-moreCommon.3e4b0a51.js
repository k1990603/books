(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-book-moreCommon-moreCommon"],{"1bd8":function(t,e,o){"use strict";var n=o("ee27");o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var i=o("e66a"),a=n(o("3dd7")),s=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},n={Accept:"application/json"};"POST"===o.method&&"form"===o.contentType&&(n["content-type"]="application/x-www-form-urlencoded");var s=a.default.getters["getToken"];return n["token"]=s||null,new Promise((function(s,r){wx.request({url:i.baseUrl+t,data:e,method:o.method||"POST",header:n,success:function(t){console.log(t,"res",t.data.code,t.data.desc),200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):(console.log(t,"2222"),s(t.data))},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),r("网络请求失败，请稍后再试")},complete:function(t){var e="",o=t&&t.statusCode;switch(o){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=s;var r=function(t,e){return s(t,e,{method:"POST",contentType:"form"})};e.post=r;var u=function(t,e){return s(t,e,{method:"POST",contentType:"json"})};e.postJson=u;var c=function(t,e){return s(t,e,{method:"put",contentType:"json"})};e.put=c;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),s(t,e,{method:"GET"})};e.get=l},2369:function(t,e,o){"use strict";var n=o("8220"),i=o.n(n);i.a},"270f":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".bookStyleWrap[data-v-6fcdc727]{height:100vh}.loadMore[data-v-6fcdc727]{font-size:%?30?%;color:#555;margin-bottom:%?20?%;text-align:center}.userinfo[data-v-6fcdc727]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.userinfo-avatar[data-v-6fcdc727]{width:50px;height:50px;border-radius:50%;left:20px;margin-left:20px;object-fit:contain}.userinfo-nickname[data-v-6fcdc727]{margin:20px}",""]),t.exports=e},"73d8":function(t,e,o){"use strict";o.r(e);var n=o("d735"),i=o("a647");for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("2369");var s,r=o("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"6fcdc727",null,!1,n["a"],s);e["default"]=u.exports},8220:function(t,e,o){var n=o("270f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("0a7eb689",n,!0,{sourceMap:!1,shadowMode:!1})},"869c":function(t,e,o){"use strict";var n=o("4a46"),i=o("ee27");o("99af"),o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(o("d0ff")),s=i(o("f3f3")),r=o("2f62"),u=n(o("bd98")),c=o("e66a"),l=o("d33c"),d={data:function(){return{showSkeleton:!0,bookId:null,bookIdTitle:null,bookContent:[],pageNumber:1,pageSize:10,isLoadMore:!0,category:"",imgUrl:"",modalName:null,commentInfo:""}},computed:(0,s.default)({},(0,r.mapGetters)({getToken:"getToken"}),{baseUrl:function(){return c.baseUrl}}),onPullDownRefresh:function(){this.pageNumber=1,this.bookContent=[],this.showSkeleton=!0,this.getCommentPageList()},onReachBottom:function(){this.isLoadMore?(this.pageNumber+=1,this.getCommentPageList()):uni.showToast({icon:"none",title:"没有更多了",duration:1500})},onLoad:function(t){this.bookContent=[],this.bookId=t.bookId,this.bookIdTitle=t.title,this.imgUrl=t.img,this.category=t.category,this.getCommentPageList()},methods:{timestampToTime:l.timestampToTime,showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},okModal:function(t){this.commentAction()},getCommentPageList:function(){var t=this,e={bookId:this.bookId,pageNumber:this.pageNumber,pageSize:this.pageSize};uni.showLoading({mask:!0}),u.getCommentPage(e).then((function(e){var o=e.data.list;t.bookContent=[].concat((0,a.default)(t.bookContent),(0,a.default)(o)),t.pageTotal=e.data.total,t.bookContent.length>=t.pageTotal&&(t.isLoadMore=!1),uni.hideLoading(),uni.stopPullDownRefresh()}),(function(t){}))},commentAction:function(){var t=this;uni.showLoading({mask:!0});var e={bookId:Number(this.bookId),commentInfo:this.commentInfo};u.comment(e).then((function(e){t.bookContent=[],t.getCommentPageList(),t.hideModal(),uni.showToast({icon:"none",title:"评论成功",duration:1500})}),(function(t){}))}}};e.default=d},a647:function(t,e,o){"use strict";o.r(e);var n=o("869c"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},b6802:function(t,e,o){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}o.d(e,"a",(function(){return n}))},bd98:function(t,e,o){"use strict";var n=o("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getbookPage=a,e.getbookDetail=s,e.getbookType=r,e.categoryPageList=u,e.getBookStyle=c,e.episodesContent=l,e.getCommentPage=d,e.getSendPage=f,e.categoryList=m,e.bookCollect=b,e.bookLike=g,e.comment=v,e.ranking=h,e.userSend=k;var i=n(o("1bd8"));function a(){return i.get("/books/book/homePage")}function s(t){return i.get("/books/book/details",t)}function r(t){return i.get("/books/book/homePageList",t)}function u(t){return i.get("/books/book/categoryPageList",t)}function c(t){return i.get("/books/book/page",t)}function l(t){return i.get("/books/book/episodesContent",t)}function d(t){return i.get("/books/book/commentList",t)}function f(t){return i.get("/books/book/userSendList",t)}function m(t){return i.get("/books/book/categoryList",t)}function b(t){return i.get("/books/book/bookCollect",t)}function g(t){return i.get("/books/book/bookLike",t)}function v(t){return i.get("/books/book/comment",t)}function h(t){return i.get("/books/book/ranking",t)}function k(t){return i.post("/books/book/userSend",t)}},d0ff:function(t,e,o){"use strict";o.r(e);var n=o("b6802");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}o("a4d3"),o("e01a"),o("d28b"),o("a630"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=o("dde1");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return i(t)||a(t)||Object(s["a"])(t)||r()}o.d(e,"default",(function(){return u}))},d33c:function(t,e,o){"use strict";function n(t){var e=new Date(t),o=e.getFullYear()+"年",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"月",i=e.getDate()<10?"0"+e.getDate():e.getDate()+"日",a=e.getHours()<10?"0"+e.getHours():e.getHours(),s=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),r=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return o+n+i+" "+a+":"+s+":"+r}Object.defineProperty(e,"__esModule",{value:!0}),e.timestampToTime=n},d735:function(t,e,o){"use strict";var n,i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"bookStyleWrap bg-white"},[o("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[o("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),o("template",{attrs:{slot:"content"},slot:"content"},[t._v("最新评论")]),t.getToken?o("template",{attrs:{slot:"right"},slot:"right"},[o("v-uni-view",{staticClass:"cu-tag round bg-orange topwrap margin-right",attrs:{"data-target":"DialogModal1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"text-white"},[t._v("发布评论")])],1)],1):t._e()],2),o("v-uni-view",{staticClass:"bg-img bg-mask flex align-end",style:"background-image: url("+t.imgUrl+");height: 414upx;background-size: contain;"},[o("v-uni-view",{staticClass:"padding-xl text-white"},[o("v-uni-view",{staticClass:"padding-xs text-xxl text-bold"},[t._v(t._s(t.bookIdTitle))])],1)],1),o("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top mbottom bg-white"},t._l(t.bookContent,(function(e,n){return o("v-uni-view",{key:n,staticClass:"cu-item"},[o("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+t.baseUrl+e.portrait+");"}),o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.userName||""))]),o("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v(t._s(e.commentInfo||""))]),o("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[o("v-uni-view",{staticClass:"text-gray text-df"},[t._v(t._s(e.createTime))])],1)],1)],1)})),1),t.isLoadMore?o("v-uni-view",{staticClass:"loadMore text-center"},[t._v("加载中...")]):t._e(),o("v-uni-view",{staticClass:"cu-modal",class:"DialogModal1"==t.modalName?"show":""},[o("v-uni-view",{staticClass:"cu-dialog margin-left"},[o("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[o("v-uni-view",{staticClass:"content"},[t._v("发布评论")]),o("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),o("v-uni-view",{staticClass:"padding-xl"},[o("v-uni-textarea",{attrs:{name:"",id:"",cols:"30",rows:"10"},model:{value:t.commentInfo,callback:function(e){t.commentInfo=e},expression:"commentInfo"}})],1),o("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[o("v-uni-view",{staticClass:"action"},[o("v-uni-button",{staticClass:"cu-btn line-gradual-red text-gradual-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),o("v-uni-button",{staticClass:"cu-btn bg-gradual-red margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.okModal.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)],1)},a=[];o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}))},dde1:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));o("a630"),o("fb6a"),o("d3b7"),o("25f0"),o("3ca3");var n=o("b6802");function i(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Object(n["a"])(t,e):void 0}}},e66a:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var n="http://47.244.209.81";e.baseUrl=n}}]);