const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true,
        })
    );

    // Proxy for Karve iframe requests
    app.use(
        '/karve-proxy',
        createProxyMiddleware({
            target: 'https://iframes.karveinformatica.com',
            changeOrigin: true,
            pathRewrite: {
                '^/karve-proxy': '', // Reescribe la URL eliminando '/karve-proxy'
            },
            onProxyReq: (proxyReq, req, res) => {
                proxyReq.setHeader('Origin', 'https://ainaappfrontend.onrender.com');
            },
        })
    );
};
