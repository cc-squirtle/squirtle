const db = require('../db/knex');
const { Router } = require('express');
const routes = Router();
const axios = require('axios');

// FOR GEO / Pass axios request by query param
routes.get('/geo', async (req, res) => {
    const word = req.query.str.trim();
    console.log('search word: ', word);

    if (req.query.str === undefined || word === '') {
        console.error('str missing!');
        res.sendStatus(400);
        return;
    }

    const key = 'AIzaSyBkQ6o2TtjqGIL3TlzOgJaKBwcw3MNDcJQ';
    let config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
            req.query.str
        )}&key=${key}`,
    };

    const result = await axios(config);
    console.log(result.data);
    if (result.data.status !== 'OK') {
        console.log('result status was NOT OK');
        res.sendStatus(400);
    } else {
        res.json(result.data);
    }
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
        console.error('some c missing!');
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
    console.log('routes.get /mymizu result: ', result.data);
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
