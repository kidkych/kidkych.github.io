(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2dlX":function(t,e,i){"use strict";var s=i("A0SJ");i.n(s).a},"7XYf":function(t,e,i){"use strict";i("oVuX"),i("+2oP"),i("DQNa"),i("rB9j"),i("EnZy");var s={name:"PageListItem",components:{DisqusCount:i("s2Jo").b},props:{node:{type:Object},fullWidth:{type:Boolean,default:!0}},computed:{formattedDate:function(){return new Date(this.node.date).toUTCString().split(" ").slice(0,4).join(" ")},formattedType:function(){return"blogPost"===this.node.__typename?"Blog":"workshop"===this.node.__typename?"Workshop":void 0}}},n=(i("2dlX"),i("KHd+")),a={name:"PageListing",components:{PageListItem:Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ClientOnly",[i("div",{staticClass:"tile is-4 is-parent"},[i("g-link",{staticClass:"tile is-child box",attrs:{to:t.node.path,id:"page-list-item"}},[i("div",{staticClass:"columns is-mobile"},[i("div",{staticClass:"column is-half"},[i("p",[t._v(" "+t._s(this.formattedDate))]),"__typename"in t.node?i("p",[t._v(" "+t._s(this.formattedType))]):t._e()]),i("div",{staticClass:"column has-text-right is-half"},[i("span",{staticClass:"subtitle is-6"},[i("ClientOnly",[i("b-icon",{attrs:{pack:"fa",icon:"comments",id:"comment-icon"}}),i("DisqusCount",{attrs:{shortname:"kychdev",identifier:t.node.path}})],1)],1)])]),i("g-link",{staticClass:"title is-spaced is-size-4",attrs:{to:t.node.path}},[t._v(t._s(t.node.title))]),null!=t.node.collection?i("div",{staticClass:"subtitle is-size-6"},[i("g-link",{attrs:{to:t.node.collection.path}},[t._v(t._s(t.node.collection.id))]),t._v(": Part "+t._s(t.node.part)+"\n        ")],1):i("div",{staticClass:"subtitle is-size-6"}),""!=t.node.cover?i("div",[i("figure",{staticClass:"image",attrs:{id:"post-image"}},[i("g-image",{attrs:{src:t.node.cover}})],1)]):t._e(),i("div",{staticStyle:{"margin-top":"1em"}},[""!=t.node.excerpt?i("p",[i("strong",[t._v("Description: ")]),t._v(t._s(t.node.excerpt))]):t._e()])],1)],1)])}),[],!1,null,null,null).exports},data:function(){return{notFullWidthStyle:{marginTop:"0em"}}},props:{posts:{type:Array},fullWidth:{type:Boolean,default:!0}},computed:{notFullWidthStyleObject:function(){return this.fullWidth?{}:this.notFullWidthStyle}}},o=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tile is-ancestor",staticStyle:{"flex-wrap":"wrap"}},this._l(this.posts,(function(t){return e("page-list-item",{key:t.node.id,attrs:{node:t.node}})})),1)}),[],!1,null,null,null);e.a=o.exports},A0SJ:function(t,e,i){},ScZE:function(t,e,i){},WLJa:function(t,e,i){"use strict";var s={components:{Navbar:i("nY3v").a}},n=(i("jZT6"),i("KHd+")),a=i("Kw5r"),o=a.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"KychDev.net"}},l=function(t){var e=t.options;e.__staticData?e.__staticData.data=r:(e.__staticData=a.a.observable({data:r}),e.computed=o({$static:function(){return e.__staticData.data}},e.computed))},c=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("Navbar"),this._t("default")],2)}),[],!1,null,null,null);"function"==typeof l&&l(c);e.a=c.exports},aK7f:function(t,e,i){},gEGz:function(t,e,i){"use strict";var s=i("aK7f");i.n(s).a},gtNV:function(t,e,i){"use strict";i.r(e),i.d(e,"main",(function(){return h})),i.d(e,"clear",(function(){return f}));i("yyme"),i("2B1R");var s,n=[11,7,5,4,5,7,11],a=[7,5,4,3,4,5,7],o=[7,5,4,5,7],r=null,l=null,c=null,d=null,u=[];function h(t){(s=t).setup=function(){r=document.getElementById("herocontainer").offsetWidth,l=document.getElementById("heroid").offsetHeight,s.createCanvas(r,l).parent("p5canvas"),s.frameRate(2),s.calcViewSize(),s.getpoints(c)},s.calcViewSize=function(){r=document.getElementById("herocontainer").offsetWidth,l=document.getElementById("heroid").offsetHeight,r<=767?(c=o,d=l<r?l/c[0]*.65:l/c[0]*.5):d=l/((c=r/l<.8||r/l>2?a:n)[0]-1)*.55},s.draw=function(){s.clear(),s.drawstrokes(),s.draw_layers()},s.getpoints=function(t){u=[];for(var e=t.length,i=s.width/e-1,n=d,a=0;a<e;a++){var o=i/2+a*i,r=t[a],l=r%2==1,c=Math.floor(s.height/2),h=null,f=null,p=[];!0===l?(h=(r-1)/2,f=n,p.push([o,c])):(h=r/2,f=n/2);for(var v=0;v<h;v++)p.push([o,c+f],[o,c-f]),f+=n;u.push(p)}},s.drawstrokes=function(){for(var t=u.length,e=1;e<t;e++)for(var i=u[e],n=u[e-1],a=0;a<i.length;a++)for(var o=0;o<n.length;o++){var r=n[o][0],l=n[o][1],c=i[a][0],d=i[a][1],h=s.random(0,255);s.stroke(115,115,115,Math.floor(h)),s.line(r,l,c,d)}},s.draw_neuron=function(t){var e=s.sqrt(s.height*s.width*5e-4/(s.PI/4)),i=t[0],n=t[1];s.ellipse(i,n,e,e)},s.draw_layers=function(){s.stroke(100,100,100,255),s.fill(s.color(0,0,0,255));for(var t=u.length,e=0;e<t;e++){u[e].map(s.draw_neuron)}},s.windowResized=function(){s.calcViewSize(),s.resizeCanvas(r,l),s.getpoints(c),console.log("size: "+s.width+", "+s.height)}}function f(){s.remove()}},iyQ6:function(t,e,i){"use strict";i.r(e);i("+2oP");var s={name:"NeuralHead",mounted:function(){this.P5=i("NCWt"),this.p5src=i("gtNV"),new this.P5(this.p5src.main)},beforeDestroy:function(){this.p5src.clear()}},n=(i("wmX/"),i("KHd+")),a=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"neuralhead"}},[e("div",{staticClass:"neuralholder",attrs:{id:"p5canvas"}}),e("div",{staticClass:"transparent hero is-fullheight has-text-centered",attrs:{id:"heroid"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container",attrs:{id:"herocontainer"}},[e("p",{staticClass:"title is-size-4-mobile has-text-primary is-spaced",attrs:{id:"quote"}},[this._v("\n                    The only way of discovering the limits of the possible is to venture a little way past them\n                    into the impossible\n                ")]),e("p",{staticClass:"subtitle is-size-6-mobile has-text-warning",attrs:{id:"quoteauthor"}},[this._v("\n                    Arthur C. Clarke\n                ")]),e("b-button",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"transparent",attrs:{href:"#indexTitle","icon-right":"chevron-down",rounded:"",tag:"a",id:"scrollButton"}})],1)])])])}),[],!1,null,null,null).exports,o=i("WLJa"),r={metaInfo:{title:"Home"},components:{PageListing:i("7XYf").a,NeuralHead:a,Layout:o.a},data:function(){return{headerHeight:0,navbarHeight:0}},mounted:function(){this.getHeaderHeight(),this.getNavbarHeight(),window.addEventListener("resize",this.getHeaderHeight),window.addEventListener("resize",this.getNavbarHeight)},methods:{getHeaderHeight:function(t){this.headerHeight=document.getElementById("neuralhead").offsetHeight},getNavbarHeight:function(t){this.navbarHeight=document.getElementById("navbar").offsetHeight}},computed:{indexContentHeight:function(){return this.headerHeight-3*this.navbarHeight},mostRecentList:function(){return this.$page.blogposts.edges.slice(0,3)}},beforeDestroy:function(){window.removeEventListener("resize",this.getHeaderHeight),window.removeEventListener("resize",this.getNavbarHeight)}},l=(i("gEGz"),null),c=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("NeuralHead"),i("div",{staticClass:"section",style:{minHeight:t.indexContentHeight+"px"},attrs:{id:"indexSection"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"box content",attrs:{id:"boxColor"}},[i("h1",{staticClass:"title"},[i("span",{attrs:{id:"indexTitle"}},[t._v(" ")]),t._v("\n            In Search of the Global Optima.\n          ")]),i("p",{staticClass:"is-size-5-tablet"},[t._v("\n            True understanding of a subject is predicated on the ability to explain it; with\n            this website I endeavour to cultivate the latter, in pursuit of the prior. It will serve\n            as a portfolio, a blog, and a collection of workshops with which newcomers can learn and the experienced\n            can gain perspective. I am Chirag Karia, and this is my manifold.\n          ")])]),i("div",{staticClass:"box",attrs:{id:"mostRecent"}},[i("div",{staticClass:"columns is-mobile is-vcentered"},[i("div",{staticClass:"column is-half"},[i("h1",{staticClass:"title"},[t._v("Recent Posts")])]),i("div",{staticClass:"column is-half has-text-right"},[i("span",[i("g-link",{staticClass:"is-size-4",attrs:{to:"/all-posts"}},[i("div",[t._v("\n                    All Posts\n                    "),i("b-icon",{staticClass:"is-size-6",attrs:{pack:"fas",icon:"arrow-right",id:"arrowicon"}})],1)])],1)])]),i("PageListing",{attrs:{posts:this.mostRecentList,"full-width":!1}})],1),i("div",{staticClass:"box",attrs:{id:"boxColor"}},[i("div",{staticClass:"columns is-mobile is-vcentered"},[i("div",{staticClass:"column is-half"},[i("h1",{staticClass:"title"},[t._v("Recent Tags")])]),i("div",{staticClass:"column is-half has-text-right"})]),t._l(t.$page.tags.edges,(function(e,s){return i("span",{staticClass:"is-size-5-mobile is-size-4-tablet"},[i("g-link",{attrs:{to:e.node.path}},[t._v(t._s(e.node.id))]),s!=t.$page.tags.edges.length-1?i("span",[t._v(", ")]):t._e()],1)}))],2)])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(c);e.default=c.exports},jZT6:function(t,e,i){"use strict";var s=i("ScZE");i.n(s).a},"wmX/":function(t,e,i){"use strict";var s=i("xr0G");i.n(s).a},xr0G:function(t,e,i){}}]);