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
    "revision": "8eaa37f1d2da8ffc475cf1c38424a111"
  },
  {
    "url": "assets/css/1.styles.3106e8d7.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.a58fb8cb.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.f08930e4.css",
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
    "url": "assets/js/10.f6f101c0.js",
    "revision": "1ee34459906179beecc5226ad6e8602c"
  },
  {
    "url": "assets/js/11.1b2d855b.js",
    "revision": "6260dd7a984a3e71b876c5e1507fff98"
  },
  {
    "url": "assets/js/12.0beb3e77.js",
    "revision": "8397bbcab11632323444a7e13446546a"
  },
  {
    "url": "assets/js/13.cd75577c.js",
    "revision": "f06443c5c4be1820cd4fdfb13f94fdae"
  },
  {
    "url": "assets/js/14.ff119ae1.js",
    "revision": "798ba49a16a6c6add5526e79bc544e6e"
  },
  {
    "url": "assets/js/15.a7555be7.js",
    "revision": "d9518750ab29e30bd2b3aa0e11a071f4"
  },
  {
    "url": "assets/js/16.ca3763c7.js",
    "revision": "2bea7faa6e1cb5c7aef2445feabd6941"
  },
  {
    "url": "assets/js/17.1e444358.js",
    "revision": "c1013c6d0e8f2bf09ad69f5188188202"
  },
  {
    "url": "assets/js/18.3e975d5d.js",
    "revision": "9588d5f06b1ee99a29956ee52113787a"
  },
  {
    "url": "assets/js/19.a4e7a904.js",
    "revision": "cb8617f687f84e5af8937dbbe2a8ef07"
  },
  {
    "url": "assets/js/2.a58fb8cb.js",
    "revision": "d5ebf55b3bb58fcdde89d022eafb9438"
  },
  {
    "url": "assets/js/20.1cfefb2d.js",
    "revision": "d3a26daffd308c439ddfc493902fd3d0"
  },
  {
    "url": "assets/js/21.2e6738b3.js",
    "revision": "b84179d422710a30ab8ceca10325ed66"
  },
  {
    "url": "assets/js/3.53573930.js",
    "revision": "be672deb4304cdf59c9dd95942f42880"
  },
  {
    "url": "assets/js/4.98fd8650.js",
    "revision": "0595a5efcf67d82c94463a01c60e49d1"
  },
  {
    "url": "assets/js/5.9ddc598c.js",
    "revision": "98f82662402ebf4ca1d554234ce22422"
  },
  {
    "url": "assets/js/6.3764e5d6.js",
    "revision": "da001fe2c5f3827181d29ab5c650ec3a"
  },
  {
    "url": "assets/js/7.b3825732.js",
    "revision": "75c28e76a40854425e4ba0f7ea7e49d4"
  },
  {
    "url": "assets/js/8.df4fb562.js",
    "revision": "fe350d542e4050fcc02048a0f08e522f"
  },
  {
    "url": "assets/js/9.dd76f29f.js",
    "revision": "f6d543ad21bc7ab7e4a0ccfc0e2eefd7"
  },
  {
    "url": "assets/js/app.f08930e4.js",
    "revision": "503543680183d021b67a6f1955b67882"
  },
  {
    "url": "contribute.html",
    "revision": "d1f5f60429cfe414428ab2ae0cdca084"
  },
  {
    "url": "index.html",
    "revision": "810ae7b8ac11aa48b061b14e0d920b7d"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "bd2c9ee54d77c16724c4b0ee21b42881"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "0a148a265be7de71ff608db960704181"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "30978d4792a1ee27822d9e09e7589d8d"
  },
  {
    "url": "src/chief/basics.html",
    "revision": "884e29e3e0aa47a91fe2229ca220a72c"
  },
  {
    "url": "src/chief/contributing.html",
    "revision": "ba63cebbb7651c4d1be30614cde2cf89"
  },
  {
    "url": "src/chief/installation.html",
    "revision": "29c250312e93b9faa5c94c2b69af94b9"
  },
  {
    "url": "src/chief/models.html",
    "revision": "90933af92f6dfe0ec804cbbb4d542c84"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "a9f4ccf74213c1e65f361e1dbda57040"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "9114aad91420b2a9adf0e4f8c8e38f96"
  },
  {
    "url": "src/chief/upgrading.html",
    "revision": "cb3538501a83f2a8dfcdc4d4961c8272"
  },
  {
    "url": "src/chief/users.html",
    "revision": "81fc494e9e0edc7afd9748a7075574a3"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "e5ae483e02edd009f0d31685526d4bb8"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "dc9fde3f4d6ba5155782f3808351dd66"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "a7a922cc22a2f3a38fc00cd498701e0d"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "14e3b9a7a5ed600219cb91bbd075be7b"
  },
  {
    "url": "src/locale/index.html",
    "revision": "e30428c6973c2bb7f46743c338c4e447"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "47fe2e7422d963b428526265a1947787"
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
