const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/services',
    createProxyMiddleware({
      target: 'http://localhost:2000',
      changeOrigin: true,
    })
  );
  app.use(
    '/appointments',
    createProxyMiddleware({
      target: 'http://localhost:2000',
      changeOrigin: true,
    })
  );
};
