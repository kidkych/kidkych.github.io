(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2dlX":function(t,e,n){"use strict";var i=n("A0SJ");n.n(i).a},A0SJ:function(t,e,n){},DQNa:function(t,e,n){var i=n("busE"),s=Date.prototype,o=s.toString,r=s.getTime;new Date(NaN)+""!="Invalid Date"&&i(s,"toString",(function(){var t=r.call(this);return t==t?o.call(this):"Invalid Date"}))},Xhns:function(t,e,n){"use strict";n("oVuX"),n("+2oP"),n("DQNa"),n("rB9j"),n("EnZy");var i={name:"PageListItem",components:{DisqusCount:n("s2Jo").b},props:{node:{type:Object},fullWidth:{type:Boolean,default:!0}},computed:{formattedDate:function(){return new Date(this.node.date).toUTCString().split(" ").slice(0,4).join(" ")},formattedType:function(){return"blogPost"===this.node.__typename?"Blog":"workshop"===this.node.__typename?"Workshop":void 0}}},s=(n("2dlX"),n("KHd+")),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ClientOnly",[n("div",{staticClass:"tile is-4 is-parent"},[n("g-link",{staticClass:"tile is-child box",attrs:{to:t.node.path,id:"page-list-item"}},[n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column is-half"},[n("p",[t._v(" "+t._s(this.formattedDate))]),"__typename"in t.node?n("p",[t._v(" "+t._s(this.formattedType))]):t._e()]),n("div",{staticClass:"column has-text-right is-half"},[n("span",{staticClass:"subtitle is-6"},[n("b-icon",{attrs:{pack:"fa",icon:"comments",id:"comment-icon"}}),n("DisqusCount",{attrs:{shortname:"kychdev",identifier:t.node.path}})],1)])]),n("g-link",{staticClass:"title is-spaced is-size-4",attrs:{to:t.node.path}},[t._v(t._s(t.node.title))]),null!=t.node.collection?n("div",{staticClass:"subtitle is-size-6"},[n("g-link",{attrs:{to:t.node.collection.path}},[t._v(t._s(t.node.collection.id))]),t._v(": Part "+t._s(t.node.part)+"\n          ")],1):n("div",{staticClass:"subtitle is-size-6"}),""!=t.node.cover?n("div",[n("figure",{staticClass:"image",attrs:{id:"post-image"}},[n("g-image",{attrs:{src:t.node.cover}})],1)]):t._e(),n("div",{staticStyle:{"margin-top":"1em"}},[""!=t.node.excerpt?n("p",[n("strong",[t._v("Description: ")]),t._v(t._s(t.node.excerpt))]):t._e()])],1)],1)])}),[],!1,null,null,null);e.a=o.exports},s2Jo:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d}));var i="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",s=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],o=["name","button","icon","url","logout","width","height"],r=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],a=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function u(t,e,n,i,s,o,r,a,u,c){"boolean"!=typeof r&&(u=a,a=r,r=!1);var d,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),i&&(l._scopeId=i),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=d):e&&(d=r?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(l.functional){var h=l.render;l.render=function(t,e){return d.call(e),h(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,d):[d]}return n}var c=u({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return s.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return o.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(i);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;r.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),d=u({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(i);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return a((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return a((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function l(t,e){void 0===e&&(e={}),t.component("Disqus",c),t.component("DisqusCount",d),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(l)},tkto:function(t,e,n){var i=n("I+eb"),s=n("ewvW"),o=n("33Wh");i({target:"Object",stat:!0,forced:n("0Dky")((function(){o(1)}))},{keys:function(t){return o(s(t))}})},y3F6:function(t,e,n){"use strict";n.r(e);n("tkto");var i=n("uFwe"),s={name:"TagTemplate",metaInfo:function(){return{title:"tagged: "+this.$page.taggedBlogs.id}},components:{PageListing:n("Xhns").a},computed:{filteredBlogPosts:function(){var t,e=[],n=Object(i.a)(this.$page.taggedBlogs.belongsTo.edges);try{for(n.s();!(t=n.n()).done;){var s=t.value;0!==Object.keys(s.node).length&&e.push(s.node)}}catch(t){n.e(t)}finally{n.f()}return e}}},o=n("KHd+"),r=null,a=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-1"},[this._v(" "+this._s(this.$page.taggedBlogs.id)+" ")]),this.filteredBlogPosts.length>0?e("div",[e("h2",{staticClass:"title is-4"},[this._v(" Blog Posts")]),this._l(this.$page.taggedBlogs.belongsTo.edges,(function(t){return e("PageListing",{key:t.node.id,attrs:{node:t.node}})}))],2):this._e()])])])}),[],!1,null,null,null);"function"==typeof r&&r(a);e.default=a.exports}}]);