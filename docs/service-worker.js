/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0bee62af25d01c8213364ca8e5840a1c"
  },
  {
    "url": "assets/css/0.styles.0f205980.css",
    "revision": "8a99189f7cce7cdd3f86992459894f95"
  },
  {
    "url": "assets/img/dataEvent.f00315a6.png",
    "revision": "f00315a61452e0f0cb4bdac30a222c4a"
  },
  {
    "url": "assets/img/datalayerVariable.5f0b27b2.png",
    "revision": "5f0b27b2e0b4ff2b7d8bbf7d8dd553a2"
  },
  {
    "url": "assets/img/debug.066e14c4.png",
    "revision": "066e14c4b92922f2edef38c3af67e047"
  },
  {
    "url": "assets/img/dynamicEvent.224e3957.png",
    "revision": "224e3957eee6da63210e526880f6a59a"
  },
  {
    "url": "assets/img/dynamicEventTrigger.b528165b.png",
    "revision": "b528165b54eeacdc4761f668a9e60c96"
  },
  {
    "url": "assets/img/filter-example.28eac65a.png",
    "revision": "28eac65a88602366a5a84d080f26e8e7"
  },
  {
    "url": "assets/img/lookuptable.8a4202af.png",
    "revision": "8a4202afc865dcd9328a469aa6763914"
  },
  {
    "url": "assets/img/preview.f4d7dff8.png",
    "revision": "f4d7dff8f037c7272aa7519acea21f79"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/trackingid.da18a397.png",
    "revision": "da18a39785620618b084e809fdde6259"
  },
  {
    "url": "assets/img/workspace.8f7e307c.png",
    "revision": "8f7e307c19ef1a3d62d74f9017f394aa"
  },
  {
    "url": "assets/js/10.ceeebd6d.js",
    "revision": "809b584add61d49edb1bcc7b5c62c233"
  },
  {
    "url": "assets/js/11.3ad1f238.js",
    "revision": "63b41e87c793ebc32270fcc10856455f"
  },
  {
    "url": "assets/js/12.312a5aac.js",
    "revision": "034eadb01f8286eaab78be334102bd36"
  },
  {
    "url": "assets/js/13.f598851e.js",
    "revision": "103eb5a974c84f831ed11858b8facb6b"
  },
  {
    "url": "assets/js/14.802755eb.js",
    "revision": "eb23af2304e3f6c3a6c89437567b3bbe"
  },
  {
    "url": "assets/js/15.f0d8afb4.js",
    "revision": "d9518750ab29e30bd2b3aa0e11a071f4"
  },
  {
    "url": "assets/js/16.5bbfb4b5.js",
    "revision": "f67d8826f2a6fefe906220ed0b0531ed"
  },
  {
    "url": "assets/js/17.4f343c53.js",
    "revision": "252a0c9eba0d53e974995512afb82d0b"
  },
  {
    "url": "assets/js/18.bc4de6e4.js",
    "revision": "577f97185ed88f7d81564649722bf4c5"
  },
  {
    "url": "assets/js/19.31a289db.js",
    "revision": "ea834d16f7223a470e01819163b44b06"
  },
  {
    "url": "assets/js/2.861402b7.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/20.dfaac848.js",
    "revision": "d3a26daffd308c439ddfc493902fd3d0"
  },
  {
    "url": "assets/js/21.9a9e8c58.js",
    "revision": "f6aee23b5a655f32a89d48dbed41a22c"
  },
  {
    "url": "assets/js/3.d5d4c4d2.js",
    "revision": "386ad2d5f69eea934794fb648a20bdc3"
  },
  {
    "url": "assets/js/4.77d1723a.js",
    "revision": "dd77c3d8147de3246c3e89dd85f1f074"
  },
  {
    "url": "assets/js/5.ff9c7a83.js",
    "revision": "11decb29cf71f8ca9511f09ed4b87f7d"
  },
  {
    "url": "assets/js/6.29e550ef.js",
    "revision": "e1f636165d34db5858a8efc972b8e7fa"
  },
  {
    "url": "assets/js/7.8534cc92.js",
    "revision": "5eeb951d06b617e1699795b452e3c276"
  },
  {
    "url": "assets/js/8.1b7b5581.js",
    "revision": "3fb6fdec64275d1ec4be753fa1e75627"
  },
  {
    "url": "assets/js/9.66e0924e.js",
    "revision": "76e3295ca80017c0d3c398e5b48f7625"
  },
  {
    "url": "assets/js/app.8b897c9f.js",
    "revision": "3038d3c891512ef22ed164940a76293b"
  },
  {
    "url": "contribute.html",
    "revision": "375dbb19ddebc8e1dbbd451a25e88b4a"
  },
  {
    "url": "index.html",
    "revision": "515514714e55bcf1307dba736d516225"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "3958e8f09c74dfc615e297599ab39720"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "15d6bdf1668b7dd6b02925e09d9d2abc"
  },
  {
    "url": "src/chief/advanced_model_management.html",
    "revision": "da01dc95802177e12cad501d03f81641"
  },
  {
    "url": "src/chief/advanced_page_management.html",
    "revision": "d9c773a8feb4bb5abbe4998f316b825d"
  },
  {
    "url": "src/chief/advanced_site_management.html",
    "revision": "e615fd66493d4b2d551de17adc3b3eb6"
  },
  {
    "url": "src/chief/first_steps.html",
    "revision": "b664a2fe6efff94245031984640409c8"
  },
  {
    "url": "src/chief/model_management.html",
    "revision": "5e776731e907cf45162f9ba485f7a37e"
  },
  {
    "url": "src/chief/pages_modules.html",
    "revision": "545b8f61942809caa8eeb8948887d512"
  },
  {
    "url": "src/chief/site_management.html",
    "revision": "370abc59f5ee6fe3e029e34e61f94092"
  },
  {
    "url": "src/chief/users.html",
    "revision": "21b03989302c083e0423c4b362967a0a"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "7be045ac3620370fd0fe9175f66cd0d9"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "ec2d5d15d97c637cd317da099a7859a7"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "024d1e67acaa3b08b10d02491e42586f"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "14a84ceeca0256706b304a5f73cce1a4"
  },
  {
    "url": "src/locale/index.html",
    "revision": "07d0acadd708f7ca3896c1b9072cb665"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "ae47ecd16ec01eb7b01af3859af12176"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
