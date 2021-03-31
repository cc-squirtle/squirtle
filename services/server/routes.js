const db = require('../db/knex');
const { Router } = require('express');
const routes = Router();
const axios = require('axios');

// FOR GEO / Pass axios request by query param
routes.get('/geo', async (req, res) => {
  console.log('req.query.url', req.query.url, 'req.query.key', req.query.key);

  if (req.query.url === undefined || req.query.key === undefined) {
    console.error('Url or key missing!', err);
    res.sendStatus(400);
  }

  let config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      req.query.url
    )}&key=${req.query.key}`,
  };

  const result = await axios(config);
  console.log(result.data);
  res.json(result.data);
});

// FOR MyMizu / Pass axios request by query param
routes.get('/mymizu', async (req, res) => {
  console.log(
    'mymizu api called. req.query.c:',
    req.query.c1,
    req.query.c2,
    req.query.c3,
    req.query.c4
  );

  if (
    req.query.c1 === undefined ||
    req.query.c2 === undefined ||
    req.query.c3 === undefined ||
    req.query.c4 === undefined
  ) {
    console.error('some c missing!', err);
    res.sendStatus(400);
  }

  let config = {
    method: 'get',
    url: `https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/area?c1=${req.query.c1}&c2=${req.query.c2}&c3=${req.query.c3}&c4=${req.query.c4}`,
    headers: {
      Authorization: 'Bearer 1|qRCvaTxpPdSaD7JS5UDLY1EOjwYn9du9aqaa8gaW',
      Cookie: '__cfduid=d0ed2ee922756fedb09c99176b1d040261617159177',
    },
  };

  const result = await axios(config);
  console.log(result.data);
  res.json(result.data);
});

// FOR MyMizu / Pass axios request by query param
routes.get('/mymizu', async (req, res) => {
  console.log(
    'mymizu api called. req.query.c:',
    req.query.c1,
    req.query.c2,
    req.query.c3,
    req.query.c4
  );

  if (
    req.query.c1 === undefined ||
    req.query.c2 === undefined ||
    req.query.c3 === undefined ||
    req.query.c4 === undefined
  ) {
    console.error('some c missing!', err);
    res.sendStatus(400);
  }

  let config = {
    method: 'get',
    url: `https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/area?c1=${req.query.c1}&c2=${req.query.c2}&c3=${req.query.c3}&c4=${req.query.c4}`,
    headers: {
      Authorization: 'Bearer 1|qRCvaTxpPdSaD7JS5UDLY1EOjwYn9du9aqaa8gaW',
      Cookie: '__cfduid=d0ed2ee922756fedb09c99176b1d040261617159177',
    },
  };

  const result = await axios(config);
  console.log(result.data);
  res.json(result.data);
});

// Get all taps
routes.get('/api/mytaps', async (request, response) => {
  const result = await db('taps').select().orderBy('mymizu_id');
  response.send(result);
});

// renew taps
routes.post('/api/mytaps', async (request, response) => {
  let result = await db('taps').del();
  result = await db('taps').insert(request.body);
  console.log(result);
  response.send(result);
});

module.exports = routes;
