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
      enabled: true, // Certifique-se de que o CORS está habilitado
      allowedOrigins: [
        'https://formatod.com.br',
        'http://127.0.0.1:5500', // Frontend local
        'https://cms-strapi-backend-puxh.onrender.com', // Frontend no Render
      ],
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
