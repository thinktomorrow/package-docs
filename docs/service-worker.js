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
    "revision": "58f2125e87ad5e5766f7acde76846a96"
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
    "url": "assets/js/16.fc9d22a8.js",
    "revision": "51e94c16b136f909acdc7a878c511754"
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
    "url": "assets/js/9.58fd7542.js",
    "revision": "1d246f3370f660c7c18b2a668efd0b44"
  },
  {
    "url": "assets/js/app.53036630.js",
    "revision": "d88746b495ed600d47fa1a084ce78e36"
  },
  {
    "url": "contribute.html",
    "revision": "b41dfc55a7b288b407f087ee064991c9"
  },
  {
    "url": "index.html",
    "revision": "edfcd05e6c35ce1f2b19319f805819d9"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "c4be682ae588c190e338c8e1a37144df"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "7b33ce2180b08d4f03d6ece079a86920"
  },
  {
    "url": "src/chief/advanced.html",
    "revision": "cea52fe72662d627235b33ee133ea120"
  },
  {
    "url": "src/chief/basics.html",
    "revision": "d5f1de02398a215a0adf7f699ed2ed65"
  },
  {
    "url": "src/chief/contributing.html",
    "revision": "bfc467d2911f653650e2a26e2b005fc7"
  },
  {
    "url": "src/chief/fields.html",
    "revision": "0178cbf920b3df04112bef57975093ec"
  },
  {
    "url": "src/chief/installation.html",
    "revision": "423e712f60e4ddf06539e74436d7771d"
  },
  {
    "url": "src/chief/models.html",
    "revision": "6c2f4e842c196c9e0b0d09e519ace426"
  },
  {
    "url": "src/chief/pages.html",
    "revision": "ba353ec16be7dbaad53ee1d1d71fa67a"
  },
  {
    "url": "src/chief/site_config.html",
    "revision": "9a0c27e81a3181199db43fc9ca3423a5"
  },
  {
    "url": "src/chief/upgrading_0.2.html",
    "revision": "7b796fb984d87723d478a0d3d2d1d351"
  },
  {
    "url": "src/chief/upgrading.html",
    "revision": "d162c957e69bd1167b44c143bb7154da"
  },
  {
    "url": "src/chief/users.html",
    "revision": "4af30b2709250d06ad2fde257425f5fb"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "f796e0626293d047ede4caf446903972"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "3c007b0863858d384eb42181da426077"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "e2ce874f5d296591ce18558603895934"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "a8be66792d2f7adfff54e7439e854d2c"
  },
  {
    "url": "src/locale/index.html",
    "revision": "ff0225aa430674f48f86781de2f28be3"
  },
  {
    "url": "src/squanto/index.html",
    "revision": "3216a27126014d5cb0a5f98871d64175"
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
