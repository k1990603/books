(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-book-bookread-bookread"],{"10d8":function(t,A,e){var i=e("d8a9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("58768dc2",i,!0,{sourceMap:!1,shadowMode:!1})},"1bd8":function(t,A,e){"use strict";var i=e("ee27");e("d3b7"),Object.defineProperty(A,"__esModule",{value:!0}),A.get=A.put=A.postJson=A.post=A.request=void 0;var o=e("e66a"),n=i(e("3dd7")),a=function(t,A){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},i={Accept:"application/json"},a=n.default.getters["getToken"];return i["token"]=a||null,new Promise((function(n,a){wx.request({url:o.baseUrl+t,data:A,method:e.method||"POST",header:i,success:function(t){console.log(t,"res",t.data.code,t.data.desc),200!==t.data.code?-1===t.data.code?setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),200):(console.log(t,"2222"),n(t.data))},fail:function(t){return uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500}),a("网络请求失败，请稍后再试")},complete:function(t){var A="",e=t&&t.statusCode;switch(e){case 400:A="错误请求",uni.showToast({icon:"none",title:A,duration:1500});break;case 401:A="未授权，请重新登录",uni.showToast({icon:"none",title:A,duration:1500});break;case 403:A="拒绝访问",uni.showToast({icon:"none",title:A,duration:1500});break;case 404:A="请求错误,未找到该资源",uni.showToast({icon:"none",title:A,duration:1500});break;case 405:A="请求方法未允许",uni.showToast({icon:"none",title:A,duration:1500});break;case 408:A="请求超时",uni.showToast({icon:"none",title:A,duration:1500});break;case 500:A="服务器端出错",uni.showToast({icon:"none",title:A,duration:1500});break;case 501:A="网络未实现",uni.showToast({icon:"none",title:A,duration:1500});break;case 502:A="网络错误",uni.showToast({icon:"none",title:A,duration:1500});break;case 503:A="服务不可用",uni.showToast({icon:"none",title:A,duration:1500});break;case 504:A="网络超时",uni.showToast({icon:"none",title:A,duration:1500});break;case 505:A="http版本不支持该请求",uni.showToast({icon:"none",title:A,duration:1500});break}uni.hideLoading()}})}))};A.request=a;var s=function(t,A){return a(t,A,{method:"POST",contentType:"form"})};A.post=s;var l=function(t,A){return a(t,A,{method:"POST",contentType:"json"})};A.postJson=l;var r=function(t,A){return a(t,A,{method:"put",contentType:"json"})};A.put=r;var u=function(t,A){return A||(A={}),A.timestamp=(new Date).getTime(),a(t,A,{method:"GET"})};A.get=u},"1de5":function(t,A,e){"use strict";t.exports=function(t,A){return A||(A={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),A.hash&&(t+=A.hash),/["'() \t\n]/.test(t)||A.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"1e1b":function(t,A,e){"use strict";e.r(A);var i=e("a53f"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(A,t,(function(){return i[t]}))}(n);A["default"]=o.a},2975:function(t,A,e){"use strict";e.r(A);var i=e("42ea"),o=e("1e1b");for(var n in o)"default"!==n&&function(t){e.d(A,t,(function(){return o[t]}))}(n);e("2eac");var a,s=e("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"856e9484",null,!1,i["a"],a);A["default"]=l.exports},"2eac":function(t,A,e){"use strict";var i=e("10d8"),o=e.n(i);o.a},4145:function(t){t.exports={data:[{name:"默认",fontColor:"rgb(100,103,120)",pageBg:"rgb(247,247,247)",menuBg:"#fff",textColor:"#000"},{name:"夜间",fontColor:"#555",pageBg:"#191919",menuBg:"#1f1f1f",textColor:"#555"},{name:"护眼",fontColor:"#969696",pageBg:"#dde7c5",menuBg:"#333",textColor:"#202310"},{name:"淡黄",fontColor:"#362e23",pageBg:"#f8e6c0",menuBg:"#f8e5c5",textColor:"#6b5d54"},{name:"粉色",fontColor:"#4d1e24",pageBg:"#eec5cb",menuBg:"#f6dcdf",textColor:"#7f5b5f"}]}},"42ea":function(t,A,e){"use strict";var i,o=function(){var t=this,A=t.$createElement,i=t._self._c||A;return i("v-uni-view",{staticClass:"Box"},[i("v-uni-view",{staticClass:"pagbg anmt",style:{backgroundColor:t.pageBg}}),i("v-uni-view",{staticClass:"zhongMenu",on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.dianjile()}}}),i("v-uni-view",{staticClass:"topBox anmt",style:{color:t.fontColor,backgroundColor:t.menuBg,top:t.show?"0":"-150px"}},[i("v-uni-view",{style:{height:t.statusBarHeight}}),i("v-uni-view",{staticStyle:{height:"40upx"}}),i("v-uni-view",{staticClass:"tMain",staticStyle:{height:"100upx","line-height":"100upx","text-overflow":"ellipsis"}},[i("v-uni-image",{staticClass:"back",attrs:{src:e("8a16")},on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.back()}}}),i("v-uni-text",{staticClass:"text-cut",staticStyle:{"font-size":"24upx",width:"420rpx"}},[t._v("("+t._s(t.section_title)+")")]),t.getToken?i("v-uni-text",{staticClass:"cuIcon-favorfill",class:[t.isCollected?"text-orange":""],on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.bookCollectAction.apply(void 0,arguments)}}}):t._e(),t.getToken?i("v-uni-text",{staticClass:"cuIcon-appreciate",class:[t.isLiked?"text-orange":""],on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.bookLikeAction.apply(void 0,arguments)}}}):t._e()],1)],1),i("v-uni-view",{staticClass:"bottomBox anmt",style:{color:t.fontColor,backgroundColor:t.menuBg,bottom:t.show?"0":"-150px"}},[i("v-uni-view",{staticStyle:{overflow:"hidden"}},[i("v-uni-view",{staticStyle:{float:"left",width:"50%",overflow:"hidden"}},[i("v-uni-view",{staticStyle:{float:"left",width:"30%","line-height":"70upx","text-align":"center","font-size":"24upx"}},[t._v("字体")]),i("v-uni-view",{staticStyle:{float:"left",width:"70%",height:"70upx",display:"flex","align-content":"center","justify-content":"center"}},[i("v-uni-slider",{staticStyle:{width:"100%"},attrs:{value:t.size,min:"20",max:"100",activeColor:t.fontColor,backgroundColor:t.pageBg,"block-color":t.fontColor,"block-size":"20"},on:{changing:function(A){arguments[0]=A=t.$handleEvent(A),t.changeFontSize.apply(void 0,arguments)},change:function(A){arguments[0]=A=t.$handleEvent(A),t.changeFontSize.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticStyle:{float:"left",width:"50%",overflow:"hidden"}},[i("v-uni-view",{staticStyle:{float:"left",width:"30%","line-height":"70upx","text-align":"center","font-size":"24upx"}},[t._v("间距")]),i("v-uni-view",{staticStyle:{float:"left",width:"70%",height:"70upx",display:"flex","align-content":"center","justify-content":"center"}},[i("v-uni-slider",{staticStyle:{width:"100%"},attrs:{value:t.lineHeight,min:"50",max:"150",activeColor:t.fontColor,backgroundColor:t.pageBg,"block-color":t.fontColor,"block-size":"20"},on:{changing:function(A){arguments[0]=A=t.$handleEvent(A),t.changeLineHeight.apply(void 0,arguments)},change:function(A){arguments[0]=A=t.$handleEvent(A),t.changeLineHeight.apply(void 0,arguments)}}})],1)],1)],1),i("v-uni-view",{staticStyle:{overflow:"hidden"}},[i("v-uni-view",{staticStyle:{float:"left",width:"15%","line-height":"100upx","text-align":"center","font-size":"24upx"}},[t._v("背景")]),i("v-uni-view",{staticStyle:{float:"left",width:"85%",height:"100upx",display:"flex"}},t._l(t.zhutiList,(function(A,e){return 1!=e&&2!=e?i("v-uni-view",{key:A.name,staticClass:"sekuai",style:{backgroundColor:A.pageBg,borderColor:t.dqzhuti==e?A.fontColor:"rgba(0,0,0,0)"},on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.qiehuan(e)}}}):t._e()})),1)],1),i("v-uni-view",{staticClass:"ddd",staticStyle:{width:"100%",display:"flex"}},[i("v-uni-view",{attrs:{"data-target":"DrawerModalL"},on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.mulu.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-text",{staticClass:"tficon"},[t._v("")])],1),i("v-uni-view",[t._v("目录")])],1),i("v-uni-view",{on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.qiehuan(1==t.dqzhuti?0:1)}}},[i("v-uni-view",[i("v-uni-text",{staticClass:"tficon"},[t._v(t._s(1==t.dqzhuti?"":""))])],1),i("v-uni-view",[t._v(t._s(1==t.dqzhuti?"白天":"夜间"))])],1),i("v-uni-view",{style:2==t.dqzhuti?"color:green":"",on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.qiehuan(2==t.dqzhuti?0:2)}}},[i("v-uni-view",[i("v-uni-text",{staticClass:"tficon"},[t._v("")])],1),i("v-uni-view",[t._v("护眼")])],1)],1)],1),i("v-uni-view",{staticClass:"anmt",style:{color:t.fontColor,lineHeight:t.statusBarHeight,backgroundColor:t.show?t.menuBg:t.pageBg,position:"fixed",top:"0",left:"0",zIndex:"6",width:"100%",fontSize:"3vw",zIndex:"20"}},[i("v-uni-view",{style:{height:t.statusBarHeight,padding:"0 5vw"}},[i("v-uni-view",{staticStyle:{float:"left","letter-spacing":"0"}},[i("v-uni-text",{domProps:{textContent:t._s(t.systemTime)}})],1),i("v-uni-view",{staticStyle:{float:"right","letter-spacing":"0"}},[i("v-uni-text",{staticClass:"iconfont icon-80dianliang",staticStyle:{"font-size":"5vw",position:"relative"}},[i("v-uni-text",{staticClass:"dianxin",style:{backgroundColor:t.show?t.menuBg:t.pageBg}},[i("v-uni-text",{staticClass:"dLiang",style:{backgroundColor:t.fontColor,width:t.battery+"%"}})],1)],1)],1)],1),i("v-uni-view",{staticStyle:{height:"40upx","line-height":"40upx",padding:"0 5vw"}},[i("v-uni-view",{staticStyle:{float:"left",width:"300upx",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"},domProps:{textContent:t._s(t.name)}}),i("v-uni-view",{staticStyle:{float:"right",width:"300upx",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis","text-align":"right"},domProps:{textContent:t._s(t.section_title)}})],1)],1),i("v-uni-view",{staticClass:"sview",style:{paddingTop:"calc("+t.statusBarHeight+" + 80px)",color:t.textColor,fontSize:t.forUpx(t.size)+"px",lineHeight:t.forUpx(t.lineHeight)+"px"}},[i("v-uni-text",{staticStyle:{"text-align":"right","font-weight":"bold","margin-bottom":"60rpx"},domProps:{textContent:t._s(t.section_title)}}),i("v-uni-rich-text",{attrs:{nodes:t.content_text}})],1),i("v-uni-scroll-view",{staticClass:"cu-modal drawer-modal justify-start",class:"DrawerModalL"==t.modalName?"show":"",attrs:{"scroll-y":!0},on:{click:function(A){arguments[0]=A=t.$handleEvent(A),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog basis-lg",staticStyle:{width:"500rpx","text-align":"none"},on:{click:function(A){A.stopPropagation(),arguments[0]=A=t.$handleEvent(A)}}},[i("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(t.getCapterBookList,(function(A,e){return i("v-uni-view",{key:e,staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tocapter(A.id,A.jiNo)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{attrs:{"data-id":A.id}},[t._v(t._s(A.title))])],1)],1)})),1)],1)],1)],1)},n=[];e.d(A,"b",(function(){return o})),e.d(A,"c",(function(){return n})),e.d(A,"a",(function(){return i}))},"7c94":function(t,A){t.exports="data:font/ttf;base64,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"},"8a16":function(t,A,e){t.exports=e.p+"static/img/yueduBack.f70f2c07.png"},a53f:function(t,A,e){"use strict";var i=e("4a46"),o=e("ee27");e("4160"),e("159b"),Object.defineProperty(A,"__esModule",{value:!0}),A.default=void 0;var n,a,s=o(e("f3f3")),l=o(e("4145")),r=i(e("bd98")),u=e("2f62"),c={data:function(){return{CustomBar:this.CustomBar,modalName:null,section_title:"第一章 陨落的天才",content_text:"",jiNo:null,id:null,bookId:null,name:"",show:!1,dqzhuti:0,zhutiList:l.default.data,fontColor:"rgb(100,103,120)",pageBg:"rgb(247,247,247)",menuBg:"#fff",textColor:"#000",statusBarHeight:"",Dindex:"",shuming:"斗破苍穹",battery:"",systemTime:"",size:uni.getStorageSync("fontsize")?uni.getStorageSync("fontsize"):40,lineHeight:uni.getStorageSync("lineHeight")?uni.getStorageSync("lineHeight"):70,isLoadMore:!0,num:0,isCollected:!1,isLiked:!1}},computed:(0,s.default)({},(0,u.mapGetters)({getCapterBookList:"getCapterBookList",getbookStatus:"getbookStatus",getToken:"getToken"})),onUnload:function(){clearInterval(n),clearInterval(a),uni.hideLoading(),plus.navigator.setFullscreen(!1)},created:function(){var t=this;this.isCollected=this.getbookStatus.isCollected,this.isLiked=this.getbookStatus.isLiked;plus.navigator.setFullscreen(!0);var A=uni.getStorageSync("zhuti");A?(this.dqzhuti=A,this.fontColor=l.default.data[A].fontColor,this.pageBg=l.default.data[A].pageBg,this.menuBg=l.default.data[A].menuBg,this.textColor=l.default.data[A].textColor):(this.dqzhuti=0,this.fontColor=l.default.data[0].fontColor,this.pageBg=l.default.data[0].pageBg,this.menuBg=l.default.data[0].menuBg,this.textColor=l.default.data[0].textColor),uni.getSystemInfo({success:function(A){t.statusBarHeight=A.statusBarHeight+"px"}})},onShow:function(){plus.navigator.setFullscreen(!0)},onHide:function(){plus.navigator.setFullscreen(!1)},onLoad:function(t){var A=this;this.jiNo=t.jiNo,this.id=t.id,this.bookId=t.bookId,this.name=t.name,this.episodesContentAction(),plus.navigator.setStatusBarStyle("dark"),plus.navigator.setStatusBarBackground("#FF0000"),this.dianliang(),this.getTimes(),a=setInterval((function(){A.dianliang()}),6e4),n=setInterval((function(){A.getTimes()}),1e3)},onReachBottom:function(){this.isLoadMore?(this.num+=1,this.jiNo=this.getCapterBookList[this.num].jiNo,this.id=this.getCapterBookList[this.num].id,this.episodesContentAction()):uni.showToast({icon:"none",title:"没有更多了",duration:1500})},mounted:function(){},methods:{changeFontSize:function(t){this.size=t.detail.value,uni.setStorageSync("fontsize",t.detail.value)},changeLineHeight:function(t){this.lineHeight=t.detail.value,uni.setStorageSync("lineHeight",t.detail.value)},mulu:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},back:function(){uni.navigateBack({}),uni.navigateTo({url:"/pages/two/book/bookDetail/bookDetail?bookId="+this.bookId})},dianjile:function(){this.show=!this.show},qiehuan:function(t){this.fontColor=l.default.data[t].fontColor,this.pageBg=l.default.data[t].pageBg,this.menuBg=l.default.data[t].menuBg,this.textColor=l.default.data[t].textColor,uni.setStorageSync("zhuti",t),this.dqzhuti=t},dianliang:function(){var t=this;if("ios"!=uni.getSystemInfoSync().platform){var A=plus.android.runtimeMainActivity(),e=plus.android.importClass("android.content.Intent"),i=plus.android.implements("io.dcloud.feature.internal.reflect.BroadcastReceiver",{onReceive:function(A,i){var o=i.getAction();if(o==e.ACTION_BATTERY_CHANGED){var n=i.getIntExtra("level",0);i.getIntExtra("voltage",0),i.getIntExtra("temperature",0);t.battery=n}}}),o=plus.android.importClass("android.content.IntentFilter"),n=new o(e.ACTION_BATTERY_CHANGED);A.registerReceiver(i,n)}else{var a=plus.ios.import("UIDevice"),s=a.currentDevice();s.isBatteryMonitoringEnabled()||s.setBatteryMonitoringEnabled(!0);var l=s.batteryLevel();t.battery=100*l}},getTimes:function(){var t=new Date;this.systemTime=(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())},forUpx:function(t){return uni.upx2px(t)},tocapter:function(t,A){this.id=t,this.jiNo=A,this.episodesContentAction()},bookCollectAction:function(){var t=this,A={bookId:this.bookId};r.bookCollect(A).then((function(A){t.isCollected=!t.isCollected;var e={isCollected:t.isCollected,isLiked:t.isLiked};t.$store.dispatch("setStatusBook",e).then((function(){var A=t.isCollected?"收藏成功":"取消收藏";uni.showToast({icon:"none",title:A,duration:1500})}))}),(function(t){}))},bookLikeAction:function(){var t=this,A={bookId:this.bookId};r.bookLike(A).then((function(A){t.isLiked=!t.isLiked;var e={isCollected:t.isCollected,isLiked:t.isLiked};t.$store.dispatch("setStatusBook",e).then((function(){var A=t.isLiked?"点赞成功":"取消点赞";uni.showToast({icon:"none",title:A,duration:1500})}))}),(function(t){}))},episodesContentAction:function(){var t=this;uni.showLoading({mask:!0});var A={jiNo:this.jiNo,bid:this.bookId,chapterId:this.id};this.content_text="",this.modalName=null,r.episodesContent(A).then((function(A){t.content_text=A.data;var e=JSON.parse(JSON.stringify(t.getCapterBookList));e.forEach((function(A,i){A.id==t.id&&(t.section_title=A.title,t.num=i,i>=e.length-1&&(t.isLoadMore=!1))}))}),(function(t){}))}}};A.default=c},bd98:function(t,A,e){"use strict";var i=e("4a46");Object.defineProperty(A,"__esModule",{value:!0}),A.getbookPage=n,A.getbookDetail=a,A.getbookType=s,A.categoryPageList=l,A.getBookStyle=r,A.episodesContent=u,A.getCommentPage=c,A.getSendPage=d,A.categoryList=g,A.bookCollect=f,A.bookLike=h;var o=i(e("1bd8"));function n(){return o.get("/books/book/homePage")}function a(t){return o.get("/books/book/details",t)}function s(t){return o.get("/books/book/homePageList",t)}function l(t){return o.get("/books/book/categoryPageList",t)}function r(t){return o.get("/books/book/page",t)}function u(t){return o.get("/books/book/episodesContent",t)}function c(t){return o.get("/books/book/commentList",t)}function d(t){return o.get("/books/book/userSendList",t)}function g(t){return o.get("/books/book/categoryList",t)}function f(t){return o.get("/books/book/bookCollect",t)}function h(t){return o.get("/books/book/bookLike",t)}},d8a9:function(t,A,e){var i=e("24fb"),o=e("1de5"),n=e("7c94");A=i(!1);var a=o(n);A.push([t.i,"@font-face{font-family:iconfont;src:url("+a+') format("truetype")}.iconfont[data-v-856e9484]{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-80dianliang[data-v-856e9484]:before{content:"\\e617"}.pagbg[data-v-856e9484]{position:fixed;top:0;left:0;width:100%;height:100%}.zuizhong.active[data-v-856e9484]{opacity:1;position:fixed;width:%?100?%;text-align:center;font-size:%?30?%;font-weight:700;color:#ec706b;-webkit-transform:translateX(50%) scale(.7);transform:translateX(50%) scale(.7);right:%?80?%;-webkit-transition:all .5s;z-index:9}.zuizhong[data-v-856e9484]{opacity:0;position:fixed;width:%?100?%;text-align:center;font-size:%?20?%;font-weight:700;color:#ec706b;right:%?80?%;-webkit-transform:translateX(50%) scale(.1);transform:translateX(50%) scale(.1);-webkit-transition:all .5s;transition:all .5s;z-index:9}.quanquan[data-v-856e9484]{-webkit-box-shadow:rgba(0,0,0,.12) 0 3px 13px 1px;box-shadow:rgba(0,0,0,.12) 0 3px 13px 1px;position:fixed;right:%?70?%;z-index:9;border-radius:50%;overflow:hidden;-webkit-transform:translateX(50%) scale(.5);transform:translateX(50%) scale(.5)}.back[data-v-856e9484]{width:%?40?%;height:%?40?%;margin:0 %?40?%}.sview[data-v-856e9484]{width:calc(100% - %?40?%);font-size:%?45?%;line-height:%?90?%;position:relative;text-indent:calc(2em + %?12?%);margin:0 auto;z-index:5;white-space:normal;word-break:break-all;word-wrap:break-word;overflow:hidden;padding:%?100?% %?20?% %?300?%}.titlee[data-v-856e9484]{width:100%;font-size:%?45?%;line-height:%?65?%;position:relative;z-index:5;padding:0 %?20?% %?50?%;text-indent:-2.3em}.tMain[data-v-856e9484]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}uni-page-body[data-v-856e9484]{letter-spacing:%?6?%}.topBox[data-v-856e9484]{position:fixed;top:0;left:0;width:100%;opacity:1;z-index:9}.bottomBox[data-v-856e9484]{padding:0 0 %?20?% 0;position:fixed;bottom:0;left:0;width:100%;opacity:1;z-index:9}.bottomBox .ddd>uni-view[data-v-856e9484]{width:100%;text-align:center;font-size:%?24?%;line-height:%?40?%}.bottomBox .ddd uni-image[data-v-856e9484]{width:%?40?%;height:%?40?%}@font-face{font-family:ydiconfont;src:url(https://at.alicdn.com/t/font_1282539_9h0uwv1sxps.ttf) format("truetype") /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */}.tficon[data-v-856e9484]{font-family:ydiconfont;font-size:%?34?%}.guanggao[data-v-856e9484]{position:fixed;bottom:0;left:0;z-index:6;width:100%}.dianxin[data-v-856e9484]{position:absolute;top:32.5%;left:11%;width:72%;height:35%}.dLiang[data-v-856e9484]{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.anmt[data-v-856e9484]{-webkit-transition:all .5s;transition:all .5s}.sekuai[data-v-856e9484]{width:%?150?%;height:%?100?%;background-color:#ec706b;border-radius:%?12?%;border:%?5?% solid #000;-webkit-transform:scale(.4);transform:scale(.4);margin:%?-10?% %?-35?% 0}.zhongMenu[data-v-856e9484]{top:50%;position:fixed;left:0;width:100%;height:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:9}.Box .cuIcon-favorfill[data-v-856e9484]{position:absolute;right:%?50?%;font-size:%?40?%}.Box .cuIcon-appreciate[data-v-856e9484]{position:absolute;right:%?140?%;font-size:%?40?%}',""]),t.exports=A},e66a:function(t,A,e){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.baseUrl=void 0;var i="http://47.244.209.81";A.baseUrl=i}}]);