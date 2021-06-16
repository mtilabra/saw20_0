const express = require('express');
const path = require('path');

const app = express()
const root = path.resolve(__dirname, '..')

app.use(function(req, res, next) { console.log(req.url); next(); });
app.use(express.static(root + '/public'));

app.get('/api', (req, res) => res.send('GET method'))
app.get('/api/users', (req,res) => 
 res.send({ users: ['juan', 'jose']})
);


function reverse(str){
    return str.split("").reverse().join("");
}

module.exports = app
