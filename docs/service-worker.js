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
    "revision": "600e28b63148025a534f0347d0b0a48f"
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
    "url": "assets/js/10.cbd7cb4a.js",
    "revision": "79a9389ef1bb0efb09588f5fbb68cc50"
  },
  {
    "url": "assets/js/11.07f07f0c.js",
    "revision": "c2188e11a40522bfbc6c3e4b589ea823"
  },
  {
    "url": "assets/js/12.29d6389e.js",
    "revision": "dd5a9d960707f3027269bace7dd42305"
  },
  {
    "url": "assets/js/13.df4b1f4a.js",
    "revision": "42e2b90978c61d680fe33631c38c4f17"
  },
  {
    "url": "assets/js/14.3140b906.js",
    "revision": "80cf7efd8b68c964eb80da76f0041400"
  },
  {
    "url": "assets/js/15.3c3a1da2.js",
    "revision": "a6449cc5ae0c733991fab41aae883b7f"
  },
  {
    "url": "assets/js/16.e21a60d8.js",
    "revision": "22586cbe1c55c7d0c886f11f21a304bc"
  },
  {
    "url": "assets/js/17.ea460970.js",
    "revision": "3ac8517d2031d076d0ec240c9380a9a9"
  },
  {
    "url": "assets/js/18.177aa0df.js",
    "revision": "bddb20cb07f2074af684dfb507064421"
  },
  {
    "url": "assets/js/19.be0e25af.js",
    "revision": "def8dfaf788da65a3d1d166edf831a9f"
  },
  {
    "url": "assets/js/2.7e7c8b61.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/20.98f5303e.js",
    "revision": "84943bee7230abc8404f21d033d6b1dc"
  },
  {
    "url": "assets/js/21.04edc761.js",
    "revision": "8d1f8fc73826ed5575e645e189ddb78b"
  },
  {
    "url": "assets/js/3.1f89e472.js",
    "revision": "40f9ad6b7b35d8fca1074c8a1f3cc3d7"
  },
  {
    "url": "assets/js/4.5a693560.js",
    "revision": "2d1c97b58ee987c3a30d3f518894ac2f"
  },
  {
    "url": "assets/js/5.d2673632.js",
    "revision": "39a7c13e63c0946a6c0381ba40c9d53f"
  },
  {
    "url": "assets/js/6.04423dfb.js",
    "revision": "c2f7c0d23f9de3e088cb5e872a102c9b"
  },
  {
    "url": "assets/js/7.5ce9f37c.js",
    "revision": "0c40f3de7f04d1df0ab0da691235fcea"
  },
  {
    "url": "assets/js/8.bd4d46d8.js",
    "revision": "c4789fe589143271c1b6b928011c5608"
  },
  {
    "url": "assets/js/9.de4fa7de.js",
    "revision": "61f50909de1f116e78d7938b6e6b0511"
  },
  {
    "url": "assets/js/app.d67e9aaa.js",
    "revision": "a997e49d6505f4df618d0b33ac77304a"
  },
  {
    "url": "contribute.html",
    "revision": "1ebecb0e14efcb7d8989decf951b792b"
  },
  {
    "url": "index.html",
    "revision": "8753c712e7ac39de3eeae5c7c37a6fb6"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "45388457e70f6035f81c35c137a945fe"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "8d864d94f98423bbb66cfd273e5cae9a"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "b97a0ad16dabda9697b6510778ae23af"
  },
  {
    "url": "src/chief/initial_setup.html",
    "revision": "c98dc54980626cb3d23271c85fa2a84b"
  },
  {
    "url": "src/chief/models.html",
    "revision": "ed788cd375b514208668607c63f22f1a"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "cd96a4940145d844f65a3799f1f900c4"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "0810d4c2ed61b237b62ae042066e6261"
  },
  {
    "url": "src/chief/users.html",
    "revision": "38ffb3207530cef7795bd2d03ae5fbfa"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "e106c4c7d24db29c4c175007cf47440d"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "bc12a152b8879d9d3ed8c75803c03562"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "1cfbe0a8db3b2b5cfeb71849747599db"
  },
  {
    "url": "src/guidelines/local-development.html",
    "revision": "3ab6e982db1304513ffcb56cc050ebe6"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "117a1cf767a22e00e943615dce3903c0"
  },
  {
    "url": "src/locale/index.html",
    "revision": "16c470452f02fe33d42be784d9fe482d"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "be595ea0dfa2869945c4754ba3486696"
  },
  {
    "url": "using_vuepress.html",
    "revision": "e52cc59fa91663c2ca90912d02883d0b"
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
