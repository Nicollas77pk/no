const https = require('https');
const http = require('http');

module.exports = (req, res) => {
  const { url } = req.query;

  if (!url) {
    res.statusCode = 400;
    res.end('Parâmetro "url" é obrigatório.');
    return;
  }

  const targetUrl = decodeURIComponent(url);
  const client = targetUrl.startsWith('https') ? https : http;

  client.get(targetUrl, (proxyRes) => {
    // Copia os cabeçalhos da resposta original
    Object.entries(proxyRes.headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    // Adiciona os cabeçalhos CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Define o status da resposta
    res.statusCode = proxyRes.statusCode;

    // Encaminha o corpo da resposta
    proxyRes.pipe(res);
  }).on('error', (err) => {
    res.statusCode = 500;
    res.end(`Erro ao acessar a URL: ${err.message}`);
  });
};
