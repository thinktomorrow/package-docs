(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{212:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("In some cases the basic managers might not be enough.\nFor instance if you want to add some fields to a module/collection or just want to control who is allowed to view or edit the model.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("To create a custom manager extend one of the following:")]),t._v(" "),s("ul",[s("li",[t._v("ModuleManager (Module)")]),t._v(" "),s("li",[t._v("PageManager (Page)")]),t._v(" "),s("li",[s("router-link",{attrs:{to:"./advanced.html#advanced_model_management"}},[t._v("AbstractManager")]),t._v(" (advanced)")],1)]),t._v(" "),s("p",[t._v("So let's create a custom manager and extend 'ModuleManager'.\nThis all works the same when you're extending the 'PageManager'.")]),t._v(" "),t._m(2),s("p",[t._v("Link your new manager to the your module in the 'ChiefProjectServiceProvider'.")]),t._v(" "),t._m(3),s("p",[t._v("One thing you might want to do is add some managed fields.")]),t._v(" "),s("p",[t._v("You can find all the possible fields "),s("router-link",{attrs:{to:"./fields.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("p",[t._v("One important thing to remember is the name you define in the 'make()' function also corresponds to the database entry for all fields except for the Asset fields(Media, Document).\nSo don't forget to create a column in your database for each field you add here.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The cards you see on the index for a page or module can also be customized on the manager.\nTo do this implement the 'details()' function.")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("To prevent or allow certain roles to do CRUD on this model you can implement the 'can()' function.")]),t._v(" "),t._m(7),s("p",[t._v("The default verbs are 'create', 'store', 'edit', 'update', 'delete', 'upload'.")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Pagination in the admin panel can be activated on each manager.\nTo add pagination set a property $paginated to true and set $pageCount to the amount of items on a page.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("In other cases, it is best to stick with separate database columns.")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"customizing-managers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-managers","aria-hidden":"true"}},[this._v("#")]),this._v(" Customizing managers")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"creating-a-custom-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a custom manager")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// src/Modules/HeaderManager.php ")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("HeaderManager")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ModuleManager")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("fields")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fields\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Fields")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            InputField"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("make")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            TextField"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("make")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'bio'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// App\\Providers\\ChiefProjectServiceProvider.php")]),t._v("\n\n"),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("registerModule")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HeaderManager"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Header"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"index-card"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-card","aria-hidden":"true"}},[this._v("#")]),this._v(" Index card")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// src/Pages/CustomPageManager.php")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("details")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Details\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// For existing model")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("model")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("id")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("details")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("ucfirst")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("model")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'subtitle'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'subtitle'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'intro'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Updated on '")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("model")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("updated_at")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("format")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'d/m/Y H:i'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'context'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'<span class=\"inline-xs stack-s\">'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("assistant")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'publish'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("publicationStatusAsLabel")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'</span>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("details")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization","aria-hidden":"true"}},[this._v("#")]),this._v(" Authorization")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("can")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$verb")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bool\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Do not allow creation")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$verb")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'create'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token function"}},[t._v("chiefAdmin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("hasRole")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'developer'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("can")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$verb")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"pagination-a-manager-in-the-admin-panel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagination-a-manager-in-the-admin-panel","aria-hidden":"true"}},[this._v("#")]),this._v(" Pagination a manager in the admin panel")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("# AuthorManager.php\n\n"),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Management"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Manager")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Management"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractManager")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("AuthorManager")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("AbstractManager")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Manager")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$paginated")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$pageCount")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"dynamic-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-attributes","aria-hidden":"true"}},[this._v("#")]),this._v(" Dynamic attributes")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Usually a model's value corresponds to a database column. This is the default behavior. This is fine but can be cumbersome when you want to manage a lot of different values.\nAlso when you don't know the amount of values beforehand, this can prove to be a challenge. With dynamic attributes, you'll be able to store and manage values on the model without migrations.\nAll values are stored as a json value on the database level, and transposed to a "),a("code",[this._v("Thinktomorrow\\Chief\\DynamicAttributes\\DynamicAttributes")]),this._v(" behind the scenes.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"setting-up-a-dynamic-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-dynamic-model","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting up a dynamic model")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",[s("li",[t._v("Add the trait "),s("code",[t._v("Thinktomorrow\\Chief\\DynamicAttributes\\HasDynamicAttributes")]),t._v(" to the eloquent model.")]),t._v(" "),s("li",[t._v("Set a "),s("code",[t._v("$dynamicKeys")]),t._v(" property on the model. This should be an array of all the attributes that the model exposes.")]),t._v(" "),s("li",[t._v("You're good to go. Here's an example of such as setup:")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Model")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DynamicAttributes"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HasDynamicAttributes")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ModelStub")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Model")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("HasDynamicAttributes")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// the attribute 'title' is available as dynamic value.")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$dynamicKeys")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"retrieving-a-dynamic-attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-a-dynamic-attribute","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieving a dynamic attribute")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("A dynamic attribute can be retrieved just like a first class property. Or you can choose to use the "),a("code",[this._v("dynamic()")]),this._v(" method.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// fetching dynamic attribute can be done just like another attribute.")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$model")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// This is the same as calling the underlying dynamic() method:")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$model")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("dynamic")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// If the attribute is localized, and you'd need to fetch a different locale, you can pass a second 'locale' parameter.")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$model")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("dynamic")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'en'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"when-to-choose-for-dynamic-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-to-choose-for-dynamic-attributes","aria-hidden":"true"}},[this._v("#")]),this._v(" When to choose for dynamic attributes")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("the column of value is not important for database indexing or search queries.")]),this._v(" "),a("li",[this._v("the columns are not always expected on each model entry or cannot be determined beforehand.")]),this._v(" "),a("li",[this._v("the values is not required to be constrainted or validated on a database level.")])])}],!1,null,null,null);e.options.__file="managers.md";a.default=e.exports}}]);