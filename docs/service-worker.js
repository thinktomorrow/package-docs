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
    "revision": "2648b45d1ec71ca7f1bf149fa607fc62"
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
    "url": "assets/css/styles.51da8e05.css",
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
    "url": "assets/js/10.895181e6.js",
    "revision": "63d89035bf799636817f4488975c2f84"
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
    "url": "assets/js/8.b93c077f.js",
    "revision": "bf5a8df0e4e03fbb7921546cba766deb"
  },
  {
    "url": "assets/js/9.79a14dd2.js",
    "revision": "606e00f75aa8d00c31d72be4342c3da5"
  },
  {
    "url": "assets/js/app.51da8e05.js",
    "revision": "60c99b4302276b1e0bf14c57cf53fb0e"
  },
  {
    "url": "contribute.html",
    "revision": "7b5f5d04184af3e28163dda46a608d83"
  },
  {
    "url": "index.html",
    "revision": "bac354b327c69f096cec844e564d5a0e"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "430897af10980d5c3c7abeb33edf3c33"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "6f55f3289108202be3c1f5468614e3e4"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "65c6f3e2fee1b7cd5890d72e6f6b5aa1"
  },
  {
    "url": "src/chief/basics.html",
    "revision": "c2d503a2e7f3df1c90b0f07b27dbb11b"
  },
  {
    "url": "src/chief/contributing.html",
    "revision": "b47ab7559ba64963d907fc3bddefd52c"
  },
  {
    "url": "src/chief/installation.html",
    "revision": "9c8f4e87d1dcd35cbf1224f42eac48fb"
  },
  {
    "url": "src/chief/models.html",
    "revision": "937bf1943aee3e4d4e132b18116c0095"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "63fef85a98db3e6d4b21f8503e512c29"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "8aec21bdce439c75bf1a5d8d7a40fb18"
  },
  {
    "url": "src/chief/upgrading_0.2.html",
    "revision": "946eb73ea5c98b22adace834796ad6a2"
  },
  {
    "url": "src/chief/upgrading.html",
    "revision": "cd27c3756e116f10fc338edcc0d4c1b6"
  },
  {
    "url": "src/chief/users.html",
    "revision": "aa1485db2575f37fc3590ccf1f01a48b"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "3a4944e5d48dbd8ec942bcea55c9f191"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "6581d90c662505e423483ad3fffe10b5"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "a35d782f484bdfca98d2f2065ff8a0bd"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "04e84d3dac504b82f20130ac515e4014"
  },
  {
    "url": "src/locale/index.html",
    "revision": "554ad2d2c63f911278aff88dea5e0ccf"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "0dd730904d8c50fb433217c1a0514adc"
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
