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
    "revision": "5b9312337c43800f29a8b4dd5c0226f8"
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
    "url": "assets/js/17.7028216f.js",
    "revision": "24370dbbaff677ebeb76cc3af94d00b9"
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
    "url": "assets/js/app.97d301fb.js",
    "revision": "330c7b65faf0d7982fb024f110bd0519"
  },
  {
    "url": "contribute.html",
    "revision": "ce6ab77f1a8bc42b838bcb9d02e1c355"
  },
  {
    "url": "index.html",
    "revision": "25d0432745d00a593ab6e5c0049fd37d"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "bf0e024608f32649728602997f236d7c"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "93b3cf2d73731b025c61a0e64b5608ed"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "c619fb823ff14ca19caa6b3bde36e7df"
  },
  {
    "url": "src/chief/initial_setup.html",
    "revision": "9e13be84c7ef3ca734b8d59cf69f616e"
  },
  {
    "url": "src/chief/models.html",
    "revision": "8afcbab992a30894d7f55f35ce490d6c"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "27cc11319436da8fb94d094a26316b6e"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "a79727e0fe23bec42cc54ae53c9cb502"
  },
  {
    "url": "src/chief/users.html",
    "revision": "a8ea3dfa34ad8973197d51350587d357"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "fefb08df90e293d6309a3e91cee14bf8"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "cb6163a65f31becf25c3e5e42c4bbf00"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "8fd0f944dbac502c2d8f283d3d03cfec"
  },
  {
    "url": "src/guidelines/local-development.html",
    "revision": "b0aff88323a31a84ad7fbeb5f1bf84d9"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "1e65fc572facb801da0bfe27a198484b"
  },
  {
    "url": "src/locale/index.html",
    "revision": "61698051ed0588e10ac73214d18b41f7"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "9ffc01525f73b7f7f0b9c210b6aa40a0"
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
