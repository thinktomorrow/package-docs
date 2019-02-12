(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{192:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"project-skeleton"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-skeleton","aria-hidden":"true"}},[t._v("#")]),t._v(" Project Skeleton")]),t._v(" "),a("p",[t._v("This project is the skeleton we use at Think Tomorrow when we start a new project.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("To use this as the base for a project you can install this using the compose create-project cli tool.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("compose create-project thinktomorrow/project-skeleton projectname --keep-vcs\n")])])]),a("p",[t._v("Keep in mind that the --keep-vcs flag will keep the git files so you should remove the .git folder and initialize your own.\nWe run this with the flag to preserve our .gitignore files.")]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("ul",[a("li",[t._v("Default view folder structure")]),t._v(" "),a("li",[t._v("Default assets/css/js setup")]),t._v(" "),a("li",[t._v("Default packages: debugbar, bugsnag, locale")]),t._v(" "),a("li",[t._v("Default ActionEnd Middleware")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("This project is a basic scaffold.")]),t._v(" "),a("p",[t._v('One possible step is to add "thinktomorrow/chief" as an admin panel.')]),t._v(" "),a("h3",{attrs:{id:"action-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action-end","aria-hidden":"true"}},[t._v("#")]),t._v(" Action End")]),t._v(" "),a("p",[t._v("The action end middleware lets you define when the site/campagne/etc should be online/offline.")]),t._v(" "),a("p",[t._v("To start add the middleware 'actionend' to a route.\nThis route is now only accessible within the defined action timespan.")]),t._v(" "),a("p",[t._v("The actionend config lets us adjust these settings.")]),t._v(" "),a("p",[t._v("Here we can define the start and end dates and which views they should redirect to.")]),t._v(" "),a("p",[t._v("We can also disable the middleware here. This variable can also be changed in your .env file:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("ACTION_END_ENABLED")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),a("p",[t._v("The config also allows you to add multiple different timespans.\nYou can access these by passing it to the middleware as a parameter:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Route"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("view")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'welcome'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("middleware")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'actionend:projectname'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("And then add this to the config as the array key:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'projectname'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'start_at'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Carbon\\"),a("span",{attrs:{class:"token package"}},[t._v("Carbon")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("now")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("subDay")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'end_at'")]),t._v("   "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Carbon\\"),a("span",{attrs:{class:"token package"}},[t._v("Carbon")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("now")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("addDays")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'views'")]),t._v("    "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'start'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'projectname.pages.start'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'end'")]),t._v("   "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'projectname.pages.end'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="index.md";s.default=e.exports}}]);