(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-two"],{"0067":function(t,e,i){"use strict";i.r(e);var a=i("5364"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"028d":function(t,e,i){var a=i("0751");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4e52b4e8",a,!0,{sourceMap:!1,shadowMode:!1})},"0634":function(t,e,i){"use strict";var a=i("ee27"),n=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("bd98")),s=a(i("86b5")),r={components:{booksList:s.default},data:function(){return{cardCur:0,dotStyle:!0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/book/classification/classification"},{value:"rank",label:"排行",color:"green",url:"/pages/two/book/classification/classification"},{value:"selection",label:"VIP",color:"blue",url:"/pages/two/book/classification/classification"}],floors:[]}},props:{showClass:{type:String,default:""}},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},getbookPageList:function(){var t=this;uni.showLoading({mask:!0}),o.getbookPage().then((function(e){console.log(e.data,"多多"),t.floors=e.data,uni.hideLoading()}),(function(t){}))}},watch:{showClass:function(t){"twoMove"===t&&this.getbookPageList()}},mounted:function(){this.getbookPageList()}};e.default=r},"0751":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".twoWrap[data-v-4ced8f0f]{overflow:hidden;width:100%}.content[data-v-4ced8f0f]{width:300%;-webkit-transition:all .3s linear;transition:all .3s linear\n\t/* display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center; */}.oneMove[data-v-4ced8f0f]{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}.twoMove[data-v-4ced8f0f]{-webkit-transform:translateX(-200vw);transform:translateX(-200vw)}.logo[data-v-4ced8f0f]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-4ced8f0f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-4ced8f0f]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=e},"0a23":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.floors,(function(e,a){return i("v-uni-view",{key:a},[a%2!=1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"action text-orange"},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),t._l(e.list,(function(e,n){return a%2!=1?i("v-uni-navigator",{key:n,staticClass:"cu-card article no-card",attrs:{url:"/pages/two/book/bookDetail/bookDetail?bookId="+e.id,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"content solid-bottom"},[i("v-uni-image",{attrs:{src:e.coverPic,mode:"aspectFit"}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-black"},[t._v(t._s(e.title))]),i("v-uni-text",[t._v(t._s(e.summary))])],1),i("v-uni-view",[i("v-uni-view",{staticClass:"cu-tag bg-green light sm round"},[t._v(t._s(e.author))])],1)],1)],1)],1)],1):t._e()})),a%2===1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"action text-orange"},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),a%2===1?i("v-uni-view",{staticClass:"cu-card dynamic grid col-2 bg-white no-card"},t._l(e.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-item shadow"},[i("v-uni-navigator",{attrs:{url:"/pages/two/comic/comicDetail/comicDetail?bookId="+e.id}},[i("v-uni-view",{staticClass:"grid flex-sub padding-lr col-1 grid-square"},[i("v-uni-view",{staticClass:"bg-img"},[i("v-uni-image",{attrs:{src:e.coverPic,mode:"scaleToFill"}})],1)],1),i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-black",staticStyle:{marginTop:"20rpx"}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-cut text-gray",staticStyle:{width:"320rpx",fontSize:"20rpx"}},[t._v(t._s(e.summary))])],1)],1)],1)})),1):t._e()],2)})),1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},1025:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".cu-card.dynamic > .cu-item[data-v-10f7c717]{box-sizing:border-box;display:inline-block;margin-left:0;margin-right:0}.cu-card.dynamic > .cu-item .text-content[data-v-10f7c717]{padding:0 %?30?%}",""]),t.exports=e},"11d1":function(t,e,i){var a=i("2415");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f2e27e18",a,!0,{sourceMap:!1,shadowMode:!1})},1431:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.s-switch-container[data-v-f522ce68]{margin:0 auto;padding:%?2?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?60?%;border-radius:%?100?%;background-color:#fff}.s-switch-item[data-v-f522ce68]{color:#ec008c;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all .3s linear;transition:all .3s linear}.s-switch-selected[data-v-f522ce68]{color:#fff;border-radius:%?40?%;background:#ec008c}',""]),t.exports=e},"17a1":function(t,e,i){"use strict";var a=i("b536"),n=i.n(a);n.a},"17ee":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"comic"},[i("v-uni-swiper",{staticClass:"card-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!1,circular:!0,autoplay:!0,interval:"5000",duration:"500","indicator-color":"#8799a3","indicator-active-color":"#0081ff"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,a){return i("v-uni-swiper-item",{key:a,class:t.cardCur==a?"cur":""},[i("v-uni-view",{staticClass:"swiper-item"},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"kindWrap grid col-3"},t._l(t.avatar,(function(e,a){return i("v-uni-view",{key:a},[i("v-uni-navigator",{attrs:{url:e.url,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"kindItem shadow-blur",class:"bg-gradual-"+e.color},[i("v-uni-text",{staticClass:"lg text-white",class:"cuIcon-"+e.value})],1),i("v-uni-text",{staticClass:"text-black"},[t._v(t._s(e.label))])],1)],1)})),1),i("comicList",{attrs:{floors:t.floors}})],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},2415:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".music[data-v-7ed21a10]{width:100%;min-height:100vh;background-color:#007aff}",""]),t.exports=e},"282f":function(t,e,i){"use strict";i.r(e);var a=i("9836"),n=i("6982");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("17a1");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"4f22c76a",null,!1,a["a"],s);e["default"]=c.exports},"28df":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"music"},[i("v-uni-text",[t._v("music")])],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"30c9":function(t,e,i){"use strict";var a=i("aa3c"),n=i.n(a);n.a},"39f1":function(t,e,i){"use strict";var a=i("028d"),n=i.n(a);n.a},"3ad8":function(t,e,i){"use strict";i.r(e);var a=i("6778"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"456a":function(t,e,i){"use strict";var a=i("ee27");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("54f8")),o={name:"SSwitch",props:{defaultValue:{type:Number,default:0},switchList:{type:Array,default:[]}},data:function(){return{switchArr:[]}},methods:{selectItem:function(t){if(!1===t.selected){var e,i=(0,n.default)(this.switchArr);try{for(i.s();!(e=i.n()).done;){var a=e.value;t.key===a.key?(a.selected=!0,this.$emit("switchValue",a)):a.selected=!1}}catch(o){i.e(o)}finally{i.f()}}}},created:function(){for(var t=this.switchList.length,e=0;e<t;e++){var i={key:this.switchList[e].key,value:this.switchList[e].value,selected:this.defaultValue===this.switchList[e].key};this.switchList[e].key===this.defaultValue&&this.$emit("switchValue",i),this.switchArr.push(i)}}};e.default=o},"4a60":function(t,e,i){"use strict";i.r(e);var a=i("71ea"),n=i("95ba");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("be51");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2e533b1e",null,!1,a["a"],s);e["default"]=c.exports},"4bde":function(t,e,i){"use strict";i.r(e);var a=i("456a"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},5364:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}}};e.default=a},"543a":function(t,e,i){"use strict";var a=i("11d1"),n=i.n(a);n.a},"54f8":function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0"),i("a630"),i("fb6a"),i("25f0");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function n(t,e){if(t){if("string"===typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,s=!0,r=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return s=t.done,t},e:function(t){r=!0,o=t},f:function(){try{s||null==a["return"]||a["return"]()}finally{if(r)throw o}}}}i.d(e,"default",(function(){return o}))},"66bc":function(t,e,i){"use strict";i.r(e);var a=i("17ee"),n=i("ffb1");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("30c9");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"5fd4d3a1",null,!1,a["a"],s);e["default"]=c.exports},6778:function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("54f8")),o={name:"comicList",data:function(){return{avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/book/classification/classification"},{value:"rank",label:"排行",color:"green",url:"/pages/two/book/classification/classification"},{value:"selection",label:"VIP",color:"blue",url:"/pages/two/book/classification/classification"}]}},props:{floors:{type:Array,default:[]}},methods:{selectItem:function(t){if(!1===t.selected){var e,i=(0,n.default)(this.switchArr);try{for(i.s();!(e=i.n()).done;){var a=e.value;t.key===a.key?(a.selected=!0,this.$emit("switchValue",a)):a.selected=!1}}catch(o){i.e(o)}finally{i.f()}}}},created:function(){}};e.default=o},6982:function(t,e,i){"use strict";i.r(e);var a=i("ebac"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"6a33":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".book[data-v-2e533b1e]{width:100%;min-height:100vh}.book .kindWrap[data-v-2e533b1e]{background-color:#fff;padding:%?20?% 0 %?10?%;text-align:center}.book .kindWrap .kindItem[data-v-2e533b1e]{margin:0 auto %?10?%;text-align:center;width:%?100?%;height:%?100?%;border-radius:50%;font-size:%?50?%;padding-top:%?20?%;box-shadow:0 0 3px 3px #fff inset,0 6px 9px 1px #ddd}.book .floor1[data-v-2e533b1e]{background-color:#fff}.book .floor1 .content[data-v-2e533b1e]{padding-bottom:%?40?%}.book .floor1 .content uni-image[data-v-2e533b1e]{width:%?200?%;height:10.4em}",""]),t.exports=e},"6fbc":function(t,e,i){"use strict";i.r(e);var a=i("7af1"),n=i("b560");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("39f1");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"4ced8f0f",null,!1,a["a"],s);e["default"]=c.exports},"71ea":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"book"},[i("v-uni-swiper",{staticClass:"screen-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,(function(e,a){return i("v-uni-swiper-item",{key:a,class:t.cardCur==a?"cur":""},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)})),1),i("v-uni-view",{staticClass:"kindWrap grid col-3"},t._l(t.avatar,(function(e,a){return i("v-uni-view",{key:a},[i("v-uni-navigator",{attrs:{url:e.url,"hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"kindItem shadow-blur",class:"bg-gradual-"+e.color},[i("v-uni-text",{staticClass:"lg text-white",class:"cuIcon-"+e.value})],1),i("v-uni-text",{staticClass:"text-black"},[t._v(t._s(e.label))])],1)],1)})),1),i("booksList",{attrs:{floors:t.floors}})],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"7af1":function(t,e,i){"use strict";var a={"s-switch":i("9f90").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"twoWrap"},[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",bottomColor:"oneMove"===t.showClass,headerStatus:!0,isBack:!1}},[i("template",{attrs:{slot:"content"},slot:"content"},[i("s-switch",{attrs:{defaultValue:0,switchList:t.arr},on:{switchValue:function(e){arguments[0]=e=t.$handleEvent(e),t.getSwitchValue.apply(void 0,arguments)}}})],1),i("template",{attrs:{slot:"right"},slot:"right"},[i("v-uni-text",{staticClass:"lg text-pink"}),i("v-uni-text",{staticClass:"lg cuIcon-searchlist",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}})],1)],2),i("v-uni-view",{staticClass:"content grid col-3",class:t.showClass},[i("B-book",{attrs:{showClass:t.showClass}}),i("C-comic",{attrs:{showClass:t.showClass}}),i("M-music")],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"7eb1":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".comic[data-v-5fd4d3a1]{width:100%;min-height:100vh}.comic .cu-bar[data-v-5fd4d3a1]{margin-top:%?60?%}.comic .kindWrap[data-v-5fd4d3a1]{background-color:#fff;padding:%?20?% 0 %?10?%;text-align:center}.comic .kindWrap .kindItem[data-v-5fd4d3a1]{margin:0 auto %?10?%;text-align:center;width:%?100?%;height:%?100?%;border-radius:50%;font-size:%?50?%;padding-top:%?20?%;box-shadow:0 0 3px 3px #fff inset,0 6px 9px 1px #ddd}",""]),t.exports=e},"86b5":function(t,e,i){"use strict";i.r(e);var a=i("0a23"),n=i("3ad8");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("bf6b");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"10f7c717",null,!1,a["a"],s);e["default"]=c.exports},"8ba3":function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("e143")),o=(a(i("9f90")),a(i("4a60"))),s=a(i("66bc")),r=a(i("8da0"));n.default.component("B-book",o.default),n.default.component("C-comic",s.default),n.default.component("M-music",r.default);var c={data:function(){return{title:"Hello",CustomBar:this.CustomBar,showClass:"",arr:[{key:0,value:"小说"},{key:1,value:"漫画"}]}},onLoad:function(){console.log(this.CustomBar)},methods:{getSwitchValue:function(t){var e=t.key;this.showClass=e?1===e?"oneMove":"twoMove":""},toSearch:function(){uni.navigateTo({url:"/pages/book_mall/index"})}}};e.default=c},"8da0":function(t,e,i){"use strict";i.r(e);var a=i("28df"),n=i("0067");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("543a");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"7ed21a10",null,!1,a["a"],s);e["default"]=c.exports},"8e39":function(t,e,i){var a=i("6a33");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0fe8062d",a,!0,{sourceMap:!1,shadowMode:!1})},"95ba":function(t,e,i){"use strict";i.r(e);var a=i("0634"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},9836:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.floors,(function(e,a){return i("v-uni-view",{key:a},[a%2!=1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/comic/comicStyle/comicStyle","data-id":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),t._l(e.content,(function(e,n){return a%2!=1?i("v-uni-navigator",{key:n,staticClass:"cu-card article no-card",attrs:{url:"/pages/two/comic/comicDetail/comicDetail","hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"content solid-bottom"},[i("v-uni-image",{attrs:{src:e.coverPic,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-black"},[t._v(t._s(e.title))]),i("v-uni-text",[t._v(t._s(e.summary))])],1),i("v-uni-view",[n%2!=1?i("v-uni-view",{staticClass:"cu-tag bg-red light sm round"},[t._v(t._s(e.category.slice(0,-1)))]):t._e(),n%2===1?i("v-uni-view",{staticClass:"cu-tag bg-green light sm round"},[t._v(t._s(e.category.slice(0,-1)))]):t._e()],1)],1)],1)],1)],1):t._e()})),a%2===1?i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/comic/comicStyle/comicStyle","data-id":e.title},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("更多")]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1):t._e(),a%2===1?i("v-uni-view",{staticClass:"cu-card dynamic grid col-2 bg-white no-card"},t._l(e.content,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-item shadow"},[i("v-uni-navigator",{attrs:{url:"/pages/two/comic/comicDetail/comicDetail"}},[i("v-uni-view",{staticClass:"grid flex-sub padding-lr col-1 grid-square"},[i("v-uni-view",{staticClass:"bg-img"},[i("v-uni-image",{attrs:{src:e.coverPic,mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"text-content"},[i("v-uni-view",{staticClass:"text-black",staticStyle:{marginTop:"20rpx"}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text-cut text-gray",staticStyle:{width:"320rpx",fontSize:"20rpx"}},[t._v(t._s(e.summary))])],1)],1)],1)})),1):t._e()],2)})),1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"9f90":function(t,e,i){"use strict";i.r(e);var a=i("c709"),n=i("4bde");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("f543");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"f522ce68",null,!1,a["a"],s);e["default"]=c.exports},aa3c:function(t,e,i){var a=i("7eb1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("87fe613e",a,!0,{sourceMap:!1,shadowMode:!1})},b536:function(t,e,i){var a=i("c737");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f9a76124",a,!0,{sourceMap:!1,shadowMode:!1})},b53f:function(t,e,i){"use strict";var a=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getComicHome=o,e.getComicStyle=s;var n=a(i("1bd8"));function o(){return n.get("/books/comic/homePage")}function s(t){return n.get("/books/comic/page",t)}},b560:function(t,e,i){"use strict";i.r(e);var a=i("8ba3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},be51:function(t,e,i){"use strict";var a=i("8e39"),n=i.n(a);n.a},bf6b:function(t,e,i){"use strict";var a=i("f3eb"),n=i.n(a);n.a},c709:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"s-switch-container"},t._l(t.switchArr,(function(e){return i("v-uni-view",{key:e.key,staticClass:"s-switch-item",class:{"s-switch-selected":e.selected},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectItem(e)}}},[t._v(t._s(e.value))])})),1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},c737:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".cu-card.dynamic > .cu-item[data-v-4f22c76a]{box-sizing:border-box;display:inline-block;margin-left:0;margin-right:0}.cu-card.dynamic > .cu-item .text-content[data-v-4f22c76a]{padding:0 %?30?%}",""]),t.exports=e},d951:function(t,e,i){var a=i("1431");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5b346a9f",a,!0,{sourceMap:!1,shadowMode:!1})},ebac:function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("54f8")),o={name:"comicList",data:function(){return{avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/comic/classification/classification"},{value:"rank",label:"排行",color:"green",url:"/pages/two/comic/classification/classification"},{value:"selection",label:"VIP",color:"blue",url:"/pages/two/comic/classification/classification"}]}},props:{floors:{type:Array,default:[]}},methods:{toNavigate:function(t){var e=t.currentTarget.dataset.url,i=t.currentTarget.dataset.id;uni.navigateTo({url:e+"?category="+i})},selectItem:function(t){if(!1===t.selected){var e,i=(0,n.default)(this.switchArr);try{for(i.s();!(e=i.n()).done;){var a=e.value;t.key===a.key?(a.selected=!0,this.$emit("switchValue",a)):a.selected=!1}}catch(o){i.e(o)}finally{i.f()}}}},created:function(){}};e.default=o},f3eb:function(t,e,i){var a=i("1025");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("62f1853e",a,!0,{sourceMap:!1,shadowMode:!1})},f543:function(t,e,i){"use strict";var a=i("d951"),n=i.n(a);n.a},fe29:function(t,e,i){"use strict";var a=i("ee27"),n=i("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("b53f")),s=a(i("282f")),r={components:{comicList:s.default},data:function(){return{cardCur:0,dotStyle:!0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],avatar:[{value:"similar",label:"分类",color:"orange",url:"/pages/two/book/classification/classification"},{value:"rank",label:"排行",color:"green",url:"/pages/two/book/classification/classification"},{value:"selection",label:"VIP",color:"blue",url:"/pages/two/book/classification/classification"}],floors:[],comicStatus:[{value:0}]}},props:{showClass:{type:String,default:""}},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},getComicList:function(){var t=this;uni.showLoading({mask:!0}),o.getComicHome().then((function(e){var i=e.data;for(var a in t.floors=[],i)t.floors.push({title:a,content:i[a]});uni.hideLoading()}),(function(t){}))}},watch:{showClass:function(t){console.log(111),"oneMove"===t&&this.getComicList()}},mounted:function(){}};e.default=r},ffb1:function(t,e,i){"use strict";i.r(e);var a=i("fe29"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a}}]);