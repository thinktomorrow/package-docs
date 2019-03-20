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
    "revision": "4c4a76354badf947c685cd2f685a3aff"
  },
  {
    "url": "assets/css/0.styles.0f205980.css",
    "revision": "8a99189f7cce7cdd3f86992459894f95"
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
    "url": "assets/img/Workspace.ea848b42.png",
    "revision": "ea848b420679021b9b55f679a7a082c6"
  },
  {
    "url": "assets/js/10.23a5b945.js",
    "revision": "cc833ca75ba5f89eacd4cc822e7ddb31"
  },
  {
    "url": "assets/js/11.77b7c17a.js",
    "revision": "7b10cbbac3449d1dd3a98c8d7293009c"
  },
  {
    "url": "assets/js/12.93afd6b2.js",
    "revision": "8574c21f835618aa5bcc190cbbbe9a70"
  },
  {
    "url": "assets/js/13.1b48114f.js",
    "revision": "64f7d9befb004f742fc7b85e7fa345c1"
  },
  {
    "url": "assets/js/14.3a6a3867.js",
    "revision": "c0f1b9da868bda82c4ae6d15e271c511"
  },
  {
    "url": "assets/js/15.52d70f18.js",
    "revision": "7b9fd037e1eceec0b40a07e69b02bf62"
  },
  {
    "url": "assets/js/16.4342756b.js",
    "revision": "d482be581adb77104cda16c175a09b4e"
  },
  {
    "url": "assets/js/17.d849300c.js",
    "revision": "955fcfcf34b12dd5a3416f965b8b0324"
  },
  {
    "url": "assets/js/18.3e0efa69.js",
    "revision": "29df3bbcc892b0840363bb344961eef2"
  },
  {
    "url": "assets/js/19.76e5f638.js",
    "revision": "a22b3a39a164c521de3ca41c2c267d8f"
  },
  {
    "url": "assets/js/2.7e7c8b61.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/20.a16dab21.js",
    "revision": "f82c790fe82ffaed5ea0a3df68432723"
  },
  {
    "url": "assets/js/21.399b2996.js",
    "revision": "1ebab2af204797f775f50a8d6b439501"
  },
  {
    "url": "assets/js/3.e01ed023.js",
    "revision": "8424e9428cd9f6c29ed979ee9f273785"
  },
  {
    "url": "assets/js/4.2df2224c.js",
    "revision": "c5eb77eb5490a33f33a4f5eb11becd6a"
  },
  {
    "url": "assets/js/5.c0fa390f.js",
    "revision": "3a2eceaf1696434fca42050ff2f9d79f"
  },
  {
    "url": "assets/js/6.d629bb2f.js",
    "revision": "6f005cd743af2e37ecc73bf6b0efaac7"
  },
  {
    "url": "assets/js/7.8c7b6600.js",
    "revision": "39d4a617c70eb7f27e5dbcfdffb54dc0"
  },
  {
    "url": "assets/js/8.24d2319c.js",
    "revision": "c49a99fae3b9a4c15dd9924f01097f7e"
  },
  {
    "url": "assets/js/9.9263503e.js",
    "revision": "a4c3e842ab39d4b3c89d67f034d37e04"
  },
  {
    "url": "assets/js/app.0ce0c85b.js",
    "revision": "45e9d2e94918ee6652d0239878314d25"
  },
  {
    "url": "contribute.html",
    "revision": "ed389989e4c10cd438b10d3602ff0c0c"
  },
  {
    "url": "index.html",
    "revision": "412e637e4a64764f925a9a2aec6dc9f0"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "b74698fe0891170f78670b781d1e65ab"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "b52a64e625ebcbc85343b86f46658354"
  },
  {
    "url": "src/chief/advanced_model_management.html",
    "revision": "49f728640269909b599571bf8d8cc175"
  },
  {
    "url": "src/chief/advanced_page_management.html",
    "revision": "e14fb8ff3b1676c04bea4abf29004d85"
  },
  {
    "url": "src/chief/advanced_site_management.html",
    "revision": "027728180b4d9c295eb91ebcf1b3895e"
  },
  {
    "url": "src/chief/first_steps.html",
    "revision": "ed0cdee7266adacd630e5afe6816e137"
  },
  {
    "url": "src/chief/model_management.html",
    "revision": "a48c3bfa43cbda365a8875a911c0fd5f"
  },
  {
    "url": "src/chief/pages_modules.html",
    "revision": "6a82cd449965a1cff9629cbfdfdd4a6b"
  },
  {
    "url": "src/chief/site_management.html",
    "revision": "cbc3297f864020a974c3d1eb525f4c59"
  },
  {
    "url": "src/chief/users.html",
    "revision": "8ee485454d8d564128707eb93c6a41e3"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "bb17c2517a8c96811f1d43648b6247ce"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "9485ff9fad49d0964adb19ca8143db86"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "69da5f325f5e718c2b8b4ddfec1d8711"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "52d269eee46d9509f31cef76242e0f35"
  },
  {
    "url": "src/locale/index.html",
    "revision": "9d4727ffbfdb93999dd75fa56a33d93c"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "dfefec077adac96bd0444c9ae7a583d2"
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
