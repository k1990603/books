(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-book-bookType-bookType"],{"1bd8":function(t,e,o){"use strict";var n=o("ee27");o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var a=o("e66a"),i=n(o("3dd7")),r=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},n={Accept:"application/json"},r=i.default.getters["getToken"];return n["token"]=r||null,new Promise((function(r,s){wx.request({url:a.baseUrl+t,data:e,method:o.method||"POST",header:n,success:function(t){console.log(t,"res",t.data.code,t.data.desc),200!==t.data.code?-1===t.data.code?(i.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),200):(console.log(t,"2222"),r(t.data))},fail:function(t){return uni.stopPullDownRefresh(),uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500}),s("网络请求失败，请稍后再试")},complete:function(t){var e="",o=t&&t.statusCode;switch(o){case 400:e="错误请求",uni.showToast({icon:"none",title:e,duration:1500});break;case 401:e="未授权，请重新登录",uni.showToast({icon:"none",title:e,duration:1500});break;case 403:e="拒绝访问",uni.showToast({icon:"none",title:e,duration:1500});break;case 404:e="请求错误,未找到该资源",uni.showToast({icon:"none",title:e,duration:1500});break;case 405:e="请求方法未允许",uni.showToast({icon:"none",title:e,duration:1500});break;case 408:e="请求超时",uni.showToast({icon:"none",title:e,duration:1500});break;case 500:e="服务器端出错",uni.showToast({icon:"none",title:e,duration:1500});break;case 501:e="网络未实现",uni.showToast({icon:"none",title:e,duration:1500});break;case 502:e="网络错误",uni.showToast({icon:"none",title:e,duration:1500});break;case 503:e="服务不可用",uni.showToast({icon:"none",title:e,duration:1500});break;case 504:e="网络超时",uni.showToast({icon:"none",title:e,duration:1500});break;case 505:e="http版本不支持该请求",uni.showToast({icon:"none",title:e,duration:1500});break}uni.hideLoading()}})}))};e.request=r;var s=function(t,e){return r(t,e,{method:"POST",contentType:"json"})};e.post=s;var c=function(t,e){return r(t,e,{method:"POST",contentType:"form"})};e.postJson=c;var u=function(t,e){return r(t,e,{method:"put",contentType:"json"})};e.put=u;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),r(t,e,{method:"GET"})};e.get=l},"21c5":function(t,e,o){"use strict";o.r(e);var n=o("f984"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},"36ad":function(t,e,o){"use strict";o.r(e);var n=o("cfc1"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},"40f5":function(t,e,o){"use strict";var n=o("a1fb"),a=o.n(n);a.a},8094:function(t,e,o){"use strict";var n={loayImg:o("ff82").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"bookStyleWrap padding-top-xl bg-white"},[o("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[o("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),o("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.categoryDemo))])],2),t._l(t.bookContent,(function(e,n){return o("v-uni-navigator",{key:n,staticClass:"cu-card article no-card solid-bottom",attrs:{url:"/pages/two/book/bookDetail/bookDetail?bookId="+e.id,"hover-class":"navigator-hover"}},[o("v-uni-view",{staticClass:"cu-item shadow"},[o("v-uni-view",{staticClass:"content solid-bottom"},[o("loayImg",{attrs:{imgUrl:e.coverPic,fill:"aspectFit"}}),o("v-uni-view",{staticClass:"desc"},[o("v-uni-view",{staticClass:"text-content"},[o("v-uni-view",{staticClass:"text-cut text-black"},[t._v(t._s(e.title))]),o("v-uni-view",{staticClass:"text-cut-two"},[t._v(t._s(e.summary))])],1),o("v-uni-view",[o("v-uni-view",{staticClass:"cu-tag bg-green light sm round"},[t._v(t._s(e.author))])],1)],1)],1)],1)],1)})),t.isLoadMore?o("v-uni-view",{staticClass:"loadMore text-center"},[t._v("加载中...")]):t._e(),t.isLoadMore||t.bookContent.length?t._e():o("v-uni-view",{staticClass:"imgtext text-center margin-top-xl"},[t._v("暂无数据")])],2)},i=[];o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}))},9492:function(t,e,o){var n=o("fa37");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("4f06").default;a("6c8a0680",n,!0,{sourceMap:!1,shadowMode:!1})},9879:function(t,e,o){"use strict";var n,a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-image",{attrs:{src:t.url,mode:t.fill}})},i=[];o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}))},"9bb6":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.s-switch-container[data-v-53226990]{margin:0 auto;padding:%?2?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?60?%;border-radius:%?100?%;background-color:#fff}.s-switch-item[data-v-53226990]{color:#ec008c;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all .3s linear;transition:all .3s linear}.s-switch-selected[data-v-53226990]{color:#fff;border-radius:%?40?%;background:#ec008c}',""]),t.exports=e},a1fb:function(t,e,o){var n=o("9bb6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("4f06").default;a("6eda3fbe",n,!0,{sourceMap:!1,shadowMode:!1})},a219:function(t,e,o){"use strict";var n=o("9492"),a=o.n(n);a.a},a986:function(t,e,o){"use strict";function n(t){var e="";switch(t){case 0:e="玄幻魔法";break;case 1:e="武侠修真";break;case 2:e="都市言情";break;case 3:e="历史军事";break;case 4:e="侦探推理";break;case 5:e="网游动漫";break;case 6:e="科幻灵异";break;case 7:e="其他类型";break}return e}function a(t){var e="";switch(t){case"猜你喜欢":e=1;break;case"男生喜欢":e=4;break;case"女生喜欢":e=3;break;case"大家都在看":e=2;break}return e}function i(t){var e="";switch(t){case"猜你喜欢":e="后宫";break;case"男生喜欢":e="热血";break;case"女生喜欢":e="恋爱,古风";break;case"今日推荐":e="";break}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.bookType=n,e.bookTypeDetail=a,e.comicType=i},b2f5:function(t,e,o){"use strict";o.r(e);var n=o("8094"),a=o("36ad");for(var i in a)"default"!==i&&function(t){o.d(e,t,(function(){return a[t]}))}(i);o("a219");var r,s=o("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"1c2b3203",null,!1,n["a"],r);e["default"]=c.exports},b6802:function(t,e,o){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}o.d(e,"a",(function(){return n}))},bd98:function(t,e,o){"use strict";var n=o("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getbookPage=i,e.getbookDetail=r,e.getbookType=s,e.categoryPageList=c,e.getBookStyle=u,e.episodesContent=l,e.getCommentPage=d,e.getSendPage=f,e.categoryList=b,e.bookCollect=g,e.bookLike=p,e.comment=k;var a=n(o("1bd8"));function i(){return a.get("/books/book/homePage")}function r(t){return a.get("/books/book/details",t)}function s(t){return a.get("/books/book/homePageList",t)}function c(t){return a.get("/books/book/categoryPageList",t)}function u(t){return a.get("/books/book/page",t)}function l(t){return a.get("/books/book/episodesContent",t)}function d(t){return a.get("/books/book/commentList",t)}function f(t){return a.get("/books/book/userSendList",t)}function b(t){return a.get("/books/book/categoryList",t)}function g(t){return a.get("/books/book/bookCollect",t)}function p(t){return a.get("/books/book/bookLike",t)}function k(t){return a.get("/books/book/comment",t)}},cfc1:function(t,e,o){"use strict";var n=o("4a46"),a=o("ee27");o("99af"),o("a9e3"),o("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(o("d0ff")),r=n(o("bd98")),s=o("a986"),c=a(o("ff82")),u={components:{loayImg:c.default},data:function(){return{category:null,categoryDemo:null,bookContent:[],pageNumber:1,pageSize:10,isLoadMore:!0,navstaus:!1}},onPullDownRefresh:function(){this.pageNumber=1,this.bookContent=[],this.navstaus?this.categoryPageListList():this.getbookTypeList()},onReachBottom:function(){this.isLoadMore?(this.pageNumber+=1,this.navstaus?this.categoryPageListList():this.getbookTypeList()):uni.showToast({icon:"none",title:"没有更多了",duration:1500})},onLoad:function(t){this.navstaus=parseFloat(t.category)>=0,console.log(t.category,typeof t.category,this.navstaus),this.navstaus?(this.categoryDemo=(0,s.bookType)(Number(t.category)),this.category=t.category,this.categoryPageListList()):(this.categoryDemo=t.category,this.category=(0,s.bookTypeDetail)(t.category),console.log(this.category,8888),this.getbookTypeList())},methods:{bookTypeDetail:s.bookTypeDetail,bookType:s.bookType,getbookTypeList:function(){var t=this,e={status:this.category,pageNumber:this.pageNumber,pageSize:this.pageSize};uni.showLoading({mask:!0}),r.getbookType(e).then((function(e){var o=e.data.list;t.bookContent=[].concat((0,i.default)(t.bookContent),(0,i.default)(o)),t.pageTotal=e.data.total,t.bookContent.length>=t.pageTotal&&(t.isLoadMore=!1),uni.hideLoading(),uni.stopPullDownRefresh()}),(function(t){}))},categoryPageListList:function(){var t=this,e={category:this.category,pageNumber:this.pageNumber,pageSize:this.pageSize};uni.showLoading({mask:!0}),r.categoryPageList(e).then((function(e){var o=e.data.list;t.bookContent=[].concat((0,i.default)(t.bookContent),(0,i.default)(o)),t.pageTotal=e.data.total,t.bookContent.length>=t.pageTotal&&(t.isLoadMore=!1),uni.hideLoading(),uni.stopPullDownRefresh()}),(function(t){}))}}};e.default=u},d0ff:function(t,e,o){"use strict";o.r(e);var n=o("b6802");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}o("a4d3"),o("e01a"),o("d28b"),o("a630"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=o("dde1");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||i(t)||Object(r["a"])(t)||s()}o.d(e,"default",(function(){return c}))},dde1:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));o("a630"),o("fb6a"),o("d3b7"),o("25f0"),o("3ca3");var n=o("b6802");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Object(n["a"])(t,e):void 0}}},e66a:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var n="http://47.244.209.81";e.baseUrl=n},f984:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"loayImg",props:{imgUrl:{type:String,default:""},fill:{type:String,default:"aspectFill"}},data:function(){return{url:"../../static/images/loading.gif"}},methods:{},created:function(){var t=this,e=new Object;e.userAgent=window.navigator.userAgent.toLowerCase(),e.ie=/msie/.test(e.userAgent),e.Moz=/gecko/.test(e.userAgent);var o=new Image;o.src=this.imgUrl,e.ie?img.onreadystatechange=function(){"complete"!=o.readyState&&"loaded"!=o.readyState||(t.url=t.imgUrl)}:e.Moz&&(o.onload=function(){1==o.complete&&(t.url=t.imgUrl)})}};e.default=n},fa37:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".loadMore[data-v-1c2b3203]{font-size:%?30?%;color:#555;margin-bottom:%?20?%;text-align:center}",""]),t.exports=e},ff82:function(t,e,o){"use strict";o.r(e);var n=o("9879"),a=o("21c5");for(var i in a)"default"!==i&&function(t){o.d(e,t,(function(){return a[t]}))}(i);o("40f5");var r,s=o("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"53226990",null,!1,n["a"],r);e["default"]=c.exports}}]);