import httpProxy from 'http-proxy';

const proxy = httpProxy
    .createProxyServer({ target: 'http://localhost:3001' })
    .listen(3000);

// proxy.on('proxyReq', function (proxyReq, req, res, options) {
//     console.log('pass into proxy request listener')
// });

proxy.on('proxyRes', function (proxyReq, req, res, options) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // never use '*' in production!
});
