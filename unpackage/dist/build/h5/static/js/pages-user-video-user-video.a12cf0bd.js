(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-video-user-video"],{"28e3":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"f-list-item",class:t.listClass,attrs:{"hover-class":t.hoverClass},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},["two"===t.type?[i("v-uni-view",{staticClass:"animated faster fadeIn"},[i("v-uni-image",{staticClass:"w-100 rounded-top-lg",staticStyle:{height:"215rpx"},attrs:{src:t.item.cover,mode:"aspectFill","lazy-load":!0}})],1),i("v-uni-view",{staticClass:"flex align-center text-white position-absolute left-0 right-0",staticStyle:{top:"160rpx","background-image":"linear-gradient(to bottom,rgba(0,0,0,0),#000000)"}},[i("v-uni-text",{staticClass:"iconfont iconbofangshu font-md mx-1"}),i("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.play_count))]),i("v-uni-text",{staticClass:"iconfont icondanmushu font-md mx-1"}),i("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.danmu_count))]),i("v-uni-text",{staticClass:"font-sm mr-1 ml-auto"},[t._v(t._s(t.item.duration))])],1),i("v-uni-view",{staticClass:"px-2 py-1"},[i("v-uni-view",{staticClass:"font line-h animated faster",staticStyle:{height:"80rpx"},attrs:{"hover-class":"pulse"}},[t._v(t._s(t._f("formatTitle")(t.item.title)))]),i("v-uni-view",{staticClass:"flex align-center justify-between pt-2 text-light-muted"},[i("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.cate))]),i("v-uni-view",{staticClass:"iconfont icongengduoda font animated faster",attrs:{"hover-class":"jello"}})],1)],1)]:"three"===t.type?[i("v-uni-view",{staticClass:"animated faster",attrs:{"hover-class":"pulse"}},[i("v-uni-image",{staticClass:"w-100 rounded-lg",staticStyle:{height:"280rpx"},attrs:{src:t.item.cover,mode:"aspectFill","lazy-load":!0}})],1),i("v-uni-view",{staticClass:"flex align-center text-white position-absolute left-0 right-0 rounded-bottom-lg",staticStyle:{top:"220rpx","background-image":"linear-gradient(to bottom,rgba(0,0,0,0),#000000)"}},[i("v-uni-text",{staticClass:"iconfont iconbofangshu font-md mx-1"}),i("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.play_count))])],1),i("v-uni-view",{staticClass:"font-md line-h animated faster text-ellipsis",attrs:{"hover-class":"pulse"}},[t._v(t._s(t.item.title))])]:"one"===t.type?[i("v-uni-view",{staticClass:"animated faster",attrs:{"hover-class":"pulse"}},[i("v-uni-image",{staticClass:"rounded-lg mr-3",staticStyle:{height:"160rpx",width:"260rpx"},attrs:{src:t.item.cover,mode:"aspectFill","lazy-load":!0}})],1),i("v-uni-view",{staticClass:"flex flex-column flex-1"},[i("v-uni-view",{staticClass:"font-md line-h animated faster mb-1",attrs:{"hover-class":"pulse"}},[t._v(t._s(t._f("formatTitle")(t.item.title)))]),i("v-uni-view",{staticClass:"font text-muted line-h mt-auto"},[t._v(t._s(t.item.time))]),i("v-uni-view",{staticClass:"flex align-center justify-between text-muted line-h"},[i("v-uni-view",[i("v-uni-text",{staticClass:"iconfont iconbofangshu font-md mr-1"}),i("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.play_count))])],1),i("v-uni-view",[i("v-uni-text",{staticClass:"iconfont icondanmushu font-md mr-1"}),i("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.dumu_count))])],1),i("v-uni-view",{staticClass:"iconfont icongengduoda font animated faster",attrs:{"hover-class":"jello"}})],1)],1)]:t._e()],2)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},"2d69":function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={getData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if(Array.isArray(t)){var i=[];return t.forEach((function(t,a){for(var n=0;n<e;n++)i.push(t)})),i}for(var a=[],n=0;n<e;n++)a.push(t);return a},getSwiper:function(){return this.getData([{url:"https://i0.hdslb.com/bfs/archive/2723b99835a41c96602b91ab1147f8a4f7638521.png@880w_388h_1c_95q",title:"炸裂！超长最终集，打响巅峰战"},{url:"https://i0.hdslb.com/bfs/sycp/creative_img/202007/82fc58598ae95ab47d20e241f9b89dff.jpg@880w_388h_1c_95q",title:"出发吧，AT全开！"},{url:"https://i0.hdslb.com/bfs/archive/431abad8f1b385e9387e0d7cc3819e0edbcc12f8.jpg@480w_300h.webp",title:"12月投递4个vlog，瓜分50万"}],1)},getListOne:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.getData([{cover:"https://i1.hdslb.com/bfs/archive/9762eba75d4e0f65c6f53d9680e8d8efb2b91f3f.jpg@320w_200h.webp",title:"我租了个日本小姐姐陪我谈了三个钟头的恋爱！",time:"今天10:20",play_count:"203.6万",danmu_count:"5910"},{cover:"https://i2.hdslb.com/bfs/archive/b76d58ac1fcbe3ff1938d5a73a70fc2d3ea7098b.jpg@320w_200h.webp",title:"【古力娜扎＆朱丹】灭掉世界的穷哈（歌剧2）",time:"今天10:20",play_count:"203.6万",danmu_count:"5910"},{cover:"https://i1.hdslb.com/bfs/archive/18d27554a103dacbd4e2ba80d817ca26c157454d.jpg@320w_200h.webp",title:"治愈系日文版《好想爱这个世界啊》翻唱 「华晨宇」！",time:"今天10:20",play_count:"203.6万",danmu_count:"5910"},{cover:"https://i1.hdslb.com/bfs/archive/dac0c10a58509149bab0b80064e4bcf7c0834011.jpg@320w_200h.webp",title:"【巫师】血腥捕食的LV资本帝国，【资本战争04】",time:"今天10:20",play_count:"203.6万",danmu_count:"5910"},{cover:"https://i0.hdslb.com/bfs/archive/84cdd45ac87b7f1bdd1a7b4b8b0f168ec8e301d3.jpg@320w_200h.webp",title:"工  具  人",time:"今天10:20",play_count:"203.6万",danmu_count:"5910"},{cover:"https://i0.hdslb.com/bfs/archive/026b714d84db1615b6e9889e83807c50d2e03122.jpg@320w_200h.webp",title:"只带一个锅能白嫖一顿火锅吗？阴阳怪气陪你过平安夜！！",time:"今天10:20",play_count:"203.6万",danmu_count:"5910"}],t)},getListTwo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.getData([{cover:"https://i1.hdslb.com/bfs/archive/9762eba75d4e0f65c6f53d9680e8d8efb2b91f3f.jpg@320w_200h.webp",title:"我租了个日本小姐姐陪我谈了三个钟头的恋爱！",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"恶搞"},{cover:"https://i2.hdslb.com/bfs/archive/b76d58ac1fcbe3ff1938d5a73a70fc2d3ea7098b.jpg@320w_200h.webp",title:"【古力娜扎＆朱丹】灭掉世界的穷哈（歌剧2）",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"创意"},{cover:"https://i1.hdslb.com/bfs/archive/18d27554a103dacbd4e2ba80d817ca26c157454d.jpg@320w_200h.webp",title:"治愈系日文版《好想爱这个世界啊》翻唱 「华晨宇」！",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"娱乐"},{cover:"https://i1.hdslb.com/bfs/archive/dac0c10a58509149bab0b80064e4bcf7c0834011.jpg@320w_200h.webp",title:"【巫师】血腥捕食的LV资本帝国，【资本战争04】",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"恶搞"},{cover:"https://i0.hdslb.com/bfs/archive/84cdd45ac87b7f1bdd1a7b4b8b0f168ec8e301d3.jpg@320w_200h.webp",title:"工  具  人",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"恶搞"},{cover:"https://i0.hdslb.com/bfs/archive/026b714d84db1615b6e9889e83807c50d2e03122.jpg@320w_200h.webp",title:"只带一个锅能白嫖一顿火锅吗？阴阳怪气陪你过平安夜！！",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"恶搞"}],t)},getListThree:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.getData([{cover:"/static/demo/datapic/1.webp",title:"鬼灭之刃",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"恶搞"},{cover:"/static/demo/datapic/2.webp",title:"动物狂想曲",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"创意"},{cover:"/static/demo/datapic/3.webp",title:"入间同学",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"娱乐"},{cover:"/static/demo/datapic/4.webp",title:"幽冥诡匠",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"恶搞"},{cover:"/static/demo/datapic/5.webp",title:"租借女友",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"恶搞"},{cover:"/static/demo/datapic/6.webp",title:"天宫赐福",time:"今天10:20",play_count:"203.6万",danmu_count:"5910",cate:"恶搞"}],t)},getIconCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=1,i=23,a=Math.floor(Math.random()*(i-e+1))+e,n="/static/demo/cate/1 ("+a+").png";return this.getData({icon:n,name:"分类"},t)}};e.default=a},3017:function(t,e,i){"use strict";i.r(e);var a=i("670a"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},5377:function(t,e,i){"use strict";i("fb6a"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{type:{type:String,default:"two"},item:Object,index:Number},filters:{formatTitle:function(t){var e=16;return t.length>e?t.slice(0,e)+" ...":t}},computed:{listClass:function(){switch(this.type){case"two":return"f-list-item-2 mb-3 border rounded-lg";case"three":return"f-list-item-3 mb-3 pb-1";case"one":return"f-list-item-1 pt-3 pb-3 border-bottom border-light-secondary px-3"}},hoverClass:function(){return"one"===this.type?"bg-light":""}},methods:{open:function(){uni.navigateTo({url:"/pages/detail-video/detail-video"})}}};e.default=a},"670a":function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("9862")),s=a(i("2d69")),c={components:{mediaList:n.default},data:function(){return{options:[{text:"修改"},{text:"视频"},{text:"删除"}],list1:s.default.getListOne()}},methods:{optionClick:function(t,e){switch(t.text){case"视频":uni.navigateTo({url:"../user-video-list/user-video-list"});break}}}};e.default=c},"6d38":function(t,e,i){"use strict";i.r(e);var a=i("eb87"),n=i("3017");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var c,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"ac2e76ce",null,!1,a["a"],c);e["default"]=r.exports},9862:function(t,e,i){"use strict";i.r(e);var a=i("28e3"),n=i("fa71");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var c,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"019e2513",null,!1,a["a"],c);e["default"]=r.exports},eb87:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"overflow-x":"hidden"}},t._l(t.list1,(function(e,a){return i("v-uni-view",{key:a},[i("media-list",{attrs:{type:"one",item:e,index:a}}),i("v-uni-view",{staticClass:"flex",staticStyle:{height:"100rpx"}},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex-1 flex align-center justify-center border-light-secondary",attrs:{"hover-class":"bg-light"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.optionClick(e,a)}}},[t._v(t._s(e.text))])})),1),i("v-uni-view",{staticClass:"f-divider"})],1)})),1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},fa71:function(t,e,i){"use strict";i.r(e);var a=i("5377"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);