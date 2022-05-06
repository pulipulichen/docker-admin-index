const express = require('express')
const app = express()

let port = 80
if (process.env.APP_PORT) {
  port = Number(process.env.APP_PORT)
}

app.get('/', function (req, res) {
  if (req.originalUrl === '/favicon.ico') {
    return res.end()
  }

  //res.write(toURL); //write a response to the client
  //res.redirect(toURL);
  
  let baseURL = "https://pulipulichen.github.io/docker-admin-index-web/"
  if (process.env.DEBUG === 'true') {
    baseURL = "http://localhost:5500/"
  }

  let html = `<!DOCTYPE html>
  <html>
    <head>
      <title>${getTitle (req)}</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <!-- =================================== -->
      
      <link rel="apple-touch-icon" sizes="57x57" href="${baseURL}img/favicon/generator/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="${baseURL}img/favicon/generator/apple-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="${baseURL}img/favicon/generator/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="${baseURL}img/favicon/generator/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="${baseURL}img/favicon/generator/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="${baseURL}img/favicon/generator/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="${baseURL}img/favicon/generator/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="${baseURL}img/favicon/generator/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="${baseURL}img/favicon/generator/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192"  href="${baseURL}img/favicon/generator/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="${baseURL}img/favicon/generator/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="${baseURL}img/favicon/generator/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="${baseURL}img/favicon/generator/favicon-16x16.png">
      <meta name="msapplication-TileColor" content="#FBBD08">
      <meta name="msapplication-TileImage" content="${baseURL}img/favicon/generator/ms-icon-144x144.png">
      <meta name="theme-color" content="#FBBD08">
      
      <!-- =================================== -->
  
    </head>
    <body>
      <script src="env.js"></script>
      <script src="${baseURL}dist/index.js"></script>
    </body>
  </html>
  `
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(html);

  res.end(); //end the response
})

app.get('/env.js', function (req, res) {
  res.writeHead(200, {'Content-Type':'text/javascript'});
  res.write(`window.ENV_DATABASE_DRIVERS=${process.env.ENV_DATABASE_DRIVERS}`);
  res.write(`window.ENV_DEV_LOCAL_PORTS=${process.env.ENV_DEV_LOCAL_PORTS}`);
})

function getTitle (req) {
  let host = req.hostname;
  if (host.startsWith('admin.')) {
    host = host.slice(6).trim()
  }

  return host
}

app.listen(port)
console.log('http://localhost:' + port)