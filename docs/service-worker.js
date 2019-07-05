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
    "revision": "5939fb1696e84d2fc150c4d8153c99a9"
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
    "url": "assets/js/10.7da3a085.js",
    "revision": "0e2f3a01715247d57f6e566d1a5df6d3"
  },
  {
    "url": "assets/js/11.f644374b.js",
    "revision": "0f5cddae7a1c9dc226eed0e9dea539b7"
  },
  {
    "url": "assets/js/12.0acfe291.js",
    "revision": "7499c6ea07c646072d1549ea4484a8a5"
  },
  {
    "url": "assets/js/13.cc65f59e.js",
    "revision": "9d87c289ad66498b95663630785945c2"
  },
  {
    "url": "assets/js/14.75a0e1fd.js",
    "revision": "6ed8ec2f9e880d72467cf37d4c05ccde"
  },
  {
    "url": "assets/js/15.4c09306e.js",
    "revision": "651150ecf69e01039c710d1cd5640623"
  },
  {
    "url": "assets/js/16.75d87f0e.js",
    "revision": "c16b12ce91e5375a817ca807857d2c64"
  },
  {
    "url": "assets/js/17.0399ff27.js",
    "revision": "f2bd686522d42f7b1dfdb9f9ee0c17d8"
  },
  {
    "url": "assets/js/18.a6dd5f57.js",
    "revision": "5302362233e5774a43bc45d50b89ea97"
  },
  {
    "url": "assets/js/19.7dfd7ed1.js",
    "revision": "b6b8d1d8aa09c1150c63800d4a392b4e"
  },
  {
    "url": "assets/js/2.7e7c8b61.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/3.848b1712.js",
    "revision": "440e30eb699684ef40ec4aa035633ed5"
  },
  {
    "url": "assets/js/4.411141df.js",
    "revision": "3a7e3a381e3057fa1e1f34aa1a6b61ca"
  },
  {
    "url": "assets/js/5.a61e4597.js",
    "revision": "7226d3b70fc98fa217041fe7918066d6"
  },
  {
    "url": "assets/js/6.dbf2225a.js",
    "revision": "a964507867ec8b728c89fab8cae3bf7b"
  },
  {
    "url": "assets/js/7.8818dd23.js",
    "revision": "dcd2b384c608211ccb4e67e11ae69c0b"
  },
  {
    "url": "assets/js/8.0ac0506b.js",
    "revision": "989e5c7b9ace6b329a8a0e30f25e510b"
  },
  {
    "url": "assets/js/9.aa10686d.js",
    "revision": "a1d13ffa263cb2106463f213f8ab62f7"
  },
  {
    "url": "assets/js/app.eacf28b8.js",
    "revision": "a79cce8b32f82abab3e2594215202ab9"
  },
  {
    "url": "contribute.html",
    "revision": "9940120da0a047701f1283114c52b201"
  },
  {
    "url": "index.html",
    "revision": "f3b29bc4621cf5a677d74558ae6e1b9a"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "52f2e104352f8d6bbbc89a631b1e4539"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "dd4ce6ba1f491d754bd59cc1d917c917"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "5c4ffdace7b0b6ed430ecc8b4c443f6e"
  },
  {
    "url": "src/chief/initial_setup.html",
    "revision": "175c7349609210d90f9ab8b215e64e41"
  },
  {
    "url": "src/chief/models.html",
    "revision": "f8865c95da8c983cd349dd411fdaa995"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "fa1394e684d5c88c70283f2950107064"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "2686291345f00052e223fb881b95609d"
  },
  {
    "url": "src/chief/users.html",
    "revision": "7bb3befdf126a6652dff979f52342655"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "ba9078df737146e454aba688d0a4a7cd"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "333b6c3509fafd551d1adfda045ae1a4"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "49dd63bf8f5ee310258b0fb405824b96"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "f11718f392ac9fa7e031a71b23524a6b"
  },
  {
    "url": "src/locale/index.html",
    "revision": "fb3ece620308da7a809a4c81b32b103a"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "5415ae96f036194eb8241befcb233d9b"
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
