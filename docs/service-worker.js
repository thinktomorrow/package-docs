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
    "revision": "1fe8d888613a9a171eef17f84387a815"
  },
  {
    "url": "assets/css/0.styles.0f205980.css",
    "revision": "8a99189f7cce7cdd3f86992459894f95"
  },
  {
    "url": "assets/img/base-segment.c5e01b7b.png",
    "revision": "c5e01b7b3a303a595bbc19960e93009d"
  },
  {
    "url": "assets/img/createAccount.706e811c.png",
    "revision": "706e811c2e628cc4a0234264ad31e803"
  },
  {
    "url": "assets/img/createContainer.cc0a3932.png",
    "revision": "cc0a39321f4d7940aefc241f76ad221f"
  },
  {
    "url": "assets/img/createLookup.413ddc1b.png",
    "revision": "413ddc1bb8dc833588f4a0037fb574e7"
  },
  {
    "url": "assets/img/createVariable.60a6811e.png",
    "revision": "60a6811ee7b22e5c8c2659cfef8e1711"
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
    "url": "assets/img/debug.67034b2c.png",
    "revision": "67034b2cd5b01bf1d2fe5a757d215806"
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
    "url": "assets/img/GTMSnippet.c0b7011d.png",
    "revision": "c0b7011d516e7e6b021ed48ad1c184fd"
  },
  {
    "url": "assets/img/lookuptable.4fad627e.png",
    "revision": "4fad627ef11e7c7ca287539426638e91"
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
    "url": "assets/img/SnippetLocation.5e4ee1f4.png",
    "revision": "5e4ee1f4a956c0ba4c24c1e9ae3a3488"
  },
  {
    "url": "assets/img/trackingid.da18a397.png",
    "revision": "da18a39785620618b084e809fdde6259"
  },
  {
    "url": "assets/img/workspace.ea848b42.png",
    "revision": "ea848b420679021b9b55f679a7a082c6"
  },
  {
    "url": "assets/js/10.a1d011ec.js",
    "revision": "007d8e09a2efa9f656de979a09b4265e"
  },
  {
    "url": "assets/js/11.03d19e80.js",
    "revision": "975cb4cb266c859f47282db4ebd94004"
  },
  {
    "url": "assets/js/12.0acfe291.js",
    "revision": "7499c6ea07c646072d1549ea4484a8a5"
  },
  {
    "url": "assets/js/13.2ea66f4a.js",
    "revision": "303322682cfbd438dae5a1693a9c5fd0"
  },
  {
    "url": "assets/js/14.3a5f07b5.js",
    "revision": "bf5951e3f9a302cf867a6ad90a9f4780"
  },
  {
    "url": "assets/js/15.e3dfc0b7.js",
    "revision": "9fb155f84590a4c518fc84425f7601b6"
  },
  {
    "url": "assets/js/16.8b263eb5.js",
    "revision": "775d3a5818e2d30040b4a09200a3c96b"
  },
  {
    "url": "assets/js/17.31627bef.js",
    "revision": "0ce9db26c79dc8472b1d645d1cc33eed"
  },
  {
    "url": "assets/js/18.9f438bc6.js",
    "revision": "bbd693b16a0dc7f3a9930cd155861430"
  },
  {
    "url": "assets/js/19.fc16db89.js",
    "revision": "91c02b9bd789e3db6dab62b68d8f5d40"
  },
  {
    "url": "assets/js/2.7e7c8b61.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/20.d43d42fb.js",
    "revision": "999c5231d460f78c47ea4b1d131d4088"
  },
  {
    "url": "assets/js/3.848b1712.js",
    "revision": "440e30eb699684ef40ec4aa035633ed5"
  },
  {
    "url": "assets/js/4.21b5dcbb.js",
    "revision": "ffe1aa92fb8d0f89776261bd4ce9e805"
  },
  {
    "url": "assets/js/5.611618b2.js",
    "revision": "1f97cd99b5e7ca04603f7029a8f7339b"
  },
  {
    "url": "assets/js/6.04423dfb.js",
    "revision": "c2f7c0d23f9de3e088cb5e872a102c9b"
  },
  {
    "url": "assets/js/7.0e428719.js",
    "revision": "6f9a615997257fb5280cbb2e30e82421"
  },
  {
    "url": "assets/js/8.e1917b18.js",
    "revision": "4ca710f8ef62ca8d77bcd04cf769976b"
  },
  {
    "url": "assets/js/9.f252dd38.js",
    "revision": "2f6da1f8653e3cd1851e30f6856cd550"
  },
  {
    "url": "assets/js/app.88a60eed.js",
    "revision": "fbdab83a9622c1e49597e2daf925b835"
  },
  {
    "url": "contribute.html",
    "revision": "7208db1b673c667c37171360046759f7"
  },
  {
    "url": "index.html",
    "revision": "7cec573583d2339d6bbf658a65a15055"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "3b1c265dd3a1cd477876b68badf24bab"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "d546c37f5a0881f62422c0350ec3628e"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "5d56f39c40eb126efd4085b6c3f14ac4"
  },
  {
    "url": "src/chief/initial_setup.html",
    "revision": "1eb680a623f97844112c8a96be12cb51"
  },
  {
    "url": "src/chief/models.html",
    "revision": "d85a51259107d3fe1f9998516f7334e8"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "c6ff1cc9dd0bdaa89f238861713c7ed5"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "2145ff4c7cfb327feafbdf992617c3cb"
  },
  {
    "url": "src/chief/users.html",
    "revision": "a861781468c44f5855f23c8746bbd46c"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "bd8ad9d7a93b7a09695ab03d77101f1a"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "9b82bba7bc6a6a5e9ae4de95c28e934d"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "6c1cf832696453fcecf00918866192ec"
  },
  {
    "url": "src/guidelines/local-development.html",
    "revision": "a37a8f7f7d2bcaa93449ed1708c19379"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "e81bd74ec4343e3a545c794ccd48a47a"
  },
  {
    "url": "src/locale/index.html",
    "revision": "9a09b54e8a61cab31c720da218f0fd62"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "788530e63d8d37239b1a44d6aa2ec362"
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
