(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"0948":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"loginWrap"},[n("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!1}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("登录")])],2),n("v-uni-view",{staticClass:"loginContainer "},[n("v-uni-view",{staticClass:"wrap_logo"},[n("v-uni-image",{staticClass:"logo",attrs:{mode:"aspectFit",src:"/static/images/authlogo.png"}})],1),n("v-uni-view",{staticClass:"wrap_form"},[n("v-uni-view",{staticClass:"wrap_input"},[n("v-uni-view",{staticClass:"row border-half solid-bottom"},[n("v-uni-image",{staticClass:"icon",attrs:{mode:"aspectFit",src:"/static/images/account.png"}}),n("v-uni-input",{staticClass:"input_phone",attrs:{"placeholder-class":"phcolor",name:"phone","data-input":"input",placeholder:"请输入账号",bindconfirm:"input_confirm"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyInput.apply(void 0,arguments)}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),n("v-uni-view",{staticClass:"after"})],1),n("v-uni-view",{staticClass:"row border-half solid-bottom"},[n("v-uni-image",{staticClass:"icon",attrs:{mode:"aspectFit",src:"/static/images/password.png"}}),n("v-uni-input",{attrs:{"placeholder-class":"phcolor",name:"password",password:!t.pass_visible,placeholder:"请输入密码"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPasswordInput.apply(void 0,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t.pass_visible?n("v-uni-image",{staticClass:"icon eye",attrs:{mode:"aspectFit",src:"/static/images/visible.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePasswordVisble.apply(void 0,arguments)}}}):n("v-uni-image",{staticClass:"icon eye",attrs:{mode:"aspectFit",src:"/static/images/unvisible.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePasswordVisble.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"after"})],1)],1),t.phone.length>0&&t.vCode.length>0||t.phone.length>0&&t.password.length>0?n("v-uni-view",{staticClass:"wrap_submit"},[n("v-uni-button",{staticClass:"btn_submit btn_color",attrs:{type:"primary",formType:"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit()}}},[t._v("登录")])],1):n("v-uni-view",{staticClass:"wrap_submit"},[n("v-uni-button",{staticClass:"btn_submit btn_color_no",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[t._v("登录")])],1)],1),n("v-uni-view",{staticClass:"text-gray text-center margin-top-xl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRegister.apply(void 0,arguments)}}},[t._v("没有账户?去注册")])],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"193f":function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.login=a,e.logout=s,e.register=r,e.verifyUserName=u;var o=i(n("1bd8"));function a(t){return o.get("/books/user/login",t)}function s(t){return o.get("/books/user/quit",t)}function r(t){return o.put("/books/user/register",t)}function u(t){return o.get("/books/user/verifyUserName",t)}},"1bd8":function(t,e,n){"use strict";var i=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var o=n("e66a"),a=i(n("3dd7")),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},i={Accept:"application/json"};"POST"===n.method&&"form"===n.contentType&&(i["content-type"]="application/x-www-form-urlencoded");var s=a.default.getters["getToken"];return i["token"]=s||null,new Promise((function(s,r){wx.request({url:o.baseUrl+t,data:e,method:n.method||"POST",header:i,success:function(t){200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200),s(t.data)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):s(t.data)},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),r("网络请求失败，请稍后再试")},complete:function(t){var e="",n=t&&t.statusCode;switch(n){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=s;var r=function(t,e){return s(t,e,{method:"POST",contentType:"form"})};e.post=r;var u=function(t,e){return s(t,e,{method:"POST",contentType:"json"})};e.postJson=u;var c=function(t,e){return s(t,e,{method:"put",contentType:"json"})};e.put=c;var l=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),s(t,e,{method:"GET"})};e.get=l},"1fef":function(t,e,n){"use strict";var i=n("c83b"),o=n.n(i);o.a},"31ac":function(t,e,n){"use strict";var i=n("4a46"),o=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("f3f3")),s=n("2f62"),r=n("e66a"),u=i(n("8d07")),c=0,l=0,d=!0,v={data:function(){return{coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,userInfo:{}}},props:{fresh:{type:Boolean,default:!1}},computed:(0,a.default)({},(0,s.mapGetters)({getToken:"getToken",getUserInfo:"getUserInfo"}),{baseUrl:function(){return r.baseUrl}}),onShow:function(t){},mounted:function(){this.personalCenterList()},watch:{fresh:function(t){console.log(111),t&&this.personalCenterList()}},onNavigationBarButtonTap:function(t){var e=t.index;0===e?this.navTo("/pages/set/set"):1===e&&uni.navigateTo({url:"/pages/notice/notice"})},methods:{downLoad:function(){window.open("/static/xiaotanke.apk")},logout:function(){this.$store.dispatch("delToken","").then((function(){u.quit().then((function(t){uni.showToast({icon:"none",title:"退出成功",duration:1500})}),(function(t){}))}))},signAction:function(){var t=this;u.signIn().then((function(e){t.personalCenterList(),uni.showToast({icon:"none",title:"获得"+e.data.bookCurrency||!1,duration:1500})}),(function(t){}))},personalCenterList:function(){var t=this;uni.showLoading({mask:!0}),u.personalCenter().then((function(e){t.userInfo=e.data,t.$store.dispatch("updateUserInfo",t.userInfo),uni.stopPullDownRefresh(),t.$emit("freshAction")}),(function(t){}))},uploadImg:function(){var t=this;uni.chooseImage({count:1,sizeType:["original"],sourceType:["album","camera"],success:function(e){var n=e.tempFilePaths;uni.uploadFile({url:"http://47.244.209.81/books/uploadDownload/uploadImage",filePath:n[0],name:"file",header:{token:t.getToken},success:function(e){t.personalCenterList(),uni.showToast({icon:"none",title:"上传成功",duration:1500})}})}})},urlTobase64:function(t){uni.request({url:t,method:"GET",responseType:"arraybuffer",success:function(t){var e=wx.arrayBufferToBase64(t.data);e="data:image/jpeg;base64,"+e,console.log(e)}})},toNavigate:function(t){var e=t.currentTarget.dataset.url;uni.navigateTo({url:e})},navTo:function(t){this.hasLogin||(t="/pages/public/login"),uni.navigateTo({url:t})},coverTouchstart:function(t){!1!==d&&(this.coverTransition="transform .1s linear",c=t.touches[0].clientY)},coverTouchmove:function(t){l=t.touches[0].clientY;var e=l-c;e<0?this.moving=!1:(this.moving=!0,e>=80&&e<100&&(e=80),e>0&&e<=80&&(this.coverTransform="translateY(".concat(e,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}}};e.default=v},"38e1":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"/* pages/login/login.wxss */.loginWrap[data-v-2710e742]{background-color:#fff;min-height:calc(100vh - %?90?%)}.loginContainer[data-v-2710e742]{padding:%?75?% %?70?% %?42?%;height:100%;position:relative;box-sizing:border-box}.loginContainer .wrap_logo[data-v-2710e742]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;margin-bottom:%?70?%}.loginContainer .wrap_logo .logo[data-v-2710e742]{width:%?200?%;height:%?200?%}.loginContainer .wrap_text[data-v-2710e742]{text-align:center;color:#323232}.loginContainer .wrap_text .txt1[data-v-2710e742]{color:#323232;display:block;font-size:%?28?%;text-align:center}.txt2[data-v-2710e742]{width:%?91?%;height:%?34?%;border-radius:%?8?%;border:solid %?1?% #313131;font-size:%?24?%;line-height:%?34?%;color:#323232;float:left;margin-left:%?25?%}.loginContainer .wrap_form uni-input[data-v-2710e742],\n.loginContainer .wrap_form .pass_text[data-v-2710e742]{height:%?86?%;-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;padding:%?6?% %?15?%;font-size:%?28?%;line-height:%?86?%}.loginContainer .wrap_input .row[data-v-2710e742]{display:-webkit-box;display:-webkit-flex;display:flex;\n  /* border-bottom: 1px solid #D8D8D8; */\n  /* margin: 15rpx 0; */-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.loginContainer .wrap_input .row .icon[data-v-2710e742]{width:%?31?%;height:%?32?%}.loginContainer .wrap_input .row .icon.eye[data-v-2710e742]{float:right}.loginContainer .wrap_input .row .btn_mobileCode[data-v-2710e742]{-webkit-box-flex:0;-webkit-flex:0 0 %?200?%;flex:0 0 %?200?%;margin-left:%?10?%;line-height:%?86?%;font-size:%?32?%;background:transparent;color:#008ee3;text-align:right}.loginContainer .wrap_input .row .btn_mobileCode.isSendClass[data-v-2710e742]{color:#ddd}.loginContainer .wrap_submit[data-v-2710e742]{margin-top:%?45?%}.loginContainer .wrap_submit .btn_submit[data-v-2710e742]{background-blend-mode:normal,normal;width:%?600?%;height:%?86?%;line-height:%?86?%;font-size:%?32?%;padding:0\n  /* border-radius: 4rpx; */}.placeholder[data-v-2710e742]{font-size:%?32?%;color:#c2c2c2}.loginContainer .wrap_submit .btn_submit[data-v-2710e742]::after{border:none}.loginContainer .wrap_submit .btn_color[data-v-2710e742]{\n  /* background: #008EE3; */background-image:-webkit-linear-gradient(left,#1bb5ee,#008ee3),-webkit-linear-gradient(#000,#000);background-image:linear-gradient(90deg,#1bb5ee,#008ee3),linear-gradient(#000,#000)}.loginContainer .wrap_submit .btn_color_no[data-v-2710e742]{background-image:-webkit-linear-gradient(left,#d0d0d0,#d0d0d0),-webkit-linear-gradient(#000,#000);background-image:linear-gradient(90deg,#d0d0d0,#d0d0d0),linear-gradient(#000,#000);color:#fff}.loginContainer .web-v[data-v-2710e742]{margin-top:%?24?%;height:%?40?%;line-height:%?40?%;color:#b9c1c6;font-size:%?30?%;text-align:center}.loginContainer .web-s[data-v-2710e742]{color:#008ee3}.loginContainer .web-x[data-v-2710e742]{margin-top:%?24?%;height:%?40?%;line-height:%?40?%;color:#b9c1c6;font-size:%?28?%}.change-login[data-v-2710e742]{margin-top:%?35?%;font-size:%?30?%;color:#008ee3}.footer[data-v-2710e742]{font-size:%?24?%;position:absolute;bottom:%?30?%;text-align:center;width:100%;left:0;right:0;color:#606060}.agreement[data-v-2710e742]{color:#008ee3}.btn_color_register[data-v-2710e742]{width:%?224?%;font-size:%?30?%;height:%?86?%;line-height:%?86?%;color:#008ee3;border:1px solid #008ee3;background-color:#fff}",""]),t.exports=e},"3af4":function(t,e,n){"use strict";var i=n("aac2"),o=n.n(i);o.a},"47c6":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.getToken?n("userCom",{attrs:{fresh:t.fresh},on:{freshAction:function(e){arguments[0]=e=t.$handleEvent(e),t.freshAction.apply(void 0,arguments)}}}):n("loginCom")],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"565a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".my .ubg[data-v-7d981eaf]{width:100%}.my .myTitle[data-v-7d981eaf]{height:%?300?%;overflow:hidden}.my .container[data-v-7d981eaf]{width:100%;height:%?300?%;position:absolute;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my .cu-list[data-v-7d981eaf]{margin-top:%?30?%}",""]),t.exports=e},8097:function(t,e,n){"use strict";var i=n("4a46"),o=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("f3f3")),s=n("2f62"),r=o(n("dc1b")),u=o(n("cd9d")),c=(i(n("8d07")),{data:function(){return{fresh:!1}},components:{loginCom:r.default,userCom:u.default},computed:(0,a.default)({},(0,s.mapGetters)({getToken:"getToken"})),onPullDownRefresh:function(){this.fresh=!0},onLoad:function(t){},onShow:function(t){this.fresh=!0},mounted:function(){},methods:{freshAction:function(){this.fresh=!1}}});e.default=c},"8d07":function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getCode=a,e.getPromote=s,e.personalCenter=r,e.uploadImg=u,e.quit=c,e.signIn=l,e.recharge=d,e.chongBookCurrencyList=v,e.chongBookCurrency=f,e.chongVIPList=g,e.chongVIP=p,e.getCommissionList=h,e.getCommissionSum=b,e.show=m,e.noticeShow=w,e.getBalanceList=x;var o=i(n("1bd8"));function a(){return o.get("/books/promote/yards")}function s(t){return o.get("/books/promote/page",t)}function r(t){return o.get("/books/user/personalCenter",t)}function u(t){return o.post("/books/user/upload",t)}function c(t){return o.get("/books/user/quit",t)}function l(t){return o.get("/books/user/signIn",t)}function d(t){return o.get("/books/account/recharge",t)}function v(t){return o.get("/books/user/chongBookCurrencyList",t)}function f(t){return o.get("/books/user/chongBookCurrency",t)}function g(t){return o.get("/books/user/chongVIPList",t)}function p(t){return o.get("/books/user/chongVIP",t)}function h(t){return o.get("/books/account/getCommissionList",t)}function b(t){return o.get("/books/account/getCommissionSum",t)}function m(t){return o.get("/books/retailStore/show",t)}function w(t){return o.get("/books/article/show",t)}function x(t){return o.get("/books/user/getBalanceList",t)}},"9bab":function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("193f")),a=(n("2f62"),{data:function(){return{isSendClass:"",phone:"",vCode:"",loginType:"APPLETS_DEMANDER",loginTypeFlag:2,password:"",pass_visible:!1}},mounted:function(){},methods:{bindKeyInput:function(t){this.phone=t.detail.value},bindPasswordInput:function(t){this.password=t.detail.value},changePasswordVisble:function(){this.pass_visible=!this.pass_visible},formSubmit:function(){return uni.showLoading({title:"正在登录...",mask:!0}),console.log(this.phone,this.password),this.phone?this.password?void this.loginByPassword():(uni.showToast({icon:"none",title:"密码不能为空",duration:1500}),!1):(uni.showToast({icon:"none",title:"账号不能为空",duration:1500}),!1)},loginByPassword:function(){var t=this,e={userName:this.phone,password:this.password};o.login(e).then((function(e){uni.hideLoading(),uni.showToast({icon:"success",title:"登录成功",duration:1e3}),uni.setStorage("isAuth",!0),uni.setStorage("NameAuth",t.phone),t.$store.dispatch("updateToken",e.data).then((function(){}))}),(function(t){}))},toRegister:function(){uni.getStorage({key:"id",success:function(t){console.log(111);var e=t.data;uni.getStorage({key:"type",success:function(t){var n=t.data;uni.navigateTo({url:"/pages/register/register?id="+e+"&type="+n})}})},fail:function(){uni.navigateTo({url:"/pages/register/register"})}})}}});e.default=a},aac2:function(t,e,n){var i=n("38e1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("046f93ea",i,!0,{sourceMap:!1,shadowMode:!1})},c6cc:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"my"},[n("v-uni-view",{staticClass:"myTitle"},[n("v-uni-image",{staticClass:"ubg",attrs:{src:"/static/images/ubg.png",mode:""}}),n("v-uni-view",{staticClass:"container flex  p-xs margin-bottom-sm mb-sm"},[n("v-uni-view",{staticClass:"flex-sub text-white margin-xs radius"},[n("v-uni-view",{staticClass:"cu-avatar round xl margin-left",style:[{backgroundImage:"url("+t.baseUrl+t.userInfo.portrait+")"}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadImg.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-tag badge bg-pink",class:t.userInfo.isVip?"bg-gradual-pink":"bg-grey"},[t._v("VIP")])],1)],1),n("v-uni-view",{staticClass:"flex-twice text-white margin-xs radius",staticStyle:{fontSize:"28rpx"}},[n("v-uni-view",{staticClass:"title"},[t._v("账号："+t._s(t.userInfo.userName))]),n("v-uni-view",{staticClass:"text"},[t.userInfo.isVip?n("span",{staticClass:"title"},[t._v("VIP开始时间："+t._s(t.userInfo.startTime))]):t._e(),t.userInfo.isVip?n("span",{staticStyle:{display:"block"}},[t._v("VIP到期时间："+t._s(t.userInfo.endTime))]):t._e()])],1),n("v-uni-view",{staticClass:"flex-sub text-white margin-xs radius"},[n("v-uni-view",{staticClass:"action margin-bottom"},[n("v-uni-button",{staticClass:"cu-btn round bg-white text-blue text-sm"},[t._v("申请提现")])],1),n("v-uni-view",{staticClass:"action"},[t.userInfo.isSignIn?n("v-uni-button",{staticClass:"cu-btn round bg-white text-blue text-sm",staticStyle:{padding:"0 44rpx"}},[t._v("已签到")]):n("v-uni-button",{staticClass:"cu-btn round bg-white text-blue text-sm",staticStyle:{padding:"0 54rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.signAction.apply(void 0,arguments)}}},[t._v("签到")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"bg-white grid col-3 padding bookWrap"},[n("v-uni-view",{staticClass:"text-center solids-right"},[n("v-uni-text",[t._v("书币余额")])],1),n("v-uni-view",{staticClass:"text-center"},[n("v-uni-text",[t._v("账户余额")])],1),n("v-uni-view",{staticClass:"text-center"},[n("v-uni-text",[t._v("佣金总数")])],1),n("v-uni-view",{staticClass:"text-center solids-right"},[n("v-uni-text",{staticClass:"text-orange text-xxl"},[t._v(t._s(t.userInfo.bookCurrency||0))])],1),n("v-uni-view",{staticClass:"text-center solids-right"},[n("v-uni-text",{staticClass:"text-orange text-xxl"},[t._v(t._s(t.userInfo.balance||0))])],1),n("v-uni-view",{staticClass:"text-center text-lg"},[n("v-uni-text",{staticClass:"text-orange text-xxl"},[t._v(t._s(t.userInfo.commission||0))])],1)],1),n("v-uni-view",{staticClass:"cu-list menu"},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-my text-grey"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("我的账户")])],1),n("div",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn round lines-orange text-sm margin-right-xs",attrs:{"data-url":"/pages/user/charge/charge"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[t._v("购买书币")]),n("v-uni-button",{staticClass:"cu-btn round lines-orange text-sm",attrs:{"data-url":"/pages/user/chargeMoney/chargeMoney"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[t._v("立即充值")])],1)],1)],1),n("v-uni-view",{staticClass:"cu-list menu"},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-text text-orange"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("咨询,代理,待充值QQ")])],1),n("v-uni-view",{staticClass:"action text-grey text-sm"},[n("v-uni-text",[t._v("12345678")])],1)],1)],1),n("v-uni-view",{staticClass:"cu-list menu margin-top"},[n("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-url":"/pages/user/notice/notice"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"cu-btn content",attrs:{"open-type":"contact"}},[n("v-uni-text",{staticClass:"cuIcon-moneybag text-olive"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("推广赚钱")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-url":"/pages/user/myPromote/myPromote"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-friend text-pink"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("推广用户")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-url":"/pages/user/myCode/myCode"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-qrcode text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("推广二维码")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-url":"/pages/user/noticeShow/noticeShow"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-mark text-yellow"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("我的消息")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-url":"/pages/user/bill/bill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-form text-cyan"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("账户明细")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",attrs:{"data-url":"/pages/user/commission/commission"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNavigate.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-recharge text-pink"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("佣金列表")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downLoad.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-down text-blue"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("下载")])],1)],1)],1),n("v-uni-view",{staticClass:"cu-list menu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-item arrow"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-expressman text-mauve"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("退出")])],1)],1)],1),n("v-uni-view",{staticClass:"cu-list menu"})],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},c83b:function(t,e,n){var i=n("565a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("6dad0a44",i,!0,{sourceMap:!1,shadowMode:!1})},cd9d:function(t,e,n){"use strict";n.r(e);var i=n("c6cc"),o=n("dd31");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("1fef");var s,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7d981eaf",null,!1,i["a"],s);e["default"]=u.exports},dc1b:function(t,e,n){"use strict";n.r(e);var i=n("0948"),o=n("ee71");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("3af4");var s,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"2710e742",null,!1,i["a"],s);e["default"]=u.exports},dd31:function(t,e,n){"use strict";n.r(e);var i=n("31ac"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},e0a2:function(t,e,n){"use strict";n.r(e);var i=n("8097"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},e66a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var i="http://47.244.209.81";e.baseUrl=i},ee71:function(t,e,n){"use strict";n.r(e);var i=n("9bab"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},fe0a:function(t,e,n){"use strict";n.r(e);var i=n("47c6"),o=n("e0a2");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var s,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"66d73ed8",null,!1,i["a"],s);e["default"]=u.exports}}]);