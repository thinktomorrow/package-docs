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
    "revision": "e48e5985eaee93a02ff94b560b0eb67d"
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
    "url": "assets/js/17.9644f655.js",
    "revision": "03d0c7ee4fea0065aa634cc6408bccd6"
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
    "url": "assets/js/app.032391d6.js",
    "revision": "707d0a606c6d6ed7a4d26e13c1f91080"
  },
  {
    "url": "contribute.html",
    "revision": "e10df72d000d184c37a9d61e9bff7fe3"
  },
  {
    "url": "index.html",
    "revision": "7d038e48543c0ea086ed5964ac814442"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "9afca181a8598ac6a68e21c7892189c7"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "26e958600ed5c730b7385d6f2e34ca23"
  },
  {
    "url": "src/chief/advanced_model_management.html",
    "revision": "033bd31daa00c093357a0de88047d4c3"
  },
  {
    "url": "src/chief/advanced_page_management.html",
    "revision": "d347895c376dd2f2d517693a2945724d"
  },
  {
    "url": "src/chief/advanced_site_management.html",
    "revision": "4c48f3b75ca00c4f085592581531ebef"
  },
  {
    "url": "src/chief/first_steps.html",
    "revision": "31c1434e9f2025043f3e83927dfdf8e4"
  },
  {
    "url": "src/chief/model_management.html",
    "revision": "f08a768ecd677834d66d423e7e6e9be9"
  },
  {
    "url": "src/chief/pages_modules.html",
    "revision": "f118a723435207b5bc45fd665d8dc4f9"
  },
  {
    "url": "src/chief/site_management.html",
    "revision": "f2ce7a0b95d493f3e076b07ef5c9de77"
  },
  {
    "url": "src/chief/users.html",
    "revision": "f873ea569f3f2a856e741968e81b45a2"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "79f270bef6378eacdaf073f0e8c6f91e"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "29950329f111f7d5eace62eb6b075341"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "a5ae29f0dfb96d13f05e6ef7c16954e5"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "7cb2559819f958c46ed27e3286438eae"
  },
  {
    "url": "src/locale/index.html",
    "revision": "e87ba06c3c1682a59726c93e3f5d4483"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "c9cd49e0965b1bf2bd67fe511cd7d8b9"
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
