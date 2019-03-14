(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"advanced-page-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-page-management","aria-hidden":"true"}},[t._v("#")]),t._v(" Advanced Page Management")]),t._v(" "),s("h2",{attrs:{id:"grouping-pages-in-the-pagebuilder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grouping-pages-in-the-pagebuilder","aria-hidden":"true"}},[t._v("#")]),t._v(" Grouping pages in the pagebuilder")]),t._v(" "),s("p",[t._v("One of the ways to group pages together is to add them to the pagebuilder next to eachother.\nThese pages will be grouped and the view can be customized by creating a view in the modules folder with the name of the type of page.\nFor instance, lets take a page called product. We can make multiple product pages.\nNow if we want to show 3 products on the homepage we can add those products in the pagebuilder and if we have a view 'modules/product.blade.php'\nthat view will be used to render those items.")]),t._v(" "),s("p",[t._v("To get this working properly make sure you filename is the same as the key you defined that page as in the Chief.php config file.")]),t._v(" "),s("h2",{attrs:{id:"using-query-sets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-query-sets","aria-hidden":"true"}},[t._v("#")]),t._v(" Using query sets")]),t._v(" "),s("p",[t._v("A pageset is a collection of pages that can be added to a page as a module.\nIn addition to this a pageset allows you to define query scopes.\nThis lets you filter the collection by published or other query scopes as you see fit.")]),t._v(" "),s("h3",{attrs:{id:"creating-pagesets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-pagesets","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating pagesets")]),t._v(" "),s("p",[t._v("To create a pageset you make a file in the src/Pagesets folder.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n "),s("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Tests"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Feature"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PageSets")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pages"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Page")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PageSets"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PageSet")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DummyPageSetRepository")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("all")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$limit")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token variable"}},[t._v("$pages")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Page"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("limit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$limit")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("PageSet")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$pages")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])]),s("p",[t._v("The next thing to do is to add a reference to this pageset in the chief-settings.php config file.")]),t._v(" "),s("p",[t._v("You need to define the pageset in the pagesets array so the admin-panel has knowledge of this new pageset.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pagesets'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'published'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'action'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" PublishedPageSet"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'@published'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'parameter'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v("     "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'published pages'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("There are a few things we can define here. For starters the required field is the action which defines the class. If no method is defined (@method), the name of the array is used.\nThe parameter accepts an array with parameters for this method.\nIf the label is defined this will be used as the name of this pageset in the adminpanel. If label is not defined the name of the array is used.")]),t._v(" "),s("h3",{attrs:{id:"customizing-pagesets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customizing-pagesets","aria-hidden":"true"}},[t._v("#")]),t._v(" Customizing pagesets")]),t._v(" "),s("p",[t._v("To customize how a pageset renders we can also customize the view that would be used.")]),t._v(" "),s("p",[t._v("To create a view for this specific module, we create views/front/modules/pageset.blade.php in this case.\nThe name of the view should be the same as the pageset type as defined in the chief-assets config file.\nYou can also put this file in a folder with the name of a page to define a view specificly for this page and pageset.")]),t._v(" "),s("p",[t._v("In this view we have access to the $pages and $parent variable.")]),t._v(" "),s("h3",{attrs:{id:"using-pagesets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-pagesets","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Pagesets")]),t._v(" "),s("p",[t._v("Once this setup is done we can create instances of these pagesets from the admin panel.\nAnd following that to add them to a page, simple select them from the pagebuilder dropdown.")]),t._v(" "),s("h2",{attrs:{id:"using-snippets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-snippets","aria-hidden":"true"}},[t._v("#")]),t._v(" Using snippets")])])}],!1,null,null,null);n.options.__file="advanced_page_management.md";a.default=n.exports}}]);