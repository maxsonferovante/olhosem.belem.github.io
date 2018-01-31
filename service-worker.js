var cache_name = 'olhosembelem-v1';
var urlsToCache = [
    'index.html',
    'detalhes_vatapa.html',
    'detalhes_tacaca.html',
    'detalhes_acai.html',
    'detalhes_pato_no_tucupi.html',
    'detalhes_estacao_das_docas.html',
    'detalhes_theatro_da_paz.html',
    'detalhes_mangal_das_garcas.html',
    'detalhes_basicila_santuario.html',
    'detalhes_iara.html',
    'detalhes_lenda_da_mandioca.html',
    'detalhes_lenda_do_acai.html',
    'detalhes_carimbo.html',
    'img/acai.jpg',
    'img/basilica_Santuario_de_Nossa_Senhora_de_Nazare.jpg',
    'img/iara.jpg',
    'img/mandioca.jpg',
    'img/a_lenda_do_acai.jpg',
    'img/arroz_de_pato.jpg',
    'img/teatro_Paz.jpg',
    'img/tacaca.png',
    'img/carimbo.jpg',
    'img/caruru.jpg',
    'img/pato_no_tucupi.jpg',
    'img/vatapa.jpg',
    'img/estacao_das_docas.jpg',
    'img/mangal_das_garcas.jpg',
    'css/style.css',
    'js/app.js',
    'js/eventListeners.js'
];

self.addEventListener('install', function(event) {
  // perform install steps
  event.waitUntil(
    caches.open(cache_name)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
//
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});