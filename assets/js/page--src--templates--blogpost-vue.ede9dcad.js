(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ArFi:function(t,e,i){"use strict";var n=i("SpGN");i.n(n).a},DQNa:function(t,e,i){var n=i("busE"),s=Date.prototype,o=s.toString,r=s.getTime;new Date(NaN)+""!="Invalid Date"&&n(s,"toString",(function(){var t=r.call(this);return t==t?o.call(this):"Invalid Date"}))},SpGN:function(t,e,i){},TaP1:function(t,e,i){},ToJy:function(t,e,i){"use strict";var n=i("I+eb"),s=i("HAuM"),o=i("ewvW"),r=i("0Dky"),a=i("pkCn"),u=[],c=u.sort,d=r((function(){u.sort(void 0)})),l=r((function(){u.sort(null)})),h=a("sort");n({target:"Array",proto:!0,forced:d||!l||!h},{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),s(t))}})},Y0wu:function(t,e,i){"use strict";i.r(e);i("ma9I"),i("oVuX"),i("+2oP"),i("ToJy"),i("DQNa"),i("rB9j"),i("EnZy"),i("TaP1");var n={name:"Post",metaInfo:function(){return{title:this.$page.post.title}},components:{Disqus:i("s2Jo").a},props:{post:{type:Object}},computed:{formattedDate:function(){return new Date(this.post.date).toUTCString().split(" ").slice(0,4).join(" ")},tagList:function(){for(var t=[],e=this.post.tags.sort((function(t,e){return t.id.toLowerCase()<e.id.toLowerCase()?-1:1})),i=0,n=e.length-1;i<n+1;i++)t=t.concat({tag:e[i],last:i===n});return t}}},s=(i("ArFi"),i("KHd+")),o={name:"blogpost",components:{Post:Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"section",staticStyle:{"padding-bottom":"0px"}},[i("div",{staticClass:"container"},[i("nav",{staticClass:"columns"},[i("div",{staticClass:"column is-three-fifths"},[i("div",[i("p",{staticClass:"title is-2"},[t._v(t._s(this.post.title))]),null!=this.post.collection?i("p",{staticClass:"subtitle"},[i("g-link",{attrs:{to:this.post.collection.path}},[t._v(t._s(this.post.collection.id))]),t._v(":\n                Part "+t._s(this.post.part)+"\n              ")],1):t._e(),i("div",{staticClass:"is-hidden-tablet",staticStyle:{"margin-bottom":"1.5em"}},[i("p",[t._v("Posted: "+t._s(this.formattedDate))]),i("p",[t._v("By: "+t._s(this.post.authors))])]),this.tagList.length>0?i("div",[i("strong",[t._v(" Tags: ")]),t._l(this.tagList,(function(e){return i("span",{key:e.tag.id},[i("g-link",{attrs:{to:e.tag.path}},[t._v(t._s(e.tag.id))]),e.last?t._e():i("span",[t._v(", ")])],1)}))],2):t._e()])]),i("div",{staticClass:"column is-hidden-mobile is-two-fifths has-text-right"},[i("p",{staticClass:"subtitle",staticStyle:{"margin-bottom":"0em"}},[t._v(" Posted: "+t._s(this.formattedDate))]),i("p",{staticClass:"subtitle"},[t._v(" By: "+t._s(this.post.authors))])])])])]),i("div",{staticClass:"section",attrs:{id:"contentSection"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"content is-medium"},[i("VueRemarkContent")],1)])]),i("div",{staticClass:"section",attrs:{id:"commentSection"}},[i("div",{staticClass:"container"},[i("Disqus",{attrs:{shortname:"kychdev",identifier:this.post.path,url:"https://kychdev.net/"+this.post.path}})],1)])])}),[],!1,null,null,null).exports}},r=null,a=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("Post",{attrs:{post:this.$page.post}})],1)}),[],!1,null,null,null);"function"==typeof r&&r(a);e.default=a.exports},s2Jo:function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return d}));var n="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",s=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],o=["name","button","icon","url","logout","width","height"],r=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],a=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function u(t,e,i,n,s,o,r,a,u,c){"boolean"!=typeof r&&(u=a,a=r,r=!1);var d,l="function"==typeof i?i.options:i;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),n&&(l._scopeId=n),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=d):e&&(d=r?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(l.functional){var h=l.render;l.render=function(t,e){return d.call(e),h(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,d):[d]}return i}var c=u({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return s.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return o.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(n);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;r.forEach((function(i){t.callbacks[i]=[function(t){e.$emit(i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),d=u({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(n);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return a((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return a((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function l(t,e){void 0===e&&(e={}),t.component("Disqus",c),t.component("DisqusCount",d),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(l)}}]);