const express = require('express');
const path = require('path');

const app = express()
const root = path.resolve(__dirname, '..')

app.use(function(req, res, next) { console.log(req.url); next(); });
app.use(express.static(root + '/public'));

app.get('/api/entities', (req,res) => 
 res.send({ entities: 
   ['Q2887', 
    'Q33986'
   ]})
);

module.exports = app
