(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{163:function(t,a,s){t.exports=s.p+"assets/img/input-field.634ba2a4.png"},164:function(t,a,s){t.exports=s.p+"assets/img/text-field.d7d2cc0c.png"},165:function(t,a,s){t.exports=s.p+"assets/img/html-field.569e7c86.png"},166:function(t,a,s){t.exports=s.p+"assets/img/select-field.70b3fa79.png"},167:function(t,a,s){t.exports=s.p+"assets/img/radio-field.b8777a35.png"},168:function(t,a,s){t.exports=s.p+"assets/img/media-field.8c66dad9.png"},169:function(t,a,s){t.exports=s.p+"assets/img/document-field.535b476f.png"},170:function(t,a,s){t.exports=s.p+"assets/img/date-field.dd18fa00.png"},195:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Fields")]),t._v(" "),n("h2",{attrs:{id:"adding-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Adding fields")]),t._v(" "),n("p",[t._v("Each Manager has a "),n("code",[t._v("fields()")]),t._v(" method. This method returns all available form fields.\nChief has the most commonly used fields already at your disposal, such as text and select input, checkboxes, textarea and wysiwyg input.\nIf your project requires another input type, you can always "),n("a",{attrs:{href:"#create-a-custom-field"}},[t._v("create a custom field")]),t._v(" as well.")]),t._v(" "),n("p",[t._v("Define your fields in the "),n("code",[t._v("fields()")]),t._v(" method of the manager. This method should return a "),n("code",[t._v("\\Thinktomorrow\\Chief\\Fields\\Fields")]),t._v(" class.\nThe first argument for this "),n("code",[t._v("Fields")]),t._v(" class is an array of field objects. Each field should extend the "),n("code",[t._v("\\Thinktomorrow\\Chief\\Fields\\Field")]),t._v(" class.")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Thinktomorrow"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fields"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fields")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Thinktomorrow"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pages"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PageManager")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Thinktomorrow"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fields"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Types"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TextField")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Thinktomorrow"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fields"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Types"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("InputField")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("AuthorManager")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("PageManager")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("fields")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fields\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Fields")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            InputField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            TextField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'bio'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"available-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#available-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Available fields")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#inputfield"}},[t._v("InputField")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#textfield"}},[t._v("TextField")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#htmlfield"}},[t._v("HtmlField")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#selectfield"}},[t._v("SelectField")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#radiofield"}},[t._v("RadioField")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#mediafield"}},[t._v("MediaField")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#documentfield"}},[t._v("DocumentField")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#datefield"}},[t._v("DateField")])])]),t._v(" "),n("h3",{attrs:{id:"inputfield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inputfield","aria-hidden":"true"}},[t._v("#")]),t._v(" InputField")]),t._v(" "),n("p",[t._v("The input field will render a basic input field.\nIt has no special options.")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("InputField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(163),alt:"input field"}})]),t._v(" "),n("h3",{attrs:{id:"textfield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#textfield","aria-hidden":"true"}},[t._v("#")]),t._v(" TextField")]),t._v(" "),n("p",[t._v("The text field will render a basic text field without wysiwyg functionality.\nIt has no special options.")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("TextField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(164),alt:"text field"}})]),t._v(" "),n("h3",{attrs:{id:"htmlfield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#htmlfield","aria-hidden":"true"}},[t._v("#")]),t._v(" HtmlField")]),t._v(" "),n("p",[t._v("The html field will render a wysiwyg field.\nIt has no special options.")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("HtmlField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(165),alt:"html field"}})]),t._v(" "),n("h3",{attrs:{id:"selectfield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#selectfield","aria-hidden":"true"}},[t._v("#")]),t._v(" SelectField")]),t._v(" "),n("p",[t._v("The select field will render a dropdown.\nSome required options for the selectfield are:")]),t._v(" "),n("ul",[n("li",[t._v("options: this is where you set the possible select options")]),t._v(" "),n("li",[t._v("selected: this is the currently selected value")]),t._v(" "),n("li",[t._v("multiple: this is a true or false value to denote is you are allowed to make multiple selections")])]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("SelectField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'countries'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("options")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Belgium'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'America'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Canada'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("selected")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("model")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("countries")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("multiple")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(166),alt:"select field"}})]),t._v(" "),n("h3",{attrs:{id:"radiofield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#radiofield","aria-hidden":"true"}},[t._v("#")]),t._v(" RadioField")]),t._v(" "),n("p",[t._v("The radio field will render radio buttons.\nIt extends the selectfield and has all it's options:")]),t._v(" "),n("ul",[n("li",[t._v("options")]),t._v(" "),n("li",[t._v("selected")]),t._v(" "),n("li",[t._v("multiple")])]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("RadioField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'gender'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("options")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Male'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Female'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Other'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("selected")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("model")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("gender")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("multiple")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(167),alt:"radio field"}})]),t._v(" "),n("h3",{attrs:{id:"mediafield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mediafield","aria-hidden":"true"}},[t._v("#")]),t._v(" MediaField")]),t._v(" "),n("p",[t._v("The media field will render a dropzone for image uploads.\nIt has the following extra options:")]),t._v(" "),n("ul",[n("li",[t._v("multiple: this is a true or false value to denote is you are allowed to make multiple selections")])]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("MediaField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'banner'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("multiple")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(168),alt:"media field"}})]),t._v(" "),n("h3",{attrs:{id:"documentfield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#documentfield","aria-hidden":"true"}},[t._v("#")]),t._v(" DocumentField")]),t._v(" "),n("p",[t._v("The document field will render a dropzone for file uploads.\nIt has the following extra options:")]),t._v(" "),n("ul",[n("li",[t._v("multiple: this is a true or false value to denote is you are allowed to make multiple selections")])]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("DocumentField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'CV'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("multiple")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(169),alt:"document field"}})]),t._v(" "),n("h3",{attrs:{id:"datefield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#datefield","aria-hidden":"true"}},[t._v("#")]),t._v(" DateField")]),t._v(" "),n("p",[t._v("The date field will render a field with a date selector.\nIt has no special options.")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("DateField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'birthdate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("To display this date correctly across all pages you need to define the field in the dates array on the model.")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(170),alt:"date field"}})]),t._v(" "),n("h2",{attrs:{id:"available-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#available-options","aria-hidden":"true"}},[t._v("#")]),t._v(" Available options")]),t._v(" "),n("p",[t._v("The following are the default available options on all fields:")]),t._v(" "),n("ul",[n("li",[t._v("make: the name of the field, also corresponds to the database column name")]),t._v(" "),n("li",[t._v("label: the label shown in the admin panel")]),t._v(" "),n("li",[t._v("description: the description shown underneath the label in the admin panel")]),t._v(" "),n("li",[t._v("validation: the laravel validation rules applied to this field. More on this in the section "),n("a",{attrs:{href:"#validation"}},[t._v("Validation")]),t._v(".")]),t._v(" "),n("li",[t._v("translated: the languages in which this field should be translated. More on this in the section "),n("a",{attrs:{href:"#localisation"}},[t._v("Localisation")]),t._v(".")])]),t._v(" "),n("p",[t._v("An example of a basic field with all these options filled in could look like this:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("InputField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("translatable")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'en'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'nl'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("validation")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required-fallback-locale|max:200'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("label")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Page Title'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("description")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Title to be used in the admin.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("h2",{attrs:{id:"create-a-custom-field"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-field","aria-hidden":"true"}},[t._v("#")]),t._v(" Create a custom field")]),t._v(" "),n("h2",{attrs:{id:"field-arrangements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#field-arrangements","aria-hidden":"true"}},[t._v("#")]),t._v(" Field arrangements")]),t._v(" "),n("p",[t._v("All fields are")]),t._v(" "),n("h2",{attrs:{id:"page-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#page-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Page fields")]),t._v(" "),n("h2",{attrs:{id:"validation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validation","aria-hidden":"true"}},[t._v("#")]),t._v(" Validation")]),t._v(" "),n("h2",{attrs:{id:"localisation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#localisation","aria-hidden":"true"}},[t._v("#")]),t._v(" Localisation")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("If you define a field as translatable you will have to override the "),n("code",[t._v("translatedAttributed")]),t._v(" on the model so the translated field can be fetched.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("protected $translatedAttributes = ['title', 'content', 'title_bg'];\n")])])]),n("p",[t._v("In this case we added the title_bg field so we have to override all translated fields.")])]),t._v(" "),n("h3",{attrs:{id:"validating-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validating-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Validating fields")]),t._v(" "),n("ul",[n("li",[t._v("intro: eloquent model, custom object, Page and Module are 2 in-house types of managers")]),t._v(" "),n("li")]),t._v(" "),n("h3",{attrs:{id:"field"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#field","aria-hidden":"true"}},[t._v("#")]),t._v(" Field")]),t._v(" "),n("p",[t._v("This is the basic field. You would not use this to define a field on a model.\nInstead you define one of the more specific fields.\nThis class provides some global function that are useful for a field like if it's translatable, its validation, label and description.")]),t._v(" "),n("p",[t._v("A basic input field might look like this:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("InputField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("translatable")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'en'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'nl'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("validation")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required-fallback-locale|max:200'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("label")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Page Title'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("description")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Title to be used in the admin.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("If you define a field as translatable you will have to override the "),n("code",[t._v("translatedAttributed")]),t._v(" on the model so the translated field can be fetched.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("protected $translatedAttributes = ['title', 'content', 'title_bg'];\n")])])]),n("p",[t._v("In this case we added the title_bg field so we have to override all translated fields.")])]),t._v(" "),n("h3",{attrs:{id:"datefield-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#datefield-2","aria-hidden":"true"}},[t._v("#")]),t._v(" DateField")]),t._v(" "),n("p",[t._v("This field will allow you to add a date to the model.\nTo display this date correctly across all pages you need to define the field in the dates array on the model.")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pages"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Page")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Thinktomorrow"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Chief"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Common"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fields"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DateField")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("DateItem")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Page")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$dates")]),t._v("   "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'date'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("customFields")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'date'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" DateField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'date'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("label")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'The date'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])]),n("h3",{attrs:{id:"documentfield-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#documentfield-2","aria-hidden":"true"}},[t._v("#")]),t._v(" DocumentField")]),t._v(" "),n("p",[t._v("The document field adds a file upload (any type) to the model.")]),t._v(" "),n("p",[t._v("One extra option is 'multiple' to define if the field may upload multiple files or just one.")]),t._v(" "),n("h3",{attrs:{id:"htmlfield-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#htmlfield-2","aria-hidden":"true"}},[t._v("#")]),t._v(" HtmlField")]),t._v(" "),n("p",[t._v("The Html field will render as a wysiwyg editor in the admin.")]),t._v(" "),n("h3",{attrs:{id:"inputfield-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inputfield-2","aria-hidden":"true"}},[t._v("#")]),t._v(" InputField")]),t._v(" "),n("p",[t._v("This is the basic input element.")]),t._v(" "),n("h3",{attrs:{id:"mediafield-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mediafield-2","aria-hidden":"true"}},[t._v("#")]),t._v(" MediaField")]),t._v(" "),n("p",[t._v("The document field adds media (png, jpg, jpeg, gif, etc) to the model.")]),t._v(" "),n("p",[t._v("One extra option is 'multiple' to define if the field may upload multiple files or just one.")]),t._v(" "),n("h3",{attrs:{id:"pagebuilderfield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pagebuilderfield","aria-hidden":"true"}},[t._v("#")]),t._v(" PageBuilderField")]),t._v(" "),n("p",[t._v("This field is responsible for the pagebuilder. This requires some extra setup if you want to customize these fields.\nAlthough this field is present on pages by default so that shouldn't need more setup.")]),t._v(" "),n("h3",{attrs:{id:"selectfield-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#selectfield-2","aria-hidden":"true"}},[t._v("#")]),t._v(" SelectField")]),t._v(" "),n("p",[t._v("The selectfield renders a dropdown. It has options that you can pass along as well as the currently selected property.")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("SelectField"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("make")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'pages'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("label")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Page'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("description")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Select a page'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("options")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$all_pages")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("multiple")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("selected")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$pageId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"radiofield-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#radiofield-2","aria-hidden":"true"}},[t._v("#")]),t._v(" RadioField")]),t._v(" "),n("p",[t._v("The radio field renders radiobuttons. This extends the selectfield so it has all its features but just a different identifier.")]),t._v(" "),n("h3",{attrs:{id:"textfield-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#textfield-2","aria-hidden":"true"}},[t._v("#")]),t._v(" TextField")]),t._v(" "),n("p",[t._v("The textfield is the same as the Html field except that this does not render as a wysiwyg editor.")]),t._v(" "),n("h3",{attrs:{id:"hasperiod-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hasperiod-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" HasPeriod fields")])])}],e=s(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);o.options.__file="fields.md";a.default=o.exports}}]);