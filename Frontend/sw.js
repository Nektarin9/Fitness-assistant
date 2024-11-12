// sw.js

// Кэширование статических файлов при установке
self.addEventListener('install', (event) => {
	event.waitUntil(
	  caches.open('my-pwa-cache').then((cache) => {
		return cache.addAll([
		  '/', // Корневая страница
		  '/index.html', // Ваша главная страница
		  './src/style.css', // Ваши стили
		  './src/main.tsx', // Ваши скрипты

		  // Добавьте сюда ссылки на другие необходимые файлы
		]);
	  })
	);
  });

  // Обработка сетевых запросов
  self.addEventListener('fetch', (event) => {
	event.respondWith(
	  caches.match(event.request).then((response) => {
		// Проверяем, есть ли кэшированный ответ
		if (response) {
		  return response;
		}
		// Если нет кэшированного ответа, получаем данные из сети
		return fetch(event.request);
	  })
	);
  });

  // Очистка кэша при активации сервисного воркера
  self.addEventListener('activate', (event) => {
	event.waitUntil(
	  caches.keys().then((cacheNames) => {
		return Promise.all(
		  cacheNames.map((cacheName) => {
			if (cacheName !== 'my-pwa-cache') {
			  return caches.delete(cacheName);
			}
		  })
		);
	  })
	);
  });
