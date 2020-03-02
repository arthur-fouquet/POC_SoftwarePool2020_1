const express = require('express');

function startServeur() {
  const PORT = process.env.PORT || 8080;
  const app = express();
  app.get('/hello', (request, response) => response.send('world'))
  app.listen(PORT);
}

startServeur();
