(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"193f":function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.login=a,e.logout=s,e.register=r,e.verifyUserName=d;var o=i(n("1bd8"));function a(t){return o.get("/books/user/login",t)}function s(t){return o.get("/books/user/quit",t)}function r(t){return o.put("/books/user/register",t)}function d(t){return o.get("/books/user/verifyUserName",t)}},"1bd8":function(t,e,n){"use strict";var i=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var o=n("e66a"),a=i(n("3dd7")),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},i={Accept:"application/json"};"POST"===n.method&&"form"===n.contentType&&(i["content-type"]="application/x-www-form-urlencoded");var s=a.default.getters["getToken"];return i["token"]=s||null,new Promise((function(s,r){wx.request({url:o.baseUrl+t,data:e,method:n.method||"POST",header:i,success:function(t){200!==t.data.code?-1===t.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200),s(t.data)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):s(t.data)},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),r("网络请求失败，请稍后再试")},complete:function(t){var e="",n=t&&t.statusCode;switch(n){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=s;var r=function(t,e){return s(t,e,{method:"POST",contentType:"form"})};e.post=r;var d=function(t,e){return s(t,e,{method:"POST",contentType:"json"})};e.postJson=d;var u=function(t,e){return s(t,e,{method:"put",contentType:"json"})};e.put=u;var c=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),s(t,e,{method:"GET"})};e.get=c},"8cf7":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"/* pages/login/login.wxss */.loginWrap[data-v-14940d34]{background-color:#fff;min-height:calc(100vh - %?0?%)}.loginContainer[data-v-14940d34]{padding:%?75?% %?70?% %?42?%;height:100%;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.loginContainer .wrap_logo[data-v-14940d34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;margin-bottom:%?70?%}.loginContainer .wrap_logo .logo[data-v-14940d34]{width:%?200?%;height:%?200?%}.loginContainer .wrap_text[data-v-14940d34]{text-align:center;color:#323232}.loginContainer .wrap_text .txt1[data-v-14940d34]{color:#323232;display:block;font-size:%?28?%;text-align:center}.txt2[data-v-14940d34]{width:%?91?%;height:%?34?%;border-radius:%?8?%;border:solid %?1?% #313131;font-size:%?24?%;line-height:%?34?%;color:#323232;float:left;margin-left:%?25?%}.loginContainer .wrap_form uni-input[data-v-14940d34],\n.loginContainer .wrap_form .pass_text[data-v-14940d34]{height:%?86?%;-webkit-box-flex:1;-webkit-flex:1 1;flex:1 1;padding:0 %?15?%;font-size:%?28?%;line-height:%?86?%}.loginContainer .wrap_input .row[data-v-14940d34]{display:-webkit-box;display:-webkit-flex;display:flex;\n  /* border-bottom: 1px solid #D8D8D8; */\n  /* margin: 15rpx 0; */-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.loginContainer .wrap_input .row .icon[data-v-14940d34]{width:%?31?%;height:%?32?%}.loginContainer .wrap_input .row .icon.eye[data-v-14940d34]{float:right}.loginContainer .wrap_input .row .btn_mobileCode[data-v-14940d34]{-webkit-box-flex:0;-webkit-flex:0 0 %?200?%;flex:0 0 %?200?%;margin-left:%?10?%;line-height:%?86?%;font-size:%?32?%;background:transparent;color:#008ee3;text-align:right}.loginContainer .wrap_input .row .btn_mobileCode.isSendClass[data-v-14940d34]{color:#ddd}.loginContainer .wrap_submit[data-v-14940d34]{margin-top:%?45?%}.loginContainer .wrap_submit .btn_submit[data-v-14940d34]{background-blend-mode:normal,normal;width:%?600?%;height:%?86?%;line-height:%?86?%;font-size:%?32?%;padding:0\n  /* border-radius: 4rpx; */}.placeholder[data-v-14940d34]{font-size:%?32?%;color:#c2c2c2}.loginContainer .wrap_submit .btn_submit[data-v-14940d34]::after{border:none}.loginContainer .wrap_submit .btn_color[data-v-14940d34]{\n  /* background: #008EE3; */background-image:-webkit-gradient(linear,left top,right top,from(#1bb5ee),to(#008ee3)),-webkit-gradient(linear,left top,left bottom,from(#000),to(#000));background-image:-webkit-linear-gradient(left,#1bb5ee,#008ee3),-webkit-linear-gradient(#000,#000);background-image:linear-gradient(90deg,#1bb5ee,#008ee3),linear-gradient(#000,#000)}.loginContainer .wrap_submit .btn_color_no[data-v-14940d34]{background-image:-webkit-gradient(linear,left top,right top,from(#d0d0d0),to(#d0d0d0)),-webkit-gradient(linear,left top,left bottom,from(#000),to(#000));background-image:-webkit-linear-gradient(left,#d0d0d0,#d0d0d0),-webkit-linear-gradient(#000,#000);background-image:linear-gradient(90deg,#d0d0d0,#d0d0d0),linear-gradient(#000,#000);color:#fff}.loginContainer .web-v[data-v-14940d34]{margin-top:%?24?%;height:%?40?%;line-height:%?40?%;color:#b9c1c6;font-size:%?30?%;text-align:center}.loginContainer .web-s[data-v-14940d34]{color:#008ee3}.loginContainer .web-x[data-v-14940d34]{margin-top:%?24?%;height:%?40?%;line-height:%?40?%;color:#b9c1c6;font-size:%?28?%}.change-login[data-v-14940d34]{margin-top:%?35?%;font-size:%?30?%;color:#008ee3}.footer[data-v-14940d34]{font-size:%?24?%;position:absolute;bottom:%?30?%;text-align:center;width:100%;left:0;right:0;color:#606060}.agreement[data-v-14940d34]{color:#008ee3}.btn_color_register[data-v-14940d34]{width:%?224?%;font-size:%?30?%;height:%?86?%;line-height:%?86?%;color:#008ee3;border:1px solid #008ee3;background-color:#fff}",""]),t.exports=e},a525:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"loginWrap"},[n("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!1}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("注册")])],2),n("v-uni-view",{staticClass:"loginContainer "},[n("v-uni-view",{staticClass:"wrap_logo"},[n("v-uni-image",{staticClass:"logo",attrs:{mode:"aspectFit",src:"/static/images/authlogo.png"}})],1),n("v-uni-view",{staticClass:"wrap_form"},[n("v-uni-view",{staticClass:"wrap_input"},[n("v-uni-view",{staticClass:"row border-half solid-bottom"},[n("v-uni-image",{staticClass:"icon",attrs:{mode:"aspectFit",src:"/static/images/account.png"}}),n("v-uni-input",{staticClass:"input_phone",attrs:{"placeholder-class":"phcolor",name:"phone","data-input":"input",placeholder:"请输入账号",bindconfirm:"input_confirm"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyInput.apply(void 0,arguments)}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),n("v-uni-view",{staticClass:"after"})],1),n("v-uni-view",{staticClass:"row border-half solid-bottom"},[n("v-uni-image",{staticClass:"icon",attrs:{mode:"aspectFit",src:"/static/images/password.png"}}),n("v-uni-input",{attrs:{"placeholder-class":"phcolor",name:"password",password:!t.pass_visible,placeholder:"请输入密码"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPasswordInput.apply(void 0,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t.pass_visible?n("v-uni-image",{staticClass:"icon eye",attrs:{mode:"aspectFit",src:"/static/images/visible.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePasswordVisble.apply(void 0,arguments)}}}):n("v-uni-image",{staticClass:"icon eye",attrs:{mode:"aspectFit",src:"/static/images/unvisible.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePasswordVisble.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"after"})],1)],1),t.phone.length>0&&t.vCode.length>0||t.phone.length>0&&t.password.length>0?n("v-uni-view",{staticClass:"wrap_submit"},[n("v-uni-button",{staticClass:"btn_submit btn_color",attrs:{type:"primary",formType:"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[t._v("注册")])],1):n("v-uni-view",{staticClass:"wrap_submit"},[n("v-uni-button",{staticClass:"btn_submit btn_color_no"},[t._v("注册")])],1)],1),n("v-uni-view",{staticClass:"text-gray text-center margin-top-xl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("有账户?去登录")])],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},b276:function(t,e,n){"use strict";n.r(e);var i=n("a525"),o=n("d84f");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("b2a2");var s,r=n("f0c5"),d=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"14940d34",null,!1,i["a"],s);e["default"]=d.exports},b2a2:function(t,e,n){"use strict";var i=n("ffe6"),o=n.n(i);o.a},c759:function(t,e,n){"use strict";var i=n("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("193f")),a={data:function(){return{isSendClass:"",btnText:"获取验证码",phone:"",vCode:"",loginType:"APPLETS_DEMANDER",loginTypeFlag:2,password:"",id:null,type:null,pass_visible:!1}},onLoad:function(t){uni.setStorage({key:"id",data:t.id,success:function(){}}),uni.setStorage({key:"type",data:t.type,success:function(){}}),this.id=t.id,this.type=t.type},methods:{bindKeyInput:function(t){this.phone=t.detail.value},bindPasswordInput:function(t){this.password=t.detail.value},changePasswordVisble:function(){this.pass_visible=!this.pass_visible},formSubmit:function(){return uni.showLoading({title:"正在注册...",mask:!0}),console.log(this.phone,this.password),this.phone?this.password?void this.loginByPassword():(uni.showToast({icon:"none",title:"密码不能为空",duration:1500}),!1):(uni.showToast({icon:"none",title:"账号不能为空",duration:1500}),!1)},loginByPassword:function(){var t=this,e={userName:this.phone,password:this.password,id:this.id,type:this.type};o.register(e).then((function(e){uni.hideLoading(),uni.showToast({icon:"success",title:"注册成功",duration:1e3}),setTimeout((function(){uni.switchTab({url:"/pages/user/user?id="+t.id+"&type="+t.type})}),1e3)}),(function(t){}))},toLogin:function(){uni.switchTab({url:"/pages/user/user?id="+this.id+"&type="+this.type})}}};e.default=a},d84f:function(t,e,n){"use strict";n.r(e);var i=n("c759"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},e66a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var i="http://47.244.209.81";e.baseUrl=i},ffe6:function(t,e,n){var i=n("8cf7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("6559d6bc",i,!0,{sourceMap:!1,shadowMode:!1})}}]);