(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2dlX":function(t,e,s){"use strict";var i=s("A0SJ");s.n(i).a},"7XYf":function(t,e,s){"use strict";var i=s("Xhns"),n={name:"PageListing",props:{posts:{type:Array},fullWidth:{type:Boolean,default:!0}},components:{PageListItem:i.a}},a=s("KHd+"),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"is-centered is-multiline",class:{columns:!t.fullWidth}},t._l(this.posts,(function(e){return s("PageListItem",{key:e.node.id,attrs:{node:e.node,fullWidth:t.fullWidth}})})),1)}),[],!1,null,null,null);e.a=o.exports},A0SJ:function(t,e,s){},WLJa:function(t,e,s){"use strict";var i={components:{Navbar:s("nY3v").a}},n=s("KHd+"),a=s("Kw5r"),o=a.a.config.optionMergeStrategies.computed,l={metadata:{siteName:"KychDev.net"}},r=function(t){var e=t.options;e.__staticData?e.__staticData.data=l:(e.__staticData=a.a.observable({data:l}),e.computed=o({$static:function(){return e.__staticData.data}},e.computed))},c=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("Navbar"),this._t("default")],2)}),[],!1,null,null,null);"function"==typeof r&&r(c);e.a=c.exports},Xhns:function(t,e,s){"use strict";s("oVuX"),s("+2oP"),s("DQNa"),s("rB9j"),s("EnZy");var i={name:"PageListItem",props:{node:{type:Object},fullWidth:{type:Boolean,default:!0}},computed:{formattedDate:function(){return new Date(this.node.date).toUTCString().split(" ").slice(0,4).join(" ")}}},n=(s("2dlX"),s("KHd+")),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("client-only",[s("g-link",{staticClass:"box column",class:{"is-four-fifths":!t.fullWidth},attrs:{to:t.node.path,id:"page-listing"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-fifth"},[s("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(this.formattedDate))])]),s("div",{staticClass:"column content has-text-left",attrs:{id:"content-box"}},[s("g-link",{staticClass:"title is-spaced is-size-4-mobile",attrs:{to:t.node.path}},[t._v(t._s(t.node.title))]),null!=t.node.series?s("div",{staticClass:"subtitle is-size-6-mobile"},[s("g-link",{attrs:{to:t.node.series.path}},[t._v(t._s(t.node.series.id))]),t._v(": Part "+t._s(t.node.part)+"\n        ")],1):s("div",{staticClass:"subtitle is-size-6-mobile"}),s("div",[""!=t.node.excerpt?s("p",[s("strong",[t._v("Description: ")]),t._v(t._s(t.node.excerpt)+" ")]):t._e()])],1)])])],1)}),[],!1,null,null,null);e.a=a.exports},aK7f:function(t,e,s){},gEGz:function(t,e,s){"use strict";var i=s("aK7f");s.n(i).a},gtNV:function(t,e,s){"use strict";s.r(e),s.d(e,"main",(function(){return h})),s.d(e,"clear",(function(){return f}));s("yyme"),s("2B1R");var i,n=[11,7,5,4,5,7,11],a=[7,5,4,3,4,5,7],o=[7,5,4,5,7],l=null,r=null,c=null,d=null,u=[];function h(t){(i=t).setup=function(){l=document.getElementById("herocontainer").offsetWidth,r=document.getElementById("heroid").offsetHeight,i.createCanvas(l,r).parent("p5canvas"),i.frameRate(2),i.calcViewSize(),i.getpoints(c)},i.calcViewSize=function(){l=document.getElementById("herocontainer").offsetWidth,r=document.getElementById("heroid").offsetHeight,l<=767?(c=o,d=r<l?r/c[0]*.65:r/c[0]*.35):d=r/((c=l/r<.8||l/r>2?a:n)[0]-1)*.55},i.draw=function(){i.clear(),i.drawstrokes(),i.draw_layers()},i.getpoints=function(t){u=[];for(var e=t.length,s=i.width/e-1,n=d,a=0;a<e;a++){var o=s/2+a*s,l=t[a],r=l%2==1,c=Math.floor(i.height/2),h=null,f=null,p=[];!0===r?(h=(l-1)/2,f=n,p.push([o,c])):(h=l/2,f=n/2);for(var m=0;m<h;m++)p.push([o,c+f],[o,c-f]),f+=n;u.push(p)}},i.drawstrokes=function(){for(var t=u.length,e=1;e<t;e++)for(var s=u[e],n=u[e-1],a=0;a<s.length;a++)for(var o=0;o<n.length;o++){var l=n[o][0],r=n[o][1],c=s[a][0],d=s[a][1],h=i.random(0,255);i.stroke(115,115,115,Math.floor(h)),i.line(l,r,c,d)}},i.draw_neuron=function(t){var e=i.sqrt(i.height*i.width*5e-4/(i.PI/4)),s=t[0],n=t[1];i.ellipse(s,n,e,e)},i.draw_layers=function(){i.stroke(100,100,100,255),i.fill(i.color(0,0,0,255));for(var t=u.length,e=0;e<t;e++){u[e].map(i.draw_neuron)}},i.windowResized=function(){i.calcViewSize(),i.resizeCanvas(l,r),i.getpoints(c),console.log("size: "+i.width+", "+i.height)}}function f(){i.remove()}},iyQ6:function(t,e,s){"use strict";s.r(e);s("+2oP");var i={name:"NeuralHead",mounted:function(){this.P5=s("I335"),this.p5src=s("gtNV"),new this.P5(this.p5src.main)},beforeDestroy:function(){this.p5src.clear()}},n=(s("wmX/"),s("KHd+")),a=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"neuralhead"}},[e("client-only",[e("div",{staticClass:"neuralholder",attrs:{id:"p5canvas"}})]),e("div",{staticClass:"transparent hero is-fullheight has-text-centered",attrs:{id:"heroid"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container",attrs:{id:"herocontainer"}},[e("p",{staticClass:"title is-size-4-mobile has-text-primary is-spaced",attrs:{id:"quote"}},[this._v("\n                    The only way of discovering the limits of the possible is to venture a little way past them\n                    into the impossible\n                ")]),e("p",{staticClass:"subtitle is-size-6-mobile has-text-warning",attrs:{id:"quoteauthor"}},[this._v("\n                    Arthur C. Clarke\n                ")]),e("b-button",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"transparent",attrs:{href:"#indexTitle","icon-right":"chevron-down",rounded:"",tag:"a"}})],1)])])],1)}),[],!1,null,null,null).exports,o=s("WLJa"),l={metaInfo:{title:"Home"},components:{PageListing:s("7XYf").a,NeuralHead:a,Layout:o.a},computed:{mostRecentList:function(){return this.$page.blogposts.edges.slice(0,3)}}},r=(s("gEGz"),null),c=Object(n.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("NeuralHead"),s("div",{staticClass:"section",attrs:{id:"indexSection"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"box content"},[s("h1",{staticClass:"title"},[s("span",{attrs:{id:"indexTitle"}},[t._v(" ")]),t._v("\n            In Search of the Global Optima.\n          ")]),s("p",{staticClass:"is-size-5-tablet"},[t._v("\n            It is said that truly understanding something is predicated on the ability to explain it. As such\n            this website is meant to cultivate the latter, with the aim of achieving the prior. I intend this to serve\n            as a portfolio, a blog, and a collection of workshops with which newcomers can learn and the experienced\n            can gain perspective. My name is Chirag Karia, and this is my manifold.\n          ")]),s("p",{staticClass:"is-size-5-tablet"},[t._v("\n            It shouldn't need to be said, but just for posterity: all opinions are my own and they are not\n            representative of my employers or my colleagues.\n          ")])]),s("div",{staticClass:"box",attrs:{id:"mostRecent"}},[s("h1",{staticClass:"title"},[t._v("Most Recent Posts")]),s("PageListing",{attrs:{posts:this.mostRecentList,"full-width":!1}})],1),s("div",{staticClass:"box"},[s("h1",{staticClass:"title"},[t._v("Topics I've Written On")]),t.$page.tags.edges.length>0?s("span",t._l(t.$page.tags.edges,(function(e,i){return s("span",{staticClass:"is-size-5-mobile is-size-4-tablet"},[s("g-link",{attrs:{to:e.node.path}},[t._v(t._s(e.node.id))]),i!=t.$page.tags.edges.length-1?s("span",[t._v(", ")]):t._e()],1)})),0):t._e()])])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(c);e.default=c.exports},"wmX/":function(t,e,s){"use strict";var i=s("xr0G");s.n(i).a},xr0G:function(t,e,s){}}]);