module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'blob:', 'cdn.jsdelivr.net'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:1337', 'https://cms-strapi-backend-puxh.onrender.com'], // Substitua pela URL da sua aplicação no Render
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
