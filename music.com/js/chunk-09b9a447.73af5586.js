(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09b9a447"],{"1a43":function(t,a,s){"use strict";var i=s("a8a6"),c=s.n(i);c.a},"2ac3":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mvs-container"},[s("div",{staticClass:"filter-wrap"},[s("div",{staticClass:"seciton-wrap"},[s("span",{staticClass:"section-type"},[t._v("地区:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"全部"==t.area},on:{click:function(a){t.area="全部"}}},[t._v("全部")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"内地"==t.area},on:{click:function(a){t.area="内地"}}},[t._v("内地")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"港台"==t.area},on:{click:function(a){t.area="港台"}}},[t._v("港台")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"欧美"==t.area},on:{click:function(a){t.area="欧美"}}},[t._v("欧美")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"日本"==t.area},on:{click:function(a){t.area="日本"}}},[t._v("日本")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"韩国"==t.area},on:{click:function(a){t.area="韩国"}}},[t._v("韩国")])])])]),s("div",{staticClass:"type-wrap"},[s("span",{staticClass:"type-type"},[t._v("类型:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"全部"==t.type},on:{click:function(a){t.type="全部"}}},[t._v("全部")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"官方版"==t.type},on:{click:function(a){t.type="官方版"}}},[t._v("官方版")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"原声"==t.type},on:{click:function(a){t.type="原声"}}},[t._v("原声")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"现场版"==t.type},on:{click:function(a){t.type="现场版"}}},[t._v("现场版")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"网易出品"==t.type},on:{click:function(a){t.type="网易出品"}}},[t._v("网易出品")])])])]),s("div",{staticClass:"order-wrap"},[s("span",{staticClass:"order-type"},[t._v("排序:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"上升最快"==t.order},on:{click:function(a){t.order="上升最快"}}},[t._v("上升最快")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"最热"==t.order},on:{click:function(a){t.order="最热"}}},[t._v("最热")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"最新"==t.order},on:{click:function(a){t.order="最新"}}},[t._v("最新")])])])])]),s("div",{staticClass:"mvs"},[s("div",{staticClass:"items"},t._l(t.mvList,(function(a){return s("div",{key:a.id,staticClass:"item",on:{click:function(s){return t.toMv(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.cover,alt:""}}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(a.playCount))])])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artisetName))])])])})),0),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5},on:{"current-change":t.handleCurrentChange}})],1)])},c=[],e=s("bc3a"),n=s.n(e),l={name:"mvs",data:function(){return{area:"全部",type:"全部",order:"上升最快",limit:12,page:1,total:0,mvList:[]}},created:function(){this.getData()},watch:{area:[function(){this.page=1},"getData"],type:[function(){this.page=1},"getData"],order:[function(){this.page=1},"getData"]},methods:{handleCurrentChange:function(t){this.page=t,this.getData()},getData:function(){var t=this;n()({url:"https://autumnfish.cn/mv/all",method:"get",params:{limit:12,area:this.area,order:this.order,type:this.type,offset:(this.page-1)*this.limit}}).then((function(a){console.log(a),t.mvList=a.data.data,a.data.count&&(t.total=a.data.count)}))},toMv:function(t){this.$router.push("/mvDetails?id=".concat(t))}}},r=l,o=(s("1a43"),s("2877")),p=Object(o["a"])(r,i,c,!1,null,null,null);a["default"]=p.exports},a8a6:function(t,a,s){}}]);