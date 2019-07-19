(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{193:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Chief is a laravel package that adds a site management system to your project.\nOut of the box you'll get page, url and menu management provided through a well-crafted admin UI. All of this with localization in mind.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("There are a few minimum requirements for chief to be installable:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Chief can be installed via composer.")]),t._v(" "),t._m(5),s("p",[t._v("The package will automatically register its service provider but you'll need to set up a couple of elements to completely hook chief into your application:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("After setting you database credentials run the migrate artisan command. This will automatically run the chief migrations as well.")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Rename login routename to chief.back.login")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("If you have upgraded your project from an older version of Laravel you might not have this file.\nMake sure to add it: "),s("a",{attrs:{href:"https://github.com/laravel/laravel/blob/master/app/Http/Middleware/Authenticate.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Authenticate.php"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("In this class there is a redirectTo function and it should end up looking like this:")]),t._v(" "),t._m(14)]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),s("p",[t._v("The following vendor assets should also be published to your application:")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),s("p",[t._v("By now your admin is ready to go. The only thing missing to access it is an admin user, so let's add one. Use the following command to\nadd an admin account. Note that it also takes care of setting up the auth permissions and roles.")]),t._v(" "),t._m(25),t._m(26),t._v(" "),s("p",[t._v("The "),s("router-link",{attrs:{to:"./basics.html"}},[t._v("basics section")]),t._v(" of this guide will bring you up to speed on some of the important concepts to kickstart your project development.")],1),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),s("p",[t._v("This most likely means you have an outdated version of chief. Run 'composer update' to get the latest version.\nIf this error persists you might have some middleware that's interfering with the login/session process.")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),s("p",[t._v("Please make sure your mail settings in your .env file are correct.")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("php >= 7.2.0")]),this._v(" "),e("li",[this._v("Laravel framework >= 5.6.39.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Potential vendor conflict")]),this._v(" "),e("p",[this._v("Chief makes use of the "),e("code",[this._v("spatie/laravel-permission")]),this._v(" package. This does expect only one permission based role system. So this will present a conflict if your project\nalready utilises the package for its own permissions.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[this._v("composer "),e("span",{attrs:{class:"token keyword"}},[this._v("require")]),this._v(" thinktomorrow"),e("span",{attrs:{class:"token operator"}},[this._v("/")]),this._v("chief\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("a",{attrs:{href:"#_1-migrations"}},[t._v("Migrations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#_2-exception-handler"}},[t._v("Exception handler")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#_4-chief-config"}},[t._v("Chief config")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#_5-chief-assets"}},[t._v("Chief assets")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#_6-first-admin-user"}},[t._v("First admin user")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-migrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-migrations","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Migrations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[this._v("php artisan migrate\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-exception-handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-exception-handler","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Exception handler")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Your app's exception handler should extend "),e("code",[this._v("Thinktomorrow\\Chief\\App\\Exceptions\\Handler")]),this._v(" since it takes care of all chief authentication and authorization.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In the "),e("code",[this._v("app/Exceptions/Handler.php")]),this._v(" file extend the handler class as such:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token shell-comment comment"}},[t._v("# app/Exceptions/Handler.php")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Exceptions"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Handler")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ChiefExceptionHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Handler")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ChiefExceptionHandler")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("From laravel version 5.7.19, there is an "),s("code",[t._v("App\\Http\\Middleware\\Authenticate")]),t._v(" middleware in the app folder which contains a predefined "),s("code",[t._v("login")]),t._v(" route. This will break behaviour in cases where you don't have a "),s("code",[t._v("login")]),t._v(" routename defined.\nIn order to redirect non-logged users to the chief login page, you should change this named route to "),s("code",[t._v("chief.back.login")]),t._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token shell-comment comment"}},[t._v("# App\\Http\\Middleware\\Authenticate.php")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("redirectTo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$request")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token variable"}},[t._v("$request")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("expectsJson")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("route")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'chief.back.login'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-chief-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-chief-config","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Chief config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Publish the chief config to "),e("code",[this._v("config/thinktomorrow/chief")]),this._v(" as this will require you to set some application defaults such as\ncontact email and application name.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("php artisan vendor"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("publish "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("tag"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("chief"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("config\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Make sure to set at least the "),e("code",[this._v("name")]),this._v(" value to your project name in your "),e("code",[this._v(".env")]),this._v(" file as it is used in some of the generator commands. Ideally this should match\nthe namespace of your "),e("code",[this._v("src")]),this._v(" folder, if you have any. Make sure to namespace the src folder in your composer.json to match this name.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// The dimsav translatable package")]),t._v("\nphp artisan vendor"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("publish "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("tag"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("translatable\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This will create the translatable config file "),e("code",[this._v("config/translatable.php")]),this._v(", this is where you edit what languages are available in the chief admin panel.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-chief-assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-chief-assets","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. Chief assets")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The next step is to publish the chief-assets to our public folder.\nIf you want to overwrite existing files you can add the "),e("code",[this._v("--force")]),this._v(" flag here.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("php artisan vendor"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("publish "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("tag"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("chief"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("assets "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("force\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_6-first-admin-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-first-admin-user","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. First admin user")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[this._v("php artisan chief"),e("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v("admin "),e("span",{attrs:{class:"token operator"}},[this._v("--")]),this._v("dev\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now that all this setup is done, let's go to the chief admin panel to get your first glance on the admin.\nGo to the "),e("code",[this._v("/admin")]),this._v(" route and login with your newly created credentials to access the admin panel.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[this._v("#")]),this._v(" FAQ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"i-get-the-route-login-not-defined-error-help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-get-the-route-login-not-defined-error-help","aria-hidden":"true"}},[this._v("#")]),this._v(' I get the "Route [login] not defined" error. Help!')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Extend our ChiefExceptionHandler in the "),e("code",[this._v("app/handler.php")]),this._v(" file. This is because the chief admin uses a custom guard and does not rely on the default auth laravel routes.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"i-get-the-tokenmismatch-error-after-login-into-the-admin-help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-get-the-tokenmismatch-error-after-login-into-the-admin-help","aria-hidden":"true"}},[this._v("#")]),this._v(' I get the "Tokenmismatch" error after login into the admin. Help!')])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"i-get-the-class-web-chief-does-not-exist-error-help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-get-the-class-web-chief-does-not-exist-error-help","aria-hidden":"true"}},[this._v("#")]),this._v(' I get the "Class web-chief does not exist" error. Help!')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Add the "),e("code",[this._v("AuthenticateChiefSession::class")]),this._v(" middleware group to your "),e("code",[this._v("App\\Http\\Kernel.php")]),this._v(" file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"i-get-the-expected-response-code-250-but-got-code-“530”-with-message-“530-5-7-1-authentication-required-”-error-help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-get-the-expected-response-code-250-but-got-code-“530”-with-message-“530-5-7-1-authentication-required-”-error-help","aria-hidden":"true"}},[this._v("#")]),this._v(" I get the 'Expected response code 250 but got code “530”, with message “530 5.7.1 Authentication required ”' error. Help!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mysql-index-length-bug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-index-length-bug","aria-hidden":"true"}},[this._v("#")]),this._v(" MySQL index length bug")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Add following snippet in the AppServiceProvider of your project if you use MySQL older than 5.7.7\nref: https://laravel.com/docs/master/migrations#creating-indexes\n"),e("code",[this._v("Schema::defaultStringLength(191)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token shell-comment comment"}},[t._v("# App\\Providers\\AppServiceProvider.php")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Schema")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("/**\n * Bootstrap any application services.\n *\n * @return void\n */")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("boot")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Schema"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("defaultStringLength")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("191")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="installation.md";e.default=n.exports}}]);