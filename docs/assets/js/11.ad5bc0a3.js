(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{163:function(t,s,a){t.exports=a.p+"assets/img/base-segment.c5e01b7b.png"},187:function(t,s,a){"use strict";a.r(s);var e=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pages","aria-hidden":"true"}},[this._v("#")]),this._v(" Pages")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[this._v("#")]),this._v(" model")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pages"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Page")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("FaqPage")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Page")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("registerPage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'faq'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PageManager"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FaqPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Relation"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("morphMap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'faq'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" FaqPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url","aria-hidden":"true"}},[this._v("#")]),this._v(" url")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Out of the box, there are two project routes expected by chief: "),s("code",[this._v("pages.show")]),this._v(" and "),s("code",[this._v("pages.home")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("pages.show")]),this._v(" serves as a catch all for displaying all Chief managed pages.\nThis catch-all route will point to a generic PagesController that directs the request\nto the proper published page. Place this route at the end of your route definitions\nto avoid routes not triggering.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("pages.home")]),this._v(" makes the distinction with other pages that it is accessible on the root url.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"configure-route-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-route-names","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure route names")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can change the way Chief page routing works in your application.\nIf you like to use a different naming for the page routes, you can edit these in the "),s("code",[this._v("config/thinktomorrow/chief.php")]),this._v(" config file.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token shell-comment comment"}},[t._v("# config/thinktomorrow/chief.php")]),t._v("\n\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'routes'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pages-show'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pages.show'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pages-home'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pages.home'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"customizing-page-urls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customizing-page-urls","aria-hidden":"true"}},[this._v("#")]),this._v(" Customizing page urls")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The page url can be adjusted per page and per locale. This is something that is managed in the admin.\nSlashes are allowed so, for example, "),s("em",[this._v("2019/our-job-offers")]),this._v(" is an acceptable link definition.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Since pages are divided by type (news, articles, tips, ...), it makes sence to also reflect this grouping in their url.\nYou can set a predefined base url segment. This can be done by adding a "),s("code",[this._v("baseUrlSegment")]),this._v(" property on your Page class.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Article")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Page")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$baseUrlSegment")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'products'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Article")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Page")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$baseUrlSegment")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'en'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'products'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'nl'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'producten'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("All links will now start with this segment baked in. Here's how it looks in the admin:\n"),s("img",{attrs:{src:a(163),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"using-a-custom-route-resolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-custom-route-resolver","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a custom route resolver")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token shell-comment comment"}},[t._v("# App/Providers/ChiefProjectServiceProvider.php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pages"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Page")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ChiefProjectServiceProvider")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("boot")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Page"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("setRouteResolver")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$parameters")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$locale")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("localeroute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$locale")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$parameters")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#views","aria-hidden":"true"}},[this._v("#")]),this._v(" views")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("'front/PAGE_MORPHKEY/show'\n'front/pages/PAGE_MORPHKEY/show'\n'front/pages/show'\n'pages/show'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("'front/faq/show'\n'front/pages/faq/show'\n'front/pages/show'\n'pages/show'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"adding-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding modules")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Project"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Modules")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Modules"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Module")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Hero")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Module")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$labelSingular")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hoofding'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$labelPlural")]),t._v("   "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hoofdings'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Project"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Modules")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Modules"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Module")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HeroManager")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ModuleManager")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"customizing-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customizing-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" Customizing modules")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"hero"')]),t._v(" style"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"background: url({{ '),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token variable"}},[t._v("$module")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("mediaUrl")])]),t._v('(\\Thinktomorrow\\Chief\\Media\\MediaType::BACKGROUND) }}) no-repeat; background-size:cover; background-position:center;"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"container hero-title"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("h1 "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"text-white text-shade-on-white"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$module")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("title")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        @"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$module")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("content")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"editor-content text-white text-shade-on-white text-2xl"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$module")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("content")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        @"),a("span",{attrs:{class:"token keyword"}},[t._v("endif")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"module-view-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-view-paths","aria-hidden":"true"}},[this._v("#")]),this._v(" Module view paths")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("'front/modules/PARENT_MORPHKEY/PAGE_MORPHKEY'\n'front/modules/PAGE_MORPHKEY'\n'modules/PARENT_MORPHKEY/PAGE_MORPHKEY'\n'modules/PAGE_MORPHKEY'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("'front/modules/faq/contact'\n'front/modules/contact'\n'modules/faq/contact'\n'modules/contact'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Manager")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("FaqManager")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PageManager")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$labelSingular")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Faq'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$labelPlural")]),t._v("   "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Faqs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fields")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fields\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("parent")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("fields")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            InputField"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("make")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'question'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            HtmlField"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("make")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'answer'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],n=a(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The easy setup for a page is to create a model that extends the chief page class")]),t._v(" "),t._m(2),a("p",[t._v("The next step is to link the manager.")]),t._v(" "),a("p",[t._v("Linking the models to their managers is done in the ChiefProjectServiceProvider.")]),t._v(" "),a("p",[t._v("For convenience there is a default PageManager.\nWe'll come back to creating our own managers in de advanced management section.")]),t._v(" "),a("p",[t._v("So linking our FaqPage would go as follows:")]),t._v(" "),t._m(3),a("p",[t._v("While we're in the ChiefProjectServiceProvider file we might as well set up our morphMap:")]),t._v(" "),t._m(4),a("p",[t._v("We do this mapping so we don't have to access the class by it's full path, in code or in DB.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),a("p",[t._v("You can set an array in you need different segments for each locale. An array entry should hold the locale as key and the respective url segment as value.")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("By default the "),a("code",[t._v("route()")]),t._v(" helper is used for resolving page routes. You can change the way you resolve this route by defining a Closure in the boot method of your "),a("code",[t._v("ChiefProjectServiceProvider")]),t._v(".\nHere we have an example where we use the "),a("code",[t._v("localeroute()")]),t._v(" helper from our "),a("a",{attrs:{href:"https://github.com/thinktomorrow/locale",target:"_blank",rel:"noopener noreferrer"}},[t._v("locale package"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(19),t._m(20),t._v(" "),a("p",[t._v("There are a couple places we can put the view file for a page.\nThey will be used in order and will use the first one that exists.\nThe order is as follows:")]),t._v(" "),t._m(21),a("p",[t._v("So for instance for the FaqPage we set up in the previous section the views it searches are:")]),t._v(" "),t._m(22),t._m(23),t._v(" "),a("p",[t._v("To create a module you make a file in the src/Modules folder.\nThese modules should extend 'Thinktomorrow\\Chief\\Modules\\Module'.")]),t._v(" "),a("p",[t._v("To define the name of this module in the admin panel you can define the 'labelSingular' and 'labelPlural' property")]),t._v(" "),t._m(24),a("p",[t._v("The next step is to link up a manager to make this module managable through the chief admin.")]),t._v(" "),t._m(25),t._m(26),t._v(" "),a("p",[t._v("Next to the module model where we can set the names to be used, we can also customize the view that would be used.")]),t._v(" "),a("p",[t._v("To create a view for this specific module, we create views/front/modules/hero.blade.php in this case.\nThe name of the view should be the same as the module type.")]),t._v(" "),a("p",[t._v("In this view we have access to the $module variable.\nAnd there's a few thing we have access to throught that.")]),t._v(" "),a("p",[t._v("We can get the title, content, and if we have media files attached we can retrieve them as you can see in the example below.")]),t._v(" "),t._m(27),t._m(28),t._v(" "),a("p",[t._v("There are a couple places we can put the view file for a page.\nThey will be used in order and will use the first one that exists.\nThe order is as follows:")]),t._v(" "),t._m(29),a("p",[t._v("So for instance lets imagine a module 'contact' we want to style for the 'FaqPage' the views are as follows:")]),t._v(" "),t._m(30),a("p",[t._v("Once this setup is done we can create instances of these modules from the admin panel.\nAnd following that to add them to a page, simple select them from the pagebuilder dropdown.")]),t._v(" "),t._m(31),t._v(" "),a("p",[t._v("When you need more than just the pagebuilder and the title/content fields, you can create your own manager.")]),t._v(" "),a("p",[t._v("If you wanted to create the faq's with questions and answers the manager could look something like this.")]),t._v(" "),t._m(32),a("p",[t._v("These fields have many more options and are explained in more detail in the "),a("router-link",{attrs:{to:"./models.html#fields"}},[t._v("fields section")]),t._v(".")],1)])},e,!1,null,null,null);r.options.__file="pages.md";s.default=r.exports}}]);