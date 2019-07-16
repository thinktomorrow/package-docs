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
    "revision": "0bdc32009de9b4342cf234f9fd536700"
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
    "url": "assets/js/13.0fefaf65.js",
    "revision": "bb91e7d15bc9e92b0655209ee833065d"
  },
  {
    "url": "assets/js/14.fa863118.js",
    "revision": "05734b8310a8af8c68ec3219e795176c"
  },
  {
    "url": "assets/js/15.028fb1f9.js",
    "revision": "1a03947524ae1b2a858d54a8f25654a6"
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
    "url": "assets/js/app.fc179514.js",
    "revision": "abf73bee09655df454c3b14a75a10f23"
  },
  {
    "url": "contribute.html",
    "revision": "df0f931699d372228d0840685a9321b6"
  },
  {
    "url": "index.html",
    "revision": "66ef9076a99c2b6a474affa577742717"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "095fb8178594a7eb3392d153757ed1e3"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "65e5e1a20d33407aa52a2122b9825764"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "aef509e58a3a7efb382af7f9faad1f68"
  },
  {
    "url": "src/chief/basics.html",
    "revision": "3f572a3cba317d3e9f7c6774a2b16b91"
  },
  {
    "url": "src/chief/contributing.html",
    "revision": "2b36204fbee43294e7250521036b52bc"
  },
  {
    "url": "src/chief/installation.html",
    "revision": "e800e91b5b74e0c1b6bf1333f3849db3"
  },
  {
    "url": "src/chief/models.html",
    "revision": "9663b629a5f47c6df0a188ce159798d5"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "85a7dfe8ce7aad4a1e9e187b067e211a"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "966bdefd56f15f505a3224eeae4e3d50"
  },
  {
    "url": "src/chief/upgrading_0.2.html",
    "revision": "bfdb44a76696fd5c3c6eb142f8e64b5a"
  },
  {
    "url": "src/chief/upgrading.html",
    "revision": "fcb9662a6232be54e4f09ba26b459a7d"
  },
  {
    "url": "src/chief/users.html",
    "revision": "93dd7aca8f9547f1dabf764496f01c1b"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "5a2df13b64fc7d50f71145a398cdeda2"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "112869a74d0a5e4ccb208cd1c987aec9"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "a49c2ad03422032ffa749036daf6b6d8"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "0fc31c5c8f761c36072d67981e48eb43"
  },
  {
    "url": "src/locale/index.html",
    "revision": "b686a9e0f57112bf0ac3b9e7e7414602"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "f6427ba3c8635eecfd747a6c2a305d32"
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
