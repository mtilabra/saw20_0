const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('GET method'));

module.exports = app;
