(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-book-bookDetail-bookDetail"],{"1bd8":function(t,e,o){"use strict";var a=o("ee27");o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.put=e.postJson=e.post=e.request=void 0;var i=o("e66a"),n=a(o("3dd7")),s=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"POST",contentType:"form"},a={Accept:"application/json"};"POST"===o.method&&"form"===o.contentType&&(a["content-type"]="application/x-www-form-urlencoded");var s=n.default.getters["getToken"];return a["token"]=s||null,new Promise((function(s,c){wx.request({url:i.baseUrl+t,data:e,method:o.method||"POST",header:a,success:function(t){200!==t.data.code?-1===t.data.code?(n.default.dispatch("delToken",""),setTimeout((function(){uni.showToast({icon:"none",title:"未登录",duration:1500})}),200),s(t.data)):setTimeout((function(){uni.showToast({icon:"none",title:t.data.desc,duration:1500})}),500):s(t.data)},fail:function(t){return uni.stopPullDownRefresh(),setTimeout((function(){uni.showToast({icon:"none",title:"网络请求失败，请稍后再试",duration:1500})}),500),c("网络请求失败，请稍后再试")},complete:function(t){var e="",o=t&&t.statusCode;switch(o){case 400:e="错误请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 401:e="未授权，请重新登录",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 403:e="拒绝访问",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 404:e="请求错误,未找到该资源",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 405:e="请求方法未允许",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 408:e="请求超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 500:e="服务器端出错",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 501:e="网络未实现",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 502:e="网络错误",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 503:e="服务不可用",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 504:e="网络超时",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break;case 505:e="http版本不支持该请求",setTimeout((function(){uni.showToast({icon:"none",title:e,duration:1500})}),500);break}uni.hideLoading()}})}))};e.request=s;var c=function(t,e){return s(t,e,{method:"POST",contentType:"form"})};e.post=c;var r=function(t,e){return s(t,e,{method:"POST",contentType:"json"})};e.postJson=r;var l=function(t,e){return s(t,e,{method:"put",contentType:"json"})};e.put=l;var u=function(t,e){return e||(e={}),e.timestamp=(new Date).getTime(),s(t,e,{method:"GET"})};e.get=u},"1eb5":function(t,e,o){"use strict";var a=o("3c50"),i=o.n(a);i.a},2134:function(t,e,o){"use strict";var a=o("4a46"),i=o("ee27");o("4160"),o("a9e3"),o("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("f3f3")),s=o("2f62"),c=a(o("bd98")),r=o("a986"),l=o("e66a"),u=o("d33c"),d={data:function(){return{TabCur:0,bookId:null,floors:{},collectStatus:0,likedStatus:0,titleDemo:"",ifFull:!1,modalName:null,currentPage:{chapterId:null,name:""},checkbox:[{value:100,name:"100书币",checked:!1,hot:!1},{value:200,name:"200书币",checked:!1,hot:!1},{value:300,name:"300书币",checked:!1,hot:!1},{value:600,name:"600书币",checked:!1,hot:!1},{value:800,name:"800书币",checked:!1,hot:!1},{value:1e3,name:"1000书币",checked:!1,hot:!1}]}},computed:(0,n.default)({},(0,s.mapGetters)({getToken:"getToken"}),{baseUrl:function(){return l.baseUrl}}),onPageScroll:function(t){var e=t.scrollTop;this.titleDemo=e>=170&&this.floors.title||""},onLoad:function(t){this.bookId=t.bookId},onShow:function(){this.getbookDetailAction()},onReady:function(){},methods:{bookType:r.bookType,timestampToTime:u.timestampToTime,tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id},showModal:function(t){this.modalName=t.currentTarget.dataset.target,console.log(this.modalName,888)},hideModal:function(t){this.modalName=null},ChooseCheckbox:function(t){var e=this,o=this.checkbox,a=t.currentTarget.dataset.value;console.log(t.currentTarget.dataset.value,o);for(var i=0,n=o.length;i<n;++i)o[i].value==a&&i;var s={amount:Number(a),bookId:Number(this.bookId)};console.log(s),c.userSend(s).then((function(t){setTimeout((function(){uni.showToast({icon:"none",title:"打赏"+a+"书币",duration:1500})}),500),e.getbookDetailAction(),e.modalName=null}),(function(t){}))},changeFill:function(){this.ifFull=!this.ifFull},toRead:function(t,e){uni.navigateTo({url:"/pages/two/book/bookread/bookread?id="+t+"&name="+this.floors.title+"&bookId="+this.bookId+"&jiNo="+e})},toSend:function(t){var e=t.currentTarget.dataset.url;uni.navigateTo({url:e+"?bookId="+this.bookId+"&title="+this.floors.title+"&img="+this.floors.coverPic+"&category="+this.floors.category})},bookCollectAction:function(){var t=this,e={bookId:this.bookId};c.bookCollect(e).then((function(e){t.collectStatus=!t.collectStatus;var o={isCollected:t.collectStatus,isLiked:t.likedStatus};t.$store.dispatch("setStatusBook",o)}),(function(t){}))},getbookDetailAction:function(){var t=this;uni.showLoading({mask:!0});var e={bookId:this.bookId};c.getbookDetail(e).then((function(e){var o=e.data.bookEpisodeList;t.floors=e.data,t.collectStatus=!!e.data.isCollected,t.likedStatus=!!e.data.isLiked;var a={isCollected:!!e.data.isCollected,isLiked:!!e.data.isLiked};t.$store.dispatch("setStatusBook",a),t.$store.dispatch("setCapterBook",o).then((function(){t.floors.newestChapterId?o.forEach((function(e,o){e.id==t.floors.newestChapterId&&(t.currentPage.chapterId=e.id,t.currentPage.jiNo=e.jiNo,t.currentPage.name=e.title)})):(t.currentPage.chapterId=o[0].id,t.currentPage.jiNo=o[0].jiNo,t.currentPage.name=o[0].title)}))}),(function(t){}))}}};e.default=d},"334a":function(t,e,o){"use strict";o.r(e);var a=o("5c4a"),i=o("7cb6");for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);o("1eb5");var s,c=o("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"70bc3ee8",null,!1,a["a"],s);e["default"]=r.exports},"3c50":function(t,e,o){var a=o("806a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=o("4f06").default;i("056834e4",a,!0,{sourceMap:!1,shadowMode:!1})},"5c4a":function(t,e,o){"use strict";var a,i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"bookDetail"},[o("v-uni-view",{staticClass:"fixed"},[o("cu-custom",{attrs:{isBack:!0,bgColor:t.titleDemo?"bg-gradual-pink":"text-white"}},[o("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),t.titleDemo?o("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.titleDemo))]):t._e(),t.getToken?o("template",{attrs:{slot:"right"},slot:"right"},[o("v-uni-text",{staticClass:"lg text-pink"}),t.collectStatus?o("v-uni-view",{staticClass:"cu-tag round bg-grey topwrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bookCollectAction.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"text-white"},[t._v("已收藏")])],1):o("v-uni-view",{staticClass:"cu-tag round bg-orange topwrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bookCollectAction.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"lg cuIcon-add topshouc"}),o("v-uni-text",[t._v("收藏")])],1)],1):t._e()],2)],1),o("v-uni-view",{staticClass:"bg-img bg-mask flex align-end",style:"background-image: url("+t.floors.coverPic+");height: 414upx;background-size: contain;"},[o("v-uni-view",{staticClass:"padding-xl text-white"},[o("v-uni-view",{staticClass:"padding-xs text-xxl text-bold"},[t._v(t._s(t.floors.title))]),o("v-uni-view",{staticClass:"padding-xs text-lg"},[t._v(t._s(t.bookType(t.floors.category)))])],1)],1),o("v-uni-scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":!0}},t._l(2,(function(e,a){return o("v-uni-view",{key:a,staticClass:"cu-item curs",class:a==t.TabCur?"text-orange cur":"",attrs:{"data-id":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(a?"选集":"详情"))])})),1),o("v-uni-view",{staticClass:"details grid col-2",class:[1==t.TabCur?"tran":"",t.ifFull?"":"currentPage"]},[o("v-uni-view",{staticClass:"detailWrap"},[o("v-uni-view",{staticClass:"title"},[t._v("作品简介")]),o("v-uni-view",{staticClass:"content"},[t._v(t._s(t.floors.summary))]),o("v-uni-view",{staticClass:"auther"},[t._v("作者："+t._s(t.floors.author))]),o("v-uni-view",{staticClass:"grid col-3"},[o("v-uni-view",{staticClass:"text-left"},[o("v-uni-text",{staticClass:"lg text-orange cuIcon-favorfill"},[t._v(t._s(t.floors.collectSum||0)+"人已收藏")])],1),o("v-uni-view",{staticClass:"text-center"},[o("v-uni-text",{staticClass:"lg text-blue cuIcon-appreciate"},[t._v(t._s(t.floors.likeSum||0)+"人已点赞")])],1),o("v-uni-view",{staticClass:"text-right"},[o("v-uni-text",{staticClass:"lg text-pink cuIcon-like"},[t._v(t._s(10*(t.floors.collectSum+t.floors.likeSum)||0)+"人气值")])],1)],1)],1),o("v-uni-view",{staticClass:"selectWrap grid col-3"},[t._l(t.floors.bookEpisodeList,(function(e,a){return t.ifFull||a<6?o("v-uni-view",{key:a,staticClass:"padding-xs",attrs:{"data-id":e.id}},[o("v-uni-view",{staticClass:"cu-btn radius line-gray",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toRead(e.id,e.jiNo)}}},[t._v("第"+t._s(a+1)+"章")])],1):t._e()})),t.ifFull?o("v-uni-view",{staticClass:"flex flex-direction",staticStyle:{width:"100vw"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeFill.apply(void 0,arguments)}}},[o("v-uni-button",{staticClass:"cu-btn radius bg-gray lg text-sm margin-tb-sm"},[t._v("收起更多章节")])],1):o("v-uni-view",{staticClass:"flex flex-direction",staticStyle:{width:"100vw"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeFill.apply(void 0,arguments)}}},[o("v-uni-button",{staticClass:"cu-btn radius bg-gray lg text-sm margin-tb-sm"},[t._v("查看更多章节")])],1)],2)],1),o("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[o("v-uni-view",{staticClass:"action"},[o("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v("最新评论")],1),o("v-uni-view",{staticClass:"action text-orange",attrs:{"data-url":"/pages/two/book/moreCommon/moreCommon"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSend.apply(void 0,arguments)}}},[o("v-uni-text",[t._v("更多")]),o("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1),o("v-uni-view",{staticClass:"cu-card dynamic no-card"},[o("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top"},t._l(t.floors.commentList,(function(e,a){return a<4?o("v-uni-view",{key:a,staticClass:"cu-item"},[o("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+t.baseUrl+e.portrait+");"}),o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.userName))]),o("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v(t._s(e.commentInfo))]),o("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[o("v-uni-view",{staticClass:"text-gray text-df"},[t._v(t._s(e.createTime))])],1)],1)],1):t._e()})),1)],1),o("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[o("v-uni-view",{staticClass:"action"},[o("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v("猜你喜欢")],1)],1),o("v-uni-view",{staticClass:"bg-white padding flex flex-direction"},[o("v-uni-view",{staticClass:"bubble"},[o("v-uni-text",[t._v("已打赏")]),o("hr"),o("v-uni-text",[t._v(t._s(t.floors.sendSum||0)+"书币")])],1),o("v-uni-button",{staticClass:"cu-btn bg-blue round margin-tb-sm lg half",attrs:{"data-target":"ChooseModal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("打赏")])],1),o("v-uni-view",{staticClass:"cu-modal bottom-modal",class:"ChooseModal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[o("v-uni-view",{staticClass:"cu-bar bg-white"},[o("v-uni-view",{staticClass:"action text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")])],1),o("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.checkbox,(function(e,a){return o("v-uni-view",{key:a,staticClass:"padding-xs"},[o("v-uni-button",{staticClass:"cu-btn orange lg block line-orange",attrs:{"data-value":e.value},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox.apply(void 0,arguments)}}},[t._v(t._s(e.name)),e.hot?o("v-uni-view",{staticClass:"cu-tag sm round",class:e.checked?"bg-white text-orange":"bg-orange"},[t._v("HOT")]):t._e()],1)],1)})),1)],1)],1),o("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[o("v-uni-view",{staticClass:"action"},[o("v-uni-text",{staticClass:"cuIcon-titles text-orange"}),t._v("打赏记录")],1)],1),o("v-uni-view",{staticClass:"cu-card dynamic no-card"},[o("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top mbottom bg-white"},[t._l(t.floors.sendList,(function(e,a){return a<4?o("v-uni-view",{key:a,staticClass:"cu-item"},[o("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+t.baseUrl+e.portrait+");"}),o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.userName||""))]),o("v-uni-view",{staticClass:"text-orange text-content text-df"},[t._v("共赠送  "+t._s(e.userAmount||0)+"个书币给作者")])],1)],1):t._e()})),o("v-uni-view",{staticClass:"bg-white padding flex flex-direction"},[t.floors.sendList?o("v-uni-button",{staticClass:"cu-btn line-grey round margin-tb-sm lg",attrs:{"data-url":"/pages/two/book/moreSend/moreSend"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSend.apply(void 0,arguments)}}},[t._v("更多")]):t._e()],1)],2)],1),o("v-uni-view",{staticClass:"fixednav flex  p-xs mb-sm bg-white solids-top"},[o("v-uni-view",{staticClass:"flex-twice bg-white padding-sm margin-xs radius text-cut margin-top-xs",staticStyle:{"line-height":"2.8"}},[t._v(t._s(t.currentPage.name))]),o("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius"},[t.floors.newestChapterId?o("v-uni-button",{staticClass:"cu-btn bg-orange round lg shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRead(t.currentPage.chapterId,t.currentPage.jiNo)}}},[t._v("继续阅读")]):o("v-uni-button",{staticClass:"cu-btn bg-orange round lg shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRead(t.currentPage.chapterId,t.currentPage.jiNo)}}},[t._v("立即阅读")])],1)],1)],1)},n=[];o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return a}))},"7cb6":function(t,e,o){"use strict";o.r(e);var a=o("2134"),i=o.n(a);for(var n in a)"default"!==n&&function(t){o.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},"806a":function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,'.bookDetail .currentPage[data-v-70bc3ee8]{min-height:%?500?%;overflow:hidden}.bookDetail .topwrap[data-v-70bc3ee8]{margin-right:15px}.bookDetail .topshouc[data-v-70bc3ee8]{margin-right:0}.bookDetail .curs[data-v-70bc3ee8]{\n  /* border-bottom: 2px solid; */margin:0 %?140?%}.bookDetail .cu-bar[data-v-70bc3ee8]{margin-top:%?60?%}.bookDetail .cu-btn.lg.half[data-v-70bc3ee8]{text-align:center;margin:0 auto;width:%?200?%}.bookDetail .mbottom[data-v-70bc3ee8]{padding-bottom:%?160?%}.bookDetail .fixednav[data-v-70bc3ee8]{position:fixed;left:0;bottom:0;width:100vw}.bookDetail .details[data-v-70bc3ee8]{width:200vw;background-color:#fff;-webkit-transition:all .3s linear;transition:all .3s linear}.bookDetail .details .detailWrap[data-v-70bc3ee8]{padding:%?60?% %?40?% %?40?%}.bookDetail .details .detailWrap .title[data-v-70bc3ee8]{margin-bottom:%?20?%}.bookDetail .details .detailWrap .content[data-v-70bc3ee8]{color:#666;font-size:%?20?%;margin-bottom:%?40?%}.bookDetail .details .detailWrap .auther[data-v-70bc3ee8]{color:#666;margin-bottom:%?40?%}.bookDetail .details .selectWrap[data-v-70bc3ee8]{padding:%?60?% %?40?% %?40?%}.bookDetail .bubble[data-v-70bc3ee8]{width:150px;height:150px;margin:20px auto;border-radius:50%;background:0 0;text-align:center;line-height:55px;font-size:20px;color:#44a9f7;padding-top:20px;box-sizing:border-box;box-shadow:inset -30px -30px 75px rgba(68,168,247,.2),inset 0 0 5px rgba(68,168,247,.5),inset 0 0 55px hsla(0,0%,100%,.5),inset -3px -3px 5px rgba(68,168,247,.5),0 0 50px hsla(0,0%,100%,.75)}.bookDetail .bubble hr[data-v-70bc3ee8]{width:80%;height:1px;border:none;margin:0 auto;background-color:#44a9f7}.bookDetail .tran[data-v-70bc3ee8]{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}.fixed[data-v-70bc3ee8]{position:fixed;z-index:99}.VerticalNav.nav[data-v-70bc3ee8]{width:%?200?%;white-space:normal}.VerticalNav.nav .cu-item[data-v-70bc3ee8]{width:100%;text-align:center;background-color:#fff;margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-70bc3ee8]{background-color:#f1f1f1}.VerticalNav.nav .cu-item.cur[data-v-70bc3ee8]::after{content:"";width:%?8?%;height:%?30?%;border-radius:%?10?% 0 0 %?10?%;position:absolute;background-color:currentColor;top:0;right:%?0?%;bottom:0;margin:auto}.VerticalBox[data-v-70bc3ee8]{display:-webkit-box;display:-webkit-flex;display:flex}.VerticalMain[data-v-70bc3ee8]{background-color:#f1f1f1;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),t.exports=e},a986:function(t,e,o){"use strict";function a(t){var e="";switch(t){case 0:e="玄幻魔法";break;case 1:e="武侠修真";break;case 2:e="都市言情";break;case 3:e="历史军事";break;case 4:e="侦探推理";break;case 5:e="网游动漫";break;case 6:e="科幻灵异";break;case 7:e="其他类型";break}return e}function i(t){var e="";switch(t){case"猜你喜欢":e=1;break;case"男生喜欢":e=4;break;case"女生喜欢":e=3;break;case"大家都在看":e=2;break}return e}function n(t){var e="";switch(t){case"猜你喜欢":e="后宫";break;case"男生喜欢":e="热血";break;case"女生喜欢":e="恋爱,古风";break;case"今日推荐":e="";break}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.bookType=a,e.bookTypeDetail=i,e.comicType=n},bd98:function(t,e,o){"use strict";var a=o("4a46");Object.defineProperty(e,"__esModule",{value:!0}),e.getbookPage=n,e.getbookDetail=s,e.getbookType=c,e.categoryPageList=r,e.getBookStyle=l,e.episodesContent=u,e.getCommentPage=d,e.getSendPage=v,e.categoryList=b,e.bookCollect=g,e.bookLike=f,e.comment=k,e.ranking=h,e.userSend=m;var i=a(o("1bd8"));function n(){return i.get("/books/book/homePage")}function s(t){return i.get("/books/book/details",t)}function c(t){return i.get("/books/book/homePageList",t)}function r(t){return i.get("/books/book/categoryPageList",t)}function l(t){return i.get("/books/book/page",t)}function u(t){return i.get("/books/book/episodesContent",t)}function d(t){return i.get("/books/book/commentList",t)}function v(t){return i.get("/books/book/userSendList",t)}function b(t){return i.get("/books/book/categoryList",t)}function g(t){return i.get("/books/book/bookCollect",t)}function f(t){return i.get("/books/book/bookLike",t)}function k(t){return i.get("/books/book/comment",t)}function h(t){return i.get("/books/book/ranking",t)}function m(t){return i.post("/books/book/userSend",t)}},d33c:function(t,e,o){"use strict";function a(t){var e=new Date(t),o=e.getFullYear()+"年",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"月",i=e.getDate()<10?"0"+e.getDate():e.getDate()+"日",n=e.getHours()<10?"0"+e.getHours():e.getHours(),s=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),c=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return o+a+i+" "+n+":"+s+":"+c}Object.defineProperty(e,"__esModule",{value:!0}),e.timestampToTime=a},e66a:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var a="http://47.244.209.81";e.baseUrl=a}}]);