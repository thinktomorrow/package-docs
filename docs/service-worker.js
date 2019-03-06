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
    "revision": "c0deb9d9c003a028a1322b55ff3db2ff"
  },
  {
    "url": "assets/css/1.styles.d655414b.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.069859d9.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.7853392f.css",
    "revision": "dbca0b3fba97b4abb5dcdb484ff93e6f"
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
    "url": "assets/js/1.d655414b.js",
    "revision": "3cdeaaf61a457e5c3b6da9b0524e3fab"
  },
  {
    "url": "assets/js/10.9a912c9f.js",
    "revision": "332c1190ca38a2fe433f1c9e03bc1907"
  },
  {
    "url": "assets/js/11.cd199977.js",
    "revision": "461910a62ad453f8dd852cd6088587b9"
  },
  {
    "url": "assets/js/12.c6ef191c.js",
    "revision": "4f1d80d0b1c9123c20dada352ab8e03e"
  },
  {
    "url": "assets/js/13.8ef7b80c.js",
    "revision": "a9d309493d726ad9b698bb4361c47fbe"
  },
  {
    "url": "assets/js/14.85654b9d.js",
    "revision": "0d78065c77b8f8f06027c6743834be04"
  },
  {
    "url": "assets/js/15.e050ff3a.js",
    "revision": "e480bfb6b17d6a01e0a46247fba6de8a"
  },
  {
    "url": "assets/js/16.e2230f2e.js",
    "revision": "a202fbc3e373980813ca0da9c31c0445"
  },
  {
    "url": "assets/js/17.cf740458.js",
    "revision": "4e68ade6728b026617491a58a3356322"
  },
  {
    "url": "assets/js/18.7e3fa25b.js",
    "revision": "e16e303f28752c1d60b24436906eb94f"
  },
  {
    "url": "assets/js/2.069859d9.js",
    "revision": "972ec773f74ab8da00ecf39629e64e50"
  },
  {
    "url": "assets/js/3.86815967.js",
    "revision": "535b82f2f5679feab44a088e4b8bc3af"
  },
  {
    "url": "assets/js/4.b41e0616.js",
    "revision": "0d5c3abcb2e4bf06371cd9382380c0da"
  },
  {
    "url": "assets/js/5.e43ffdd7.js",
    "revision": "5b46494d8d701cddfa5536e7a8146af5"
  },
  {
    "url": "assets/js/6.e8f23100.js",
    "revision": "82a7a4f04139d2e4b5c38e9b100d4aeb"
  },
  {
    "url": "assets/js/7.a7945841.js",
    "revision": "318ab80c244e51c4f60e145c58d5645d"
  },
  {
    "url": "assets/js/8.c0a84e86.js",
    "revision": "af9476e4a5b5fff0672f6cef822c2cf5"
  },
  {
    "url": "assets/js/9.1d25c31d.js",
    "revision": "664f74a70b4aaacc624d3ca8dac0eebe"
  },
  {
    "url": "assets/js/app.7853392f.js",
    "revision": "feedac2d70dd182c693ddad026168b83"
  },
  {
    "url": "contribute.html",
    "revision": "e5ceba8240c3a50bd03f8eb0bdb8a982"
  },
  {
    "url": "index.html",
    "revision": "610320a31e1bdea38228779a7b06f6f5"
  },
  {
    "url": "src/assetlibrary/guide/docs.html",
    "revision": "63d512fd1ec0fac0f4b2998924be9c3e"
  },
  {
    "url": "src/assetlibrary/guide/installation.html",
    "revision": "a16c269589516b8ca22569e442ef708d"
  },
  {
    "url": "src/chief/advanced_model_management.html",
    "revision": "2be3e770c67208b841dbf74a5d09a71d"
  },
  {
    "url": "src/chief/advanced_page_management.html",
    "revision": "7ab5309aa2defc6cda12751c93d50ae2"
  },
  {
    "url": "src/chief/advanced_site_management.html",
    "revision": "6f45566f32d88f4f0c6f892cd9749a8f"
  },
  {
    "url": "src/chief/first_steps.html",
    "revision": "260306470728a080e267ab0189f83042"
  },
  {
    "url": "src/chief/model_management.html",
    "revision": "c2f43ed2a3a7f779fe86ea127d0a27af"
  },
  {
    "url": "src/chief/pages_modules.html",
    "revision": "7e8d0264a464617995b5795fd51e54ca"
  },
  {
    "url": "src/chief/site_management.html",
    "revision": "6b11fd0f980807b50b1ce8d099fbd549"
  },
  {
    "url": "src/chief/users.html",
    "revision": "33c42d72e53336b6f738bb0ed1dcf698"
  },
  {
    "url": "src/guidelines/git-workflow.html",
    "revision": "b4425a53d41aba15a3b35c6558e911a5"
  },
  {
    "url": "src/guidelines/gtm.html",
    "revision": "f944393ac864878f23215507ba9464b6"
  },
  {
    "url": "src/guidelines/index.html",
    "revision": "a1a8881940f67f1b83d49a0f41dbc160"
  },
  {
    "url": "src/guidelines/trello-workflow.html",
    "revision": "190e7f93916065f5cba33ba75c99dc56"
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
