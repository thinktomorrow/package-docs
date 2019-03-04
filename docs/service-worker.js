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
    "revision": "28cded5f31cc36a2c55fb0073d2b3d5a"
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
    "url": "assets/js/10.097c5a71.js",
    "revision": "0c979c8335645fd95c8c187ba738cb2d"
  },
  {
    "url": "assets/js/11.e84a24be.js",
    "revision": "83825e53b0c9b35ad5d4f0d7a3f12b00"
  },
  {
    "url": "assets/js/12.71b29778.js",
    "revision": "1c2178a586f309bd459c7bf0ab2608a6"
  },
  {
    "url": "assets/js/13.438d3e6d.js",
    "revision": "27db8600fd6e1449a4b0bffb5f17be1a"
  },
  {
    "url": "assets/js/14.64c8f410.js",
    "revision": "055ddf16aef255ff2dc19fec2fa5799c"
  },
  {
    "url": "assets/js/15.d91d943f.js",
    "revision": "2d873d0d1b2363e40e1593e88707a0ba"
  },
  {
    "url": "assets/js/16.bdd90375.js",
    "revision": "9de9e80a3e422762cd2866f8f81b0662"
  },
  {
    "url": "assets/js/17.cd9a0b7f.js",
    "revision": "ecf60e5c303358751da0fb9c01996334"
  },
  {
    "url": "assets/js/18.832adbb3.js",
    "revision": "69df9d523549c3b28ee3ca8372bb6217"
  },
  {
    "url": "assets/js/19.b5c3a32a.js",
    "revision": "b41300a8795a74153f26aaf7a6ed3a3d"
  },
  {
    "url": "assets/js/2.90a804d4.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.60f504ec.js",
    "revision": "7e7e64c0fe18ebd4b8933dde30c7153d"
  },
  {
    "url": "assets/js/4.5a12f1ac.js",
    "revision": "f0126568f4c5005c6b09c0d6eef53858"
  },
  {
    "url": "assets/js/5.8d846405.js",
    "revision": "4db2c2db34d7e319122ea9a232b4d245"
  },
  {
    "url": "assets/js/6.0a55bd34.js",
    "revision": "2f0acc3ffb037ff4418b9801be368475"
  },
  {
    "url": "assets/js/7.e3c5fb55.js",
    "revision": "c05a439d1e33a73ca3900b27989fbc98"
  },
  {
    "url": "assets/js/8.b14e03b6.js",
    "revision": "078958479c8d0909e755e3c78ffc49a3"
  },
  {
    "url": "assets/js/9.16a17a68.js",
    "revision": "38659d91d563b229f68c04f148e940e8"
  },
  {
    "url": "assets/js/app.c11e9d58.js",
    "revision": "4b1d465f586fee91689528f5d0132ae7"
  },
  {
    "url": "contribute.html",
    "revision": "9260f63e0431c1db3e318f837d4c696e"
  },
  {
    "url": "index.html",
    "revision": "8b51d14149abbc8f1db689c6696d6472"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "55657b633df98e551c6b9d1505eacd49"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "5ab2af7a63d035a5b0a60705e17e6461"
  },
  {
    "url": "src/chief/advanced_model_management.html",
    "revision": "35778c7df648be67d3a6ea7d83b005ae"
  },
  {
    "url": "src/chief/advanced_page_management.html",
    "revision": "5565f96297c02f9843a4f93279d3549c"
  },
  {
    "url": "src/chief/advanced_site_management.html",
    "revision": "130bee8c4d7f8b5ac267650cda01a9ed"
  },
  {
    "url": "src/chief/first_steps.html",
    "revision": "03b07accbeb7063104b46face01f6bb1"
  },
  {
    "url": "src/chief/model_management.html",
    "revision": "92aab492af5fc198c8fe2dcfe67ee15c"
  },
  {
    "url": "src/chief/pages_modules.html",
    "revision": "c8bd60d017f9207fa58e14806f4f5868"
  },
  {
    "url": "src/chief/site_management.html",
    "revision": "f96551b937040b25918f832e1e08524e"
  },
  {
    "url": "src/chief/users.html",
    "revision": "75db60e49f52565ff7500f145c360b0d"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "638b5d0299f71e047563c0b14a232ab5"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "678ab4858c3727c5d14c654bd7ad916d"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "62e7c49940ba886c1a1622c14f917f7e"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "43fc85150853b663c13dae2a67cea9ec"
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
