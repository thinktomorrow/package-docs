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
    "revision": "96340fa9139007bd45d925e340b6b5eb"
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
    "url": "assets/js/11.83c889a7.js",
    "revision": "faf2c3e47f911bc221d8a67fdbc58ab5"
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
    "url": "assets/js/15.537a37a2.js",
    "revision": "1defdb261845712c44b37d93c4cb3542"
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
    "url": "assets/js/app.dea626f7.js",
    "revision": "7761bedf1c6829cb8971fd0ccd9a5c48"
  },
  {
    "url": "contribute.html",
    "revision": "8ac223e7fc28dc57a1cdbac5a1003b93"
  },
  {
    "url": "index.html",
    "revision": "fd5b608ec144236446ea5a54479d3ca2"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "0b73ee8c508a12b63e1d6c33faad0adf"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "86df98ce8c691a5b0020f0c3dfea1a5b"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "933ea8e3996d8d9823c67fa327e104a8"
  },
  {
    "url": "src/chief/basics.html",
    "revision": "c4de0030eaaae16f6c705cb6a69dfbf8"
  },
  {
    "url": "src/chief/contributing.html",
    "revision": "7ab2d5dd31ce87c4fb8780fde0283f54"
  },
  {
    "url": "src/chief/installation.html",
    "revision": "fe92354da7e1f82368f3d6b4395dd290"
  },
  {
    "url": "src/chief/models.html",
    "revision": "31a5f1c5ba25c531409f0e9c4f611809"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "54c7462d6041864b299c250843318c4d"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "298a2ea8214b9904546f18fd1585267c"
  },
  {
    "url": "src/chief/upgrading_0.2.html",
    "revision": "d23995fa8d49de381ccf23084067360b"
  },
  {
    "url": "src/chief/upgrading.html",
    "revision": "d916626163ac7ec854429d97864f0b83"
  },
  {
    "url": "src/chief/users.html",
    "revision": "b7083a0385028987a046188f79f5b7a8"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "77ad69529612dc39007d657ad82bbda8"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "b10f183ca1a27e49099b3aa0be82884f"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "599a6361ad4fe0850d20ece9137b615e"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "fa47fcb2c9d0958ec4d01d9d1b4bb0a4"
  },
  {
    "url": "src/locale/index.html",
    "revision": "1ff5e6f6cc1f0db83820b96a59bc829e"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "bf6cbc74019fe12ca7c6c7d6057ed705"
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
