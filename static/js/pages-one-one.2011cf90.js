(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-one-one"],{"085a":function(t,e,n){"use strict";var i=n("a7e9"),o=n.n(i);o.a},1024:function(t,e,n){"use strict";n.r(e);var i=n("ed39"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},1431:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.s-switch-container[data-v-f522ce68]{margin:0 auto;padding:%?2?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?60?%;border-radius:%?100?%;background-color:#fff}.s-switch-item[data-v-f522ce68]{color:#ec008c;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all .3s linear;transition:all .3s linear}.s-switch-selected[data-v-f522ce68]{color:#fff;border-radius:%?40?%;background:#ec008c}',""]),t.exports=e},"1bd8":function(t,e,n){"use strict";var i=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var o=n("e66a"),a=i(n("3dd7")),r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},i={Accept:"application/json"};"POST"===n.method&&"form"===n.contentType&&(i["content-type"]="application/x-www-form-urlencoded");var r=a.default.getters["getToken"];return i["token"]=r||null,new Promise((function(r,s){wx.request({url:o.baseUrl+t,data:e,method:n.method||"POST",header:i,success:function(t){200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200),r(t.data)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):r(t.data)},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),s("网络请求失败，请稍后再试")},complete:function(t){var e="",n=t&&t.statusCode;switch(n){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=r;var s=function(t,e){return r(t,e,{method:"POST",contentType:"form"})};e.post=s;var c=function(t,e){return r(t,e,{method:"POST",contentType:"json"})};e.postJson=c;var u=function(t,e){return r(t,e,{method:"put",contentType:"json"})};e.put=u;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),r(t,e,{method:"GET"})};e.get=l},"200b":function(t,e,n){"use strict";var i=n("9d91"),o=n.n(i);o.a},"22ae":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"collect"},[n("v-uni-view",{staticClass:"cu-list menu-avatar cont",staticStyle:{width:"100%"}},t._l(t.floors,(function(e,i){return n("v-uni-navigator",{key:i,staticClass:"cu-item",attrs:{url:e.url,"hover-class":"navigator-hover"}},[n("v-uni-view",{staticClass:"cu-avatar radius lg",style:"background-image:url("+e.coverPic+");background-size:contain;"}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"text-gray text-sm flex"},[n("v-uni-text",{staticClass:"text-cut"},[n("v-uni-text",{staticClass:"text-red  margin-right-xs"}),t._v(t._s(e.summary))],1)],1)],1)],1)})),1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"2f35":function(t,e,n){"use strict";n.r(e);var i=n("dcc3"),o=n("e160");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("d0fa");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"0b97b185",null,!1,i["a"],r);e["default"]=c.exports},"34ac":function(t,e,n){var i=n("bb85");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("2cb12b28",i,!0,{sourceMap:!1,shadowMode:!1})},"44db":function(t,e,n){"use strict";var i={"uni-swipe-action":n("484a").default,"uni-swipe-action-item":n("cf04").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"history"},[n("uni-swipe-action",t._l(t.floors,(function(e,i){return n("uni-swipe-action-item",{key:i,attrs:{options:t._genOptions(e.outId,e.type),autoClose:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchClass.apply(void 0,arguments)},change:function(n){arguments[0]=n=t.$handleEvent(n),t.change(e.outId,e.type)}}},[n("v-uni-view",{staticClass:"cu-list menu-avatar cont",staticStyle:{width:"100%"}},[n("v-uni-navigator",{staticClass:"cu-item",attrs:{url:e.url,"hover-class":"navigator-hover"}},[n("v-uni-view",{staticClass:"cu-avatar radius lg",style:"background-image:url("+e.coverPic+");background-size:contain;"}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"text-gray text-sm flex"},[n("v-uni-text",{staticClass:"text-cut"},[n("v-uni-text",{staticClass:"text-red  margin-right-xs"}),t._v(t._s(e.createTime))],1)],1)],1)],1)],1)],1)})),1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"456a":function(t,e,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("54f8")),a={name:"SSwitch",props:{defaultValue:{type:Number,default:0},switchList:{type:Array,default:[]}},data:function(){return{switchArr:[]}},methods:{selectItem:function(t){if(!1===t.selected){var e,n=(0,o.default)(this.switchArr);try{for(n.s();!(e=n.n()).done;){var i=e.value;t.key===i.key?(i.selected=!0,this.$emit("switchValue",i)):i.selected=!1}}catch(a){n.e(a)}finally{n.f()}}}},created:function(){for(var t=this.switchList.length,e=0;e<t;e++){var n={key:this.switchList[e].key,value:this.switchList[e].value,selected:this.defaultValue===this.switchList[e].key};this.switchList[e].key===this.defaultValue&&this.$emit("switchValue",n),this.switchArr.push(n)}}};e.default=a},"484a":function(t,e,n){"use strict";n.r(e);var i=n("dbfc"),o=n("c047");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"4bebc5f6",null,!1,i["a"],r);e["default"]=c.exports},"4bde":function(t,e,n){"use strict";n.r(e);var i=n("456a"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"54f8":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");var i=n("dde1");function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(i["a"])(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,r=!0,s=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==o["return"]||o["return"]()}finally{if(s)throw a}}}}},6232:function(t,e,n){"use strict";n.r(e);var i=n("9473"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"71e0":function(t,e,n){"use strict";n.r(e);var i=n("22ae"),o=n("6232");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("200b");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"3425bbdb",null,!1,i["a"],r);e["default"]=c.exports},"73d4":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-swipe[data-v-2c6a3ad8]{overflow:hidden}.uni-swipe-box[data-v-2c6a3ad8]{position:relative;width:100%}.uni-swipe_content[data-v-2c6a3ad8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative}.uni-swipe_move-box[data-v-2c6a3ad8]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-swipe_box[data-v-2c6a3ad8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:100%;-webkit-flex-shrink:0;flex-shrink:0;font-size:14px;background-color:#fff}.uni-swipe_button-group[data-v-2c6a3ad8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-swipe_button[data-v-2c6a3ad8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 20px}.uni-swipe_button-text[data-v-2c6a3ad8]{-webkit-flex-shrink:0;flex-shrink:0;font-size:14px}.ani[data-v-2c6a3ad8]{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-timing-function:cubic-bezier(.165,.84,.44,1)}',""]),t.exports=e},7670:function(t,e,n){var i=n("73d4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("048e8454",i,!0,{sourceMap:!1,shadowMode:!1})},8470:function(t,e,n){"use strict";n.r(e);var i=n("e2dc"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},9473:function(t,e,n){"use strict";var i=n("4a46"),o=n("ee27");n("99af"),n("4160"),n("a9e3"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("d0ff")),r=i(n("f1a5")),s={data:function(){return{floors:[]}},props:{defaultKey:{type:Number,default:0},fresh:{type:Boolean,default:!1}},methods:{closedHistoryList:function(){var t=this;r.closedHistory().then((function(e){e.data.forEach((function(t){t.type="comic",t.url="/pages/two/comic/comicDetail/comicDetail?comicId="+t.comicId})),e.data&&(t.floors=[].concat((0,a.default)(t.floors),(0,a.default)(e.data))),t.bookCollectListList()}),(function(t){}))},bookCollectListList:function(){var t=this;r.bookCollectList().then((function(e){e.data.forEach((function(t){t.type="book",t.url="/pages/two/book/bookDetail/bookDetail?bookId="+t.bid})),e.data&&(t.floors=[].concat((0,a.default)(t.floors),(0,a.default)(e.data))),uni.stopPullDownRefresh(),uni.hideLoading(),t.$emit("freshChange")}),(function(t){}))}},watch:{defaultKey:function(t){1===t&&(this.floors=[],uni.showLoading({mask:!0}),this.closedHistoryList())},fresh:function(t){console.log(t),t&&1===this.defaultKey&&(this.floors=[],uni.showLoading({mask:!0}),this.closedHistoryList())}},onShow:function(){},mounted:function(){}};e.default=s},"9ad8":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".collect .cu-card.article > .cu-item .content > uni-image[data-v-3425bbdb]{width:%?180?%}",""]),t.exports=e},"9c21":function(t,e,n){"use strict";n("4160"),n("a434"),n("ac1f"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{position:[],button:[]}},computed:{pos:function(){return JSON.stringify(this.position)},btn:function(){return JSON.stringify(this.button)}},watch:{show:function(t){if(!this.autoClose){var e=this.position[0];e?(e.show=t,this.$set(this.position,0,e)):this.init()}}},created:function(){void 0!==this.swipeaction.children&&this.swipeaction.children.push(this)},mounted:function(){this.init()},beforeDestroy:function(){var t=this;this.swipeaction.children.forEach((function(e,n){e===t&&t.swipeaction.children.splice(n,1)}))},methods:{init:function(){var t=this;setTimeout((function(){t.getSize(),t.getButtonSize()}),50)},closeSwipe:function(t){this.autoClose&&this.swipeaction.closeOther(this)},change:function(t){this.$emit("change",t.open);var e=this.position[0];e.show!==t.open&&(e.show=t.open,this.$set(this.position,0,e))},onClick:function(t,e){this.$emit("click",{content:e,index:t})},appTouchStart:function(){},appTouchEnd:function(){},getSize:function(){var t=this,e=uni.createSelectorQuery().in(this);e.selectAll(".selector-query-hock").boundingClientRect((function(e){t.autoClose?e[0].show=!1:e[0].show=t.show,t.position=e})).exec()},getButtonSize:function(){var t=this,e=uni.createSelectorQuery().in(this);e.selectAll(".button-hock").boundingClientRect((function(e){t.button=e})).exec()}}};e.default=i},"9d91":function(t,e,n){var i=n("9ad8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("46956be6",i,!0,{sourceMap:!1,shadowMode:!1})},"9f90":function(t,e,n){"use strict";n.r(e);var i=n("c709"),o=n("4bde");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("f543");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"f522ce68",null,!1,i["a"],r);e["default"]=c.exports},a354:function(t,e,n){"use strict";var i=function(t){(t.options.wxs||(t.options.wxs={}))["swipe"]=function(t){function e(t,e,n,i){var o=i.getState();if(o.position=JSON.parse(t),o.position&&0!==o.position.length){var a=o.position[0].show;o.left=o.left||o.position[0].left,c(!!a,i,n)}}function n(t,e){var n=t.instance,i=n.getState(),o=t.touches[0].pageX;n.removeClass("ani");for(var a=e.selectAllComponents(".button-hock"),r=0;r<a.length;r++)a[r].removeClass("ani");i.left=i.left||i.position[0].left,i.width=o-i.left,e.callMethod("closeSwipe")}function i(t,e){var n=t.instance,i=n.getDataset().disabled,o=n.getState();if(i=("string"===typeof i?JSON.parse(i):i)||!1,!i){var r=t.touches[0].pageX;a(r-o.width,n,e)}}function o(t,e){var n=t.instance,i=n.getDataset().disabled,o=n.getState();i=("string"===typeof i?JSON.parse(i):i)||!1,i||r(o.left,-40,n,e)}function a(t,e,n){var i=e.getState(),o=Math.max(-i.position[1].width,Math.min(t,0));i.left=o,e.setStyle({transform:"translateX("+o+"px)","-webkit-transform":"translateX("+o+"px)"}),s(o,e,n)}function r(t,e,n,i){var o=n.getState(),a=o.position,r=o.isopen;a[1].width?r?-t<=a[1].width?c(!1,n,i):c(!0,n,i):c(t<=e,n,i):c(!1,n,i)}function s(t,e,n){for(var i=n.selectAllComponents(".button-hock"),o=e.getState(),a=o.position,r=[],s=0,c=0;c<i.length;c++){if(!i[c].getDataset().button)return;var u=JSON.parse(i[c].getDataset().button);"string"===typeof u&&(u=JSON.parse(u));var l=u[c]&&u[c].width||0;s+=l,r.push(-s);var f=r[c-1]+t*(r[c-1]/a[1].width);0!=c&&i[c].setStyle({transform:"translateX("+f+"px)"})}}function c(t,e,n){var i=e.getState(),o=i.position;void 0===i.isopen&&(i.isopen=!1),i.isopen!==t&&n.callMethod("change",{open:t}),i.isopen=t,e.addClass("ani");for(var r=n.selectAllComponents(".button-hock"),s=0;s<r.length;s++)r[s].addClass("ani");a(t?-o[1].width:0,e,n)}return t.exports={sizeReady:e,touchstart:n,touchmove:i,touchend:o},t.exports}({exports:{}})};e["a"]=i},a7e9:function(t,e,n){var i=n("a8cf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("c65bd8f0",i,!0,{sourceMap:!1,shadowMode:!1})},a8cf:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"",""]),t.exports=e},b38d:function(t,e,n){"use strict";var i=n("4a46"),o=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("f3f3")),r=(o(n("e143")),o(n("9f90"))),s=o(n("c922")),c=o(n("71e0")),u=i(n("d55a")),l=n("2f62"),f={components:{SSwitch:r.default,HHistory:s.default,CCollect:c.default},data:function(){return{title:"Hello",CustomBar:this.CustomBar,defaultKey:0,fresh:!1,arr:[{key:0,value:"历史"},{key:1,value:"收藏"}]}},computed:(0,a.default)({},(0,l.mapGetters)({getToken:"getToken"})),onPullDownRefresh:function(){this.getToken?this.fresh=!0:uni.stopPullDownRefresh()},onLoad:function(){},onShow:function(){console.log(33,this.defaultKey),this.fresh=!0},methods:{freshChange:function(){this.fresh=!1},deleteAllHistoricalAction:function(){var t=this;u.deleteAllHistorical().then((function(e){t.fresh=!0,setTimeout((function(){uni.showToast({icon:"none",title:"全部清除",duration:1500})}),1e3)}),(function(t){}))},getSwitchValue:function(t){console.log(t.key),this.defaultKey=t.key}}};e.default=f},b6802:function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,"a",(function(){return i}))},b860:function(t,e,n){"use strict";n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},provide:function(){return{swipeaction:this}},created:function(){this.children=[]},methods:{closeOther:function(t){var e=this.children;e.forEach((function(e,n){if(t!==e){var i=e.position[0],o=i.show;o&&(i.show=!1)}}))}}};e.default=i},bb85:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".oneWrap[data-v-0b97b185]{overflow:hidden;width:100%}.oneWrap .content[data-v-0b97b185]{width:200%;\n\t/* min-height: calc(100vh - 190rpx); */-webkit-transition:all .3s linear;transition:all .3s linear\n\t/* display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center; */}.bgShow[data-v-0b97b185]{\n\t/* display: block; */-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}.logo[data-v-0b97b185]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-0b97b185]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-0b97b185]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=e},c047:function(t,e,n){"use strict";n.r(e);var i=n("b860"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c709:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"s-switch-container"},t._l(t.switchArr,(function(e){return n("v-uni-view",{key:e.key,staticClass:"s-switch-item",class:{"s-switch-selected":e.selected},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectItem(e)}}},[t._v(t._s(e.value))])})),1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},c922:function(t,e,n){"use strict";n.r(e);var i=n("44db"),o=n("1024");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("085a");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"8281534a",null,!1,i["a"],r);e["default"]=c.exports},ca08:function(t,e,n){"use strict";var i=n("7670"),o=n.n(i);o.a},cf04:function(t,e,n){"use strict";n.r(e);var i=n("dc68"),o=n("8470");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("ca08");var r,s=n("f0c5"),c=n("a354"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2c6a3ad8",null,!1,i["a"],r);"function"===typeof c["a"]&&Object(c["a"])(u),e["default"]=u.exports},d0fa:function(t,e,n){"use strict";var i=n("34ac"),o=n.n(i);o.a},d0ff:function(t,e,n){"use strict";n.r(e);var i=n("b6802");function o(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=n("dde1");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return o(t)||a(t)||Object(r["a"])(t)||s()}n.d(e,"default",(function(){return c}))},d33c:function(t,e,n){"use strict";function i(t){var e=new Date(t),n=e.getFullYear()+"年",i=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"月",o=e.getDate()<10?"0"+e.getDate():e.getDate()+"日",a=e.getHours()<10?"0"+e.getHours():e.getHours(),r=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return n+i+o+" "+a+":"+r+":"+s}Object.defineProperty(e,"__esModule",{value:!0}),e.timestampToTime=i,e.preventMoreClick=r;var o=null,a=600;function r(t,e){(function(){var n=(new Date).getTime();(!o||n-o>a)&&(e.call(t),o=n)})()}},d55a:function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.historicalRecord=a,e.closedComic=r,e.bookCollect=s,e.deleteHistorical=c,e.deleteAllHistorical=u;var o=i(n("1bd8"));function a(){return o.get("/books/comic/historicalRecord")}function r(t){return o.get("/books/comic/closedComic",t)}function s(t){return o.get("/books/book/bookCollect",t)}function c(t){return o.get("/books/comic/deleteHistorical",t)}function u(t){return o.get("/books/comic/deleteAllHistorical",t)}},d951:function(t,e,n){var i=n("1431");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("5b346a9f",i,!0,{sourceMap:!1,shadowMode:!1})},dbfc:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._t("default")],2)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},dc68:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-swipe"},[n("v-uni-view",{staticClass:"uni-swipe_content"},[n("v-uni-view",{wxsProps:{"change:prop":"pos"},staticClass:"uni-swipe_move-box selector-query-hock move-hock",attrs:{"data-disabled":t.disabled,"data-position":t.pos,"change:prop":t.swipe.sizeReady,prop:t.pos},on:{touchstart:function(e){e=t.$handleWxsEvent(e),t.swipe.touchstart(e,t.$getComponentDescriptor())},touchmove:function(e){e=t.$handleWxsEvent(e),t.swipe.touchmove(e,t.$getComponentDescriptor())},touchend:function(e){e=t.$handleWxsEvent(e),t.swipe.touchend(e,t.$getComponentDescriptor())},change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-swipe_box"},[t._t("default")],2),n("v-uni-view",{ref:"selector-button-hock",staticClass:"uni-swipe_button-group selector-query-hock move-hock"},t._l(t.options,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swipe_button button-hock",style:{backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px"},attrs:{"data-button":t.btn},on:{touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick(i,e)}}},[n("v-uni-text",{staticClass:"uni-swipe_button-text",style:{color:e.style&&e.style.color?e.style.color:"#FFFFFF"}},[t._v(t._s(e.text))])],1)})),1)],1)],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},dcc3:function(t,e,n){"use strict";var i={"s-switch":n("9f90").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"oneWrap"},[n("cu-custom",{attrs:{bgColor:"bg-gradual-pink",headerStatus:!0,isBack:!1}},[n("template",{attrs:{slot:"content"},slot:"content"},[n("s-switch",{attrs:{defaultValue:0,switchList:t.arr},on:{switchValue:function(e){arguments[0]=e=t.$handleEvent(e),t.getSwitchValue.apply(void 0,arguments)}}})],1),!t.defaultKey&&t.getToken?n("template",{attrs:{slot:"right"},slot:"right"},[n("v-uni-text",{staticClass:"lg text-pink"}),n("v-uni-text",{staticClass:"lg cuIcon-delete",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteAllHistoricalAction.apply(void 0,arguments)}}})],1):t._e()],2),n("v-uni-view",{staticClass:"content grid col-2",class:[t.defaultKey?"bgShow":""]},[n("H-history",{attrs:{defaultKey:t.defaultKey,fresh:t.fresh},on:{freshChange:function(e){arguments[0]=e=t.$handleEvent(e),t.freshChange.apply(void 0,arguments)}}}),n("C-collect",{attrs:{defaultKey:t.defaultKey,fresh:t.fresh},on:{freshChange:function(e){arguments[0]=e=t.$handleEvent(e),t.freshChange.apply(void 0,arguments)}}})],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},dde1:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3");var i=n("b6802");function o(t,e){if(t){if("string"===typeof t)return Object(i["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i["a"])(t,e):void 0}}},e160:function(t,e,n){"use strict";n.r(e);var i=n("b38d"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},e2dc:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("9c21")),a={mixins:[o.default],props:{options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},show:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0}},inject:["swipeaction"]};e.default=a},e66a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var i="http://47.244.209.81";e.baseUrl=i},ed39:function(t,e,n){"use strict";var i=n("ee27"),o=n("4a46");n("4160"),n("a9e3"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("d55a")),r=n("d33c"),s=i(n("484a")),c=i(n("cf04")),u={data:function(){return{floors:[],options:[{text:"删除",type:2,style:{backgroundColor:"#dd524d"}}]}},components:{uniSwipeAction:s.default,uniSwipeActionItem:c.default},props:{defaultKey:{type:Number,default:0},fresh:{type:Boolean,default:!1}},methods:{timestampToTime:r.timestampToTime,_genOptions:function(t,e){var n=JSON.parse(JSON.stringify(this.options));return n.forEach((function(n){n.outId=t,n.type=e})),n},change:function(t,e){Number(t),Number(e)},deleteHistoricalAction:function(t){var e=this;a.deleteHistorical(t).then((function(t){e.historicalRecordList()}),(function(t){}))},switchClass:function(t){console.log(t,666);var e={outId:Number(t.content.outId),type:Number(t.content.type)};this.deleteHistoricalAction(e)},colloctAction:function(t,e){1===e?this.bookCollectActiion(t):this.closedComicAction(t)},bookCollectActiion:function(t){var e={bookId:t};a.bookCollect(e).then((function(t){}),(function(t){}))},closedComicAction:function(t){var e={comicId:t};a.closedComic(e).then((function(t){}),(function(t){}))},historicalRecordList:function(){var t=this;uni.showLoading({mask:!0}),this.floors=[],a.historicalRecord().then((function(e){t.floors=e.data||[],t.floors.forEach((function(t){1==t.type?t.url="/pages/two/book/bookDetail/bookDetail?bookId="+t.outId:2==t.type&&(t.url="/pages/two/comic/comicDetail/comicDetail?comicId="+t.outId)})),uni.stopPullDownRefresh(),uni.hideLoading(),t.$emit("freshChange")}),(function(e){uni.stopPullDownRefresh(),uni.hideLoading(),t.$emit("freshChange")}))}},watch:{defaultKey:function(t){0===t&&this.historicalRecordList()},fresh:function(t){console.log(111111),t&&0===this.defaultKey&&this.historicalRecordList()}},onShow:function(){},mounted:function(){this.historicalRecordList()}};e.default=u},f1a5:function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.closedHistory=a,e.bookCollectList=r;var o=i(n("1bd8"));function a(){return o.get("/books/comic/closedHistory")}function r(){return o.get("/books/book/bookCollectList")}},f543:function(t,e,n){"use strict";var i=n("d951"),o=n.n(i);o.a}}]);