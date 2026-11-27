// Service worker minimal : rend l'appli installable et garde une copie pour l'ouvrir même sans réseau.
const V = "carnet-v3";
const FICHIERS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== self.location.origin) return;   // TVmaze, polices, etc. : réseau direct
  e.respondWith(
    fetch(r).then(rep => { if (rep.ok) { const copie = rep.clone(); caches.open(V).then(c => c.put(r, copie)); } return rep; })
      .catch(() => caches.match(r).then(m => m || caches.match("./index.html")))
  );
});
