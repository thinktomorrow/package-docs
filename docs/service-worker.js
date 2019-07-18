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
    "revision": "bd6e8e9f98746b379244f4899e21a2d4"
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
    "url": "assets/js/10.4f13ff72.js",
    "revision": "4e4c70c924e2cc62bd6c2b43d31df9ac"
  },
  {
    "url": "assets/js/11.2b988166.js",
    "revision": "fd181033bc5825d6bbe3915f969b1f86"
  },
  {
    "url": "assets/js/12.3c857668.js",
    "revision": "ea8b89a431749d6d6dd6321a3562c71c"
  },
  {
    "url": "assets/js/13.cc790717.js",
    "revision": "413c12f7a77373988ee4c1d124b1a546"
  },
  {
    "url": "assets/js/14.4751f37f.js",
    "revision": "0f18f5d4b8b226d9266f304a6b35c28c"
  },
  {
    "url": "assets/js/15.93f1ab80.js",
    "revision": "488047caab8aa9bf359976a52123104b"
  },
  {
    "url": "assets/js/16.c6b2e213.js",
    "revision": "31bc43d3eaaa1a45b10913afabd587e7"
  },
  {
    "url": "assets/js/17.e879192a.js",
    "revision": "bf0da81a1b92f7132ccacc969b6e723e"
  },
  {
    "url": "assets/js/18.8e2167a4.js",
    "revision": "ca3b0abb1aa27243910242c4f9c4ce1d"
  },
  {
    "url": "assets/js/19.3c7ff073.js",
    "revision": "0c3880c2df2f4f30fcdb137ee116f51d"
  },
  {
    "url": "assets/js/2.7e7c8b61.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/20.6c4e489d.js",
    "revision": "0c5852be84aa2ba58fbd3160666ea76c"
  },
  {
    "url": "assets/js/21.79c30b58.js",
    "revision": "fdaee5a20894ae600bd05df38b94732e"
  },
  {
    "url": "assets/js/22.b73b93a3.js",
    "revision": "4dbcd937405d75f367927d192f17255f"
  },
  {
    "url": "assets/js/23.639790c2.js",
    "revision": "88c5b8eb348b818b4d6f73628543543f"
  },
  {
    "url": "assets/js/24.42d4f94a.js",
    "revision": "ea8af6bf76009157f1cb8dee61d92e39"
  },
  {
    "url": "assets/js/3.217ba78e.js",
    "revision": "43b06d90ccc9161b9f82670a4080e15c"
  },
  {
    "url": "assets/js/4.21b5dcbb.js",
    "revision": "ffe1aa92fb8d0f89776261bd4ce9e805"
  },
  {
    "url": "assets/js/5.cc9b1a57.js",
    "revision": "062fcf318a84d205c0da810e05a6f7a1"
  },
  {
    "url": "assets/js/6.0f447532.js",
    "revision": "8819a02fd145d8a966defb6fedee0add"
  },
  {
    "url": "assets/js/7.19264381.js",
    "revision": "b4ef7f7dede7172faba8b9b214320fe1"
  },
  {
    "url": "assets/js/8.35cc3d1c.js",
    "revision": "815d258cb1835740ff6daadf5ce046fe"
  },
  {
    "url": "assets/js/9.f6a8ba4e.js",
    "revision": "ebc60b898b06a38dafe2e79f1a328d55"
  },
  {
    "url": "assets/js/app.b8d94ade.js",
    "revision": "0625c5312c187ae2c1c632f663be7e68"
  },
  {
    "url": "contribute.html",
    "revision": "181ac283f4601e13d58c8c90aa52c45b"
  },
  {
    "url": "index.html",
    "revision": "f83ade4de3ed5854e4a600c0243af832"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "5a6c65e6688c0b8d4414401501cc6cc0"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "f6e671723df7a2f0c82ead2df5dd565c"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "8741ba9584517c947628d34b69d32f16"
  },
  {
    "url": "src/chief/basics.html",
    "revision": "ee415b3fbea3927da24b9ddbea4a95b3"
  },
  {
    "url": "src/chief/contributing.html",
    "revision": "0b16d4911609f96c696ca83a3c1fb290"
  },
  {
    "url": "src/chief/fields.html",
    "revision": "305068f4264a39c27ee726071453f30f"
  },
  {
    "url": "src/chief/installation.html",
    "revision": "51b567e2d75b8715e34fcaabd95298c1"
  },
  {
    "url": "src/chief/models.html",
    "revision": "e950be6565dbeca209e41548fcc737b6"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "04321e92e94e11aa35bf69845e9c4435"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "06709a626baa2f707f3d9e2681288fed"
  },
  {
    "url": "src/chief/upgrading_0.2.html",
    "revision": "9385dce3ad78d60f590f94d02c68f460"
  },
  {
    "url": "src/chief/upgrading.html",
    "revision": "e7768d333fd92c127225db183fc7974a"
  },
  {
    "url": "src/chief/users.html",
    "revision": "c0fa25d308e232175edfbc417a1ed0d1"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "317963a1e73bb663647e3f16a850929c"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "bd8c65c7750558f4d56ccc40c76c259b"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "94abf99abcd56ca8713eaaafb5e32ce8"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "d75ccc68e18b0758a7da1fd2ba4db4e3"
  },
  {
    "url": "src/locale/index.html",
    "revision": "77e23a00f4fd9d8c5a14a4a31a2bda41"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "d37e0a03b821ad9da4c436ff48d30c5e"
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
