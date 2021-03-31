const db = require("../db/knex");
const { Router} = require("express");
const routes = Router();

// Get all notes
routes.get('/api/notes', async (request, response) => {
    const result = await db('notes').select('*').orderBy('title');
    response.send(result);
});

// Get single note
routes.get('/api/notes/:id', async (request, response) => {
    const result = await db('notes').select('*').where({id: request.params.id});
    response.send(result);
});

// Create a note
routes.post('/api/notes', async (request, response) => {
    const newNote = {
        title: request.body.title,
        note: request.body.note
    }
    const result = await db('notes').insert(newNote).returning('*');
    response.send(result);
});

// Update a note
routes.put('/api/notes/:id', async (request, response) => {
    const result = await db('notes').update({
        title: request.body.title,
        note: request.body.note
    }).where({ id: request.params.id }).returning('*');
    response.send(result);
});

// Delete a note
routes.delete('/api/notes/:id', async (request, response) => {
    const result = await db('notes').where({id: request.params.id})
        .del().returning('*');
    response.send(result);
});

module.exports = routes;