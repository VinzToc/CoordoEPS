const V='coordoeps-v1.0.0',F=['./','index.html','eps-core.js','nouveautes.js','nouveautes.json','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/logo-CoordoEPS.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(u=>fetch(u,{cache:'reload'}).then(r=>r.ok&&c.put(u,r)).catch(()=>{})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('coordoeps')&&x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||!q.url.startsWith(self.location.origin))return;
 e.respondWith(fetch(q,{cache:'no-cache'}).then(r=>{if(r.ok){const c=r.clone();caches.open(V).then(x=>x.put(q,c))}return r}).catch(()=>caches.match(q,{ignoreSearch:true}).then(h=>h||caches.match('index.html'))))});
