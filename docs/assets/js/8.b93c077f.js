(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{185:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basics","aria-hidden":"true"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),s("h2",{attrs:{id:"your-first-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#your-first-page","aria-hidden":"true"}},[t._v("#")]),t._v(" Your first page")]),t._v(" "),s("p",[t._v("Let's make sure a page can be rendered in the browser. You'll need to add a page view to your project.")]),t._v(" "),s("p",[t._v("Create a file "),s("code",[t._v("pages/show.blade.php")]),t._v(" and add the following code to it:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- resources/views/pages/show.blade.php --\x3e")]),t._v("\n\n"),s("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {!! $model->renderChildren() !!}\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("The key method here is "),s("code",[t._v("renderChildren()")]),t._v(", which renders the page content.")]),t._v(" "),s("p",[t._v("Also note that the html structure is simplified for demonstration purposes. In your project you probably want to use your own html boilerplate.")]),t._v(" "),s("h4",{attrs:{id:"page-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-modules","aria-hidden":"true"}},[t._v("#")]),t._v(" Page modules")]),t._v(" "),s("p",[t._v("A page is built up by so called "),s("em",[t._v("modules")]),t._v(".\nWe'll explain modules in depth later on. For now, it's sufficient to know that each module represents a block of content and takes care of its own rendering. So you'll need a default template for modules as well.")]),t._v(" "),s("p",[t._v("Create a module view "),s("code",[t._v("modules/show.blade.php")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- resources/views/modules/show.blade.php --\x3e")]),t._v("\n\n{!! $module->content !!}\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Default templates")]),t._v(" "),s("p",[t._v("Both "),s("code",[t._v("pages/show.blade.php")]),t._v(" and "),s("code",[t._v("modules/show.blade.php")]),t._v(" files are default templates that serve as fallback for respectively all pages and modules.\nIn the "),s("a",{attrs:{href:"#templates"}},[t._v("Templates")]),t._v(" section we will go into further detail on how to make view templates for specific "),s("a",{attrs:{href:"#page-types"}},[t._v("page types")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Changing the view folders")]),t._v(" "),s("p",[t._v("Default location for page templates is "),s("code",[t._v("resources/views/pages/")]),t._v(" and for modules "),s("code",[t._v("resources/views/modules")]),t._v(".\nIf these view directories conflict with your project, you can always change the directory settings in the\nconfig "),s("code",[t._v("thinktomorrow.chief.base-view-paths.pages")]),t._v(". Note that this will have affect on all page renders.")])]),t._v(" "),s("h2",{attrs:{id:"static-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" Static pages")]),t._v(" "),s("p",[t._v("If you create a page in the admin, you should now be able to view the result in your browser.\nSo now you are able to deal with static pages. Let's go on and explore how to tackle collections.")]),t._v(" "),s("h2",{attrs:{id:"collections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collections","aria-hidden":"true"}},[t._v("#")]),t._v(" Collections")]),t._v(" "),s("p",[t._v("Apart from static pages, you can also define a collection of pages (e.g articles, blogposts, products, etc).\nTo get started with collection we create a model for the collection.")]),t._v(" "),s("p",[t._v("Let's make a 'articles' collection.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pages"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Page")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Article")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Page")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("To make this managed through the chief admin panel we need to link it to a manager.\nTo link our own models and make them managed you should create a service provider to do this setup.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ChiefProjectServiceProvider")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" BaseChiefProjectServiceProvider"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ChiefProjectServiceProvider")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BaseChiefProjectServiceProvider")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("boot")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Boot core registrations")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("boot")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Pages")]),t._v("\n        "),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("registerPage")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'articles'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PageManager"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Article"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Let's just use the default PageManager for now and link it to our newly created article model.")]),t._v(" "),s("p",[t._v("Perfect! Now you have a collection of products that you can manage through the chief admin panel.\nBut it will still use the default pages.show view to display these pages so let's use our own view for these articles.")]),t._v(" "),s("p",[t._v("To use your own layout it's as easy as making a view file at 'pages.REGISTRATION_KEY' so for our example of articles we would make the view\npages.articles.blade.php.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- resources/views/pages/articles.blade.php --\x3e")]),t._v("\n\n"),s("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {!! $model->renderChildren() !!}\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules","aria-hidden":"true"}},[t._v("#")]),t._v(" Modules")]),t._v(" "),s("h2",{attrs:{id:"sets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sets","aria-hidden":"true"}},[t._v("#")]),t._v(" Sets")]),t._v(" "),s("h2",{attrs:{id:"templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templates","aria-hidden":"true"}},[t._v("#")]),t._v(" Templates")]),t._v(" "),s("h2",{attrs:{id:"registrering-chief-models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registrering-chief-models","aria-hidden":"true"}},[t._v("#")]),t._v(" Registrering chief models")]),t._v(" "),s("p",[t._v("In the "),s("code",[t._v("app/Providers")]),t._v(" folder add a file named "),s("code",[t._v("ChiefProjectServiceProvider")]),t._v(". This file can be used to register all your manageable models.\nAn example of this is:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pages"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PageManager")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ChiefProjectServiceProvider")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" BaseChiefProjectServiceProvider"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ChiefProjectServiceProvider")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BaseChiefProjectServiceProvider")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("boot")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Boot core registrations")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("boot")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Example of registering event pages")]),t._v("\n        "),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("registerPage")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'events'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PageManager"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\"),s("span",{attrs:{class:"token package"}},[t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Events"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Event")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Make sure to add this service provider to your "),s("code",[t._v("config/app.php")]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\\"),s("span",{attrs:{class:"token package"}},[t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ChiefProjectServiceProvider")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Fields")]),t._v(" "),s("h3",{attrs:{id:"localization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localization","aria-hidden":"true"}},[t._v("#")]),t._v(" Localization")]),t._v(" "),s("p",[t._v("When coding in Europe, you'll probably need to provide your site in more than one language. Localization is built into the core of Chief.\nIn order to manage the locales, you need to configure the following files:")]),t._v(" "),s("ul",[s("li",[t._v("Set the available locales of the application in the "),s("code",[t._v("config/translatable.php")]),t._v(" file. These are the locales in which each page should be made available.")]),t._v(" "),s("li",[t._v("Set the frontend locales of the application in the "),s("code",[t._v("config/thinktomorrow/locale.php")]),t._v(" file. These locales are available for the users of your application.")]),t._v(" "),s("li",[t._v("Set the default and fallback locale in the "),s("code",[t._v("config/app.php")]),t._v(" file. Keep in mind that this value needs to consist of one of the available locales as set in the "),s("code",[t._v("config/translatable.php")]),t._v(".")])])])}],!1,null,null,null);n.options.__file="basics.md";a.default=n.exports}}]);