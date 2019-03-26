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
    "revision": "e4aebe06e1a05e8ed00b5b32cca57716"
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
    "url": "assets/img/workspace.ea848b42.png",
    "revision": "ea848b420679021b9b55f679a7a082c6"
  },
  {
    "url": "assets/js/10.e0683bb4.js",
    "revision": "cd7b34a1482aabe4f82ba91481d30e9b"
  },
  {
    "url": "assets/js/11.52789394.js",
    "revision": "556f846035c0f32b15ddcff46e405734"
  },
  {
    "url": "assets/js/12.91b8784e.js",
    "revision": "af9e1d2739dc75d8ad2bd745ed5f2d8d"
  },
  {
    "url": "assets/js/13.77ba4159.js",
    "revision": "d66edacc0bff04bdb41916a1548cd3b0"
  },
  {
    "url": "assets/js/14.44075362.js",
    "revision": "7489b5f1ca32e93549b5a7922bb25c44"
  },
  {
    "url": "assets/js/15.2217dd36.js",
    "revision": "32ea3770ce5de840ae843d7a1c86057b"
  },
  {
    "url": "assets/js/16.a585662a.js",
    "revision": "a8aae28ee952e9369efd4bd849f04d73"
  },
  {
    "url": "assets/js/17.a242d202.js",
    "revision": "379fcd386927b874da959e89065b5228"
  },
  {
    "url": "assets/js/18.84879a86.js",
    "revision": "a47369d8cc7aa42163ea2bfd9fbf87ff"
  },
  {
    "url": "assets/js/19.674810a0.js",
    "revision": "4c805067bb9f01b439ecbd892ecd8539"
  },
  {
    "url": "assets/js/2.c89adce7.js",
    "revision": "4d547a9e6d5be37c8aed1c03bc8fdc3c"
  },
  {
    "url": "assets/js/20.d31e8b37.js",
    "revision": "383054c108df985718f18254f9e6dd03"
  },
  {
    "url": "assets/js/21.31d097a0.js",
    "revision": "21086e188650e3f2def404a9869701dd"
  },
  {
    "url": "assets/js/3.8579f59c.js",
    "revision": "2870eb97a924901a6cdbb7352e3d5954"
  },
  {
    "url": "assets/js/4.ffca499c.js",
    "revision": "1a124035a226aaa62ef084ca91862cc5"
  },
  {
    "url": "assets/js/5.611618b2.js",
    "revision": "1f97cd99b5e7ca04603f7029a8f7339b"
  },
  {
    "url": "assets/js/6.81d4dde6.js",
    "revision": "ff9158a5b0cf3a3ae39dfa58b5dbf2c3"
  },
  {
    "url": "assets/js/7.95c3d075.js",
    "revision": "fdd15a89d4a601fc7e38063af1687ac8"
  },
  {
    "url": "assets/js/8.a40f73bc.js",
    "revision": "285143346090b0f220cc4ddf6edf5eae"
  },
  {
    "url": "assets/js/9.87c268e4.js",
    "revision": "949bbb8f6fc69df727d4fd40d7e78591"
  },
  {
    "url": "assets/js/app.e48a936c.js",
    "revision": "76810433e7c6a6d8d24fe5b6e79a6004"
  },
  {
    "url": "contribute.html",
    "revision": "f2b1b219bd4d4f86e2a75c5564da3634"
  },
  {
    "url": "index.html",
    "revision": "861ac2bbfc5a6ec074276aba6541a5f8"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "56b6c7655252c40c6e24768434474ef0"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "7ce3037d8a29ab3abe58d06d305eb345"
  },
  {
    "url": "src/chief/advanced_model_management.html",
    "revision": "a0eda9c4fb66d982ce153ea50f79b401"
  },
  {
    "url": "src/chief/advanced_page_management.html",
    "revision": "1f9a766c9dff5101bb503c40f9072cec"
  },
  {
    "url": "src/chief/advanced_site_management.html",
    "revision": "c0a92865660e8a848ac1634c534c61ed"
  },
  {
    "url": "src/chief/first_steps.html",
    "revision": "88c088a16833a21b6938789cd1aa75b1"
  },
  {
    "url": "src/chief/model_management.html",
    "revision": "438575bb77bbfaf65b709b4ca443c0af"
  },
  {
    "url": "src/chief/pages_modules.html",
    "revision": "2cd50957c40ec8c2ce496e7008f0b5f1"
  },
  {
    "url": "src/chief/site_management.html",
    "revision": "b4a8902c2bbe0c7ec76bb9c944297177"
  },
  {
    "url": "src/chief/users.html",
    "revision": "7a9e82c4909f1ad0878c3a29fd87ad2a"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "928b9df6ee2622a3810495ef115921c7"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "aeb040ecb8a9a7fa4d6a14a8fb6ab4a5"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "c03733e0bf4df5f4f22a4e4e14f3c933"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "026ddb0d4a3100fa5346cb158a0bc184"
  },
  {
    "url": "src/locale/index.html",
    "revision": "16415d316932744bf4645f921e67ed89"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "ac515d6d82d81cbb10b5d01dbbade1f8"
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
