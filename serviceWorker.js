const staticLandingPage = "static-landing-page"

const assets = [
	'/',
	'/index.html',
  '/css/style.css',
  '/js/pwa.js'
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticLandingPage).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request);
		})
	);
})