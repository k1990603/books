(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-two"],{"0067":function(t,e,i){"use strict";i.r(e);var a=i("5364"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"006e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".comic[data-v-998bd730]{width:100%;min-height:100vh}.comic .cu-bar[data-v-998bd730]{margin-top:%?60?%}.comic .kindWrap[data-v-998bd730]{background-color:#fff;padding:%?20?% 0 %?10?%;text-align:center}.comic .kindWrap .kindItem[data-v-998bd730]{margin:0 auto %?10?%;text-align:center;width:%?100?%;height:%?100?%;border-radius:50%;font-size:%?50?%;padding-top:%?20?%;box-shadow:0 0 3px 3px #fff inset,0 6px 9px 1px #ddd}",""]),t.exports=e},"0634":function(t,e,i){"use strict";var a=i("ee27"),o=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("bd98")),s=a(i("86b5")),c={name:"book",components:{booksList:s.default},data:function(){return{cardCur:0,dotStyle:!0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/book/classification/classification"},{value:"rank",label:"排行",color:"green",url:"/pages/two/book/classification/classification"},{value:"selection",label:"VIP",color:"blue",url:"/pages/two/book/classification/classification"}],floors:[]}},props:{showClass:{type:String,default:""},fresh:{type:Boolean,default:!1}},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},getbookPageList:function(){var t=this;uni.showLoading({mask:!0}),n.getbookPage().then((function(e){console.log(e.data,"多多"),t.floors=e.data,uni.stopPullDownRefresh(),uni.hideLoading(),t.$emit("freshChange")}),(function(t){}))}},watch:{showClass:function(t){""===t&&this.getbookPageList()},fresh:function(t){t&&""===this.showClass&&this.getbookPageList()}},onReady:function(){},onShow:function(){},mounted:function(){this.getbookPageList()}};e.default=c},1158:function(t,e,i){var a=i("44f1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("728690b9",a,!0,{sourceMap:!1,shadowMode:!1})},"11d1":function(t,e,i){var a=i("2415");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("f2e27e18",a,!0,{sourceMap:!1,shadowMode:!1})},1315:function(t,e,i){"use strict";var a=i("138a"),o=i.n(a);o.a},"138a":function(t,e,i){var a=i("006e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("fe46a872",a,!0,{sourceMap:!1,shadowMode:!1})},2415:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".music[data-v-7ed21a10]{width:100%;min-height:100vh;background-color:#007aff}",""]),t.exports=e},"282f":function(t,e,i){"use strict";i.r(e);var a=i("767b"),o=i("6982");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("4fea");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"6237a046",null,!1,a["a"],s);e["default"]=r.exports},"28df":function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"music"},[i("v-uni-text",[t._v("music")])],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"2f85":function(t,e,i){var a=i("5e1e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("d2f85078",a,!0,{sourceMap:!1,shadowMode:!1})},"3ad8":function(t,e,i){"use strict";i.r(e);var a=i("6778"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"44f1":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".cu-card.dynamic > .cu-item[data-v-38fe36e0]{box-sizing:border-box;display:inline-block;margin-left:0;margin-right:0}.cu-card.dynamic > .cu-item .text-content[data-v-38fe36e0]{padding:0 %?30?%}",""]),t.exports=e},"46eb":function(t,e,i){"use strict";var a=i("8f95"),o=i.n(a);o.a},"48eb":function(t,e,i){"use strict";var a=i("2f85"),o=i.n(a);o.a},"4a60":function(t,e,i){"use strict";i.r(e);var a=i("cd2e"),o=i("95ba");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("46eb");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"08781870",null,!1,a["a"],s);e["default"]=r.exports},"4fea":function(t,e,i){"use strict";var a=i("d4a6"),o=i.n(a);o.a},5364:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}}};e.default=a},"543a":function(t,e,i){"use strict";var a=i("11d1"),o=i.n(a);o.a},"5e1e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".twoWrap[data-v-db9a8808]{overflow:hidden;width:100%}.twoWrap .contents[data-v-db9a8808]{width:300%;\n\t/* background-color: #007AFF; */\n\t/* min-height: 100vh; */-webkit-transition:all .3s linear;transition:all .3s linear\n\t/* display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center; */}.oneMove[data-v-db9a8808]{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}.twoMove[data-v-db9a8808]{-webkit-transform:translateX(-200vw);transform:translateX(-200vw)}.logo[data-v-db9a8808]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-db9a8808]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-db9a8808]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=e},6146:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".book[data-v-08781870]{width:100%;min-height:100vh}.book .kindWrap[data-v-08781870]{background-color:#fff;padding:%?20?% 0 %?10?%;text-align:center}.book .kindWrap .kindItem[data-v-08781870]{margin:0 auto %?10?%;text-align:center;width:%?100?%;height:%?100?%;border-radius:50%;font-size:%?50?%;padding-top:%?20?%;box-shadow:0 0 3px 3px #fff inset,0 6px 9px 1px #ddd}.book .floor1[data-v-08781870]{background-color:#fff}.book .floor1 .content[data-v-08781870]{padding-bottom:%?40?%}.book .floor1 .content uni-image[data-v-08781870]{width:%?200?%;height:10.4em}",""]),t.exports=e},"66bc":function(t,e,i){"use strict";i.r(e);var a=i("c711"),o=i("ffb1");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("1315");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"998bd730",null,!1,a["a"],s);e["default"]=r.exports},6778:function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("ff82")),n={name:"bookList",components:{loayImg:o.default},data:function(){return{avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/book/classification/classification"},{value:"rank",label:"排行",color:"green",url:"/pages/two/book/classification/classification"},{value:"selection",label:"VIP",color:"blue",url:"/pages/two/book/classification/classification"}]}},props:{floors:{type:Array,default:[]}},methods:{toNavigate:function(t){var e=t.currentTarget.dataset.url,i=t.currentTarget.dataset.category;uni.navigateTo({url:e+"?category="+i})}},created:function(){}};e.default=n},6982:function(t,e,i){"use strict";i.r(e);var a=i("ebac"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"6fbc":function(t,e,i){"use strict";i.r(e);var a=i("94a2"),o=i("b560");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("48eb");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"db9a8808",null,!1,a["a"],s);e["default"]=r.exports},"767b":function(t,e,i){"use strict";var a={loayImg:i("ff82").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.floors,(function(e,a){return i("v-uni-view",{key:a},[a%2!=1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/comic/comicType/comicType","data-id":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),t._l(e.content,(function(e,o){return a%2!=1?i("v-uni-navigator",{key:o,staticClass:"cu-card article no-card",attrs:{url:"/pages/two/comic/comicDetail/comicDetail?comicId="+e.id,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"content solid-bottom"},[i("loayImg",{attrs:{imgUrl:e.coverPic}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-black"},[t._v(t._s(e.title))]),i("v-uni-text",[t._v(t._s(e.summary))])],1),i("v-uni-view",[o%2!==1?i("v-uni-view",{staticClass:"cu-tag bg-red light sm round"},[t._v(t._s(e.category.slice(0,-1)))]):t._e(),o%2===1?i("v-uni-view",{staticClass:"cu-tag bg-green light sm round"},[t._v(t._s(e.category.slice(0,-1)))]):t._e()],1)],1)],1)],1)],1):t._e()})),a%2===1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/comic/comicType/comicType","data-id":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),a%2===1?i("v-uni-view",{staticClass:"cu-card dynamic grid col-2 bg-white no-card"},t._l(e.content,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-item shadow"},[i("v-uni-navigator",{attrs:{url:"/pages/two/comic/comicDetail/comicDetail?comicId="+e.id}},[i("v-uni-view",{staticClass:"grid flex-sub padding-lr col-1 grid-square"},[i("v-uni-view",{staticClass:"bg-img"},[i("loayImg",{attrs:{imgUrl:e.coverPic}})],1)],1),i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-black",staticStyle:{marginTop:"20rpx"}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-cut text-gray",staticStyle:{width:"320rpx",fontSize:"20rpx"}},[t._v(t._s(e.summary))])],1)],1)],1)})),1):t._e()],2)})),1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},8131:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".cu-card.dynamic > .cu-item[data-v-6237a046]{box-sizing:border-box;display:inline-block;margin-left:0;margin-right:0}.cu-card.dynamic > .cu-item .text-content[data-v-6237a046]{padding:0 %?30?%}",""]),t.exports=e},"86b5":function(t,e,i){"use strict";i.r(e);var a=i("a844"),o=i("3ad8");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("91f9");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"38fe36e0",null,!1,a["a"],s);e["default"]=r.exports},"8ba3":function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(i("e143"));var o=a(i("9f90")),n=a(i("4a60")),s=a(i("66bc")),c=a(i("8da0")),r={components:{SSwitch:o.default,BBook:n.default,CComic:s.default,MMusic:c.default},data:function(){return{CustomBar:this.CustomBar,showClass:"",fresh:!1,arr:[{key:0,value:"小说"},{key:1,value:"漫画"}]}},onLoad:function(){},onPullDownRefresh:function(){this.fresh=!0},onShow:function(){this.fresh=!0},methods:{freshChange:function(){this.fresh=!1},getSwitchValue:function(t){var e=t.key;this.showClass=e?1===e?"oneMove":"twoMove":""},toSearch:function(){""===this.showClass?uni.navigateTo({url:"/pages/two/book/book_mall/index"}):"oneMove"===this.showClass&&uni.navigateTo({url:"/pages/two/comic/comic_mall/index"})}}};e.default=r},"8da0":function(t,e,i){"use strict";i.r(e);var a=i("28df"),o=i("0067");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("543a");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"7ed21a10",null,!1,a["a"],s);e["default"]=r.exports},"8f95":function(t,e,i){var a=i("6146");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("af1484d0",a,!0,{sourceMap:!1,shadowMode:!1})},"91f9":function(t,e,i){"use strict";var a=i("1158"),o=i.n(a);o.a},"94a2":function(t,e,i){"use strict";var a={"s-switch":i("9f90").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"twoWrap"},[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",bottomColor:"oneMove"===t.showClass,headerStatus:!0,isBack:!1}},[i("template",{attrs:{slot:"content"},slot:"content"},[i("s-switch",{attrs:{defaultValue:0,switchList:t.arr},on:{switchValue:function(e){arguments[0]=e=t.$handleEvent(e),t.getSwitchValue.apply(void 0,arguments)}}})],1),i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-text",{staticClass:"lg text-pink"}),i("v-uni-text",{staticClass:"lg cuIcon-searchlist",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}})],1)],2),i("v-uni-view",{staticClass:"contents grid col-3",class:t.showClass},[i("B-book",{attrs:{fresh:t.fresh,showClass:t.showClass},on:{freshChange:function(e){arguments[0]=e=t.$handleEvent(e),t.freshChange.apply(void 0,arguments)}}}),i("C-comic",{attrs:{fresh:t.fresh,showClass:t.showClass},on:{freshChange:function(e){arguments[0]=e=t.$handleEvent(e),t.freshChange.apply(void 0,arguments)}}}),i("M-music")],1)],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"95ba":function(t,e,i){"use strict";i.r(e);var a=i("0634"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},a844:function(t,e,i){"use strict";var a={loayImg:i("ff82").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.floors,(function(e,a){return i("v-uni-view",{key:a},[a%2!=1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/book/bookType/bookType","data-category":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),t._l(e.list,(function(e,o){return a%2!=1?i("v-uni-navigator",{key:o,staticClass:"cu-card article no-card",attrs:{url:"/pages/two/book/bookDetail/bookDetail?bookId="+e.id,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"content solid-bottom"},[i("loayImg",{attrs:{imgUrl:e.coverPic,fill:"aspectFit"}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-cut text-black"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-cut-two"},[t._v(t._s(e.summary))])],1),i("v-uni-view",[i("v-uni-view",{staticClass:"cu-tag bg-green light sm round"},[t._v(t._s(e.author))])],1)],1)],1)],1)],1):t._e()})),a%2===1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/book/bookType/bookType","data-category":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),a%2===1?i("v-uni-view",{staticClass:"cu-card dynamic grid col-2 bg-white no-card"},t._l(e.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-item shadow"},[i("v-uni-navigator",{attrs:{url:"/pages/two/book/bookDetail/bookDetail?bookId="+e.id}},[i("v-uni-view",{staticClass:"grid flex-sub padding-lr col-1 grid-square"},[i("v-uni-view",{staticClass:"bg-img"},[i("loayImg",{attrs:{imgUrl:e.coverPic,fill:"scaleToFill"}})],1)],1),i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-cut text-black",staticStyle:{marginTop:"20rpx"}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-cut text-gray"},[t._v(t._s(e.summary))])],1)],1)],1)})),1):t._e()],2)})),1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},b53f:function(t,e,i){"use strict";var a=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getComicHome=n,e.getComicStyle=s,e.getComicDetail=c,e.getSendPage=r,e.getCommentPage=u,e.episodesContent=l,e.closedComic=d,e.likeComic=f,e.comictype=v;var o=a(i("1bd8"));function n(){return o.get("/books/comic/homePage")}function s(t){return o.get("/books/comic/page",t)}function c(t){return o.get("/books/comic/details",t)}function r(t){return o.get("/books/comic/sendPage",t)}function u(t){return o.get("/books/comic/commentPage",t)}function l(t){return o.get("/books/comic/getComicPicture",t)}function d(t){return o.get("/books/comic/closedComic",t)}function f(t){return o.get("/books/comic/likeComic",t)}function v(t){return o.get("/books/comic/comictype",t)}},b560:function(t,e,i){"use strict";i.r(e);var a=i("8ba3"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},bd98:function(t,e,i){"use strict";var a=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getbookPage=n,e.getbookDetail=s,e.getbookType=c,e.categoryPageList=r,e.getBookStyle=u,e.episodesContent=l,e.getCommentPage=d,e.getSendPage=f,e.categoryList=v,e.bookCollect=g,e.bookLike=b;var o=a(i("1bd8"));function n(){return o.get("/books/book/homePage")}function s(t){return o.get("/books/book/details",t)}function c(t){return o.get("/books/book/homePageList",t)}function r(t){return o.get("/books/book/categoryPageList",t)}function u(t){return o.get("/books/book/page",t)}function l(t){return o.get("/books/book/episodesContent",t)}function d(t){return o.get("/books/book/commentList",t)}function f(t){return o.get("/books/book/userSendList",t)}function v(t){return o.get("/books/book/categoryList",t)}function g(t){return o.get("/books/book/bookCollect",t)}function b(t){return o.get("/books/book/bookLike",t)}},c711:function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"comic"},[i("v-uni-swiper",{staticClass:"card-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!1,circular:!0,autoplay:!0,interval:"5000",duration:"500","indicator-color":"#8799a3","indicator-active-color":"#0081ff"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,a){return i("v-uni-swiper-item",{key:a,class:t.cardCur==a?"cur":""},[i("v-uni-view",{staticClass:"swiper-item"},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"kindWrap grid col-3"},t._l(t.avatar,(function(e,a){return i("v-uni-view",{key:a},[i("v-uni-navigator",{attrs:{url:e.url,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"kindItem shadow-blur",class:"bg-gradual-"+e.color},[i("v-uni-text",{staticClass:"lg text-white",class:"cuIcon-"+e.value})],1),i("v-uni-text",{staticClass:"text-black"},[t._v(t._s(e.label))])],1)],1)})),1),i("comicList",{attrs:{floors:t.floors}})],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},cd2e:function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"book"},[i("v-uni-swiper",{staticClass:"screen-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,(function(e,a){return i("v-uni-swiper-item",{key:a,class:t.cardCur==a?"cur":""},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)})),1),i("v-uni-view",{staticClass:"kindWrap grid col-3"},t._l(t.avatar,(function(e,a){return i("v-uni-view",{key:a},[i("v-uni-navigator",{attrs:{url:e.url,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"kindItem shadow-blur",class:"bg-gradual-"+e.color},[i("v-uni-text",{staticClass:"lg text-white",class:"cuIcon-"+e.value})],1),i("v-uni-text",{staticClass:"text-black"},[t._v(t._s(e.label))])],1)],1)})),1),i("booksList",{attrs:{floors:t.floors}})],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},d4a6:function(t,e,i){var a=i("8131");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("1a603aae",a,!0,{sourceMap:!1,shadowMode:!1})},ebac:function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("54f8")),n=a(i("ff82")),s={name:"comicList",components:{loayImg:n.default},data:function(){return{}},props:{floors:{type:Array,default:[]}},methods:{toNavigate:function(t){var e=t.currentTarget.dataset.url,i=t.currentTarget.dataset.id;uni.navigateTo({url:e+"?category="+i})},selectItem:function(t){if(!1===t.selected){var e,i=(0,o.default)(this.switchArr);try{for(i.s();!(e=i.n()).done;){var a=e.value;t.key===a.key?(a.selected=!0,this.$emit("switchValue",a)):a.selected=!1}}catch(n){i.e(n)}finally{i.f()}}}},created:function(){}};e.default=s},fe29:function(t,e,i){"use strict";var a=i("ee27"),o=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("b53f")),s=a(i("282f")),c={components:{comicList:s.default},data:function(){return{cardCur:0,dotStyle:!0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/comic/classification/classification"},{value:"rank",label:"排行",color:"green",url:"/pages/two/comic/classification/classification"},{value:"selection",label:"VIP",color:"blue",url:"/pages/two/comic/classification/classification"}],floors:[],comicStatus:[{value:0}]}},props:{showClass:{type:String,default:""},fresh:{type:Boolean,default:""}},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},getComicList:function(){var t=this;uni.showLoading({mask:!0}),n.getComicHome().then((function(e){var i=e.data;for(var a in t.floors=[],i)t.floors.push({title:a,content:i[a]});uni.stopPullDownRefresh(),uni.hideLoading(),t.$emit("freshChange")}),(function(t){}))}},watch:{showClass:function(t){"oneMove"===t&&this.getComicList()},fresh:function(t){t&&"oneMove"===this.showClass&&this.getComicList()}},mounted:function(){}};e.default=c},ffb1:function(t,e,i){"use strict";i.r(e);var a=i("fe29"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a}}]);