(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{169:function(e,t,n){"use strict";n.r(t);var o=n(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),n("p",[e._v('Q: I get the "Route [login] not defined" error. Help!\nA: Extend our ChiefExceptionHandler in the '),n("code",[e._v("app/handler.php")]),e._v(" file. This is because the chief admin uses a custom guard and does not rely on the default auth laravel routes.")]),e._v(" "),n("p",[e._v("Q: I get the \"Tokenmismatch\" error after login into the admin. Help!\nA: This most likely means you have an outdated version of chief. Run 'composer update' to get the latest version.")]),e._v(" "),n("p",[e._v('Q: I get the "Class web-chief does not exist" error. Help!\nA: Add the '),n("code",[e._v("AuthenticateChiefSession::class")]),e._v(" middleware group to your "),n("code",[e._v("App\\Http\\Kernel.php")]),e._v(" file.")]),e._v(" "),n("p",[e._v("Q: I get the 'Expected response code 250 but got code “530”, with message “530 5.7.1 Authentication required ”' error. Help!\nA: Please make sure your mail settings in your .env file are correct.")])])}],!1,null,null,null);r.options.__file="faq.md";t.default=r.exports}}]);