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
    "revision": "40ec8452157c181bd74d80969c963bcf"
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
    "url": "assets/js/10.543a246e.js",
    "revision": "5eb4ce0152f4f534f6b5acccad223807"
  },
  {
    "url": "assets/js/11.ad5bc0a3.js",
    "revision": "0054ac04e25ed529034822e6a8866dd7"
  },
  {
    "url": "assets/js/12.e48b8d8a.js",
    "revision": "1feb400800d84dd4d43df959e62517a7"
  },
  {
    "url": "assets/js/13.ee99e169.js",
    "revision": "d820d7ddc4371c38d380655f4e328f39"
  },
  {
    "url": "assets/js/14.3cc85c58.js",
    "revision": "64d7cf02ea743c1811fca4986e92d747"
  },
  {
    "url": "assets/js/15.5accc778.js",
    "revision": "ad2a74a2c8ffe022e5551fe79b580292"
  },
  {
    "url": "assets/js/16.12920ced.js",
    "revision": "7ff278f1a12c9702ac5766ce3a172a4a"
  },
  {
    "url": "assets/js/17.48e29fb8.js",
    "revision": "d4afd8c015c1eb19cb32ee3361fe8f06"
  },
  {
    "url": "assets/js/18.d5b32d19.js",
    "revision": "66ff6a581f741c4ec535fa02a01d1054"
  },
  {
    "url": "assets/js/19.b34963cd.js",
    "revision": "1482c43b2d88182302abedc537cf9302"
  },
  {
    "url": "assets/js/2.7e7c8b61.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/3.65011cf9.js",
    "revision": "5a1cb8d05d5988bf9f1a70a0ac276d10"
  },
  {
    "url": "assets/js/4.2df2224c.js",
    "revision": "c5eb77eb5490a33f33a4f5eb11becd6a"
  },
  {
    "url": "assets/js/5.c0fa390f.js",
    "revision": "3a2eceaf1696434fca42050ff2f9d79f"
  },
  {
    "url": "assets/js/6.d629bb2f.js",
    "revision": "6f005cd743af2e37ecc73bf6b0efaac7"
  },
  {
    "url": "assets/js/7.8c7b6600.js",
    "revision": "39d4a617c70eb7f27e5dbcfdffb54dc0"
  },
  {
    "url": "assets/js/8.ff7253a4.js",
    "revision": "1c51f96e5d9f91a959309e9550f29e08"
  },
  {
    "url": "assets/js/9.c65b44ee.js",
    "revision": "d817503934d88ed6efdc81417b6198b2"
  },
  {
    "url": "assets/js/app.aad1106a.js",
    "revision": "182b135cadebc95ea35f8fa907e0ad1c"
  },
  {
    "url": "contribute.html",
    "revision": "96c79404713934e3dc87548d5bc90426"
  },
  {
    "url": "index.html",
    "revision": "ea781445d1a84f065417608dca7754f9"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "10635a48d8cf721bc6e33520bbb82682"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "df8abedfe1d943fa9748bc7037cbab07"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "46b140f1a2a452451124b8aef799ea3d"
  },
  {
    "url": "src/chief/initial_setup.html",
    "revision": "48ec744f4140870cc570f98110620962"
  },
  {
    "url": "src/chief/models.html",
    "revision": "b9f020ca22f15075a281e004fda937ef"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "4f200f82d6d8749f774fc3fcc4148a1c"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "17b8e8d13d17351098561d3bbb3771f6"
  },
  {
    "url": "src/chief/users.html",
    "revision": "d0bcfeed851311a2b2a0ab165af3ebcb"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "052d8ea6e2e382bceec279f02348f01a"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "76542c01003b81045f12f6aaa0e57561"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "3efea9753aef349f7efa75f1d3a32735"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "d698b56dfa28005595a2aa25c53b6571"
  },
  {
    "url": "src/locale/index.html",
    "revision": "05f6dbe5b99df46a7aae0f4fde4227da"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "38505c718b08bd19f695f6ce1942ef5d"
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
