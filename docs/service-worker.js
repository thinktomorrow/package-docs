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
    "revision": "27e94f7be1d720f6b53b3bf0d29ada17"
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
    "url": "assets/js/10.2c1a682b.js",
    "revision": "e87beb4681dc520e0fff5a533372d106"
  },
  {
    "url": "assets/js/11.3a798e18.js",
    "revision": "c43898d5a8f49bb80081db8d6e3297cb"
  },
  {
    "url": "assets/js/12.2e038d57.js",
    "revision": "ff71f7494911ffb1a2fd54f9b6c5e677"
  },
  {
    "url": "assets/js/13.1bff58bd.js",
    "revision": "f819f8ce4384f9af8a183035715b92a0"
  },
  {
    "url": "assets/js/14.fa863118.js",
    "revision": "05734b8310a8af8c68ec3219e795176c"
  },
  {
    "url": "assets/js/15.c889d2fa.js",
    "revision": "68d37ef233f4cda7457a0e5369400953"
  },
  {
    "url": "assets/js/16.08c929ab.js",
    "revision": "ee23a5115547bdad5261dc6d1c22cb75"
  },
  {
    "url": "assets/js/17.43ca6c01.js",
    "revision": "43350078281854a1f79d7bea706c5a5a"
  },
  {
    "url": "assets/js/18.ce6c31a7.js",
    "revision": "08e2148c5f893a9355bc9738c948e2ce"
  },
  {
    "url": "assets/js/19.d4607932.js",
    "revision": "c097a2891f0bb5f84a1514bcae866e64"
  },
  {
    "url": "assets/js/2.7e7c8b61.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/20.dfbb9f79.js",
    "revision": "dc26bd77ee2cb4b9df80a3ad17aaf545"
  },
  {
    "url": "assets/js/21.f6fddcb8.js",
    "revision": "7ec858395bbf628b93b680816a4e0de6"
  },
  {
    "url": "assets/js/22.f5fc812c.js",
    "revision": "2a0870cd575e14d8aa5768d7c7bf2b9b"
  },
  {
    "url": "assets/js/23.d340a22d.js",
    "revision": "2a8934cf997ebce3eb918158faf3415d"
  },
  {
    "url": "assets/js/3.217ba78e.js",
    "revision": "43b06d90ccc9161b9f82670a4080e15c"
  },
  {
    "url": "assets/js/4.a0359462.js",
    "revision": "38ad82f15e3dfa250fb998f89bb37d7a"
  },
  {
    "url": "assets/js/5.83e179f6.js",
    "revision": "f232d4434c0d0b9a89e986915e21c525"
  },
  {
    "url": "assets/js/6.3d6e21a8.js",
    "revision": "d8b40f2154154ed40759d89ba75fdd58"
  },
  {
    "url": "assets/js/7.1090bdda.js",
    "revision": "8105cdd5baf4ac390a941a025adf9e17"
  },
  {
    "url": "assets/js/8.d2e145f6.js",
    "revision": "987ff798c9f52af1e0e76eee73c12db2"
  },
  {
    "url": "assets/js/9.42465ad4.js",
    "revision": "978f4d2a4d47e0891fa669b320190b09"
  },
  {
    "url": "assets/js/app.285c13dd.js",
    "revision": "38d52b3aa6329f6eebeb6c87bc098e91"
  },
  {
    "url": "contribute.html",
    "revision": "b54969b53984ca7f4e6e7ab6bc3caa73"
  },
  {
    "url": "index.html",
    "revision": "93c93f1b80da9a15d6b04b17a72b7d2e"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "e4be9f1c26794a210f0558821df6fe4c"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "6571361a9c6f29bef8dfab0c8208fc8e"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "a2074a09cda23b49f6ad6b7e0959590e"
  },
  {
    "url": "src/chief/basics.html",
    "revision": "013f0ecc68a42a228aa80f846b587f7b"
  },
  {
    "url": "src/chief/contributing.html",
    "revision": "2f0373695bc573e3653cc14f27224565"
  },
  {
    "url": "src/chief/installation.html",
    "revision": "1e2f6253c00445e410c3377a4fe4b22d"
  },
  {
    "url": "src/chief/models.html",
    "revision": "4b0215cd697e814331839692b68ce96b"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "d30131c5a0b2addcbfece9ea89185ff3"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "fa5813c4a434dce3db61983fa0a15f33"
  },
  {
    "url": "src/chief/upgrading_0.2.html",
    "revision": "9b1199b3495fb12a191655b593c2ca1d"
  },
  {
    "url": "src/chief/upgrading.html",
    "revision": "3e025cc15b488a8d69981ad159d7202a"
  },
  {
    "url": "src/chief/users.html",
    "revision": "e43a5ccdcd87703356bcb6c2b664a1d9"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "0b95afbae01a9d57f712dfbfc221ac64"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "b56d5f0e25372c673290c61748d6b1be"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "2a20f2ec1f6ea035e2263449c9d8080c"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "221e67695a7f13739dad9a060adb234c"
  },
  {
    "url": "src/locale/index.html",
    "revision": "8d28cd87bc7c54d4b72f230805dacdfc"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "e04ba7c9ae8053a8630e250e84d79743"
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
