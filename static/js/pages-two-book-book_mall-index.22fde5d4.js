(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-book-book_mall-index"],{"1bd8":function(e,t,n){"use strict";var r=n("ee27");n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.get=t.put=t.postJson=t.post=t.request=void 0;var i=n("e66a"),a=r(n("3dd7")),o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},r={Accept:"application/json"},o=a.default.getters["getToken"];return r["token"]=o||null,new Promise((function(o,s){wx.request({url:i.baseUrl+e,data:t,method:n.method||"POST",header:r,success:function(e){console.log(e,"res",e.data.code,e.data.desc),200!==e.data.code?-1===e.data.code?(a.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200)):setTimeout((function(){uni.showToast({icon:"none",title:e.data.desc,duration:1500})}),200):(console.log(e,"2222"),o(e.data))},fail:function(e){return uni.stopPullDownRefresh(),uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500}),s("网络请求失败，请稍后再试")},complete:function(e){var t="",n=e&&e.statusCode;switch(n){case 400:t="错误请求",uni.showToast({icon:"none",title:t,duration:1500});break;case 401:t="未授权，请重新登录",uni.showToast({icon:"none",title:t,duration:1500});break;case 403:t="拒绝访问",uni.showToast({icon:"none",title:t,duration:1500});break;case 404:t="请求错误,未找到该资源",uni.showToast({icon:"none",title:t,duration:1500});break;case 405:t="请求方法未允许",uni.showToast({icon:"none",title:t,duration:1500});break;case 408:t="请求超时",uni.showToast({icon:"none",title:t,duration:1500});break;case 500:t="服务器端出错",uni.showToast({icon:"none",title:t,duration:1500});break;case 501:t="网络未实现",uni.showToast({icon:"none",title:t,duration:1500});break;case 502:t="网络错误",uni.showToast({icon:"none",title:t,duration:1500});break;case 503:t="服务不可用",uni.showToast({icon:"none",title:t,duration:1500});break;case 504:t="网络超时",uni.showToast({icon:"none",title:t,duration:1500});break;case 505:t="http版本不支持该请求",uni.showToast({icon:"none",title:t,duration:1500});break}uni.hideLoading()}})}))};t.request=o;var s=function(e,t){return o(e,t,{method:"POST",contentType:"json"})};t.post=s;var u=function(e,t){return o(e,t,{method:"POST",contentType:"form"})};t.postJson=u;var c=function(e,t){return o(e,t,{method:"put",contentType:"json"})};t.put=c;var d=function(e,t){return t||(t={}),t.timestamp=(new Date).getTime(),o(e,t,{method:"GET"})};t.get=d},"41e2":function(e,t,n){"use strict";var r=n("ee27");n("caad"),n("c975"),n("ac1f"),n("2532"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=r(n("c964")),a={GetBookListData:function(){return(0,i.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t=uni.getStorageSync("bookshelf_list"),!t){e.next=4;break}return e.abrupt("return",t);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e["catch"](0),e.abrupt("return","");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},AddBookListData:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.GetBookListData();case 2:if(r=n.sent,""!=r&&null!=r&&void 0!=r){n.next=10;break}return i=[],i.push(e),n.next=8,t.AddBookListStorage(i);case 8:n.next=17;break;case 10:return n.next=12,t.GetBookListID(e.id);case 12:if(a=n.sent,0!=a){n.next=17;break}return r.push(e),n.next=17,t.AddBookListStorage(r);case 17:case"end":return n.stop()}}),n)})))()},UpBookListData:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.GetBookListData();case 2:if(r=n.sent,""!=r&&null!=r&&void 0!=r){n.next=7;break}console.log("书架没有内容"),n.next=12;break;case 7:for(i=!1,a=0;a<r.length;a++)r[a].id==e.id&&(r[a].news=e.news,r[a].page=e.page,r[a].index=e.index,r[a].name=e.name,i=!0);if(!i){n.next=12;break}return n.next=12,t.AddBookListStorage(r);case 12:case"end":return n.stop()}}),n)})))()},AddBookListStorage:function(e){return(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{uni.setStorageSync("bookshelf_list",e)}catch(n){}case 1:case"end":return t.stop()}}),t)})))()},GetBookListID:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.GetBookListData();case 2:if(r=n.sent,""!=r&&null!=r&&void 0!=r){n.next=7;break}return n.abrupt("return",!1);case 7:for(i=!1,a=0;a<r.length;a++)r[a].id==e&&(i=!0);return n.abrupt("return",i);case 10:case"end":return n.stop()}}),n)})))()},DelBookList:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.GetBookListData();case 2:if(r=n.sent,""!=r&&null!=r&&void 0!=r){n.next=7;break}return n.abrupt("return",!1);case 7:for(i=[],a=0;a<r.length;a++)0==e.includes(r[a].id)&&i.push(r[a]);return n.next=11,t.AddBookListStorage(i);case 11:case"end":return n.stop()}}),n)})))()},clearStorage:function(){return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{uni.setStorageSync("bookshelf_list",""),uni.clearStorageSync()}catch(t){}case 1:case"end":return e.stop()}}),e)})))()},GetReadContentData:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading({title:"处理中..."}),n.next=3,t.GetInterceptTheSpecifiedString(e,'<div id="book_text">','<div id="ali"></div>');case 3:return r=n.sent,uni.hideLoading(),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()},DetailsData:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,i,a,o,s,u,c,d,l,f,p,h,g,v,k,b,m,x,w,S,T;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading({title:"处理中..."}),r={},n.next=4,t.GetInterceptTheSpecifiedString(e,'<div id="maininfo">','<div class="ob-first"></div></div>');case 4:return i=n.sent,n.next=7,t.GetInterceptTheSpecifiedString(i,'<div class="img"><img src="','" width="200" height="240" alt="');case 7:return a=n.sent,n.next=10,t.GetInterceptTheSpecifiedString(i,"<h1>","</h1>");case 10:return o=n.sent,n.next=13,t.GetInterceptTheSpecifiedString(i,"<h3>作者：","</h3>");case 13:return s=n.sent,n.next=16,t.GetInterceptTheSpecifiedString(i,"<p>所属类型：","</p>");case 16:return u=n.sent,n.next=19,t.GetInterceptTheSpecifiedString(i,"<p>连载完成：","</p>");case 19:return c=n.sent,n.next=22,t.GetInterceptTheSpecifiedString(i,'<p class="s">更新时间：',"</p>");case 22:return d=n.sent,n.next=25,t.GetInterceptTheSpecifiedString(i,'target="_blank">',"</a></span>");case 25:return l=n.sent,n.next=28,t.GetInterceptTheSpecifiedString(i,'<div id="intro">',"</div>");case 28:return f=n.sent,n.next=31,t.GetInterceptTheSpecifiedString(f,"<p>","</p>");case 31:return p=n.sent,h={img:a,name:o,author:s,sort:u,intro:p,state:c,time:d,news:l},r.data=h,n.next=36,t.GetInterceptTheSpecifiedString(e,'<div class="article_texttitleb">','<div class="tags"><b>');case 36:return g=n.sent,n.next=39,t.GetInterceptTheSpecifiedString(g,"<ul>","</ul>");case 39:v=n.sent,k=v.split("</li>"),b=[],m=0;case 43:if(!(m<k.length)){n.next=60;break}if(!k[m]){n.next=57;break}return n.next=47,t.GetInterceptTheSpecifiedString(k[m],'<a href="/dingdian/','">');case 47:if(x=n.sent,!x){n.next=57;break}return n.next=51,t.GetInterceptTheSpecifiedString(x,"/",".html");case 51:return w=n.sent,n.next=54,t.GetInterceptTheSpecifiedString(k[m],'.html">',"</a>");case 54:S=n.sent,T={id:w,name:S},b.push(T);case 57:m++,n.next=43;break;case 60:return r.list=b,uni.hideLoading(),n.abrupt("return",r);case 63:case"end":return n.stop()}}),n)})))()},searchData:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,i,a,o,s,u,c,d,l,f,p,h,g;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading({title:"处理中..."}),n.next=3,t.GetInterceptTheSpecifiedString(e,'<ul id="BookList" class="nr">',"</ul>");case 3:r=n.sent,i=r.split("</li>"),a=[],o=0;case 7:if(!(o<i.length)){n.next=40;break}if(!i[o]){n.next=37;break}return n.next=11,t.GetInterceptTheSpecifiedString(i[o],'<div class="pic"><a href="/dingdian/','/"  target=');case 11:if(s=n.sent,!s){n.next=37;break}return n.next=15,t.GetInterceptTheSpecifiedString(i[o],'<img src="','" ></a>');case 15:return u=n.sent,n.next=18,t.GetInterceptTheSpecifiedString(i[o],'<div class="nrrk">','<div class="num"></div>');case 18:return c=n.sent,n.next=21,t.GetInterceptTheSpecifiedString(c,'"  target="_blank">',"</a></strong>");case 21:return d=n.sent,n.next=24,t.GetInterceptTheSpecifiedString(c,"<span>作者：","</span></div>");case 24:return l=n.sent,n.next=27,t.GetInterceptTheSpecifiedString(c,"<span>类别：","</span><span>");case 27:return f=n.sent,n.next=30,t.GetInterceptTheSpecifiedString(i[o],'<div class="num"></div>'," <dl><dt>");case 30:return p=n.sent,n.next=33,t.GetInterceptTheSpecifiedString(p,"<p>","</p>");case 33:h=n.sent,g={id:s,img:u,name:d,author:l,sort:f,introduce:h},console.log(g),a.push(g);case 37:o++,n.next=7;break;case 40:return uni.hideLoading(),n.abrupt("return",a);case 42:case"end":return n.stop()}}),n)})))()},GetInterceptTheSpecifiedString:function(e,t,n){return(0,i.default)(regeneratorRuntime.mark((function r(){var i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(""!=e&&null!=e&&void 0!=e){r.next=2;break}return r.abrupt("return","");case 2:if(!(e.indexOf(t)<0)){r.next=4;break}return r.abrupt("return","");case 4:return i=e.substring(e.indexOf(t)+t.length,e.length),a=i.substring(0,i.indexOf(n)),r.abrupt("return",a);case 7:case"end":return r.stop()}}),r)})))()},strLeng:function(e){if(e){for(var t=e.length,n=0,r=0;r<t;r++)e.charCodeAt(r)>128?n+=2:n+=1;return n}return 0}},o=a;t.default=o},"586b":function(e,t,n){"use strict";n.r(t);var r=n("e839"),i=n("e227");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("8a93");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"f8269e3a",null,!1,r["a"],o);t["default"]=u.exports},"6b98":function(e,t,n){"use strict";var r=n("4a46"),i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("41e2")),o=r(n("bd98")),s=(n("2f62"),{data:function(){return{key:"",listData:[]}},onLoad:function(){},methods:{searchKey:function(e){this.key=e.detail.value},searchBtn:function(){var e=this;if(this.key){this.listData=[];var t={name:this.key};uni.showLoading({mask:!0}),console.log(1111,t),o.getBookStyle(t).then((function(t){console.log(333);var n=t.data.list||[];n.length<1?uni.showToast({icon:"none",title:"没有搜索到相关漫画",duration:1500}):e.listData=n}),(function(e){console.log(444)}))}},GetSearchData:function(e){var t=this;a.default.searchData(e).then((function(e){console.log(e,888),t.listData=e}))},details:function(e){uni.navigateTo({url:"/pages/two/book/bookDetail/bookDetail?comicId="+e})}}});t.default=s},"8a93":function(e,t,n){"use strict";var r=n("dc67"),i=n.n(r);i.a},9734:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".cu-bar .search-form[data-v-f8269e3a]{background-color:#fff}",""]),e.exports=t},bd98:function(e,t,n){"use strict";var r=n("4a46");Object.defineProperty(t,"__esModule",{value:!0}),t.getbookPage=a,t.getbookDetail=o,t.getbookType=s,t.categoryPageList=u,t.getBookStyle=c,t.episodesContent=d,t.getCommentPage=l,t.getSendPage=f,t.categoryList=p,t.bookCollect=h,t.bookLike=g,t.comment=v;var i=r(n("1bd8"));function a(){return i.get("/books/book/homePage")}function o(e){return i.get("/books/book/details",e)}function s(e){return i.get("/books/book/homePageList",e)}function u(e){return i.get("/books/book/categoryPageList",e)}function c(e){return i.get("/books/book/page",e)}function d(e){return i.get("/books/book/episodesContent",e)}function l(e){return i.get("/books/book/commentList",e)}function f(e){return i.get("/books/book/userSendList",e)}function p(e){return i.get("/books/book/categoryList",e)}function h(e){return i.get("/books/book/bookCollect",e)}function g(e){return i.get("/books/book/bookLike",e)}function v(e){return i.get("/books/book/comment",e)}},dc67:function(e,t,n){var r=n("9734");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("79d9a57a",r,!0,{sourceMap:!1,shadowMode:!1})},e227:function(e,t,n){"use strict";n.r(t);var r=n("6b98"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},e66a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.baseUrl=void 0;var r="http://47.244.209.81";t.baseUrl=r},e839:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-pink",headerStatus:!0,isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[e._v("返回")])],2),n("v-uni-view",{staticClass:"cu-bar search margin-top-xl"},[n("v-uni-view",{staticClass:"search-form round bg-white"},[n("v-uni-text",{staticClass:"cuIcon-search"}),n("v-uni-input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索小说","confirm-type":"search"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.searchKey.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.searchBtn.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.searchBtn.apply(void 0,arguments)}}},[e._v("搜索")])],1)],1),e.listData.length>0?n("v-uni-view",{staticClass:"cu-bar solid-bottom"},[n("v-uni-view",{staticClass:"action"},[e._v("搜索结果")])],1):e._e(),e.listData.length>0?n("v-uni-view",{staticClass:"cu-list menu-avatar"},e._l(e.listData,(function(t,r){return n("v-uni-view",{key:r,staticClass:"cu-item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.details(t.id)}}},[n("v-uni-image",{staticClass:"cu-avatar radius lg",attrs:{src:t.coverPic,mode:"widthFix","lazy-load":!0}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"text-cut"},[e._v(e._s(t.title))]),n("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[e._v(e._s(t.author))])],1),n("v-uni-view",{staticClass:"text-gray text-sm flex"},[n("v-uni-view",{staticClass:"text-cut"},[e._v(e._s(t.summary))])],1)],1)],1)})),1):e._e()],1)},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);