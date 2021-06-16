const express = require('express');
const app = express()

app.use(function(req, res, next) { console.log(req.url); next(); });
app.get('/api/users', (req,res) => 
 res.send({ users: ['juan', 'jose']})
);

module.exports = app
