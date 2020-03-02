const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

function startServeur() {
  app.get('/hello', (req, res) => {
    res.send('world');
  });
  app.listen(PORT);
}

startServeur();
