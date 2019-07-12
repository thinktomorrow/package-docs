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
    "revision": "b1df7bebd44d6bcc2fef004b4830e753"
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
    "url": "assets/js/6.100a59eb.js",
    "revision": "7ec49f380a49c162f7404c429ca0ce24"
  },
  {
    "url": "assets/js/7.e0f244e4.js",
    "revision": "8400b06b1166007bc35122cadcbdfc1c"
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
    "url": "assets/js/app.e184573a.js",
    "revision": "9c0955a7c7e06576c95fd0d24dbeae70"
  },
  {
    "url": "contribute.html",
    "revision": "29b38f756c13f7066b3f6a778bacc047"
  },
  {
    "url": "index.html",
    "revision": "cfd9d87c27419ef863c2f8c2464f201c"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "eebfee76d0e3ab8f1c3e065ae2088875"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "3734591c6865b95f7427686ce22116a6"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "d090d187949ad5c3fa4cba4a254c281c"
  },
  {
    "url": "src/chief/initial_setup.html",
    "revision": "9d738f35dac15c9aef76e1591f1696b5"
  },
  {
    "url": "src/chief/models.html",
    "revision": "173f806d23be3e25bc282038a1c68e8d"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "a8b0abc12a91dabc5c282357909d643b"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "f6980d282c07ef782bfa869b01a376e9"
  },
  {
    "url": "src/chief/users.html",
    "revision": "983d320b247e99b1e57aa62066b509b6"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "29833cfb859017668c4fc5c800af9e06"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "771768026ebde3be1a575be0541b2eb2"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "7817787008af46db8fe96a2498e033dd"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "d0a4de14d563c5cf5b8e15c24beedcf0"
  },
  {
    "url": "src/locale/index.html",
    "revision": "40f37bf9f51c10f74da696303e5b80f3"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "490a4c18445c22c66a471b71ea61a21a"
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
