const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

function startServeur() {
  app.get('/hello', (req, res) => {
    res.send('world');
  });
  app.get('/repeat-my-fixed', (req, res) => {
    res.send('For better and for worst\n'.repeat(200));
  });
  app.get('/repeat-my-query', (req, res) => {
    const { message } = req.query;
    if (message !== '') {
      res.send(message);
    } else {
      res.send('Bad Request');
      res.status = 400;
    }
  });
  app.post('/repeat-my-body', (req, res) => {
    const mess = req.body;
    if (Object.values(mess).length !== 0) {
      res.send(mess);
    } else {
      res.send('Bad Request');
      res.status = 400;
    }
  });
  app.listen(PORT);
}

startServeur();
