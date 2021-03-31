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

// Get all notes
routes.get('/api/notes', async (request, response) => {
  const result = await db('notes').select('*').orderBy('title');
  response.send(result);
});

// Get single note
routes.get('/api/notes/:id', async (request, response) => {
  const result = await db('notes').select('*').where({ id: request.params.id });
  response.send(result);
});

// Create a note
routes.post('/api/notes', async (request, response) => {
  const newNote = {
    title: request.body.title,
    note: request.body.note,
  };
  const result = await db('notes').insert(newNote).returning('*');
  response.send(result);
});

// Update a note
routes.put('/api/notes/:id', async (request, response) => {
  const result = await db('notes')
    .update({
      title: request.body.title,
      note: request.body.note,
    })
    .where({ id: request.params.id })
    .returning('*');
  response.send(result);
});

// Delete a note
routes.delete('/api/notes/:id', async (request, response) => {
  const result = await db('notes')
    .where({ id: request.params.id })
    .del()
    .returning('*');
  response.send(result);
});

module.exports = routes;

// // FOR GEO / Pass axios request by query param
// routes.get('/geo', async (req, res) => {
//     console.log('req.query.url', req.query.url, 'req.query.key', req.query.key);

//     if (
//       req.query.url === '' ||
//       req.query.url === undefined ||
//       req.query.url === null
//     ) {
//       console.error('Error loading locations!', err);
//       res.sendStatus(400);
//     }

//     let config = null;

//     if (
//       req.query.header !== '' ||
//       req.query.header !== undefined ||
//       req.query.header !== null
//     ) {
//       config = {
//         method: 'get',
//         url: req.query.url,
//       };
//     } else {
//       config = {
//         method: 'get',
//         url: req.query.url,
//         header: req.query.header.json(),
//       };
//     }

//     try {
//       const result = await axios(config);
//       res.json(result);
//     } catch (err) {
//       console.error('Error loading locations!', err);
//       res.sendStatus(500);
//     }
//   });
