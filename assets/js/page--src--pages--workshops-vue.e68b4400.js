(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{162:function(t,s,e){},163:function(t,s,e){var n=e(12),i=Date.prototype,a=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(i,"toString",(function(){var t=o.call(this);return t==t?a.call(this):"Invalid Date"}))},164:function(t,s,e){"use strict";var n=e(162);e.n(n).a},165:function(t,s,e){"use strict";e(69),e(68),e(163),e(26),e(70);var n={name:"page-listing",props:["node"],computed:{formattedDate:function(){return new Date(this.node.date).toUTCString().split(" ").slice(0,4).join(" ")}}},i=(e(164),e(19)),a=Object(i.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("g-link",{staticClass:"columns box is-one-quarter",attrs:{to:t.node.path,id:"page-listing"}},[e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(this.formattedDate))])]),e("div",{staticClass:"column content is-half",attrs:{id:"content-box"}},[e("g-link",{staticClass:"title is-spaced is-size-4-mobile",attrs:{to:t.node.path}},[t._v(t._s(t.node.title))]),null!=t.node.series?e("div",{staticClass:"subtitle is-size-6-mobile"},[e("g-link",{attrs:{to:t.node.series.path}},[t._v(t._s(t.node.series.id))]),t._v(": Part "+t._s(t.node.part)+"\n    ")],1):t._e(),""!=t.node.excerpt?e("p",[e("strong",[t._v("Description: ")]),t._v(t._s(t.node.excerpt)+" ")]):t._e()],1),e("div",{staticClass:"column is-one-quarter"},["tags"in t.node&&t.node.tags.length>0?e("div",[e("p",{attrs:{id:"taglist"}},[e("strong",[t._v("Tags: ")]),t._l(t.node.tags,(function(s,n){return e("span",{key:s.id},[e("g-link",{attrs:{to:s.path}},[t._v(t._s(s.id))]),n!=t.node.tags.length-1?e("span",[t._v(", ")]):t._e()],1)}))],2)]):t._e()])])}),[],!1,null,"402c2a06",null);s.a=a.exports},172:function(t,s,e){},173:function(t,s){},187:function(t,s,e){"use strict";var n=e(172);e.n(n).a},188:function(t,s,e){"use strict";var n=e(173),i=e.n(n);s.default=i.a},208:function(t,s,e){"use strict";e.r(s);var n={components:{PageListing:e(165).a},metaInfo:{title:"Blog Posts"}},i=(e(187),e(19)),a=e(188),o=Object(i.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("div",{staticClass:"section"},[s("h1",{staticClass:"title is-1"},[this._v("Workshops")]),s("div",{staticClass:"hero is-large has-text-centered transparent"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[this._v("Nothing here yet   :(")]),s("h2",{staticClass:"subtitle"},[this._v("Check back soon for new content!")])])])])])])}),[],!1,null,null,null);"function"==typeof a.default&&Object(a.default)(o);s.default=o.exports}}]);