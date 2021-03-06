// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const notesObj = require('./db/db');

const dbJson = path.join(__dirname, './db/db.json');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 5500;

// CSS & JS file access
app.use(express.static(__dirname + '/public'));
// app.use(express.static('./'));

// Setup Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML routes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// GET api/notes from db.json
app.get('/api/notes', (req, res) => res.json(notesObj));



// Starts the server listening on configured port
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));