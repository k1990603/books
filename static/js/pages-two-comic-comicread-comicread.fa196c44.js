(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-comic-comicread-comicread"],{1475:function(t,e,A){var i=A("4134");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=A("4f06").default;n("48255cb4",i,!0,{sourceMap:!1,shadowMode:!1})},"1bd8":function(t,e,A){"use strict";var i=A("ee27");A("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var n=A("e66a"),o=i(A("3dd7")),a=function(t,e){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},i={Accept:"application/json"};"POST"===A.method&&"form"===A.contentType&&(i["content-type"]="application/x-www-form-urlencoded");var a=o.default.getters["getToken"];return i["token"]=a||null,new Promise((function(a,s){wx.request({url:n.baseUrl+t,data:e,method:A.method||"POST",header:i,success:function(t){console.log(t,"res",t.data.code,t.data.desc),200!==t.data.code?-1===t.data.code?(o.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):(console.log(t,"2222"),a(t.data))},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),s("网络请求失败，请稍后再试")},complete:function(t){var e="",A=t&&t.statusCode;switch(A){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=a;var s=function(t,e){return a(t,e,{method:"POST",contentType:"form"})};e.post=s;var c=function(t,e){return a(t,e,{method:"POST",contentType:"json"})};e.postJson=c;var r=function(t,e){return a(t,e,{method:"put",contentType:"json"})};e.put=r;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),a(t,e,{method:"GET"})};e.get=l},"1de5":function(t,e,A){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"21c5":function(t,e,A){"use strict";A.r(e);var i=A("f984"),n=A.n(i);for(var o in i)"default"!==o&&function(t){A.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"36ea":function(t,e,A){"use strict";var i=A("1475"),n=A.n(i);n.a},"40f5":function(t,e,A){"use strict";var i=A("a1fb"),n=A.n(i);n.a},4134:function(t,e,A){var i=A("24fb"),n=A("1de5"),o=A("7c94");e=i(!1);var a=n(o);e.push([t.i,"@font-face{font-family:iconfont;src:url("+a+') format("truetype")}.iconfont[data-v-7361c903]{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-80dianliang[data-v-7361c903]:before{content:"\\e617"}.pagbg[data-v-7361c903]{position:fixed;top:0;left:0;width:100%;height:100%}.zuizhong.active[data-v-7361c903]{opacity:1;position:fixed;width:%?100?%;text-align:center;font-size:%?30?%;font-weight:700;color:#ec706b;-webkit-transform:translateX(50%) scale(.7);transform:translateX(50%) scale(.7);right:%?80?%;-webkit-transition:all .5s;z-index:9}.zuizhong[data-v-7361c903]{opacity:0;position:fixed;width:%?100?%;text-align:center;font-size:%?20?%;font-weight:700;color:#ec706b;right:%?80?%;-webkit-transform:translateX(50%) scale(.1);transform:translateX(50%) scale(.1);-webkit-transition:all .5s;transition:all .5s;z-index:9}.quanquan[data-v-7361c903]{-webkit-box-shadow:rgba(0,0,0,.12) 0 3px 13px 1px;box-shadow:rgba(0,0,0,.12) 0 3px 13px 1px;position:fixed;right:%?70?%;z-index:9;border-radius:50%;overflow:hidden;-webkit-transform:translateX(50%) scale(.5);transform:translateX(50%) scale(.5)}.back[data-v-7361c903]{width:%?40?%;height:%?40?%;margin:0 %?40?%}.sview[data-v-7361c903]{\n\t/* width: calc(100% - 40upx); */font-size:%?45?%;line-height:%?90?%;position:relative;\n\t/* text-indent:calc(2em + 12upx); */margin:0 auto;z-index:5;white-space:normal;word-break:break-all;word-wrap:break-word;overflow:hidden\n\t/* padding: 100upx 20upx 300upx; */}.titlee[data-v-7361c903]{width:100%;font-size:%?45?%;line-height:%?65?%;position:relative;z-index:5;padding:0 %?20?% %?50?%;text-indent:-2.3em}.tMain[data-v-7361c903]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}uni-page-body[data-v-7361c903]{letter-spacing:%?6?%}.topBox[data-v-7361c903]{position:fixed;top:0;left:0;width:100%;opacity:1;z-index:9}.bottomBox[data-v-7361c903]{padding:0 0 %?20?% 0;position:fixed;bottom:0;left:0;width:100%;opacity:1;z-index:9}.bottomBox .ddd>uni-view[data-v-7361c903]{width:100%;text-align:center;font-size:%?24?%;line-height:%?40?%}.bottomBox .ddd uni-image[data-v-7361c903]{width:%?40?%;height:%?40?%}@font-face{font-family:ydiconfont;src:url(https://at.alicdn.com/t/font_1282539_9h0uwv1sxps.ttf) format("truetype") /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */}.tficon[data-v-7361c903]{font-family:ydiconfont;font-size:%?34?%}.guanggao[data-v-7361c903]{position:fixed;bottom:0;left:0;z-index:6;width:100%}.dianxin[data-v-7361c903]{position:absolute;top:32.5%;left:11%;width:72%;height:35%}.dLiang[data-v-7361c903]{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.anmt[data-v-7361c903]{-webkit-transition:all .5s;transition:all .5s}.sekuai[data-v-7361c903]{width:%?150?%;height:%?100?%;background-color:#ec706b;border-radius:%?12?%;border:%?5?% solid #000;-webkit-transform:scale(.4);transform:scale(.4);margin:%?-10?% %?-35?% 0}.zhongMenu[data-v-7361c903]{top:50%;position:fixed;left:0;width:100%;height:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:9}.Box .cuIcon-favorfill[data-v-7361c903]{position:absolute;right:%?50?%;font-size:%?40?%}.Box .cuIcon-appreciate[data-v-7361c903]{position:absolute;right:%?140?%;font-size:%?40?%}',""]),t.exports=e},4145:function(t){t.exports={data:[{name:"默认",fontColor:"rgb(100,103,120)",pageBg:"rgb(247,247,247)",menuBg:"#fff",textColor:"#000"},{name:"夜间",fontColor:"#555",pageBg:"#191919",menuBg:"#1f1f1f",textColor:"#555"},{name:"护眼",fontColor:"#969696",pageBg:"#dde7c5",menuBg:"#333",textColor:"#202310"},{name:"淡黄",fontColor:"#362e23",pageBg:"#f8e6c0",menuBg:"#f8e5c5",textColor:"#6b5d54"},{name:"粉色",fontColor:"#4d1e24",pageBg:"#eec5cb",menuBg:"#f6dcdf",textColor:"#7f5b5f"}]}},"66b0":function(t,e,A){"use strict";A.r(e);var i=A("d2d4"),n=A("67d1");for(var o in n)"default"!==o&&function(t){A.d(e,t,(function(){return n[t]}))}(o);A("36ea");var a,s=A("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"7361c903",null,!1,i["a"],a);e["default"]=c.exports},"67d1":function(t,e,A){"use strict";A.r(e);var i=A("fdc5"),n=A.n(i);for(var o in i)"default"!==o&&function(t){A.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"7c94":function(t,e){t.exports="data:font/ttf;base64,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"},"8a16":function(t,e,A){t.exports=A.p+"static/img/yueduBack.f70f2c07.png"},9879:function(t,e,A){"use strict";var i,n=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("v-uni-image",{attrs:{src:t.url,mode:t.fill}})},o=[];A.d(e,"b",(function(){return n})),A.d(e,"c",(function(){return o})),A.d(e,"a",(function(){return i}))},"9bb6":function(t,e,A){var i=A("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.s-switch-container[data-v-53226990]{margin:0 auto;padding:%?2?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?60?%;border-radius:%?100?%;background-color:#fff}.s-switch-item[data-v-53226990]{color:#ec008c;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all .3s linear;transition:all .3s linear}.s-switch-selected[data-v-53226990]{color:#fff;border-radius:%?40?%;background:#ec008c}',""]),t.exports=e},a1fb:function(t,e,A){var i=A("9bb6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=A("4f06").default;n("6eda3fbe",i,!0,{sourceMap:!1,shadowMode:!1})},b53f:function(t,e,A){"use strict";var i=A("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getComicHome=o,e.getComicStyle=a,e.getComicDetail=s,e.getSendPage=c,e.getCommentPage=r,e.episodesContent=l,e.closedComic=u,e.likeComic=d,e.comictype=f,e.comment=g,e.ranking=h,e.exceptionalComic=v;var n=i(A("1bd8"));function o(){return n.get("/books/comic/homePage")}function a(t){return n.get("/books/comic/page",t)}function s(t){return n.get("/books/comic/details",t)}function c(t){return n.get("/books/comic/sendPage",t)}function r(t){return n.get("/books/comic/commentPage",t)}function l(t){return n.get("/books/comic/getComicPicture",t)}function u(t){return n.get("/books/comic/closedComic",t)}function d(t){return n.get("/books/comic/likeComic",t)}function f(t){return n.get("/books/comic/comictype",t)}function g(t){return n.get("/books/comic/comment",t)}function h(t){return n.get("/books/comic/ranking",t)}function v(t){return n.get("/books/comic/exceptionalComic",t)}},d2d4:function(t,e,A){"use strict";var i={loayImg:A("ff82").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Box"},[i("v-uni-view",{staticClass:"pagbg anmt",style:{backgroundColor:t.pageBg}}),i("v-uni-view",{staticClass:"zhongMenu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dianjile()}}}),i("v-uni-view",{staticClass:"topBox anmt",style:{color:t.fontColor,backgroundColor:t.menuBg,top:t.show?"0":"-150px"}},[i("v-uni-view",{style:{height:t.statusBarHeight}}),i("v-uni-view",{staticStyle:{height:"40upx"}}),i("v-uni-view",{staticClass:"tMain",staticStyle:{height:"100upx","line-height":"100upx","text-overflow":"ellipsis"}},[i("v-uni-image",{staticClass:"back",attrs:{src:A("8a16")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-text",{staticClass:"text-cut",staticStyle:{"font-size":"24upx",width:"420rpx"}},[t._v("("+t._s(t.section_title)+")")]),t.getToken?i("v-uni-text",{staticClass:"cuIcon-favorfill",class:[t.isCollected?"text-orange":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.comicCollectAction.apply(void 0,arguments)}}}):t._e(),t.getToken?i("v-uni-text",{staticClass:"cuIcon-appreciate",class:[t.isLiked?"text-orange":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.comicLikeAction.apply(void 0,arguments)}}}):t._e()],1)],1),i("v-uni-view",{staticClass:"bottomBox anmt",style:{color:t.fontColor,backgroundColor:t.menuBg,bottom:t.show?"0":"-150px"}},[i("v-uni-view",{staticStyle:{overflow:"hidden"}},[i("v-uni-view",{staticStyle:{float:"left",width:"15%","line-height":"100upx","text-align":"center","font-size":"24upx"}},[t._v("背景")]),i("v-uni-view",{staticStyle:{float:"left",width:"85%",height:"100upx",display:"flex"}},t._l(t.zhutiList,(function(e,A){return 1!=A&&2!=A?i("v-uni-view",{key:e.name,staticClass:"sekuai",style:{backgroundColor:e.pageBg,borderColor:t.dqzhuti==A?e.fontColor:"rgba(0,0,0,0)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qiehuan(A)}}}):t._e()})),1)],1),i("v-uni-view",{staticClass:"ddd",staticStyle:{width:"100%",display:"flex"}},[i("v-uni-view",{attrs:{"data-target":"DrawerModalL"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.mulu.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-text",{staticClass:"tficon"},[t._v("")])],1),i("v-uni-view",[t._v("目录")])],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qiehuan(1==t.dqzhuti?0:1)}}},[i("v-uni-view",[i("v-uni-text",{staticClass:"tficon"},[t._v(t._s(1==t.dqzhuti?"":""))])],1),i("v-uni-view",[t._v(t._s(1==t.dqzhuti?"白天":"夜间"))])],1),i("v-uni-view",{style:2==t.dqzhuti?"color:green":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qiehuan(2==t.dqzhuti?0:2)}}},[i("v-uni-view",[i("v-uni-text",{staticClass:"tficon"},[t._v("")])],1),i("v-uni-view",[t._v("护眼")])],1)],1)],1),i("v-uni-view",{staticClass:"anmt",style:{color:t.fontColor,lineHeight:t.statusBarHeight,backgroundColor:t.show?t.menuBg:t.pageBg,position:"fixed",top:"0",left:"0",zIndex:"6",width:"100%",fontSize:"3vw",zIndex:"20"}},[i("v-uni-view",{style:{height:t.statusBarHeight,padding:"0 5vw"}},[i("v-uni-view",{staticStyle:{float:"left","letter-spacing":"0"}},[i("v-uni-text",{domProps:{textContent:t._s(t.systemTime)}})],1),i("v-uni-view",{staticStyle:{float:"right","letter-spacing":"0"}},[i("v-uni-text",{staticClass:"iconfont icon-80dianliang",staticStyle:{"font-size":"5vw",position:"relative"}},[i("v-uni-text",{staticClass:"dianxin",style:{backgroundColor:t.show?t.menuBg:t.pageBg}},[i("v-uni-text",{staticClass:"dLiang",style:{backgroundColor:t.fontColor,width:t.battery+"%"}})],1)],1)],1)],1),i("v-uni-view",{staticStyle:{height:"40upx","line-height":"40upx",padding:"0 5vw"}},[i("v-uni-view",{staticStyle:{float:"left",width:"300upx",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"},domProps:{textContent:t._s(t.name)}}),i("v-uni-view",{staticStyle:{float:"right",width:"300upx",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis","text-align":"right"},domProps:{textContent:t._s(t.section_title)}})],1)],1),i("v-uni-view",{staticClass:"sview",staticStyle:{color:"rgb(0, 0, 0)","font-size":"55px","line-height":"27px"}},t._l(t.content_text,(function(t,e){return i("loayImg",{key:e,staticStyle:{width:"100vw",height:"1100rpx"},attrs:{imgUrl:t.pic,fill:"scaleToFill"}})})),1),i("v-uni-scroll-view",{staticClass:"cu-modal drawer-modal justify-start",class:"DrawerModalL"==t.modalName?"show":"",attrs:{"scroll-y":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog basis-lg",staticStyle:{width:"500rpx","text-align":"none"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(t.getCapterComicList,(function(e,A){return i("v-uni-view",{key:A,staticClass:"cu-item arrow",on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.tocapter(e.id)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{attrs:{"data-id":e.id}},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)],1)},o=[];A.d(e,"b",(function(){return n})),A.d(e,"c",(function(){return o})),A.d(e,"a",(function(){return i}))},e66a:function(t,e,A){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var i="http://47.244.209.81";e.baseUrl=i},f984:function(t,e,A){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"loayImg",props:{imgUrl:{type:String,default:""},fill:{type:String,default:"aspectFill"}},data:function(){return{url:"../../static/images/loading.gif"}},methods:{},created:function(){var t=this,e=new Object;e.userAgent=window.navigator.userAgent.toLowerCase(),e.ie=/msie/.test(e.userAgent),e.Moz=/gecko/.test(e.userAgent);var A=new Image;A.src=this.imgUrl,e.ie?img.onreadystatechange=function(){"complete"!=A.readyState&&"loaded"!=A.readyState||(t.url=t.imgUrl)}:e.Moz&&(A.onload=function(){1==A.complete&&(t.url=t.imgUrl)})}};e.default=i},fdc5:function(t,e,A){"use strict";var i=A("4a46"),n=A("ee27");A("4160"),A("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a,s=n(A("f3f3")),c=n(A("4145")),r=i(A("b53f")),l=A("2f62"),u=n(A("ff82")),d={data:function(){return{CustomBar:this.CustomBar,modalName:null,section_title:"第一章 陨落的天才",content_text:"",chapterId:null,comicId:null,name:"",show:!1,dqzhuti:0,zhutiList:c.default.data,fontColor:"rgb(100,103,120)",pageBg:"rgb(247,247,247)",menuBg:"#fff",textColor:"#000",statusBarHeight:"",Dindex:"",shuming:"斗破苍穹",id:"",battery:"",systemTime:"",size:uni.getStorageSync("fontsize")?uni.getStorageSync("fontsize"):40,lineHeight:uni.getStorageSync("lineHeight")?uni.getStorageSync("lineHeight"):70,isLoadMore:!0,num:0,isCollected:!1,isLiked:!1}},components:{loayImg:u.default},computed:(0,s.default)({},(0,l.mapGetters)({getCapterComicList:"getCapterComicList",getcomicStatus:"getcomicStatus",getToken:"getToken"})),onUnload:function(){clearInterval(o),clearInterval(a),uni.hideLoading(),plus.navigator.setFullscreen(!1)},created:function(){var t=this;this.isCollected=this.getcomicStatus.isCollected,this.isLiked=this.getcomicStatus.isLiked;plus.navigator.setFullscreen(!0);var e=uni.getStorageSync("zhuti");e?(this.dqzhuti=e,this.fontColor=c.default.data[e].fontColor,this.pageBg=c.default.data[e].pageBg,this.menuBg=c.default.data[e].menuBg,this.textColor=c.default.data[e].textColor):(this.dqzhuti=0,this.fontColor=c.default.data[0].fontColor,this.pageBg=c.default.data[0].pageBg,this.menuBg=c.default.data[0].menuBg,this.textColor=c.default.data[0].textColor),uni.getSystemInfo({success:function(e){t.statusBarHeight=e.statusBarHeight+"px"}})},onShow:function(){plus.navigator.setFullscreen(!0)},onHide:function(){plus.navigator.setFullscreen(!1)},onLoad:function(t){var e=this;this.chapterId=t.id,this.name=t.name,this.comicId=t.comicId,this.episodesContentAction(),plus.navigator.setStatusBarStyle("dark"),plus.navigator.setStatusBarBackground("#FF0000"),this.dianliang(),this.getTimes(),a=setInterval((function(){e.dianliang()}),6e4),o=setInterval((function(){e.getTimes()}),1e3)},onPullDownRefresh:function(){uni.stopPullDownRefresh()},onReachBottom:function(){this.isLoadMore?(this.num+=1,this.chapterId=this.getCapterComicList[this.num].id,this.episodesContentAction()):uni.showToast({icon:"none",title:"没有更多了",duration:1500})},mounted:function(){},methods:{changeFontSize:function(t){this.size=t.detail.value,uni.setStorageSync("fontsize",t.detail.value)},changeLineHeight:function(t){this.lineHeight=t.detail.value,uni.setStorageSync("lineHeight",t.detail.value)},mulu:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},back:function(){uni.navigateBack({})},dianjile:function(){this.show=!this.show},qiehuan:function(t){this.fontColor=c.default.data[t].fontColor,this.pageBg=c.default.data[t].pageBg,this.menuBg=c.default.data[t].menuBg,this.textColor=c.default.data[t].textColor,uni.setStorageSync("zhuti",t),this.dqzhuti=t},dianliang:function(){var t=this;if("ios"!=uni.getSystemInfoSync().platform){var e=plus.android.runtimeMainActivity(),A=plus.android.importClass("android.content.Intent"),i=plus.android.implements("io.dcloud.feature.internal.reflect.BroadcastReceiver",{onReceive:function(e,i){var n=i.getAction();if(n==A.ACTION_BATTERY_CHANGED){var o=i.getIntExtra("level",0);i.getIntExtra("voltage",0),i.getIntExtra("temperature",0);t.battery=o}}}),n=plus.android.importClass("android.content.IntentFilter"),o=new n(A.ACTION_BATTERY_CHANGED);e.registerReceiver(i,o)}else{var a=plus.ios.import("UIDevice"),s=a.currentDevice();s.isBatteryMonitoringEnabled()||s.setBatteryMonitoringEnabled(!0);var c=s.batteryLevel();t.battery=100*c}},getTimes:function(){var t=new Date;this.systemTime=(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())},forUpx:function(t){return uni.upx2px(t)},tocapter:function(t){console.log(t),this.chapterId=t,this.episodesContentAction()},comicCollectAction:function(){var t=this,e={comicId:this.comicId};r.closedComic(e).then((function(e){t.isCollected=!t.isCollected;var A={isCollected:t.isCollected,isLiked:t.isLiked};t.$store.dispatch("setStatusComic",A).then((function(){var e=t.isCollected?"收藏成功":"取消收藏";uni.showToast({icon:"none",title:e,duration:1500})}))}),(function(t){}))},comicLikeAction:function(){var t=this,e={comicId:this.comicId};r.likeComic(e).then((function(e){t.isLiked=!t.isLiked;var A={isCollected:t.isCollected,isLiked:t.isLiked};t.$store.dispatch("setStatusComic",A).then((function(){var e=t.isLiked?"点赞成功":"取消点赞";uni.showToast({icon:"none",title:e,duration:1500})}))}),(function(t){}))},episodesContentAction:function(){var t=this;uni.showLoading({mask:!0});var e={chapterId:this.chapterId};this.content_text=[],this.modalName=null,r.episodesContent(e).then((function(e){t.content_text=e.data;var A=JSON.parse(JSON.stringify(t.getCapterComicList));A.forEach((function(e,i){e.id==t.chapterId&&(t.section_title=e.title,t.num=i,i>=A.length-1&&(t.isLoadMore=!1))}))}),(function(t){}))}}};e.default=d},ff82:function(t,e,A){"use strict";A.r(e);var i=A("9879"),n=A("21c5");for(var o in n)"default"!==o&&function(t){A.d(e,t,(function(){return n[t]}))}(o);A("40f5");var a,s=A("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"53226990",null,!1,i["a"],a);e["default"]=c.exports}}]);