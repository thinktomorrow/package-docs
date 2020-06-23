(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{197:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),s("h2",{attrs:{id:"preparing-the-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-model","aria-hidden":"true"}},[a._v("#")]),a._v(" Preparing the model")]),a._v(" "),s("p",[a._v("To upload files to a model we just need to add a trait to the model of our choosing and implement the HasAsset interface.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Eloquent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Thinktomorrow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("AssetLibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("AssetTrait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("Thinktomorrow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("AssetLibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("HasAsset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Article")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Model")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HasAsset")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("AssetTrait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"uploading-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uploading-files","aria-hidden":"true"}},[a._v("#")]),a._v(" Uploading files")]),a._v(" "),s("p",[a._v("There are 2 main ways to upload a file.")]),a._v(" "),s("ul",[s("li",[a._v("To a model")]),a._v(" "),s("li",[a._v("To the assetlibrary")])]),a._v(" "),s("h3",{attrs:{id:"to-a-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-a-model","aria-hidden":"true"}},[a._v("#")]),a._v(" To a model")]),a._v(" "),s("p",[a._v("Make sure you have prepared the model you would like to upload a file to as specified in\nthe previous step")]),a._v(" "),s("h4",{attrs:{id:"file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file","aria-hidden":"true"}},[a._v("#")]),a._v(" File")]),a._v(" "),s("p",[a._v("To upload a file we call the add method on the 'AddAsset' class and as a first parameter we pass the model we want to attach the file to.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("AddAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$filename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h4",{attrs:{id:"type-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-string","aria-hidden":"true"}},[a._v("#")]),a._v(" type "),s("code",[a._v("String")])]),a._v(" "),s("p",[a._v("Type allows us to get a file based on the type for instance an article could have a banner but also a pdf file.\nWithout type the library wouldn't be able to discern between them.\nThis is explained in greater detail in the section about retrieving files.")]),a._v(" "),s("h4",{attrs:{id:"locale-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locale-string","aria-hidden":"true"}},[a._v("#")]),a._v(" locale "),s("code",[a._v("String")])]),a._v(" "),s("p",[a._v("The locale should be a string matching one of the locales allows by you application. ie 'en', 'nl', etc")]),a._v(" "),s("h4",{attrs:{id:"filename-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filename-string","aria-hidden":"true"}},[a._v("#")]),a._v(" filename "),s("code",[a._v("String")])]),a._v(" "),s("p",[a._v("The filename can be set to override the uploaded filename. Keep in mind that the filename will still be sluggified for safety.")]),a._v(" "),s("h3",{attrs:{id:"upload-an-array-collection-of-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-an-array-collection-of-files","aria-hidden":"true"}},[a._v("#")]),a._v(" Upload an array/collection of files")]),a._v(" "),s("p",[a._v("Uploading multiple files at once is done like this:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("AddAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addMultiple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h4",{attrs:{id:"files-array-collection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files-array-collection","aria-hidden":"true"}},[a._v("#")]),a._v(" files "),s("code",[a._v("Array|Collection")])]),a._v(" "),s("p",[a._v("The Thinktomorrow\\AssetLibrary\\Asset upload is used to attach existing assets from the library to an existing model, and works exactly the same as uploading a file.")]),a._v(" "),s("h4",{attrs:{id:"type-string-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-string-2","aria-hidden":"true"}},[a._v("#")]),a._v(" type "),s("code",[a._v("String")])]),a._v(" "),s("p",[a._v("Type allows us to get a file based on the type for instance an article could have a banner but also a pdf file.\nWithout type the library wouldn't be able to discern between them.\nThis is explained in greater detail in the section about retrieving files.")]),a._v(" "),s("h4",{attrs:{id:"locale-string-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locale-string-2","aria-hidden":"true"}},[a._v("#")]),a._v(" locale "),s("code",[a._v("String")])]),a._v(" "),s("p",[a._v("The locale should be a string matching one of the locales allows by you application. ie 'en', 'nl', etc")]),a._v(" "),s("p",[a._v("As you can see there is no parameter for the filename. To pass along a filename you can key the array with the filename like so:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$article")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("AddAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addMultiple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Image1.png'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Image2.png'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Image\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"to-the-general-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-the-general-library","aria-hidden":"true"}},[a._v("#")]),a._v(" To the general library")]),a._v(" "),s("p",[a._v("If you don't want to attach a file to a model in the case of a medialibrary, this works as follows.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$asset")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" AssetUploader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("upload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$filename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("A file not attached to a model doesn't have a type or locale since these fields are only relevant in the context of a model.")]),a._v(" "),s("h3",{attrs:{id:"uploading-a-base64-encoded-image-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uploading-a-base64-encoded-image-string","aria-hidden":"true"}},[a._v("#")]),a._v(" Uploading a Base64 encoded image string")]),a._v(" "),s("p",[a._v("Uploading a Base64 image is different for a model or the library")]),a._v(" "),s("h3",{attrs:{id:"attached-to-a-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attached-to-a-model","aria-hidden":"true"}},[a._v("#")]),a._v(" Attached to a model")]),a._v(" "),s("p",[a._v("Uploading a Base64 image is exactly the same as a normal file.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$article")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("AddAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Base64EncodedImage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$filename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"to-the-general-library-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-the-general-library-2","aria-hidden":"true"}},[a._v("#")]),a._v(" To the general library")]),a._v(" "),s("p",[a._v("Uploading a Base64 image to the library uses a different method on the AssetUploader class:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$asset")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" AssetUploader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("uploadFromBase64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$filename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"retrieving-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-files","aria-hidden":"true"}},[a._v("#")]),a._v(" Retrieving files")]),a._v(" "),s("p",[a._v("Retrieving a file from a model is very simple. There are a few methods on the model available.")]),a._v(" "),s("p",[a._v("exists() returns true if this model has a file for the given type.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$article")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("asset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("url() returns the url for the size.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$article")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("asset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("assets() returns all the assets for the type/locale.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$article")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("assets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"replacing-assets-on-a-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replacing-assets-on-a-model","aria-hidden":"true"}},[a._v("#")]),a._v(" Replacing assets on a model")]),a._v(" "),s("p",[a._v("ReplaceAsset takes the ids of the assets to replace and to replace with. Note: the replaced asset will be detached.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$article")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ReplaceAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$replaceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$withId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"sorting-assets-on-a-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sorting-assets-on-a-model","aria-hidden":"true"}},[a._v("#")]),a._v(" Sorting assets on a model")]),a._v(" "),s("p",[a._v("sortFiles() takes the type and an array which defines the sorting order. The array should have the order as keys and the ids of the assets as value:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$sorting")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"3"')]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"1"')]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"2"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SortAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$sorting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])])]),s("h2",{attrs:{id:"detaching-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detaching-assets","aria-hidden":"true"}},[a._v("#")]),a._v(" Detaching assets")]),a._v(" "),s("p",[a._v("DetachAsset takes the model and ids of the assets to detach.")]),a._v(" "),s("p",[a._v("detach() detaches the given ids from the given model.")]),a._v(" "),s("p",[a._v("detachAll() detaches all the assets from the model or the assets with the given type.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("DetachAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("detach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ids")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("DetachAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("detachAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"removing-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removing-assets","aria-hidden":"true"}},[a._v("#")]),a._v(" Removing assets")]),a._v(" "),s("p",[a._v("DeleteAsset() takes the ids of the assets to be deleted. Note: the asset will be completely removed.")]),a._v(" "),s("p",[a._v("delete will remove all the assets with the given ids.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("DeleteAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ids")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"adding-conversions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-conversions","aria-hidden":"true"}},[a._v("#")]),a._v(" Adding conversions")]),a._v(" "),s("p",[a._v("An upload also creates conversions(size) for the file:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" thumb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" width     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("150")]),a._v("\n\t \t height    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("150")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" medium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("width     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),a._v("\n\t \t height    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("130")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" large"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" width     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),a._v("\n\t \t height    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("353")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" full"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("  width     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1600")]),a._v("\n\t\t height    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("553")]),a._v("\n")])])]),s("p",[a._v("The original version will be returned if you don't specify the size.\nThese conversions can be defined in the assetlibrary config file.")])])}],!1,null,null,null);t.default=n.exports}}]);