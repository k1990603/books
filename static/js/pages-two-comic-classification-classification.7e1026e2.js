(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-comic-classification-classification"],{"1bd8":function(t,e,i){"use strict";var o=i("ee27");i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var n=i("e66a"),a=o(i("3dd7")),c=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},o={Accept:"application/json"};"POST"===i.method&&"form"===i.contentType&&(o["content-type"]="application/x-www-form-urlencoded");var c=a.default.getters["getToken"];return o["token"]=c||null,new Promise((function(c,s){wx.request({url:n.baseUrl+t,data:e,method:i.method||"POST",header:o,success:function(t){200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):(console.log(t,"2222"),c(t.data))},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),s("网络请求失败，请稍后再试")},complete:function(t){var e="",i=t&&t.statusCode;switch(i){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=c;var s=function(t,e){return c(t,e,{method:"POST",contentType:"form"})};e.post=s;var r=function(t,e){return c(t,e,{method:"POST",contentType:"json"})};e.postJson=r;var u=function(t,e){return c(t,e,{method:"put",contentType:"json"})};e.put=u;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),c(t,e,{method:"GET"})};e.get=l},"2b52":function(t,e,i){"use strict";i.r(e);var o=i("4045"),n=i("ab0d");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("bcff");var c,s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"28cc4dd6",null,!1,o["a"],c);e["default"]=r.exports},4045:function(t,e,i){"use strict";var o,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"fixed"},[i("cu-custom",{attrs:{isBack:!0,bgColor:"bg-shadeTop text-white"}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("分类")])],2)],1),i("v-uni-swiper",{staticClass:"screen-swiper round-dot",attrs:{"indicator-dots":!1,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(4,(function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big3900"+e+".jpg",mode:"aspectFill"}})],1)})),1),i("v-uni-view",{staticClass:"VerticalBox margin-top-sm"},[i("v-uni-scroll-view",{staticClass:"VerticalNav nav",staticStyle:{height:"calc(100vh - 375upx)"},attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":t.verticalNavTop}},t._l(t.list,(function(e,o){return i("v-uni-view",{key:o,staticClass:"cu-item",class:o==t.tabCur?"text-green cur":"",attrs:{"data-id":o,"data-type":e.type},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.TabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.type))])})),1),i("v-uni-scroll-view",{staticClass:"VerticalMain",staticStyle:{height:"calc(100vh - 375upx)"},attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-into-view":"main-"+t.mainCur},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.VerticalMain.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"padding-top padding-lr"},[i("v-uni-view",{staticClass:"cu-bar solid-bottom bg-white"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-green"}),t._v(t._s(t.type))],1)],1),i("v-uni-view",{staticClass:"cu-list menu-avatar"},t._l(t.contentList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"cu-item",attrs:{"data-url":"/pages/two/comic/comicDetail/comicDetail","data-comicId":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigates.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-avatar radius lg",style:"background-image:url("+e.coverPic+");"}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[i("v-uni-text",{staticClass:"text-cut"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"text-gray text-sm flex"},[i("v-uni-text",{staticClass:"text-cut"},[t._v(t._s(e.summary))])],1)],1)],1)})),1)],1)],1)],1)],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}))},"8d56":function(t,e,i){"use strict";var o=i("4a46");i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("b53f")),a=i("a986"),c={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0,type:"",contentList:[]}},onLoad:function(){},onReady:function(){this.categoryListAction()},methods:{bookType:a.bookType,toNavigate:function(t){var e=t.currentTarget.dataset.url,i=t.currentTarget.dataset.category;uni.navigateTo({url:e+"?category="+i})},toNavigates:function(t){var e=t.currentTarget.dataset.url,i=t.currentTarget.dataset.comicid;uni.navigateTo({url:e+"?comicId="+i})},categoryListAction:function(){var t=this;n.comictype().then((function(e){console.log(t.list,t.listCur);var i=e.data;t.list=i,t.listCur=t.list[0],t.type=t.listCur.type,t.getComicStyleList()}),(function(t){}))},TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1),this.type=t.currentTarget.dataset.type,this.getComicStyleList()},getComicStyleList:function(){var t=this;uni.showLoading({mask:!0});var e={category:this.type};n.getComicStyle(e).then((function(e){console.log(e.data,"多多"),t.contentList=e.data.list}),(function(t){}))},VerticalMain:function(t){var e=this,i=0;if(this.load){for(var o=function(t){var o=uni.createSelectorQuery().select("#main-"+e.list[t].id);o.fields({size:!0},(function(o){e.list[t].top=i,i+=o.height,e.list[t].bottom=i})).exec()},n=0;n<this.list.length;n++)o(n);this.load=!1}for(var a=t.detail.scrollTop+10,c=0;c<this.list.length;c++)if(a>this.list[c].top&&a<this.list[c].bottom)return this.verticalNavTop=50*(this.list[c].id-1),this.tabCur=this.list[c].id,console.log(a),!1}}};e.default=c},a066:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'.fixed[data-v-28cc4dd6]{position:fixed;z-index:99}.VerticalNav.nav[data-v-28cc4dd6]{width:%?200?%;white-space:normal}.VerticalNav.nav .cu-item[data-v-28cc4dd6]{width:100%;text-align:center;background-color:#fff;margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-28cc4dd6]{background-color:#f1f1f1}.VerticalNav.nav .cu-item.cur[data-v-28cc4dd6]::after{content:"";width:%?8?%;height:%?30?%;border-radius:%?10?% 0 0 %?10?%;position:absolute;background-color:currentColor;top:0;right:%?0?%;bottom:0;margin:auto}.VerticalBox[data-v-28cc4dd6]{display:-webkit-box;display:-webkit-flex;display:flex}.VerticalMain[data-v-28cc4dd6]{background-color:#f1f1f1;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),t.exports=e},a986:function(t,e,i){"use strict";function o(t){var e="";switch(t){case 0:e="玄幻魔法";break;case 1:e="武侠修真";break;case 2:e="都市言情";break;case 3:e="历史军事";break;case 4:e="侦探推理";break;case 5:e="网游动漫";break;case 6:e="科幻灵异";break;case 7:e="其他类型";break}return e}function n(t){var e="";switch(t){case"猜你喜欢":e=1;break;case"男生喜欢":e=4;break;case"女生喜欢":e=3;break;case"大家都在看":e=2;break}return e}function a(t){var e="";switch(t){case"猜你喜欢":e="后宫";break;case"男生喜欢":e="热血";break;case"女生喜欢":e="恋爱,古风";break;case"今日推荐":e="";break}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.bookType=o,e.bookTypeDetail=n,e.comicType=a},ab0d:function(t,e,i){"use strict";i.r(e);var o=i("8d56"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},b53f:function(t,e,i){"use strict";var o=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getComicHome=a,e.getComicStyle=c,e.getComicDetail=s,e.getSendPage=r,e.getCommentPage=u,e.episodesContent=l,e.closedComic=d,e.likeComic=f,e.comictype=v,e.comment=m,e.ranking=p,e.exceptionalComic=b;var n=o(i("1bd8"));function a(){return n.get("/books/comic/homePage")}function c(t){return n.get("/books/comic/page",t)}function s(t){return n.get("/books/comic/details",t)}function r(t){return n.get("/books/comic/sendPage",t)}function u(t){return n.get("/books/comic/commentPage",t)}function l(t){return n.get("/books/comic/getComicPicture",t)}function d(t){return n.get("/books/comic/closedComic",t)}function f(t){return n.get("/books/comic/likeComic",t)}function v(t){return n.get("/books/comic/comictype",t)}function m(t){return n.get("/books/comic/comment",t)}function p(t){return n.get("/books/comic/ranking",t)}function b(t){return n.get("/books/comic/exceptionalComic",t)}},bcff:function(t,e,i){"use strict";var o=i("d9c7"),n=i.n(o);n.a},d9c7:function(t,e,i){var o=i("a066");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("4d97d693",o,!0,{sourceMap:!1,shadowMode:!1})},e66a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var o="http://192.168.1.130:8082";e.baseUrl=o}}]);