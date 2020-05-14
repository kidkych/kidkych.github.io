(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{161:function(t,s,a){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},177:function(t,s,a){"use strict";a.r(s);var n=a(19),e=a(161),p=a(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}p.a.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},c=function(t){var s=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===r(o[t])&&"function"==typeof o[t].render?s[t]=o[t]:a[t]=function(){return o[t]}}))},_=p.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",i={excerpt:null,title:"Post Thing"};var l=function(t){t.options[v]&&(t.options[v]=i),p.a.util.defineReactive(t.options,v,i),t.options.computed=_.computed({$frontmatter:function(){return t.options[v]}},t.options.computed)},u=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("VueRemarkRoot",[a("h1",{attrs:{id:"this-is-my-post"}},[a("a",{attrs:{href:"#this-is-my-post","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),t._v("This is my post")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",{pre:!0,attrs:{class:"language-python"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_laplacian")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scaled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    device "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device\n    adj_matrix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_adjacency_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("edge_index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    n_nodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" adj_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    deg_matrix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_degree_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adjacency_matrix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("adj_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" edge_index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    inverse_sqrt_deg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deg_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("diag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("pow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    inverse_sqrt_deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("inverse_sqrt_deg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    inverse_sqrt_deg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("diag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inverse_sqrt_deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    a_norm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inverse_sqrt_deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matmul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adj_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matmul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inverse_sqrt_deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    laplacian "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eye"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n_nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" a_norm\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" scaled "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        laplacian "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("laplacian"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eye"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n_nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" laplacian\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_adjacency_matrix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    device "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device\n    n_nodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    adj_matrix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    adj_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" adj_matrix\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_degree_matrix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adjacency_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    degree_matrix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros_like"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("adjacency_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    idxer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" degree_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    degree_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idxer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" idxer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" adjacency_matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" degree_matrix")])]),a("p",[t._v("Pytorch module for Cheby Convolution is outlined below:")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",{pre:!0,attrs:{class:"language-python"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Parameter\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChebConv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" support_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ChebConv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("support_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bias "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("features_out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_initialize_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_initialize_params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" weight_initializer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xavier_uniform_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bias_initializer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uniform_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        weight_initializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        bias_initializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scaled_laplacian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        Tx_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                Tx_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                Tx_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scaled_laplacian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matmul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                Tx_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("scaled_laplacian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matmul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Tx_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Tx_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Tx_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Tx_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        out "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Tx_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matmul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bias\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" out")])]),a("p",[t._v("The following is defining a Graph Convolution Network that leverages the chebyconv highlighted above:")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",{pre:!0,attrs:{class:"language-python"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChebyNet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ChebyNet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chebconv_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ChebConv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("support_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num_node_features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_out"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chebconv_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ChebConv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("support_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_out"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chebconv_3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ChebConv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("support_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" features_out"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num_classes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" edge_index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edge_index\n\n        scaled_laplacian "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_laplacian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("edge_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chebconv_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scaled_laplacian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" training"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("training"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chebconv_2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scaled_laplacian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" training"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("training"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chebconv_3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scaled_laplacian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log_softmax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("ul",[a("li",[t._v("item 1")]),a("li",[t._v("item 2")]),a("li",[t._v("item 3")])]),a("p",[t._v("just trying out some inline latex math ("),a("span",{staticClass:"math math-inline"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("L")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("L")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("L")])])])])]),t._v(")")]),a("div",{staticClass:"math math-display"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("L")]),a("mo",[t._v("=")]),a("mfrac",[a("mn",[t._v("1")]),a("mn",[t._v("2")])],1),a("mi",[t._v("ρ")]),a("msup",[a("mi",[t._v("v")]),a("mn",[t._v("2")])],1),a("mi",[t._v("S")]),a("msub",[a("mi",[t._v("C")]),a("mi",[t._v("L")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("L = \\frac{1}{2} \\rho v^2 S C_L")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("L")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.00744em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.32144em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("1")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mord mathdefault"},[t._v("ρ")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8641079999999999em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.32833099999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.07153em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[t._v("L")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])])])])])}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof l&&l(u);s.default=u.exports}}]);