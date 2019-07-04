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
    "revision": "1177d32589faf99396051dd8c08e5178"
  },
  {
    "url": "assets/css/1.styles.3106e8d7.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.77280a2f.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.07bae95f.css",
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
    "url": "assets/js/10.8a624012.js",
    "revision": "a519477be9aaaf74063420793d51cdf1"
  },
  {
    "url": "assets/js/11.04d11356.js",
    "revision": "1eb2d4bc12387fe876560b34ef180a66"
  },
  {
    "url": "assets/js/12.1bf5eb70.js",
    "revision": "335709a9669cb54ae029bf1a1c4bf8b1"
  },
  {
    "url": "assets/js/13.1dc52019.js",
    "revision": "44925135ba625b76dd35d5f2dd8e575a"
  },
  {
    "url": "assets/js/14.2cbf3f26.js",
    "revision": "c6ebe821f33bfc736611268adbbe605d"
  },
  {
    "url": "assets/js/15.0c048058.js",
    "revision": "c240a10df03de684ac137fd5fe4b5677"
  },
  {
    "url": "assets/js/16.2ca966d5.js",
    "revision": "290729f5f935ebc74ce189436e54738c"
  },
  {
    "url": "assets/js/17.8fa1b942.js",
    "revision": "242c9130096e99986bd5a4ba23fde01d"
  },
  {
    "url": "assets/js/18.64984944.js",
    "revision": "db6b16f49d756f8754314dc7061957fd"
  },
  {
    "url": "assets/js/19.be0a180f.js",
    "revision": "1c0fa97066266bc7d63081bab942c3e7"
  },
  {
    "url": "assets/js/2.77280a2f.js",
    "revision": "12c60fa1e4a654dc01c4657842bc968b"
  },
  {
    "url": "assets/js/20.2bcc4bb7.js",
    "revision": "640ad8b00dad365ce3888365b5f14cae"
  },
  {
    "url": "assets/js/21.756648be.js",
    "revision": "8e45c11ab6f78d0dafed796182b8d965"
  },
  {
    "url": "assets/js/22.1145923a.js",
    "revision": "c31963deff4744061ad9a2d9dc33af4d"
  },
  {
    "url": "assets/js/3.67545224.js",
    "revision": "2e9798cc0cfad05a42af6e548624b029"
  },
  {
    "url": "assets/js/4.a0989135.js",
    "revision": "4e97d72d5608959d495604bb8689e24f"
  },
  {
    "url": "assets/js/5.bb9cd0d1.js",
    "revision": "3625d95b3e6293a3fe0c4c878f8bd6ea"
  },
  {
    "url": "assets/js/6.b26111b5.js",
    "revision": "47043844fa4f58b7c4d95ecd01fd7658"
  },
  {
    "url": "assets/js/7.b57d5192.js",
    "revision": "e25ecf8651ea09e7c65ea90929aca11c"
  },
  {
    "url": "assets/js/8.4152d1e5.js",
    "revision": "1d61fe8bf328b3bf8f54d10d43319e9c"
  },
  {
    "url": "assets/js/9.79a14dd2.js",
    "revision": "606e00f75aa8d00c31d72be4342c3da5"
  },
  {
    "url": "assets/js/app.07bae95f.js",
    "revision": "5e8866774f3bb87e71bfd110ffcdfd57"
  },
  {
    "url": "contribute.html",
    "revision": "d13fe51aad4ae8cfcb5ad8e69165ba0e"
  },
  {
    "url": "index.html",
    "revision": "5a46ccf03ef3d9535e51a0f352d37e59"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "24ddbb090e3b07f8fbe85478f7621d9b"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "062ef99b448741ef75f51240ee3d5e01"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "cb5afb61623741e52472710e6e795676"
  },
  {
    "url": "src/chief/basics.html",
    "revision": "c24a9fdbdc9b0274277e9b3b7141d0f7"
  },
  {
    "url": "src/chief/contributing.html",
    "revision": "8978f76cfab79826c4b63f5148e5cb15"
  },
  {
    "url": "src/chief/installation.html",
    "revision": "ee545395463f3d1ee136849e6b7db27f"
  },
  {
    "url": "src/chief/models.html",
    "revision": "c2f5cc30814e44e54fd1ba053f5be795"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "c46eeed5017f2ab22a773933f6d4a5ea"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "0f156063f19fa98e3a2d7ad6d8a56ff5"
  },
  {
    "url": "src/chief/upgrading_0.2.html",
    "revision": "58e2dc6febda708cf7d589afcf9c9a97"
  },
  {
    "url": "src/chief/upgrading.html",
    "revision": "176351347615e00fed462ac2cdb79a2c"
  },
  {
    "url": "src/chief/users.html",
    "revision": "abc0e0ab93993e13223dcb058cb4098b"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "4f83441f4052cb02185b3919829fcec5"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "0bf0003f2b0c2d1f46c91e67e3c63e7f"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "e0ed7db2fc7ac87f72187a94cd2aeaac"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "c3d2fee509a11216d8566ae8a77aa828"
  },
  {
    "url": "src/locale/index.html",
    "revision": "e22c5b34139c64517ddfc469495a6f8d"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "9ebb91719a4e0fc7000f722ae3342f08"
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
