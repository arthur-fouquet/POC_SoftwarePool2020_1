const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(bodyParser.json());

function startServeur() {
  app.get('/hello', (req, res) => {
    res.send('world');
  });
  app.get('/repeat-my-fixed', (req, res) => {
    res.send('For better and for worst\n'.repeat(200));
    return (200);
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
  app.get('/repeat-my-header', (req, res) => {
    const msg = req.headers;
    const msg2 = Object.keys(msg);
    const nbr = msg2.indexOf('x-message');
    if (nbr !== -1) {
      const oui = Object.values(msg);
      res.send(oui[nbr]);
    } else {
      res.send('Bad Request');
      res.status = 400;
    }
  });
  app.get('/repeat-my-cookie', (req, res) => {
    const request = req.cookies;
    if (request !== null && Object.keys(request).includes('message') !== false) {
      res.send(request.message);
    } else {
      res.send('Bad Request');
      res.status = 400;
    }
  });
  app.listen(PORT);
}
startServeur();
