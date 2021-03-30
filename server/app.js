// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./knex.js');

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/url', async (req, res) => {
  console.log(
    'req.params.url',
    req.params.url,
    'req.params.header',
    req.params.header
  );

  if (
    req.params.url === '' ||
    req.params.url === undefined ||
    req.params.url === null
  ) {
    console.error('Error loading locations!', err);
    res.sendStatus(400);
  }

  let config = null;

  if (
    req.params.header !== '' ||
    req.params.header !== undefined ||
    req.params.header !== null
  ) {
    config = {
      method: 'get',
      url: req.params.url,
    };
  } else {
    config = {
      method: 'get',
      url: req.params.url,
      header: req.params.header.json(),
    };
  }

  try {
    const result = await axios(config);
    res.json(result);
  } catch (err) {
    console.error('Error loading locations!', err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;

// // allow cors
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
