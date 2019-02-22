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
    "revision": "c6005f0ad98441446501bc4a49159060"
  },
  {
    "url": "assets/css/0.styles.0f205980.css",
    "revision": "8a99189f7cce7cdd3f86992459894f95"
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
    "url": "assets/img/trackingid.da18a397.png",
    "revision": "da18a39785620618b084e809fdde6259"
  },
  {
    "url": "assets/img/workspace.8f7e307c.png",
    "revision": "8f7e307c19ef1a3d62d74f9017f394aa"
  },
  {
    "url": "assets/js/10.097c5a71.js",
    "revision": "0c979c8335645fd95c8c187ba738cb2d"
  },
  {
    "url": "assets/js/11.e84a24be.js",
    "revision": "83825e53b0c9b35ad5d4f0d7a3f12b00"
  },
  {
    "url": "assets/js/12.71b29778.js",
    "revision": "1c2178a586f309bd459c7bf0ab2608a6"
  },
  {
    "url": "assets/js/13.971951d1.js",
    "revision": "d9a8bd3bad11adc08a86cd0bc7e3436a"
  },
  {
    "url": "assets/js/14.64c8f410.js",
    "revision": "055ddf16aef255ff2dc19fec2fa5799c"
  },
  {
    "url": "assets/js/15.d91d943f.js",
    "revision": "2d873d0d1b2363e40e1593e88707a0ba"
  },
  {
    "url": "assets/js/16.bdd90375.js",
    "revision": "9de9e80a3e422762cd2866f8f81b0662"
  },
  {
    "url": "assets/js/17.cd9a0b7f.js",
    "revision": "ecf60e5c303358751da0fb9c01996334"
  },
  {
    "url": "assets/js/18.832adbb3.js",
    "revision": "69df9d523549c3b28ee3ca8372bb6217"
  },
  {
    "url": "assets/js/19.b5c3a32a.js",
    "revision": "b41300a8795a74153f26aaf7a6ed3a3d"
  },
  {
    "url": "assets/js/2.90a804d4.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.60f504ec.js",
    "revision": "7e7e64c0fe18ebd4b8933dde30c7153d"
  },
  {
    "url": "assets/js/4.5a12f1ac.js",
    "revision": "f0126568f4c5005c6b09c0d6eef53858"
  },
  {
    "url": "assets/js/5.8d846405.js",
    "revision": "4db2c2db34d7e319122ea9a232b4d245"
  },
  {
    "url": "assets/js/6.0a55bd34.js",
    "revision": "2f0acc3ffb037ff4418b9801be368475"
  },
  {
    "url": "assets/js/7.e3c5fb55.js",
    "revision": "c05a439d1e33a73ca3900b27989fbc98"
  },
  {
    "url": "assets/js/8.b14e03b6.js",
    "revision": "078958479c8d0909e755e3c78ffc49a3"
  },
  {
    "url": "assets/js/9.71ca6d9f.js",
    "revision": "d38c3f24ef54ed70bfd5d27a7cf2c1e1"
  },
  {
    "url": "assets/js/app.005e6a70.js",
    "revision": "29692b5a7f5d63825c89a0f88991897b"
  },
  {
    "url": "contribute.html",
    "revision": "a93586a71de28a723c6f61f29a1d9dd9"
  },
  {
    "url": "index.html",
    "revision": "978464510dcccd04c7cafaefbae65d85"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "769d71b91ce50710880e96624cfad934"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "a99bf566795d7e0876c0a6fcdb43de96"
  },
  {
    "url": "src/chief/advanced_model_management.html",
    "revision": "9878b2ac98776bdec0f90619760c6b7a"
  },
  {
    "url": "src/chief/advanced_page_management.html",
    "revision": "86d926e248dfcaada8a91e8059bee92c"
  },
  {
    "url": "src/chief/advanced_site_management.html",
    "revision": "238624da61693cf6691edc833f87150d"
  },
  {
    "url": "src/chief/first_steps.html",
    "revision": "eab65ada213c4a5ca5e54d9b5a822667"
  },
  {
    "url": "src/chief/model_management.html",
    "revision": "66e200eaf3873169fa222a9c1ae09c9b"
  },
  {
    "url": "src/chief/pages_modules.html",
    "revision": "2d78d97147b30527c2e39444b16d7cab"
  },
  {
    "url": "src/chief/site_management.html",
    "revision": "9e9b7a5ce96ec492f57353c798994f46"
  },
  {
    "url": "src/chief/users.html",
    "revision": "a3da35b6f6a64b8cba68a0864692f1c9"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "aea5152c313acdb58659a4a783ec87fa"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "c312162795546173d534bd9bccc09258"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "407fa3f181c5f9577c9ae1ec1d26dfe6"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "4eb6619e7c684bfe3717ae94edc79fb9"
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
