(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7XYf":function(t,e,i){"use strict";var n={name:"PageListItem",components:{DisqusCount:i("s2Jo").b},props:{node:{type:Object},fullWidth:{type:Boolean,default:!0}},computed:{formattedDate(){return new Date(this.node.date).toUTCString().split(" ").slice(0,4).join(" ")},formattedType(){return"blogPost"===this.node.__typename?"Blog":"workshop"===this.node.__typename?"Workshop":void 0}}},s=(i("ycGf"),i("KHd+")),o={name:"PageListing",components:{PageListItem:Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("ClientOnly",[e("div",{staticClass:"tile is-4 is-parent"},[e("g-link",{staticClass:"tile is-child box",attrs:{to:t.node.path,id:"page-list-item"}},[e("div",{staticClass:"columns is-mobile"},[e("div",{staticClass:"column is-half"},[e("p",[t._v(" "+t._s(this.formattedDate))])]),e("div",{staticClass:"column has-text-right is-half"},[e("span",{staticClass:"subtitle is-6"},[e("ClientOnly",[e("b-icon",{attrs:{pack:"fa",icon:"comments",id:"comment-icon"}}),e("DisqusCount",{attrs:{shortname:"kychdev",identifier:t.node.path}})],1)],1)])]),e("g-link",{staticClass:"title is-spaced is-size-4",attrs:{to:t.node.path}},[t._v(t._s(t.node.title))]),null!=t.node.collection?e("div",{staticClass:"subtitle is-size-6"},[e("g-link",{attrs:{to:t.node.collection.path}},[t._v(t._s(t.node.collection.id))]),t._v(": Part "+t._s(t.node.part)+"\n        ")],1):e("div",{staticClass:"subtitle is-size-6"}),""!=t.node.cover?e("div",[e("figure",{staticClass:"image",attrs:{id:"post-image"}},[e("g-image",{attrs:{src:t.node.cover}})],1)]):t._e(),e("div",{staticStyle:{"margin-top":"1em"}},[""!=t.node.excerpt?e("p",[e("strong",[t._v("Description: ")]),t._v(t._s(t.node.excerpt))]):t._e()])],1)],1)])}),[],!1,null,null,null).exports},data:()=>({notFullWidthStyle:{marginTop:"0em"}}),props:{posts:{type:Array},fullWidth:{type:Boolean,default:!0}},computed:{notFullWidthStyleObject(){return this.fullWidth?{}:this.notFullWidthStyle}}},r=Object(s.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"tile is-ancestor",staticStyle:{"flex-wrap":"wrap"}},this._l(this.posts,(function(e){return t("page-list-item",{key:e.node.id,attrs:{node:e.node}})})),1)}),[],!1,null,null,null);e.a=r.exports},s2Jo:function(t,e,i){"use strict";i.d(e,"a",(function(){return d})),i.d(e,"b",(function(){return c}));var n="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",s=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],o=["name","button","icon","url","logout","width","height"],r=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],a=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function u(t,e,i,n,s,o,r,a,u,d){"boolean"!=typeof r&&(u=a,a=r,r=!1);var c,l="function"==typeof i?i.options:i;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),n&&(l._scopeId=n),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):e&&(c=r?function(t){e.call(this,d(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(l.functional){var h=l.render;l.render=function(t,e){return c.call(e),h(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return i}var d=u({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return s.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return o.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(n);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;r.forEach((function(i){t.callbacks[i]=[function(t){e.$emit(i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),c=u({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(n);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return a((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return a((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function l(t,e){void 0===e&&(e={}),t.component("Disqus",d),t.component("DisqusCount",c),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(l)},y3F6:function(t,e,i){"use strict";i.r(e);i("FNk8");var n={name:"TagTemplate",metaInfo(){return{title:"tag: "+this.$page.taggedBlogs.id}},components:{PageListing:i("7XYf").a},methods:{filterPostList(t){let e=[];for(let i of t)0!==Object.keys(i.node).length&&e.push(i);return e}},computed:{filteredTaggedPosts(){let t=this.filterPostList(this.$page.taggedBlogs.belongsTo.edges);return t=t.sort((t,e)=>-1*(new Date(t.node.date).getTime()-new Date(e.node.date).getTime())),t}}},s=i("KHd+"),o=null,r=Object(s.a)(n,(function(){var t=this._self._c;return t("Layout",[t("div",{staticClass:"section"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"title is-1"},[this._v(" "+this._s(this.$page.taggedBlogs.id)+" ")]),t("div",[t("PageListing",{attrs:{posts:this.filteredTaggedPosts}})],1)])])])}),[],!1,null,null,null);"function"==typeof o&&o(r);e.default=r.exports},ycGf:function(t,e,i){"use strict";i("zrJy")},zrJy:function(t,e,i){}}]);