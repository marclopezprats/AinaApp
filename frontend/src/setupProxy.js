const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',  // Cambia esto al puerto donde se ejecuta tu servidor de Django
      changeOrigin: true,
    })
  );
};