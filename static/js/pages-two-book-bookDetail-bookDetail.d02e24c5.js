(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-two-book-bookDetail-bookDetail"],{1702:function(t,a,e){"use strict";var i=e("ebce"),s=e.n(i);s.a},2134:function(t,a,e){"use strict";var i=e("4a46");e("4de4"),e("d81d"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=i(e("bd98")),n=e("a986"),o=e("d33c"),c={data:function(){return{TabCur:0,bookId:null,floors:{},ifFull:!1,modalName:null,checkbox:[{value:0,name:"100书币",checked:!1,hot:!1},{value:1,name:"200书币",checked:!1,hot:!1},{value:2,name:"300书币",checked:!1,hot:!1},{value:3,name:"600书币",checked:!1,hot:!1},{value:4,name:"800书币",checked:!1,hot:!1},{value:5,name:"100书币",checked:!1,hot:!1}]}},onLoad:function(t){this.bookId=t.bookId,this.getbookDetailAction()},onReady:function(){uni.hideLoading()},methods:{bookType:n.bookType,timestampToTime:o.timestampToTime,tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id},showModal:function(t){this.modalName=t.currentTarget.dataset.target,console.log(this.modalName,888)},hideModal:function(t){this.modalName=null},ChooseCheckbox:function(t){for(var a=this.checkbox,e=t.currentTarget.dataset.value,i=0,s=a.length;i<s;++i)if(a[i].value==e){a[i].checked=!a[i].checked;break}},okModal:function(){var t=this.checkbox.filter((function(t){return t.checked})),a=t.map((function(t){return t.name}));console.log(t,a),console.log("ok")},changeFill:function(){this.ifFull=!this.ifFull},getbookDetailAction:function(){var t=this;uni.showLoading({mask:!0});var a={bookId:this.bookId};s.getbookDetail(a).then((function(a){console.log(a.data,"多多"),t.floors=a.data,uni.hideLoading()}),(function(t){}))}}};a.default=c},"334a":function(t,a,e){"use strict";e.r(a);var i=e("5058"),s=e("7cb6");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("1702");var o,c=e("f0c5"),l=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"3f194358",null,!1,i["a"],o);a["default"]=l.exports},5058:function(t,a,e){"use strict";var i,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"bookDetail"},[e("v-uni-view",{staticClass:"fixed"},[e("cu-custom",{attrs:{isBack:!0,bgColor:"bg-shadeTop text-white"}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"right"},slot:"right"},[e("v-uni-text",{staticClass:"lg text-pink"}),e("v-uni-view",{staticClass:"cu-tag round bg-orange topwrap"},[e("v-uni-text",{staticClass:"lg cuIcon-add topshouc"}),e("v-uni-text",[t._v("收藏")])],1)],1)],2)],1),e("v-uni-view",{staticClass:"bg-img bg-mask flex align-end",style:"background-image: url("+t.floors.coverPic+");height: 414upx;background-size: contain;"},[e("v-uni-view",{staticClass:"padding-xl text-white"},[e("v-uni-view",{staticClass:"padding-xs text-xxl text-bold"},[t._v(t._s(t.floors.title))]),e("v-uni-view",{staticClass:"padding-xs text-lg"},[t._v(t._s(t.bookType(t.floors.category)))])],1)],1),e("v-uni-scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":!0}},t._l(2,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item curs",class:i==t.TabCur?"text-orange cur":"",attrs:{"data-id":i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(i?"选集":"详情"))])})),1),e("v-uni-view",{staticClass:"details grid col-2",class:[1==t.TabCur?"tran":"",t.ifFull?"":"currentPage"]},[e("v-uni-view",{staticClass:"detailWrap"},[e("v-uni-view",{staticClass:"title"},[t._v("作品简介")]),e("v-uni-view",{staticClass:"content"},[t._v(t._s(t.floors.summary))]),e("v-uni-view",{staticClass:"auther"},[t._v("作者："+t._s(t.floors.author))]),e("v-uni-view",{staticClass:"grid col-3"},[e("v-uni-view",{staticClass:"text-left"},[e("v-uni-text",{staticClass:"lg text-orange cuIcon-favorfill"},[t._v(t._s(t.floors.collectSum||0)+"人已收藏")])],1),e("v-uni-view",{staticClass:"text-center"},[e("v-uni-text",{staticClass:"lg text-blue cuIcon-appreciate"},[t._v(t._s(t.floors.likeSum||0)+"人已点赞")])],1),e("v-uni-view",{staticClass:"text-right"},[e("v-uni-text",{staticClass:"lg text-pink cuIcon-like"},[t._v(t._s(10*(t.floors.collectSum+t.floors.likeSum))+"人气值")])],1)],1)],1),e("v-uni-view",{staticClass:"selectWrap grid col-3"},[t._l(t.floors.bookEpisodeList,(function(a,i){return t.ifFull||i<6?e("v-uni-view",{key:i,staticClass:"padding-xs",attrs:{"data-id":a.id}},[e("v-uni-view",{staticClass:"cu-btn radius line-gray"},[t._v("第"+t._s(i+1)+"张")])],1):t._e()})),t.ifFull?e("v-uni-view",{staticClass:"flex flex-direction",staticStyle:{width:"100vw"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeFill.apply(void 0,arguments)}}},[e("v-uni-button",{staticClass:"cu-btn radius bg-gray lg text-sm margin-tb-sm"},[t._v("收起更多章节")])],1):e("v-uni-view",{staticClass:"flex flex-direction",staticStyle:{width:"100vw"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeFill.apply(void 0,arguments)}}},[e("v-uni-button",{staticClass:"cu-btn radius bg-gray lg text-sm margin-tb-sm"},[t._v("查看更多章节")])],1)],2)],1),e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v("最新评论")],1),e("v-uni-view",{staticClass:"action text-orange"},[e("v-uni-text",[t._v("更多")]),e("v-uni-text",{staticClass:"lg cuIcon-right"})],1)],1),e("v-uni-view",{staticClass:"cu-card dynamic no-card"},[e("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[t._v("莫甘娜")]),e("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v("凯尔，你被自己的光芒变的盲目。")]),e("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[e("v-uni-view",{staticClass:"text-gray text-df"},[t._v("2018年12月4日")])],1)],1)],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[t._v("凯尔")]),e("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v("妹妹，如果不是为了飞翔，我们要这翅膀有什么用?")]),e("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[e("v-uni-view",{staticClass:"text-gray text-df"},[t._v("2018年12月4日")])],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-orange "}),t._v("猜你喜欢")],1)],1),e("v-uni-view",{staticClass:"bg-white padding flex flex-direction"},[e("v-uni-view",{staticClass:"bubble"},[e("v-uni-text",[t._v("已打赏")]),e("hr"),e("v-uni-text",[t._v(t._s(t.floors.sendSum||0)+"书币")])],1),e("v-uni-button",{staticClass:"cu-btn bg-blue round margin-tb-sm lg half",attrs:{"data-target":"ChooseModal"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showModal.apply(void 0,arguments)}}},[t._v("打赏")])],1),e("v-uni-view",{staticClass:"cu-modal bottom-modal",class:"ChooseModal"==t.modalName?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action text-blue",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-view",{staticClass:"action text-green",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.okModal.apply(void 0,arguments)}}},[t._v("确定")])],1),e("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.checkbox,(function(a,i){return e("v-uni-view",{key:i,staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn orange lg block",class:a.checked?"bg-orange":"line-orange",attrs:{"data-value":a.value},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ChooseCheckbox.apply(void 0,arguments)}}},[t._v(t._s(a.name)),a.hot?e("v-uni-view",{staticClass:"cu-tag sm round",class:a.checked?"bg-white text-orange":"bg-orange"},[t._v("HOT")]):t._e()],1)],1)})),1)],1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-orange"}),t._v("打赏记录")],1)],1),e("v-uni-view",{staticClass:"cu-card dynamic no-card"},[e("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top mbottom bg-white"},[t._l(t.floors.sendList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(a.userName||""))]),e("v-uni-view",{staticClass:"text-orange text-content text-df"},[t._v("赠送 X "+t._s(a.userAmount||0)+"个礼物给作者")]),e("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[e("v-uni-view",{staticClass:"text-gray text-df"},[t._v(t._s(t.timestampToTime(a.createTime)))])],1)],1)],1)})),e("v-uni-view",{staticClass:"bg-white padding flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn line-grey round margin-tb-sm lg"},[t._v("更多")])],1)],2)],1),e("v-uni-view",{staticClass:"fixednav flex  p-xs mb-sm bg-white solids-top"},[e("v-uni-view",{staticClass:"flex-twice bg-white padding-sm margin-xs radius"},[e("v-uni-text",[t._v("1话：第几章东方史蒂夫史蒂夫")])],1),e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs radius"},[e("v-uni-button",{staticClass:"cu-btn bg-orange round lg shadow"},[t._v("立即阅读")])],1)],1)],1)},n=[];e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}))},"7cb6":function(t,a,e){"use strict";e.r(a);var i=e("2134"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},a986:function(t,a,e){"use strict";function i(t){var a="";switch(t){case 0:a="玄幻魔法";break;case 1:a="武侠修真";break;case 2:a="都市言情";break;case 3:a="历史军事";break;case 4:a="侦探推理";break;case 5:a="网游动漫";break;case 6:a="科幻灵异";break;case 7:a="其他类型";break}return a}function s(t){var a="";switch(t){case"猜你喜欢":a="后宫";break;case"男生喜欢":a="热血";break;case"女生喜欢":a="恋爱,古风";break;case"今日推荐":a="";break}return a}function n(t){var a="";switch(t){case"猜你喜欢":a=1;break;case"男生喜欢":a=4;break;case"女生喜欢":a=3;break;case"大家一起看":a=2;break}return a}Object.defineProperty(a,"__esModule",{value:!0}),a.bookType=i,a.comicType=s,a.bookTypeDetail=n},d33c:function(t,a,e){"use strict";function i(t){var a=new Date(t),e=a.getFullYear()+"年",i=(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"月",s=a.getDate()<10?"0"+a.getDate():a.getDate()+"日",n=a.getHours()<10?"0"+a.getHours():a.getHours(),o=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),c=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds();return e+i+s+" "+n+":"+o+":"+c}Object.defineProperty(a,"__esModule",{value:!0}),a.timestampToTime=i},ebce:function(t,a,e){var i=e("f022");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("48b7e43c",i,!0,{sourceMap:!1,shadowMode:!1})},f022:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.bookDetail .currentPage[data-v-3f194358]{height:%?500?%;overflow-y:hidden}.bookDetail .topwrap[data-v-3f194358]{margin-right:15px}.bookDetail .topshouc[data-v-3f194358]{margin-right:0}.bookDetail .curs[data-v-3f194358]{\n  /* border-bottom: 2px solid; */margin:0 %?140?%}.bookDetail .cu-bar[data-v-3f194358]{margin-top:%?60?%}.bookDetail .cu-btn.lg.half[data-v-3f194358]{text-align:center;margin:0 auto;width:%?200?%}.bookDetail .mbottom[data-v-3f194358]{padding-bottom:%?160?%}.bookDetail .fixednav[data-v-3f194358]{position:fixed;left:0;bottom:0;width:100vw}.bookDetail .details[data-v-3f194358]{width:200vw;background-color:#fff;-webkit-transition:all .3s linear;transition:all .3s linear}.bookDetail .details .detailWrap[data-v-3f194358]{padding:%?60?% %?40?% %?40?%}.bookDetail .details .detailWrap .title[data-v-3f194358]{margin-bottom:%?20?%}.bookDetail .details .detailWrap .content[data-v-3f194358]{color:#666;font-size:%?20?%;margin-bottom:%?40?%}.bookDetail .details .detailWrap .auther[data-v-3f194358]{color:#666;margin-bottom:%?40?%}.bookDetail .details .selectWrap[data-v-3f194358]{padding:%?60?% %?40?% %?40?%}.bookDetail .bubble[data-v-3f194358]{width:150px;height:150px;margin:20px auto;border-radius:50%;background:0 0;text-align:center;line-height:55px;font-size:20px;color:#44a9f7;padding-top:20px;box-sizing:border-box;box-shadow:inset -30px -30px 75px rgba(68,168,247,.2),inset 0 0 5px rgba(68,168,247,.5),inset 0 0 55px hsla(0,0%,100%,.5),inset -3px -3px 5px rgba(68,168,247,.5),0 0 50px hsla(0,0%,100%,.75)}.bookDetail .bubble hr[data-v-3f194358]{width:80%;height:1px;border:none;margin:0 auto;background-color:#44a9f7}.bookDetail .tran[data-v-3f194358]{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}.fixed[data-v-3f194358]{position:fixed;z-index:99}.VerticalNav.nav[data-v-3f194358]{width:%?200?%;white-space:normal}.VerticalNav.nav .cu-item[data-v-3f194358]{width:100%;text-align:center;background-color:#fff;margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-3f194358]{background-color:#f1f1f1}.VerticalNav.nav .cu-item.cur[data-v-3f194358]::after{content:"";width:%?8?%;height:%?30?%;border-radius:%?10?% 0 0 %?10?%;position:absolute;background-color:currentColor;top:0;right:%?0?%;bottom:0;margin:auto}.VerticalBox[data-v-3f194358]{display:-webkit-box;display:-webkit-flex;display:flex}.VerticalMain[data-v-3f194358]{background-color:#f1f1f1;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),t.exports=a}}]);