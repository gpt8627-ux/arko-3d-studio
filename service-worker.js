const CACHE_NAME = "arko-pwa-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // ARKO continúa consultando los datos directamente desde Supabase.
  // No almacenamos información empresarial en caché.
});
