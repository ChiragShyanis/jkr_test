'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d83d9c91a46eccf495e4fb95be7d6af4",
"assets/AssetManifest.bin.json": "3f45a3442127e69bc35e1b20b1b53a20",
"assets/AssetManifest.json": "dccbfceec9b15552a1a8fd00e4bc4bc9",
"assets/assets/excel/AcCapacities.xlsx": "e8ceb2e0908c1e94227828972da18a99",
"assets/assets/excel/AcCompany.xlsx": "23b10e96a75ddeb6a69013e3f614977e",
"assets/assets/excel/AcTypes.xlsx": "ac4c5853517ad238c63aa96cc0d04910",
"assets/assets/excel/AddStockDetails.xlsx": "c0a49e66a5fb20c4e22c39d3e4d6ff40",
"assets/assets/excel/Dealers.xlsx": "5528fcc6ba750bcdc6a584e8ac472343",
"assets/assets/excel/ModelIndoorNumbers.xlsx": "ac666788ba45253bcbcc0230bd990d27",
"assets/assets/excel/ModelOutdoorNumbers.xlsx": "bfdb9602f54e1462747bf5bfac393cb9",
"assets/assets/excel/SoldStockDetails.xlsx": "be4b8e3bc098b7e5ded8e8be5a1a2a80",
"assets/assets/fonts/CanelaBark_PERSONAL.ttf": "1be8cd88805e654a1dc13337f7da1255",
"assets/assets/fonts/Metropolis-Regular.otf": "f7b5e589f88206b4bd5cb1408c5362e6",
"assets/assets/fonts/metropolis.light.otf": "c82170e08b76657553ab939bd28e8515",
"assets/assets/fonts/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/images/a.svg": "0cb9722c4787c30903144152c1e1c898",
"assets/assets/images/add.png": "d8791790f1c51240ea82dc82087e245b",
"assets/assets/images/addIcon.svg": "997c8f0d2b9cacc9eb5b27494b820f30",
"assets/assets/images/addUserIcon.svg": "1f6b616880ac77202403d4bbba61c137",
"assets/assets/images/air-conditioner%2520(1).png": "e85edf45b60eb68e02b838855c60bea3",
"assets/assets/images/air-conditioner.png": "4b517ed2ccea0b599620f7e717f9dcfc",
"assets/assets/images/arrow.svg": "8e7cd0f1be0258091b2766d0e75734c0",
"assets/assets/images/arrow2.png": "87b8f4345bfd1b5d84e12b4ae3a0d22d",
"assets/assets/images/attendant-list.png": "d29404ec1737df174cd13c25bb52061e",
"assets/assets/images/authorized-dealer.png": "f535cbb819423d5bf7e1f1e72a9adc1f",
"assets/assets/images/BlurBack.jpeg": "06b2e408d934e0aa679209ccf56f2ba6",
"assets/assets/images/boxes.png": "fa5fa0e9f17793143727ec308694eec2",
"assets/assets/images/bristol.png": "b3f587848022dbe4ad67583296581825",
"assets/assets/images/bussiness-man.png": "bc841a07000852731a734fd46efbce97",
"assets/assets/images/calendar.svg": "2b04082e69e7f231854a7ee05ee41939",
"assets/assets/images/cancelIcon.svg": "cc4c0e0068d1b5f50ffd758a6aba4861",
"assets/assets/images/clean.png": "5f319bfa837d200bfe28fc903e230309",
"assets/assets/images/cloud-upload.png": "0335c5564553a0b4b2e1212613e30623",
"assets/assets/images/consult.png": "506058b30c14f6b91e5e6dca3c96bda3",
"assets/assets/images/customer-support.png": "3b19be958fb4a4bd5352a99ef850ec92",
"assets/assets/images/customer.png": "b460a7f6f86f6f16f2cf0fb6c8d74aa0",
"assets/assets/images/deleteIcon.svg": "300236032345677f7bedf306f275cc34",
"assets/assets/images/diary.png": "225780d816d0232a957a14f50528a7f2",
"assets/assets/images/editIcon.svg": "88a26d78534436de26e97e7cb5a98d54",
"assets/assets/images/error.png": "0fb26488e2774360eee6bffe2309d2b0",
"assets/assets/images/errorImage.jpg": "f4135c1728998fd82502ad1df51c303c",
"assets/assets/images/errorImage2.jpg": "dad0590540a4254b364bee3df2fd7bd1",
"assets/assets/images/feedback.svg": "f2f62aa48e52d863620e393a306c7bbb",
"assets/assets/images/feedbackicons.png": "6b563a5872b24f6937e51793506d9a6b",
"assets/assets/images/gas.png": "4116c39c793990ebf24646a1bf914d47",
"assets/assets/images/group.png": "4c0876ab887b8e2ffd331ce1de7023e3",
"assets/assets/images/home.png": "b3e762853f2b949f1be0f3bdfda56ef3",
"assets/assets/images/immigration.png": "2e3ab311be558f26c927c0c1b96b38a3",
"assets/assets/images/j-k-logo1.png": "c316c51c42c788cc3ac58988bfb96151",
"assets/assets/images/j-k-logo2.png": "a451d107e5b4ab13c3704cad86e14ecf",
"assets/assets/images/jkrlogo.png": "2d3526bfa7fd3d70309411f79c4b1e2d",
"assets/assets/images/jkrLogo.svg": "3f6e13fa2d03bec3158832b064a24d2b",
"assets/assets/images/likeIcon.svg": "93b9ec5bccb3bcb67727c99e6c3ecbff",
"assets/assets/images/list.png": "6eea5bcfcced40786cddfc34b73911aa",
"assets/assets/images/liter.png": "71a82a9134a57a1d25b4929af84ed62f",
"assets/assets/images/logout.png": "3b704aed559f5e98d2174d240cae343d",
"assets/assets/images/man.png": "47305402a5e102588c9946a65939438a",
"assets/assets/images/noCompletedServiceImage.svg": "1b6030916ebab26d002d5d7b0f0f1bf5",
"assets/assets/images/noDataAvailableImage.svg": "7434df1241d6ce3f1e769586b7dc980f",
"assets/assets/images/noExtraServiceImage.svg": "a14ebdb1babee867ca755824631a194a",
"assets/assets/images/notificationIcon.svg": "cb3e38c3e625a4a73ea56b57948bdc0d",
"assets/assets/images/no_internet.png": "188cd5185d153fd89f344cb5c09ef055",
"assets/assets/images/office.png": "1622de5f01fc1057c6b84038a918fc4b",
"assets/assets/images/p.svg": "8b253ec36189428527eef040c0dd78f1",
"assets/assets/images/packages.png": "1b07c73fe737bd2de3e8a780826e5dc0",
"assets/assets/images/raw-materials.png": "9e0abc1bed8bfd94f65a2c88af777669",
"assets/assets/images/reloadIcon.svg": "909646eddecabd453bb39a7e8b09cd71",
"assets/assets/images/searchIcon.svg": "d0e7643d26835b32a47cddbc6661e393",
"assets/assets/images/sellIcon.svg": "0e77c59bfa03d701c9b0c65a867523f2",
"assets/assets/images/selling.png": "d1cf04cad5d2b43a4031d3cc7a435427",
"assets/assets/images/service.png": "5541d57e37ef9e8bc06af0b2468b6b3b",
"assets/assets/images/settingIcon.svg": "f603f10b21af558f5e53927308b7464d",
"assets/assets/images/sorting.svg": "95eed09d9bbb04f4e0172774565c542c",
"assets/assets/images/stock.png": "cb097432348d4272e6184588e0f618f2",
"assets/assets/images/trade.png": "1c9aede826c849a45061aad8561e9221",
"assets/assets/images/trash.svg": "300236032345677f7bedf306f275cc34",
"assets/assets/images/viewIcon.svg": "a3f22fee2df671a477b337895a91fead",
"assets/assets/images/water-hose.png": "18a6d4d6a223f438b14887248235f3fb",
"assets/assets/images/write.svg": "c5ce5f2e008ea1077695454dea759b66",
"assets/assets/json/uploadData.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "0d6aa010ac3fb2613743973dcdb62b02",
"assets/fonts/MaterialIcons-Regular.otf": "3c05c26e6310117123442b02f7336f54",
"assets/NOTICES": "04e7ce7750835504d2989fa72316f118",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "496db7c343c8280b1689a665721d8757",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7c2b899e33707ffcfaf2c5b8cf5cf350",
"/": "7c2b899e33707ffcfaf2c5b8cf5cf350",
"main.dart.js": "7e360c7c9734ef38db4d40f8c8ad3670",
"manifest.json": "47d1c9f16f2093b9b8f660922e274443",
"version.json": "7f358a298adc3d5329a7f650672cb59b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
