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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c51860265fa744b59b7c86b36be3b5f6"
  },
  {
    "url": "assets/css/1.styles.3106e8d7.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.97e41b9c.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.dbd9ae4c.css",
    "revision": "dbca0b3fba97b4abb5dcdb484ff93e6f"
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
    "url": "assets/img/GTMSnippet.c0b7011d.png",
    "revision": "c0b7011d516e7e6b021ed48ad1c184fd"
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
    "url": "assets/js/1.3106e8d7.js",
    "revision": "ae963644f8249177d1588736c174e4b8"
  },
  {
    "url": "assets/js/10.41781b72.js",
    "revision": "39b3fc72f42a51fd8e9d309686c65f53"
  },
  {
    "url": "assets/js/11.662f5f87.js",
    "revision": "48b1eaac059ea09fc89571ba6fba439a"
  },
  {
    "url": "assets/js/12.fcd49dab.js",
    "revision": "f63f9a0031197d90f011fe0f16629112"
  },
  {
    "url": "assets/js/13.752efdfa.js",
    "revision": "01af3ac477769a15f02317bb92fee50a"
  },
  {
    "url": "assets/js/14.2426315b.js",
    "revision": "81d7ccfd92f8aa5cbca9160b11b257c3"
  },
  {
    "url": "assets/js/15.2b5d65ac.js",
    "revision": "bdbcb7445112039f75084a9f039c801b"
  },
  {
    "url": "assets/js/16.eb554759.js",
    "revision": "35eb4519091121ab4a5d68238e8ae4d6"
  },
  {
    "url": "assets/js/17.f2402a53.js",
    "revision": "6519d1852061d609d8100f5ae968c05c"
  },
  {
    "url": "assets/js/18.4bb2ba8f.js",
    "revision": "d77b1430f90700eb4888c29344e523a9"
  },
  {
    "url": "assets/js/2.97e41b9c.js",
    "revision": "fc4807b9f8b3bb596d0bb318d45f0888"
  },
  {
    "url": "assets/js/3.3b5ac7b6.js",
    "revision": "b724224c914b8f4bade0b125c9b0f58a"
  },
  {
    "url": "assets/js/4.f69a20b4.js",
    "revision": "4e1a8873e08e2564df32ac698c126bb8"
  },
  {
    "url": "assets/js/5.81f0f8de.js",
    "revision": "7fe305c7919e2b37c2c44c1cf5bae7b2"
  },
  {
    "url": "assets/js/6.9856ace8.js",
    "revision": "a9e0f34f3bb573fc454739701890707f"
  },
  {
    "url": "assets/js/7.19302a96.js",
    "revision": "746bde54557521706915e1216946a8c9"
  },
  {
    "url": "assets/js/8.f898cfa3.js",
    "revision": "767a92359a054d3f11097e5c7bd07e3f"
  },
  {
    "url": "assets/js/9.dfd4b0a3.js",
    "revision": "6cd80522dc13acbe8812bfd482bf8657"
  },
  {
    "url": "assets/js/app.dbd9ae4c.js",
    "revision": "172e202a7799b779be9bcdeb6a94792d"
  },
  {
    "url": "contribute.html",
    "revision": "645764008697e47844fb6bac62c74383"
  },
  {
    "url": "index.html",
    "revision": "7b8f3309e3a4bcfba8d840a9e137bc88"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "7144f2b1d6978a7bd09facfdd657241f"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "a5004ff7af4759edeb318772f795adbc"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "d6ad1fee15087969043326f6a70da2c1"
  },
  {
    "url": "src/chief/initial_setup.html",
    "revision": "9697c95b412b29758ba7d3c85085b97b"
  },
  {
    "url": "src/chief/models.html",
    "revision": "476316e0eed980bf877d3768d3ed18bb"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "63ff63485a1f6235775f833443bbdb68"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "133b7f69d32c565a16716bc47e9a5718"
  },
  {
    "url": "src/chief/users.html",
    "revision": "6af16b2a2301b40fe4409ad41b4836c1"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "8a32746ab1fe036471988208a9557bf1"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "db1613a1fab3d9e2cbc51717c2bd11cf"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "89a126343f97d99c340c5b5a7a47aa2b"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "efdcb70e97d8882c812ba04f12eed598"
  },
  {
    "url": "src/locale/index.html",
    "revision": "1648a4d6f53dabd29c3d186e1d0fb60e"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "e638e3ed23558221f23743552e62eb74"
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
