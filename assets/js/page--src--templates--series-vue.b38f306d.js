(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2dlX":function(t,e,i){"use strict";var s=i("A0SJ");i.n(s).a},"7XYf":function(t,e,i){"use strict";var s={name:"PageListing",components:{PageListItem:i("Xhns").a},data:function(){return{notFullWidthStyle:{marginTop:"0em"}}},props:{posts:{type:Array},fullWidth:{type:Boolean,default:!0}},computed:{notFullWidthStyleObject:function(){return this.fullWidth?{}:this.notFullWidthStyle}}},n=i("KHd+"),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"is-centered is-multiline",class:{columns:!t.fullWidth},style:this.notFullWidthStyleObject},t._l(this.posts,(function(e){return i("PageListItem",{key:e.node.id,attrs:{node:e.node,fullWidth:t.fullWidth}})})),1)}),[],!1,null,null,null);e.a=a.exports},A0SJ:function(t,e,i){},DQNa:function(t,e,i){var s=i("busE"),n=Date.prototype,a=n.toString,l=n.getTime;new Date(NaN)+""!="Invalid Date"&&s(n,"toString",(function(){var t=l.call(this);return t==t?a.call(this):"Invalid Date"}))},Xhns:function(t,e,i){"use strict";i("oVuX"),i("+2oP"),i("DQNa"),i("rB9j"),i("EnZy");var s={name:"PageListItem",props:{node:{type:Object},fullWidth:{type:Boolean,default:!0}},computed:{formattedDate:function(){return new Date(this.node.date).toUTCString().split(" ").slice(0,4).join(" ")}}},n=(i("2dlX"),i("KHd+")),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("client-only",[i("g-link",{staticClass:"box column",class:{"is-four-fifths":!t.fullWidth},attrs:{to:t.node.path,id:"page-list-item"}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-one-fifth"},[i("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(this.formattedDate))])]),i("div",{staticClass:"column content has-text-left",attrs:{id:"content-box"}},[i("g-link",{staticClass:"title is-spaced is-size-4-mobile",attrs:{to:t.node.path}},[t._v(t._s(t.node.title))]),null!=t.node.series?i("div",{staticClass:"subtitle is-size-6-mobile"},[i("g-link",{attrs:{to:t.node.series.path}},[t._v(t._s(t.node.series.id))]),t._v(": Part "+t._s(t.node.part)+"\n        ")],1):i("div",{staticClass:"subtitle is-size-6-mobile"}),i("div",[""!=t.node.excerpt?i("p",[i("strong",[t._v("Description: ")]),t._v(t._s(t.node.excerpt)+" ")]):t._e()])],1)])])],1)}),[],!1,null,null,null);e.a=a.exports},ZRXN:function(t,e,i){"use strict";i.r(e);var s={name:"SeriesTemplate",components:{PageListing:i("7XYf").a},metaInfo:{bodyAttrs:{class:"has-navbar-fixed-top"}}},n=i("KHd+"),a=null,l=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-1 is-spaced"},[this._v(" "+this._s(this.$page.series.id)+" ")]),e("h2",{staticClass:"subtitle is-4"},[this._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n          laborum.\n        ")]),e("PageListing",{attrs:{posts:this.$page.series.belongsTo.edges}})],1)])])}),[],!1,null,null,null);"function"==typeof a&&a(l);e.default=l.exports}}]);