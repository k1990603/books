(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"033e":function(t,e,n){t.exports=n.p+"static/img/authlogo.aa78d23d.gif"},"193f":function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.login=a,e.logout=s,e.register=r,e.verifyUserName=u;var o=i(n("1bd8"));function a(t){return o.get("/books/user/login",t)}function s(t){return o.get("/books/user/quit",t)}function r(t){return o.put("/books/user/register",t)}function u(t){return o.get("/books/user/verifyUserName",t)}},"1bd8":function(t,e,n){"use strict";var i=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var o=n("e66a"),a=i(n("3dd7")),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},i={Accept:"application/json"};"POST"===n.method&&"form"===n.contentType&&(i["content-type"]="application/x-www-form-urlencoded");var s=a.default.getters["getToken"];return i["token"]=s||null,new Promise((function(s,r){wx.request({url:o.baseUrl+t,data:e,method:n.method||"POST",header:i,success:function(t){200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):(console.log(t,"2222"),s(t.data))},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),r("网络请求失败，请稍后再试")},complete:function(t){var e="",n=t&&t.statusCode;switch(n){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=s;var r=function(t,e){return s(t,e,{method:"POST",contentType:"form"})};e.post=r;var u=function(t,e){return s(t,e,{method:"POST",contentType:"json"})};e.postJson=u;var c=function(t,e){return s(t,e,{method:"put",contentType:"json"})};e.put=c;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),s(t,e,{method:"GET"})};e.get=l},"31ac":function(t,e,n){"use strict";var i=n("4a46"),o=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("f3f3")),s=n("2f62"),r=n("e66a"),u=i(n("8d07")),c=0,l=0,d=!0,f={data:function(){return{coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,userInfo:{}}},props:{fresh:{type:Boolean,default:!1}},computed:(0,a.default)({},(0,s.mapGetters)({getToken:"getToken",getUserInfo:"getUserInfo"}),{baseUrl:function(){return r.baseUrl}}),onShow:function(t){},mounted:function(){this.personalCenterList()},watch:{fresh:function(t){console.log(111),t&&this.personalCenterList()}},onNavigationBarButtonTap:function(t){var e=t.index;0===e?this.navTo("/pages/set/set"):1===e&&uni.navigateTo({url:"/pages/notice/notice"})},methods:{downLoad:function(){window.location.href="../../../books/static/xiaotanke.apk"},logout:function(){this.$store.dispatch("delToken","").then((function(){u.quit().then((function(t){uni.showToast({icon:"none",title:"退出成功",duration:1500})}),(function(t){}))}))},signAction:function(){var t=this;u.signIn().then((function(e){t.personalCenterList(),uni.showToast({icon:"none",title:"获得"+e.data.bookCurrency||!1,duration:1500})}),(function(t){}))},personalCenterList:function(){var t=this;uni.showLoading({mask:!0}),u.personalCenter().then((function(e){t.userInfo=e.data,t.$store.dispatch("updateUserInfo",t.userInfo),uni.stopPullDownRefresh(),t.$emit("freshAction")}),(function(t){}))},uploadImg:function(){var t=this;uni.chooseImage({count:1,sizeType:["original"],sourceType:["album","camera"],success:function(e){var n=e.tempFilePaths;uni.uploadFile({url:"http://47.244.209.81/books/uploadDownload/uploadImage",filePath:n[0],name:"file",header:{token:t.getToken},success:function(e){t.personalCenterList(),uni.showToast({icon:"none",title:"上传成功",duration:1500})}})}})},urlTobase64:function(t){uni.request({url:t,method:"GET",responseType:"arraybuffer",success:function(t){var e=wx.arrayBufferToBase64(t.data);e="data:image/jpeg;base64,"+e,console.log(e)}})},toNavigate:function(t){var e=t.currentTarget.dataset.url;uni.navigateTo({url:e})},navTo:function(t){this.hasLogin||(t="/pages/public/login"),uni.navigateTo({url:t})},coverTouchstart:function(t){!1!==d&&(this.coverTransition="transform .1s linear",c=t.touches[0].clientY)},coverTouchmove:function(t){l=t.touches[0].clientY;var e=l-c;e<0?this.moving=!1:(this.moving=!0,e>=80&&e<100&&(e=80),e>0&&e<=80&&(this.coverTransform="translateY(".concat(e,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}}};e.default=f},"432f":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"loginWrap"},[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!1}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("登录")])],2),i("v-uni-view",{staticClass:"loginContainer "},[i("v-uni-view",{staticClass:"wrap_logo"},[i("v-uni-image",{staticClass:"logo",attrs:{mode:"aspectFit",src:n("033e")}})],1),i("v-uni-view",{staticClass:"wrap_form"},[i("v-uni-view",{staticClass:"wrap_input"},[i("v-uni-view",{staticClass:"row border-half solid-bottom"},[i("v-uni-image",{staticClass:"icon",attrs:{mode:"aspectFit",src:n("885f")}}),i("v-uni-input",{staticClass:"input_phone",attrs:{"placeholder-class":"phcolor",name:"phone","data-input":"input",placeholder:"请输入账号",bindconfirm:"input_confirm"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyInput.apply(void 0,arguments)}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),i("v-uni-view",{staticClass:"after"})],1),i("v-uni-view",{staticClass:"row border-half solid-bottom"},[i("v-uni-image",{staticClass:"icon",attrs:{mode:"aspectFit",src:n("8d4f")}}),i("v-uni-input",{attrs:{"placeholder-class":"phcolor",name:"password",password:!t.pass_visible,placeholder:"请输入密码"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPasswordInput.apply(void 0,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t.pass_visible?i("v-uni-image",{staticClass:"icon eye",attrs:{mode:"aspectFit",src:n("b389")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePasswordVisble.apply(void 0,arguments)}}}):i("v-uni-image",{staticClass:"icon eye",attrs:{mode:"aspectFit",src:n("aeda")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePasswordVisble.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"after"})],1)],1),t.phone.length>0&&t.vCode.length>0||t.phone.length>0&&t.password.length>0?i("v-uni-view",{staticClass:"wrap_submit"},[i("v-uni-button",{staticClass:"btn_submit btn_color",attrs:{type:"primary",formType:"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit()}}},[t._v("登录")])],1):i("v-uni-view",{staticClass:"wrap_submit"},[i("v-uni-button",{staticClass:"btn_submit btn_color_no",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[t._v("登录")])],1)],1),i("v-uni-view",{staticClass:"text-gray text-center margin-top-xl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRegister.apply(void 0,arguments)}}},[t._v("没有账户?去注册")])],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"47c6":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.getToken?n("userCom",{attrs:{fresh:t.fresh},on:{freshAction:function(e){arguments[0]=e=t.$handleEvent(e),t.freshAction.apply(void 0,arguments)}}}):n("loginCom")],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"78d1":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"my"},[i("v-uni-view",{staticClass:"myTitle"},[i("v-uni-image",{staticClass:"ubg",attrs:{src:n("9821"),mode:""}}),i("v-uni-view",{staticClass:"container flex  p-xs margin-bottom-sm mb-sm"},[i("v-uni-view",{staticClass:"flex-sub text-white margin-xs radius"},[i("v-uni-view",{staticClass:"cu-avatar round xl margin-left",style:[{backgroundImage:"url("+t.baseUrl+t.userInfo.portrait+")"}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadImg.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-tag badge bg-pink",class:t.userInfo.isVip?"bg-gradual-pink":"bg-grey"},[t._v("VIP")])],1)],1),i("v-uni-view",{staticClass:"flex-twice text-white margin-xs radius",staticStyle:{fontSize:"28rpx"}},[i("v-uni-view",{staticClass:"title"},[t._v("账号："+t._s(t.userInfo.userName))]),i("v-uni-view",{staticClass:"text"},[t.userInfo.isVip?i("span",{staticClass:"title"},[t._v("VIP开始时间："+t._s(t.userInfo.startTime))]):t._e(),t.userInfo.isVip?i("span",{staticStyle:{display:"block"}},[t._v("VIP到期时间："+t._s(t.userInfo.endTime))]):t._e()])],1),i("v-uni-view",{staticClass:"flex-sub text-white margin-xs radius"},[i("v-uni-view",{staticClass:"action margin-bottom"},[i("v-uni-button",{staticClass:"cu-btn round bg-white text-blue text-sm"},[t._v("申请提现")])],1),i("v-uni-view",{staticClass:"action"},[t.userInfo.isSignIn?i("v-uni-button",{staticClass:"cu-btn round bg-white text-blue text-sm",staticStyle:{padding:"0 44rpx"}},[t._v("已签到")]):i("v-uni-button",{staticClass:"cu-btn round bg-white text-blue text-sm",staticStyle:{padding:"0 54rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.signAction.apply(void 0,arguments)}}},[t._v("签到")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"bg-white grid col-2 padding bookWrap"},[i("v-uni-view",{staticClass:"text-center solids-right"},[i("v-uni-text",[t._v("书币余额")])],1),i("v-uni-view",{staticClass:"text-center"},[i("v-uni-text",[t._v("余额")])],1),i("v-uni-view",{staticClass:"text-center solids-right"},[i("v-uni-text",{staticClass:"text-gradual-orange text-xxl"},[t._v(t._s(t.userInfo.bookCurrency||0))])],1),i("v-uni-view",{staticClass:"text-center text-lg"},[i("v-uni-text",{staticClass:"text-gradual-orange text-xxl"},[t._v(t._s(t.userInfo.balance||0))])],1)],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-my text-grey"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("我的账户")])],1),i("div",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn round lines-orange text-sm margin-right-xs",attrs:{"data-url":"/pages/user/charge/charge"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[t._v("购买书币")]),i("v-uni-button",{staticClass:"cu-btn round lines-orange text-sm",attrs:{"data-url":"/pages/user/chargeMoney/chargeMoney"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[t._v("立即充值")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-text text-orange"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("咨询,代理,待充值QQ")])],1),i("v-uni-view",{staticClass:"action text-grey text-sm"},[i("v-uni-text",[t._v("12345678")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list menu margin-top"},[i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-button",{staticClass:"cu-btn content",attrs:{"open-type":"contact"}},[i("v-uni-text",{staticClass:"cuIcon-moneybag text-olive"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("推广赚钱")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-url":"/pages/user/myPromote/myPromote"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-friend text-pink"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("我的推广用户")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-url":"/pages/user/myCode/myCode"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-qrcode text-green"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("我的推广二维码")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-mark text-yellow"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("我的消息")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-form text-cyan"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("建议反馈")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-recharge text-pink"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("账单明细")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downLoad.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-down text-blue"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("下载")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list menu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"cuIcon-expressman text-mauve"}),i("v-uni-text",{staticClass:"text-grey"},[t._v("退出")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list menu"})],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},8097:function(t,e,n){"use strict";var i=n("4a46"),o=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("f3f3")),s=n("2f62"),r=o(n("dc1b")),u=o(n("cd9d")),c=(i(n("8d07")),{data:function(){return{fresh:!1}},components:{loginCom:r.default,userCom:u.default},computed:(0,a.default)({},(0,s.mapGetters)({getToken:"getToken"})),onPullDownRefresh:function(){this.fresh=!0},onLoad:function(t){},onShow:function(t){this.fresh=!0},mounted:function(){},methods:{freshAction:function(){this.fresh=!1}}});e.default=c},"82b6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"/* pages/login/login.wxss */.loginWrap[data-v-5d3230e8]{background-color:#fff;height:100vh}.loginContainer[data-v-5d3230e8]{padding:%?75?% %?70?% %?42?%;height:100%;position:relative;box-sizing:border-box}.loginContainer .wrap_logo[data-v-5d3230e8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;margin-bottom:%?70?%}.loginContainer .wrap_logo .logo[data-v-5d3230e8]{width:%?200?%;height:%?200?%}.loginContainer .wrap_text[data-v-5d3230e8]{text-align:center;color:#323232}.loginContainer .wrap_text .txt1[data-v-5d3230e8]{color:#323232;display:block;font-size:%?28?%;text-align:center}.txt2[data-v-5d3230e8]{width:%?91?%;height:%?34?%;border-radius:%?8?%;border:solid %?1?% #313131;font-size:%?24?%;line-height:%?34?%;color:#323232;float:left;margin-left:%?25?%}.loginContainer .wrap_form uni-input[data-v-5d3230e8],\n.loginContainer .wrap_form .pass_text[data-v-5d3230e8]{height:%?86?%;-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;padding:%?6?% %?15?%;font-size:%?28?%;line-height:%?86?%}.loginContainer .wrap_input .row[data-v-5d3230e8]{display:-webkit-box;display:-webkit-flex;display:flex;\n  /* border-bottom: 1px solid #D8D8D8; */\n  /* margin: 15rpx 0; */-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.loginContainer .wrap_input .row .icon[data-v-5d3230e8]{width:%?31?%;height:%?32?%}.loginContainer .wrap_input .row .icon.eye[data-v-5d3230e8]{float:right}.loginContainer .wrap_input .row .btn_mobileCode[data-v-5d3230e8]{-webkit-box-flex:0;-webkit-flex:0 0 %?200?%;flex:0 0 %?200?%;margin-left:%?10?%;line-height:%?86?%;font-size:%?32?%;background:transparent;color:#008ee3;text-align:right}.loginContainer .wrap_input .row .btn_mobileCode.isSendClass[data-v-5d3230e8]{color:#ddd}.loginContainer .wrap_submit[data-v-5d3230e8]{margin-top:%?45?%}.loginContainer .wrap_submit .btn_submit[data-v-5d3230e8]{background-blend-mode:normal,normal;width:%?600?%;height:%?86?%;line-height:%?86?%;font-size:%?32?%;padding:0\n  /* border-radius: 4rpx; */}.placeholder[data-v-5d3230e8]{font-size:%?32?%;color:#c2c2c2}.loginContainer .wrap_submit .btn_submit[data-v-5d3230e8]::after{border:none}.loginContainer .wrap_submit .btn_color[data-v-5d3230e8]{\n  /* background: #008EE3; */background-image:-webkit-linear-gradient(left,#1bb5ee,#008ee3),-webkit-linear-gradient(#000,#000);background-image:linear-gradient(90deg,#1bb5ee,#008ee3),linear-gradient(#000,#000)}.loginContainer .wrap_submit .btn_color_no[data-v-5d3230e8]{background-image:-webkit-linear-gradient(left,#d0d0d0,#d0d0d0),-webkit-linear-gradient(#000,#000);background-image:linear-gradient(90deg,#d0d0d0,#d0d0d0),linear-gradient(#000,#000);color:#fff}.loginContainer .web-v[data-v-5d3230e8]{margin-top:%?24?%;height:%?40?%;line-height:%?40?%;color:#b9c1c6;font-size:%?30?%;text-align:center}.loginContainer .web-s[data-v-5d3230e8]{color:#008ee3}.loginContainer .web-x[data-v-5d3230e8]{margin-top:%?24?%;height:%?40?%;line-height:%?40?%;color:#b9c1c6;font-size:%?28?%}.change-login[data-v-5d3230e8]{margin-top:%?35?%;font-size:%?30?%;color:#008ee3}.footer[data-v-5d3230e8]{font-size:%?24?%;position:absolute;bottom:%?30?%;text-align:center;width:100%;left:0;right:0;color:#606060}.agreement[data-v-5d3230e8]{color:#008ee3}.btn_color_register[data-v-5d3230e8]{width:%?224?%;font-size:%?30?%;height:%?86?%;line-height:%?86?%;color:#008ee3;border:1px solid #008ee3;background-color:#fff}",""]),t.exports=e},"885f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAAABGdBTUEAALGPC/xhBQAAAzdJREFUWAntVk1oE0EUfm82tdJEG6Va8GALglJBNIp4EQQFFS/WqvQgaLbVEOulaq9iwIt68VC0FrJp6q0ItWKtB/Fg8WxTT3qQktoiUm2kQdommx3fpm7YYnZmV0JQcC+zO9/3vvft/D6A/89fNALo1UssFvNNTU+3A4fTwPk+RGzkAFkS+siBj9UoSiIej8940fVkoqOj42DBAA2Ab3dKQoJLAHi7uXnrLTJsOPHs/a5NqOrFdoMXHlHwGruA0zsiPG1uajpDRnQnjtXPrBdRq6rqAQ7GIHFcGTC1OIeTU+n0PZGuhUlNcM6RBB9SW2sFuW45XAmHL+2X8RUZIZ2ePUEL7rqM54AjIG+YTE0MOeDFbulIABitIgEZRovuWDgWWyviuTDBd4kEZBhNY13N7Ow2EU9qgs6ATSIBN1iec6GG1ATt+e9uEok4zDAyQlwEmhgi/yDjCHFE3e/3T4k40pGghTUqEpBhyOF1b2/vgognNREIBIbpfkiLREQYV1B6YElN0F8sA8NuUSJHDHF0UNOeO+K/AKkJk5fUtBGG7IZMbDWO79YH/OdW95X/kp6YVlgqNTG+NxSappV6mPqERzgdk48VBq39/f1ZK17U0rrz9kSj0c1LS7mrdH602a90WjdZ6nvhY3hf07RxL6qeTdjFu7q6ArquNzLGsn19fXNkhHz8o4+nkejp6fHPZTJ7mAEhA4wdFLyR/jsIHBfpws8gxxlElqKy4+3AwINPbsdEaiLc3R2EhYWzVFOcokrlCAm7KmxI+D1HeKIgDiUSiUmRIUcTVE9uocTXaJIjdBOuE4nIMNotrwDYnWQy/rIc9zcTZiVF9eRlKufuUoC/XNCf9pGZEZ+PRaka/2LXWGWiOOdf54dp6x21kyr8/s2nsDb7Ni6ZiEQidbm8PkYjcajCScvJ/VAYHqe18sYES8d2Lqffr5IBM6/fMPgz+vGGkonOzs4QIJw3O6r10IIPLufzN818xekIq2qSdsKFahmw8tAJm98QrK9fmQ4Ouy2gmi1Nf818NrtzxQRiSzWT23OxQqGlaIIcCa9me1Cl3w3E2tLuqLS4Fz3fChk/ewmqJBcNXPwJ/q7/OqJhmisAAAAASUVORK5CYII="},"8d07":function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getCode=a,e.getPromote=s,e.personalCenter=r,e.uploadImg=u,e.quit=c,e.signIn=l,e.recharge=d,e.chongBookCurrencyList=f,e.chongBookCurrency=v,e.chongVIPList=g,e.chongVIP=p;var o=i(n("1bd8"));function a(){return o.get("/books/promote/yards")}function s(t){return o.get("/books/promote/page",t)}function r(t){return o.get("/books/user/personalCenter",t)}function u(t){return o.post("/books/user/upload",t)}function c(t){return o.get("/books/user/quit",t)}function l(t){return o.get("/books/user/signIn",t)}function d(t){return o.get("/books/account/recharge",t)}function f(t){return o.get("/books/user/chongBookCurrencyList",t)}function v(t){return o.get("/books/user/chongBookCurrency",t)}function g(t){return o.get("/books/user/chongVIPList",t)}function p(t){return o.get("/books/user/chongVIP",t)}},"8d4f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAAABGdBTUEAALGPC/xhBQAAAy9JREFUWAntVk1oE0EUfm+TtinWFFHUKrSCPwcPXgpihSKCoKCXgiLqoZvVQlvJoVBQEDFKxYNBi5cWI5stgoeIeBAEf04qvfkD4q1opZ5qqdW2GiO7z7fibCdx0v1BwUMHwrz3zXvf+zIzOzMIIZuun2gnpA4EZxcArieiFYA4iQTvGX9YG4/fyeVyb8LQYtBgwzDaHKIsEez0y0HA25oGp03TfOsX644HEpFKpfocgsscHwtC+jvmC0LsiGXduO+X4ytC140LBHS2kggRJhh7wb8ZAlwNBDsAeGmkhoiOhnCQZ+SuBP9hLipC148fInAKchYXH9UQTzHxMxnPZDLx8fGJDo6/xPhGaWweoabNsq6/lrAys6qI3t7ehq/fimO88daIDC5+raWluY8LOgKr7NPpdHJ2bq7Ae2fvwhg+GbFM3sjqVlVEZyp1hqd4wEtDLIzkzcOev4jR39+/7OPU9CgvzzYRpmF8Xz6feyB8uddkR7Z5hx8VPq/tbH1dbVr4fn02m52PaXBSjnPA9vhk3LWVIvTu7g28DFu9YILC8PDwpOcHMNw9w9P8ygsl2u/ZFYZShFYqbZLjELVHsh/UJoTHUuzKnp6esq9HjClF8OA6EeD2jkYfZD+E7X7GXisWi02eIxlKETZAQorhIw2LZX5QpyLPicXqValKEarAf4ktiRCz6x1WnSnjngD5kGqWDxpA7Sn7n73xoMYiPHz1j1mW2edSxT0+ogOeXWmQ014JRfIlHr70nguOpT3xt2aixGfImPtuEIRR+kjL4RblCy6TXN6Q5Jt1c32ibhW/M25FEeDmLGzMEAz80royYuXPi5ShoaFPbB/jL6wJiHYLPGgfZSYIGxsvqgpooA2ocD8stAheinfW4OCMijiRqHmpwv2w0CKYMFaN1LbtqmPVclw8tAh+7LR0dXVtUZGWbHuPCvfDQotwCUs/7JvuO1Imd19jYDtXZSyoHUkE3yPbp6amz8lF6HvJJIC1MhbUjiiCZSA0lhUhSJb5IZzIIkLU8A39L0REOjF//TWCVt0wMuJvklP+OBZ4kD66CKBWLtwapIhfzH+xHEsixDL9BE/V6fMgEHGsAAAAAElFTkSuQmCC"},9821:function(t,e,n){t.exports=n.p+"static/img/ubg.e8c63fb7.png"},"9bab":function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("193f")),a=(n("2f62"),{data:function(){return{isSendClass:"",phone:"",vCode:"",loginType:"APPLETS_DEMANDER",loginTypeFlag:2,password:"",pass_visible:!1}},mounted:function(){},methods:{bindKeyInput:function(t){this.phone=t.detail.value},bindPasswordInput:function(t){this.password=t.detail.value},changePasswordVisble:function(){this.pass_visible=!this.pass_visible},formSubmit:function(){return uni.showLoading({title:"正在登录...",mask:!0}),console.log(this.phone,this.password),this.phone?this.password?void this.loginByPassword():(uni.showToast({icon:"none",title:"密码不能为空",duration:1500}),!1):(uni.showToast({icon:"none",title:"账号不能为空",duration:1500}),!1)},loginByPassword:function(){var t=this,e={userName:this.phone,password:this.password};o.login(e).then((function(e){uni.hideLoading(),uni.showToast({icon:"success",title:"登录成功",duration:1e3}),uni.setStorage("isAuth",!0),uni.setStorage("NameAuth",t.phone),t.$store.dispatch("updateToken",e.data).then((function(){}))}),(function(t){}))},toRegister:function(){uni.getStorage({key:"id",success:function(t){console.log(111);var e=t.data;uni.getStorage({key:"type",success:function(t){var n=t.data;uni.navigateTo({url:"/pages/register/register?id="+e+"&type="+n})}})},fail:function(){uni.navigateTo({url:"/pages/register/register"})}})}}});e.default=a},a48f:function(t,e,n){"use strict";var i=n("ba3d"),o=n.n(i);o.a},a9e8:function(t,e,n){"use strict";var i=n("f97a"),o=n.n(i);o.a},aeda:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAABGdBTUEAALGPC/xhBQAABDlJREFUSA2tll1oVEcUx927ya5NYqFZQmufxNL0O2oaigXxoWBBDDRQEtp8mE1IaYt9EBUUfFDrgyK0ggoFqfkkEVKoaGneSi2CpRqsoo2KQkHa0sVKRElwTbLr73/ZucxO7u1q2gP3nu/zn5l7ZubGFi2QxsfHyycmJpbm8/m5XC53p6ur60GpUsR6ionFYjkTGzNCKT44OPjK3Nzce8Q18rzIU0PBIJ+id7Gdx/Yz8gkGdBE9IIH39/cfg+fx9ZhBBAWCSEcYGBhoBPhzzKscVyn1EiCHKisrB5qbm/MF8HQhqam7u/uk5MgB9PX1rcT/FQNeXUhaEGMQv5F4gzpNKoC+hxXYLVkUOgDAP8F3kKTFftT/9HLBVdZvClMfwBjgR+Ga+TxwCuSJPeV5XjtybSqVerq8vPx55LU8+/HdNrVcjr9o5sZftAKAHwF4k3E6/GpZWdlGaNyxB+ro6GjV1NTUXmpsDowINjgxNfTEHWz+TggGAPgOEvfZiUYm+AwzbWxvb79nbFGcGh61fsK/RjE2+NDQ0NLZ2dnT2I6l0+kDvl8vHCtwnCM5Id0mgm8lk8k3W1tb/7HtYbLA7W4PAyemFvtDVvO1jo6Om2UqNDMz8zVsHngBZLsLzjJWT09P91BMWzMTj8dPUOzM44CrpibKhHcg9sRIWstJpiWbR5o9S7UMrubzqbe3tx79e4o8Z2zi2C5je6MgBw1nlh1frR2PnKWJazzAP3IctvqdDc7ME+jDLrgSwsAVr28eAq6U5OTk5Hptw3ppEXTdttPh9RR72bbZMoMLZi473T5L/HI7xpbxrdIAltlGW2a/T9o6cmQxF1x52LTV7kqOoCUeQbcinFrWGtvHgK7aupHDwOXjE8TxPWPiXE79ax6vK67D6PSH7oOAOjs7f0X5MTAgRIErJpvNvk79uB1vy2zF00zK+9Y22jLFN4yNjSWNjWL6ZH8b/d/AFUMDvm9iXU7uD5yqV7yKiopRlN/dAOkApjKZzKcF2T9kkD+UXgp8eHhYS/+ZYl0iV9t6j+wxvTgLuljuXskhdJ9VepvBbONJy18KXDEcx8eJ/0CyS+R/yZW8VXYt6SIOmz7YcckhtIRC+tNJy1cKnDjdBV9EgVPiF56dqiXyV0ACv1yVug8QX5UeRqXAOfVeosYhwN+NyL+YSCTeaWtrC7Z3MAAljIyMPEvnnqLAW24BG7xwvK7B9hefrgr+AvEbCsD+/RKSf5bfs6aWlpaif4aiASiJvfsUJ94QxYIODgGPOl5dXKMfrKur297Q0DBjDIb7PWAUcY7PLOy+sf0XcHIvcFOu4wd0Sxi4MIpWgFk/1n1uBhfBdfyeZecc5uD6hkFoy0VS0fdi71YxiBWKtmcunZnkaLBd2PWXrAupmtgU+hT8DwD/xHaeJjvJ/0MGWbtL7MmIHqjmzv/4ybIWHv0ILag6awj2bcEAAAAASUVORK5CYII="},b389:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAABGdBTUEAALGPC/xhBQAABDRJREFUSA3Flltok2cYx3Noa9rEoUJWN1nWqgOLq6zixmCjg11MyYV41VF6SBoPZV54YYUxJ6LgduUYDMbYmD3NGA2O4Q6Cu5gU2UWvSunK2PAQtHXRCx1oYpxt4+8J3/vx5sv7xfRqL7x5nuf/Pof/9x7j8fzPzbuc+qOjoxvw31ksFjcj11ldUtwCm/N6vX/U19f/0NvbOydgLe2ZBNLpdGM+n9+/tLQUJ+Grz0oKiSI+k8hvm5qaRru6uharxbgSoLA/l8sNEnyEr3uhWpIqY38y9lEikbjg5mMkkEqlXiwUCikKd7oFLgdnNpJ+v3+wv78/54yrIMA6dzLd53EMO50t+wlywufzXUHO0xsgGkG+h9yKNDZIzNbV1e3q6+u7qjuUEaD4WyS5RA/qTkonyalAIHC0u7v7tsJ0OTY21gH5k8S/q+NKJ36+oaGhs6en57qNKWVkZOQ19AmCn1OYkgQW6LF4PJ5WmJsk3suHnEAeNvmQJ8PsvR2LxWT2PD75oXiAgDOm4jJOUKKW4pZvcWBg4GP0L8R2Nmq0LC4uJpGl2nWWwyfINqezZZ+meMo5BulVJNnKuuZIOE3Rgu7T2to6lMlkZF9s0nFLf4f4g+gnvePj488vLCzcxFjhdOTL5UyvJ3lGjVnHU46mfGW9hd9D7ue4nVN+IoeHh99HnNUxTX8QCoVe8sFeznpFcctxUi8uGHfDhxQ/hqqKC7wGsikKlm0+CvzIWF4cDG0lF9ygrMN2w2AJotDv+pi1V47qmNLxhYNXltJu3IKPwKZswKFwYqJCwLRGJVeCncetnQG32fJAokOWSK8D9o9u6zr524SAa8OhUR9kw93XbYP+wHD3Bwx+Csr6YPi3spySsZd1jFfuGrZ9iehjokP4VyeG3WLAFDTpI+iysgyybH/gW2QWEsj/nL5gWbAhHedmXIft+oKS60sf7/dXOC3ogUpnBiJsvB3KFsmDMoHYRsGf6HfpGfqpYDC4hRMjJOzGCdtnGw6FmF94F6ZLbwHH52vGjc44zjQ3N78ejUYfO3JUNblfItwvsziFnI7k/JcPb5c/LqVNyHkdApT1rWjMQns2m/0GWfZwVThqACchxNfLf4CK4pbbB+pfk50Uxttg/BsOK7VctgrB75nmOLv8oQ0aFJasBfgChLcYhj08RIe42j9TYzYBAQh+EyHPccWLaAXcIcGn9LPshbsWVhLEvoKym36A+LLjq/z4iGPsk+PKFllGQAD2g/ypkDt9o9gubQn8LxLKRSVXcoSiLUi3lof0HtOjVkFAMrAcQdbwc5Ludcu4DHwKojG+fMYUYySgHK19cZgEuyBT1VfFaFL+mh+h8HfEy4wZW01JIdLGjHSRYQdE3kC6XeEPKfYz050Oh8MXazm6NRHQqSeTydWQ2QCRtci1FEMt3sTnFvfFjVqK6vmeAllFqPY3scGPAAAAAElFTkSuQmCC"},ba3d:function(t,e,n){var i=n("82b6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7146743e",i,!0,{sourceMap:!1,shadowMode:!1})},c6e0:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".my .ubg[data-v-10609038]{width:100%}.my .myTitle[data-v-10609038]{height:%?300?%;overflow:hidden}.my .container[data-v-10609038]{width:100%;height:%?300?%;position:absolute;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my .cu-list[data-v-10609038]{margin-top:%?30?%}",""]),t.exports=e},cd9d:function(t,e,n){"use strict";n.r(e);var i=n("78d1"),o=n("dd31");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("a9e8");var s,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"10609038",null,!1,i["a"],s);e["default"]=u.exports},dc1b:function(t,e,n){"use strict";n.r(e);var i=n("432f"),o=n("ee71");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("a48f");var s,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"5d3230e8",null,!1,i["a"],s);e["default"]=u.exports},dd31:function(t,e,n){"use strict";n.r(e);var i=n("31ac"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},e0a2:function(t,e,n){"use strict";n.r(e);var i=n("8097"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},e66a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var i="http://192.168.1.130:8082";e.baseUrl=i},ee71:function(t,e,n){"use strict";n.r(e);var i=n("9bab"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},f97a:function(t,e,n){var i=n("c6e0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("79d47cce",i,!0,{sourceMap:!1,shadowMode:!1})},fe0a:function(t,e,n){"use strict";n.r(e);var i=n("47c6"),o=n("e0a2");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var s,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"66d73ed8",null,!1,i["a"],s);e["default"]=u.exports}}]);