(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-comic-moreCommon-moreCommon"],{"1bd8":function(t,e,n){"use strict";var o=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var i=n("e66a"),a=o(n("3dd7")),c=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},o={Accept:"application/json"},c=a.default.getters["getToken"];return o["token"]=c||null,new Promise((function(c,s){wx.request({url:i.baseUrl+t,data:e,method:n.method||"POST",header:o,success:function(t){console.log(t,"res",t.data.code,t.data.desc),200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),200):(console.log(t,"2222"),c(t.data))},fail:function(t){return uni.stopPullDownRefresh(),uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500}),s("网络请求失败，请稍后再试")},complete:function(t){var e="",n=t&&t.statusCode;switch(n){case 400:e="错误请求",uni.showToast({icon:"none",title:e,duration:1500});break;case 401:e="未授权，请重新登录",uni.showToast({icon:"none",title:e,duration:1500});break;case 403:e="拒绝访问",uni.showToast({icon:"none",title:e,duration:1500});break;case 404:e="请求错误,未找到该资源",uni.showToast({icon:"none",title:e,duration:1500});break;case 405:e="请求方法未允许",uni.showToast({icon:"none",title:e,duration:1500});break;case 408:e="请求超时",uni.showToast({icon:"none",title:e,duration:1500});break;case 500:e="服务器端出错",uni.showToast({icon:"none",title:e,duration:1500});break;case 501:e="网络未实现",uni.showToast({icon:"none",title:e,duration:1500});break;case 502:e="网络错误",uni.showToast({icon:"none",title:e,duration:1500});break;case 503:e="服务不可用",uni.showToast({icon:"none",title:e,duration:1500});break;case 504:e="网络超时",uni.showToast({icon:"none",title:e,duration:1500});break;case 505:e="http版本不支持该请求",uni.showToast({icon:"none",title:e,duration:1500});break}uni.hideLoading()}})}))};e.request=c;var s=function(t,e){return c(t,e,{method:"POST",contentType:"json"})};e.post=s;var r=function(t,e){return c(t,e,{method:"POST",contentType:"form"})};e.postJson=r;var u=function(t,e){return c(t,e,{method:"put",contentType:"json"})};e.put=u;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),c(t,e,{method:"GET"})};e.get=l},"2a53":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".comicStyleWrap[data-v-16d3b9f6]{height:100vh}.loadMore[data-v-16d3b9f6]{font-size:%?30?%;color:#555;margin-bottom:%?20?%;text-align:center}.userinfo[data-v-16d3b9f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.userinfo-avatar[data-v-16d3b9f6]{width:50px;height:50px;border-radius:50%;left:20px;margin-left:20px;object-fit:contain}.userinfo-nickname[data-v-16d3b9f6]{margin:20px}",""]),t.exports=e},4835:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"comicStyleWrap bg-white"},[n("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("最新评论")]),t.getToken?n("template",{attrs:{slot:"right"},slot:"right"},[n("v-uni-view",{staticClass:"cu-tag round bg-orange topwrap margin-right",attrs:{"data-target":"DialogModal1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"text-white"},[t._v("发布评论")])],1)],1):t._e()],2),n("v-uni-view",{staticClass:"bg-img bg-mask flex align-end",style:"background-image: url("+t.imgUrl+");height: 414upx;background-size: cover;"},[n("v-uni-view",{staticClass:"padding-xl text-white"},[n("v-uni-view",{staticClass:"padding-xs text-xxl text-bold"},[t._v(t._s(t.comicIdTitle))]),n("v-uni-view",{staticClass:"padding-sm text-sm text-white cu-btn round line-white"},[t._v(t._s(t.category&&t.category.slice(0,-1)))])],1)],1),n("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top mbottom bg-white"},t._l(t.comicContent,(function(e,o){return n("v-uni-view",{key:o,staticClass:"cu-item"},[n("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.userName||""))]),n("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v(t._s(e.commentInfo||""))]),n("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[n("v-uni-view",{staticClass:"text-gray text-df"},[t._v(t._s(e.createTime))])],1)],1)],1)})),1),t.isLoadMore?n("v-uni-view",{staticClass:"loadMore text-center"},[t._v("加载中...")]):t._e(),n("v-uni-view",{staticClass:"cu-modal",class:"DialogModal1"==t.modalName?"show":""},[n("v-uni-view",{staticClass:"cu-dialog margin-left"},[n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"content"},[t._v("发布评论")]),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"padding-xl"},[n("v-uni-textarea",{attrs:{name:"",id:"",cols:"30",rows:"10"},model:{value:t.commentInfo,callback:function(e){t.commentInfo=e},expression:"commentInfo"}})],1),n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn line-gradual-red text-gradual-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-gradual-red margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.okModal.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},"64c2":function(t,e,n){"use strict";n.r(e);var o=n("94af"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"94af":function(t,e,n){"use strict";var o=n("4a46"),i=n("ee27");n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d0ff")),c=i(n("f3f3")),s=n("2f62"),r=o(n("b53f")),u=n("d33c"),l={data:function(){return{showSkeleton:!0,comicId:null,comicIdTitle:null,comicContent:[],pageNumber:1,pageSize:10,isLoadMore:!0,category:"",imgUrl:"",modalName:null,commentInfo:""}},computed:(0,c.default)({},(0,s.mapGetters)({getToken:"getToken"})),onPullDownRefresh:function(){this.pageNumber=1,this.comicContent=[],this.showSkeleton=!0,this.getCommentPageList()},onReachBottom:function(){this.isLoadMore?(this.pageNumber+=1,this.getCommentPageList()):uni.showToast({icon:"none",title:"没有更多了",duration:1500})},onLoad:function(t){this.comicContent=[],this.comicId=t.comicId,this.comicIdTitle=t.title,this.imgUrl=t.img,this.category=t.category,this.getCommentPageList()},methods:{timestampToTime:u.timestampToTime,showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},okModal:function(t){this.commentAction()},getCommentPageList:function(){var t=this,e={comicId:this.comicId,pageNumber:this.pageNumber,pageSize:this.pageSize};uni.showLoading({mask:!0}),r.getCommentPage(e).then((function(e){var n=e.data.list;t.comicContent=[].concat((0,a.default)(t.comicContent),(0,a.default)(n)),t.pageTotal=e.data.total,t.comicContent.length>=t.pageTotal&&(t.isLoadMore=!1),uni.hideLoading(),uni.stopPullDownRefresh()}),(function(t){}))},commentAction:function(){var t=this;uni.showLoading({mask:!0});var e={comicId:Number(this.comicId),commentInfo:this.commentInfo};r.comment(e).then((function(e){t.comicContent=[],t.getCommentPageList(),t.hideModal(),uni.showToast({icon:"none",title:"评论成功",duration:1500})}),(function(t){}))}}};e.default=l},"9b4b":function(t,e,n){var o=n("2a53");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("549c233a",o,!0,{sourceMap:!1,shadowMode:!1})},b53f:function(t,e,n){"use strict";var o=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getComicHome=a,e.getComicStyle=c,e.getComicDetail=s,e.getSendPage=r,e.getCommentPage=u,e.episodesContent=l,e.closedComic=d,e.likeComic=m,e.comictype=f,e.comment=g;var i=o(n("1bd8"));function a(){return i.get("/books/comic/homePage")}function c(t){return i.get("/books/comic/page",t)}function s(t){return i.get("/books/comic/details",t)}function r(t){return i.get("/books/comic/sendPage",t)}function u(t){return i.get("/books/comic/commentPage",t)}function l(t){return i.get("/books/comic/getComicPicture",t)}function d(t){return i.get("/books/comic/closedComic",t)}function m(t){return i.get("/books/comic/likeComic",t)}function f(t){return i.get("/books/comic/comictype",t)}function g(t){return i.get("/books/comic/comment",t)}},b6802:function(t,e,n){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}n.d(e,"a",(function(){return o}))},d0ff:function(t,e,n){"use strict";n.r(e);var o=n("b6802");function i(t){if(Array.isArray(t))return Object(o["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=n("dde1");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return i(t)||a(t)||Object(c["a"])(t)||s()}n.d(e,"default",(function(){return r}))},d1ae:function(t,e,n){"use strict";n.r(e);var o=n("4835"),i=n("64c2");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("fa5f");var c,s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"16d3b9f6",null,!1,o["a"],c);e["default"]=r.exports},d33c:function(t,e,n){"use strict";function o(t){var e=new Date(t),n=e.getFullYear()+"年",o=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"月",i=e.getDate()<10?"0"+e.getDate():e.getDate()+"日",a=e.getHours()<10?"0"+e.getHours():e.getHours(),c=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return n+o+i+" "+a+":"+c+":"+s}Object.defineProperty(e,"__esModule",{value:!0}),e.timestampToTime=o},dde1:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3");var o=n("b6802");function i(t,e){if(t){if("string"===typeof t)return Object(o["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(o["a"])(t,e):void 0}}},e66a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var o="http://47.244.209.81";e.baseUrl=o},fa5f:function(t,e,n){"use strict";var o=n("9b4b"),i=n.n(o);i.a}}]);