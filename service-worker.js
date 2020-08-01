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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fca1427ed0f582709f2b0c1ec5fd548d"
  },
  {
    "url": "api/index.html",
    "revision": "4b052e06cf8f60d51e555b11752745bc"
  },
  {
    "url": "assets/css/0.styles.15350211.css",
    "revision": "75fcf11c204b4b7571e76734862b30bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.04e651db.js",
    "revision": "2b7103f13a52bcf78a837d513ea5cf19"
  },
  {
    "url": "assets/js/11.728fb6e8.js",
    "revision": "15f52a652efc8d5ba24155fe8e350b50"
  },
  {
    "url": "assets/js/12.d8c5dc9d.js",
    "revision": "10342c8db889e242a46075d593f46687"
  },
  {
    "url": "assets/js/13.f8773251.js",
    "revision": "a75e24927b33502b3b0b0a9cc3323613"
  },
  {
    "url": "assets/js/14.170cd9d1.js",
    "revision": "c1c0bafc4da78caed716fe8415c12cb0"
  },
  {
    "url": "assets/js/15.d63e702c.js",
    "revision": "7e55e555ee48859a9f91ccd2cff3c391"
  },
  {
    "url": "assets/js/16.bef86ed5.js",
    "revision": "27e106c8fc41b137cab61df2983b9b83"
  },
  {
    "url": "assets/js/17.bc1670f7.js",
    "revision": "e8af03a821d1d005e68ed18c3da4ff1c"
  },
  {
    "url": "assets/js/18.62e60312.js",
    "revision": "570981bb11ff0f1b9c6670ca9f315402"
  },
  {
    "url": "assets/js/19.6faa8f3f.js",
    "revision": "ae586cd6059923cce9843fc99b8effd7"
  },
  {
    "url": "assets/js/20.80dc76bd.js",
    "revision": "8501f5f8b37e54202f1b0b917922b730"
  },
  {
    "url": "assets/js/21.9e5a4cfe.js",
    "revision": "bbeb3cb01d2c15a97aa37c351ba8eeb3"
  },
  {
    "url": "assets/js/22.84a7ddd0.js",
    "revision": "a2bba9a38c2e6205f2163e8f219cf50d"
  },
  {
    "url": "assets/js/23.a57c6f97.js",
    "revision": "d2e5ff5e89b684d3e980923b5a4238f6"
  },
  {
    "url": "assets/js/24.d523bf1f.js",
    "revision": "13d543ab5da4a03adcc605d10725a9c6"
  },
  {
    "url": "assets/js/25.a8cbb8d4.js",
    "revision": "6e8d0223a485064980e0ab1482b211d9"
  },
  {
    "url": "assets/js/26.cf87df1d.js",
    "revision": "ac3d2d6ae8dbc337679e77049fe87f3f"
  },
  {
    "url": "assets/js/27.61693944.js",
    "revision": "7c9e2c95131a2e9820d2095f0a1a9027"
  },
  {
    "url": "assets/js/28.b9535275.js",
    "revision": "6746d0bc0b7a97ca1659cf32fffcc955"
  },
  {
    "url": "assets/js/29.b4689cca.js",
    "revision": "5e5fb3f5d77f6ce823decaafdff87415"
  },
  {
    "url": "assets/js/3.6bba10e4.js",
    "revision": "8cb058a7b81a0523028a0fa4ac48ec1c"
  },
  {
    "url": "assets/js/30.ad2460ae.js",
    "revision": "ba603f80328a7b7578a639d1b5ddbc46"
  },
  {
    "url": "assets/js/31.9447fce1.js",
    "revision": "972c9f04d1f36ca1f71091d371450087"
  },
  {
    "url": "assets/js/32.7de3c712.js",
    "revision": "73228716c06d9afdfcdbd2faae91e540"
  },
  {
    "url": "assets/js/33.72e93073.js",
    "revision": "3e5f1764599ac2f394eb7eb112910c44"
  },
  {
    "url": "assets/js/34.da429734.js",
    "revision": "0f6805c8eb252d39c663cd32df4eb486"
  },
  {
    "url": "assets/js/35.0a81de8a.js",
    "revision": "29869393df0a196a24632ff2e8f6b044"
  },
  {
    "url": "assets/js/36.340e3960.js",
    "revision": "2e82c29f2dddb8749ad2bf104a67bf17"
  },
  {
    "url": "assets/js/37.5b09e37a.js",
    "revision": "92e0a27d3c9272aa4923c5f2a2348ab8"
  },
  {
    "url": "assets/js/38.aac2fb59.js",
    "revision": "f7bddaaac92b25cf09f918bbc6642f8b"
  },
  {
    "url": "assets/js/39.c5955819.js",
    "revision": "29161992de1b56197e13c57fc7001161"
  },
  {
    "url": "assets/js/4.c1fe0e3e.js",
    "revision": "acf403303460cf7317d1f057cd42d2c4"
  },
  {
    "url": "assets/js/40.5d4e3e54.js",
    "revision": "cf85052030928b7c1d2cdf8cbdfe8745"
  },
  {
    "url": "assets/js/41.0a7ed5dc.js",
    "revision": "76cbb4a20ed5c30c2f904c5790bba5cc"
  },
  {
    "url": "assets/js/42.bef0fd49.js",
    "revision": "23fc4a36eb721cd363bb3145a9af5104"
  },
  {
    "url": "assets/js/43.dac07d6b.js",
    "revision": "50351902ee8f266fb4eafa0e43f6f07c"
  },
  {
    "url": "assets/js/44.d0372dc7.js",
    "revision": "5dfe5787976fbbb03eccae3e412551f1"
  },
  {
    "url": "assets/js/45.0ee0d16c.js",
    "revision": "9a9c7fc66afd10a56b70e8778d51497f"
  },
  {
    "url": "assets/js/5.b4d0d0ec.js",
    "revision": "089a94a29bc86723370d4b2995ccadeb"
  },
  {
    "url": "assets/js/6.f5e60a96.js",
    "revision": "0c0599d9db855c8abb1bffa3b16389c7"
  },
  {
    "url": "assets/js/7.e4369220.js",
    "revision": "e11cbf1dfeed1b343290e14d67d42006"
  },
  {
    "url": "assets/js/8.030cf0a9.js",
    "revision": "fc16c23dbcc79a370b43c0ee5946ac1f"
  },
  {
    "url": "assets/js/9.19e9f9b4.js",
    "revision": "4f7f3b3e9af95760038258d7552bc594"
  },
  {
    "url": "assets/js/app.47caee2c.js",
    "revision": "049d5db24cdea53968fc4833844e6cbb"
  },
  {
    "url": "assets/js/vendors~docsearch.1a2f082c.js",
    "revision": "ac59f3ca006aa2b4f041702b130daf48"
  },
  {
    "url": "guide/advanced/cache.html",
    "revision": "e70b390c84518cb4c194333a0eeb2fc3"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "853ef43d7bc64b070ba289cf595fc30d"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "8e59e493578a0a9fdbee28abc0ba30a8"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "351fd05eff8ef8d5723e3bd2573e116a"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "e5fbca7822f7486e5a2217a9eb969743"
  },
  {
    "url": "guide/changelog.html",
    "revision": "dde8a445e4f64529508415fc06823881"
  },
  {
    "url": "guide/custom/contextmenu.html",
    "revision": "8c9583e5627e72c1d6ab4d2cbad0e633"
  },
  {
    "url": "guide/custom/i18n.html",
    "revision": "ec9fcab9a46193e241133bb3f8eaca70"
  },
  {
    "url": "guide/custom/slot.html",
    "revision": "73672f28114eed6c0b5c946949281a19"
  },
  {
    "url": "guide/custom/transition.html",
    "revision": "2f7530adc7080423c4ea276341bdae1b"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "1839e97ab06a45f9bab156cb5be6481f"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "879583c195b7530275a5d36b769a8922"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "f3282a86cfd8cad52654de8da0fcfdc4"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "681a69ad160b42e96b62ee1324916c70"
  },
  {
    "url": "guide/index.html",
    "revision": "f00443798083e71f4640bfe462eb74c7"
  },
  {
    "url": "guide/solutions.html",
    "revision": "77196895ce2222e29507b51be0db48cc"
  },
  {
    "url": "index.html",
    "revision": "151f4ddbd13d2e0b190b914a117f4464"
  },
  {
    "url": "zh/api/index.html",
    "revision": "1db49f63f25905579920116ec4d4a35b"
  },
  {
    "url": "zh/guide/advanced/cache.html",
    "revision": "9a8017685906e85916f869259997ac7a"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "b7e66d3b18b41673c5a97dc94d480325"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "150fa0c2bfb0a322a4f645e8456eaf86"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "ed3589b9ffd1be5050ddfe3882faccf1"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "09601a56c20b980c4d5dbfff18ac2306"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "f4ef8ab25043cf328d5a1872f78e12c4"
  },
  {
    "url": "zh/guide/custom/contextmenu.html",
    "revision": "d62e101a84841e962c31e1ed294149ae"
  },
  {
    "url": "zh/guide/custom/i18n.html",
    "revision": "a7dc0e4bccb8a132ad1b6ecc34c67999"
  },
  {
    "url": "zh/guide/custom/slot.html",
    "revision": "5e8c0f79a078f10e719f9b6f0a0303b4"
  },
  {
    "url": "zh/guide/custom/transition.html",
    "revision": "c2994a0456e24441bf1eb5004b50d5db"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "db96cdb7f03a48cb6a324744f9fcef2f"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "8f1e4751d66cfbda3f02f1f6bc497583"
  },
  {
    "url": "zh/guide/essentials/installation.html",
    "revision": "31b49ab567d857773dd8c80ed87e73f0"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "9ab2fd4c3ab6ac3ec4b7952d22f66805"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "af1702539ccc37913cf917157abcfe4b"
  },
  {
    "url": "zh/guide/solutions.html",
    "revision": "f44402741376020363a2c20512200274"
  },
  {
    "url": "zh/index.html",
    "revision": "c45ab4af574896b0739ab696aeb51b42"
  }
].concat(self.__precacheManifest || []);
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
