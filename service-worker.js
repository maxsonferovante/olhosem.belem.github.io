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
    
    'img/comidas/acai.jpg',
    'img/comidas/tacaca.png',
    'img/comidas/pato_no_tucupi.jpg',
    'img/comidas/vatapa.jpg',
    
    'img/lendas/iara.jpg',
    'img/lendas/mandioca.jpg',
    'img/lendas/a_lenda_do_acai.jpg',
    'img/lendas/carimbo.jpg',
    
    'img/pontos/teatro_Paz.jpg',
    'img/pontos/basilica_Santuario_de_Nossa_Senhora_de_Nazare.jpg',
    'img/pontos/estacao_das_docas.jpg',
    'img/pontos/mangal_das_garcas.jpg',

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