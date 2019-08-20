(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{189:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Chief follows the "),s("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("semantic versioning"),s("OutboundLink")],1),t._v(" and we always try to maintain a backward compatible release cycle.\nNote that while development is still in the 0.* release cycle, minor versions will be able to contain breaking changes.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("There are a couple of breaking changes in this upgrade. If you've done some advanced customisation, you're probably fine upgrading without too much hassle.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("In version 0.2.14 you needed to define a registrationkey as the first parameter  per model/manager pair registration.\nThis first parameter is now renamed to managedModelKey and moved to the models.\nSo to get everything in line remove the first parameter from the registrations in your ChiefprojectServiceProvider.")]),t._v(" "),t._m(18),s("p",[t._v("And on the model you should add the managedModelKey and choose a relevant name.")]),t._v(" "),t._m(19),t._m(20),t._v(" "),s("p",[t._v("The labelSingular and labelPlural field are now only accepted on the model instead of both the model and the manager.")]),t._v(" "),s("p",[t._v("You should remove the declaration of these fields on the manager to their respective models.")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("The following classes are removed or haved changed location:")]),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("The following methods have been replaced:")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),s("p",[t._v("Due to the changes in url management you should make sure one of your pages has '/' as its url to identify it as the homepage.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"upgrading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrading","aria-hidden":"true"}},[this._v("#")]),this._v(" Upgrading")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"releases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#releases","aria-hidden":"true"}},[this._v("#")]),this._v(" Releases")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The latest version of Chief is "),e("code",[this._v("0.3.*")]),this._v(" which is the one being currently developed upon.\nPrevious versions will no longer be maintained with the exception for security fixes and critical bugfixes.\nIt is strongly recommended to upgrade to the latest "),e("code",[this._v("0.3")]),this._v(" version.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"versioning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#versioning","aria-hidden":"true"}},[this._v("#")]),this._v(" Versioning")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"upgrading-from-0-2-14-to-0-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-from-0-2-14-to-0-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Upgrading from 0.2.14 to 0.3.*")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set your composer package constraint to "),e("code",[this._v("thinktomorrow/chief: ^0.3")]),this._v(". Run "),e("code",[this._v("composer update thinktomorrow/chief")]),this._v(" command to get to the latest 0.3.* version.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If during the install any errors occur regarding files not existing please refer to the "),e("a",{attrs:{href:"#removals"}},[this._v("removals")]),this._v(" section, change the affected classes\nand run "),e("code",[this._v("composer install")]),this._v(" again.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Next update the chief assets by running "),e("code",[this._v("php artisan vendor:publish --tag=chief-assets --force")]),this._v(" in your project root.\nNote that with the force flag you'll update all existing chief style and script assets in your project.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"updated-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updated-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Updated config")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("There are some new configuration options added like "),s("code",[t._v("strict")]),t._v(", "),s("code",[t._v("route.autoload")]),t._v(", "),s("code",[t._v("route.name")]),t._v(" and "),s("code",[t._v("base-view-paths")]),t._v(".\nComplete your config file by adding the following values:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token shell-comment comment"}},[t._v("# /config/thinktomorrow/chief.php")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("/**\n * When chief is in strict mode, it exposes potential errors and warnings in your application.\n * Non-critical errors like non found urls or views. When such an error occurs in strict mode,\n * your app will throw an exception. Strict mode is by default only enabled in development.\n */")]),t._v("\n"),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'strict'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'APP_DEBUG'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'route'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * By default Chief will add the pages.show routing to your app. Since this is a catch-all route, it will be loaded last.\n     * If this conflicts with your project, set the autoload value to false. In this case you are responsible for handling the routing.\n     * Use the following route snippet as a starting point:\n     *\n     *      Route::get('{slug?}', function($slug = '/'){\n     *          return \\Thinktomorrow\\Chief\\Urls\\ChiefResponse::fromSlug($slug);\n     *      })->name('pages.show')->where('slug', '(.*)?');\n     *\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'autoload'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * Route name for the route that chief uses to listen and interact with\n     * a page request. It is set to `pages.show` but if this conflicts\n     * with your project naming conventions, you can change it here.\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pages.show'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("/**\n * The Viewable::viewPath() method gives the view path for that specific model.\n * By default, we provide some sensible defaults for pages, modules and sets.\n * Here you define the relative base view path for these resp. models.\n */")]),t._v("\n"),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'base-view-paths'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pages'")]),t._v("   "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pages'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'modules'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'modules'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'sets'")]),t._v("    "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'sets'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("chief-settings")]),this._v(" file is changed and now has the following values:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\n     "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n      * Contact person (aka webmaster)\n      *\n      * The contact person receives all incoming communication e.g. contact form submissions\n      * and is the sender address for all transaction mails such as password reset mails.\n      */")]),t._v("\n     "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'contact_email'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'MAIL_ADMIN_EMAIL'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'info@thinktomorrow.be'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'contact_name'")]),t._v("  "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'MAIL_ADMIN_NAME'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Think Tomorrow'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n     "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n      * Client details\n      *\n      * This is mainly a backend thing but it can occur in a\n      * couple of frontend places such as the mail footer.\n      */")]),t._v("\n     "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_name'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Chief'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"migrate-page-slugs-to-url-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrate-page-slugs-to-url-table","aria-hidden":"true"}},[this._v("#")]),this._v(" Migrate page slugs to url table")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The routing will still not work since there are no url entries yet. After installing the new version, you'll need to run migrations via "),e("code",[this._v("php artisan migrate")]),this._v(".\nThese migrations will also copy all page slugs and convert them to proper urls.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("page_translations.slug will be removed")]),this._v(" "),e("p",[this._v("Note that this migration removes the slug column on the page_translations table.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"changes-to-model-registration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-model-registration","aria-hidden":"true"}},[this._v("#")]),this._v(" Changes to model registration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// version 0.2.14")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("registerPage")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'singles'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PageManager"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Single"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// version 0.3")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("registerPage")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PageManager"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Single"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$managedModelKey")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'singles'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"model-labels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model-labels","aria-hidden":"true"}},[this._v("#")]),this._v(" Model labels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"removals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removals","aria-hidden":"true"}},[this._v("#")]),this._v(" Removals")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#routes","aria-hidden":"true"}},[this._v("#")]),this._v(" Routes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The chief routes or now autoloaded so you can safely remove the chief routes in your project and the controller linked to these.\nIf you need to keep your own routing in place, make sure to set the chief setting "),e("code",[this._v("thinktomorrow.chief.route.autoload")]),this._v(" to "),e("code",[this._v("false")]),this._v(" so it will no longer autoload\nthis route.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"classes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#classes","aria-hidden":"true"}},[this._v("#")]),this._v(" Classes")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Interface "),s("code",[t._v("Thinktomorrow\\Chief\\Relations\\PresentForParent")]),t._v(" can be replaced with "),s("code",[t._v("Thinktomorrow\\Chief\\Concerns\\Viewable\\ViewableContract")]),t._v(".")]),t._v(" "),s("li",[t._v("Trait "),s("code",[t._v("Thinktomorrow\\Chief\\Relations\\PresentingForParent")]),t._v(" can be replaced with "),s("code",[t._v("Thinktomorrow\\Chief\\Concerns\\Viewable\\Viewable")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("Thinktomorrow\\Chief\\Concerns\\ProvidesUrl\\ProvidesUrl")]),t._v(" moved to "),s("code",[t._v("Thinktomorrow\\Chief\\Urls\\ProvidesUrl\\ProvidesUrl")]),t._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("The former method for rendering a view was "),s("code",[t._v("presentForParent(ActingAsParent $parent)")]),t._v(" and is no longer available. Use the "),s("code",[t._v("renderView()")]),t._v(" method instead.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("view()")]),t._v(" method on the Page model is removed and "),s("code",[t._v("renderView()")]),t._v(" should be used instead. If you used this method in determining the frontend view, you should switch to the new response flow. See below.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("Page::menuUrl()")]),t._v(" was deprecated in previous 0.2 version and is now removed in favor of the "),s("code",[t._v("Page::url()")]),t._v(" method.")]),t._v(" "),s("li",[s("code",[t._v("Page::hasPagebuilder()")]),t._v(" and "),s("code",[t._v("Page::pagebuilder")]),t._v(" were deprecated in 0.2 and are now removed. They are no longer used to determine if pagebuilder should be used or not. If you need to control the pagebuilder setup, you should adapt the "),s("code",[t._v("fields()")]),t._v(" return value instead.")]),t._v(" "),s("li",[t._v("Removed: "),s("code",[t._v("Page::findBySlug()")]),t._v(" and "),s("code",[t._v("Page::findPublishedBySlug()")]),t._v(".")]),t._v(" "),s("li",[t._v("Removed: Homepage setting and "),s("code",[t._v("chief-settings.homepage")]),t._v(" config value. A homepage is now determined by changing the page url to a '/'.")]),t._v(" "),s("li",[t._v("Added: ProvidesUrl now also required you to implement the resolveUrl function. The default to be used is the following:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("resolveUrl")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string "),s("span",{attrs:{class:"token variable"}},[t._v("$locale")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$parameters")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token variable"}},[t._v("$routeName")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("config")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'thinktomorrow.chief.route.name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("resolveRoute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$routeName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$parameters")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$locale")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"deprecations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deprecations","aria-hidden":"true"}},[this._v("#")]),this._v(" Deprecations")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The model data passed to the view, will now always be passed as a "),s("code",[t._v("$model")]),t._v(" or "),s("code",[t._v("$collection")]),t._v(" variable. Since 0.3 the "),s("code",[t._v("$page")]),t._v(", "),s("code",[t._v("$module")]),t._v(" and "),s("code",[t._v("$pages")]),t._v(" are deprecated.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"middleware-group-and-aliases-no-longer-required"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#middleware-group-and-aliases-no-longer-required","aria-hidden":"true"}},[this._v("#")]),this._v(" middleware group and aliases no longer required")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("web-chief")]),this._v(" middleware group is now autoloaded by the package. It is no longer needed to add this yourself in the "),e("code",[this._v("App\\Http\\Kernel")]),this._v(" file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The following route middleware aliases are no longer required to load up in your project. There are handled by the package itself.\n"),e("code",[this._v("auth.superadmin")]),this._v(",  "),e("code",[this._v("chief-guest")]),this._v(", "),e("code",[this._v("chief-validate-invite")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"removed-page-and-module-view-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removed-page-and-module-view-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Removed: $page and $module view variables.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("The page or module is now passed as a "),s("code",[t._v("$model")]),t._v(" variable to the view. The "),s("code",[t._v("$page")]),t._v(", "),s("code",[t._v("$module")]),t._v(" and "),s("code",[t._v("$pages")]),t._v(" - as used by custom query sets - variables\nare set as deprecated and will be removed in 0.4.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"changed-default-viewpaths"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changed-default-viewpaths","aria-hidden":"true"}},[this._v("#")]),this._v(" Changed: default viewpaths")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The default page and module viewpaths no longer assume the "),e("code",[this._v("front")]),this._v(" folder. The default are now:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("pages: "),s("code",[t._v("resources/views/pages")]),t._v(",")]),t._v(" "),s("li",[t._v("modules: "),s("code",[t._v("resources/views/modules")]),t._v(",")]),t._v(" "),s("li",[t._v("sets: "),s("code",[t._v("resources/views/sets")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can change these to fit your project's needs in the "),e("code",[this._v("thinktomorrow.chief.base-view-paths")]),this._v(" config setting.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"changed-fieldarrangement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changed-fieldarrangement","aria-hidden":"true"}},[this._v("#")]),this._v(" Changed: fieldArrangement()")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you've written a custom "),e("code",[this._v("Manager::fieldArrangement()")]),this._v(", chances are that you'll need to replace the "),e("code",[this._v("$this->fields")]),this._v(" presence in the method to "),e("code",[this._v("$this->fieldsWithAssistantFields()")]),this._v(".\nThis change is needed to include any optional assistant added fields as well.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"homepage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#homepage","aria-hidden":"true"}},[this._v("#")]),this._v(" Homepage")])}],!1,null,null,null);n.options.__file="upgrading.md";e.default=n.exports}}]);