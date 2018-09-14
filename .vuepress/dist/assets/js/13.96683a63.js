(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{173:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"pagesets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagesets","aria-hidden":"true"}},[t._v("#")]),t._v(" Pagesets")]),t._v(" "),a("p",[t._v("A pageset is a collection of pages that can be added to a page as a module.\nIn addition to this a pageset allows you to define query scopes.\nThis lets you filter the collection by published or other query scopes as you see fit.")]),t._v(" "),a("h2",{attrs:{id:"creating-pagesets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-pagesets","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating pagesets")]),t._v(" "),a("p",[t._v("To create a pageset you make a file in the src/Pagesets folder.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n "),a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Tests"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Feature"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PageSets")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pages"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Page")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PageSets"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PageSet")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("DummyPageSetRepository")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("all")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$limit")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token variable"}},[t._v("$pages")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Page"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("limit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$limit")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PageSet")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$pages")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])]),a("p",[t._v("The next thing to do is to add a reference to this pageset in the chief-settings.php config file.")]),t._v(" "),a("p",[t._v("You need to define the pageset in the pagesets array so the admin-panel has knowledge of this new pageset.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pagesets'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'published'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'action'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" PublishedPageSet"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'@published'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'parameter'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v("     "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'published pages'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("There are a few things we can define here. For starters the required field is the action which defines the class. If no method is defined (@method), the name of the array is used.\nThe parameter accepts an array with parameters for this method.\nIf the label is defined this will be used as the name of this pageset in the adminpanel. If label is not defined the name of the array is used.")]),t._v(" "),a("h2",{attrs:{id:"customizing-pagesets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-pagesets","aria-hidden":"true"}},[t._v("#")]),t._v(" Customizing pagesets")]),t._v(" "),a("p",[t._v("To customize how a pageset renders we can also customize the view that would be used.")]),t._v(" "),a("p",[t._v("To create a view for this specific module, we create views/front/modules/pageset.blade.php in this case.\nThe name of the view should be the same as the pageset type as defined in the chief-assets config file.\nYou can also put this file in a folder with the name of a page to define a view specificly for this page and pageset.")]),t._v(" "),a("p",[t._v("In this view we have access to the $pages and $parent variable.")]),t._v(" "),a("h2",{attrs:{id:"using-pagesets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-pagesets","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Pagesets")]),t._v(" "),a("p",[t._v("Once this setup is done we can create instances of these pagesets from the admin panel.\nAnd following that to add them to a page, simple select them from the pagebuilder dropdown.")])])}],!1,null,null,null);n.options.__file="index.md";s.default=n.exports}}]);