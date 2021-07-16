const express = require('express');
const path = require('path');
const https = require('https');

const app = express()
const root = path.resolve(__dirname, '..')

app.use(express.json());

// Log invocations
app.use(function(req, res, next) { console.log(req.url); next(); });

// Directly serve static content from /client
app.use(express.static(root + '/client'));

var entities = [ "Q42" ];

function removeEntity(entity) {
  console.log(`Removing entity: ${entity}`);
  const index = entities.indexOf(entity);
  if (index > -1) {
    entities.splice(index, 1);
  }
}

function addEntity(entity) {
  console.log(`Adding entity: ${entity}`);
  const index = entities.indexOf(entity); 
  if (index < 0) { 
    entities.push(entity);
  }
}

function convert2xml(entities) {
 return '<entities>' + entities.map(entity => {
    return '<entity>' + entity + '</entity>'
  }).join('') + '</entities>';
}

// Get list of entities
app.get('/api/entities', (req,res) => {
 res.format({
   'application/json': () => {
    console.log('json!')
    res.send( { entities: entities }) ;
   }, 
   'application/xml': () => {
    console.log('xml')
    res.send(convert2xml(entities))
   },
   default: () => {
    console.log('json by default')
    res.send( { entities: entities }) ;
   }
 }) 
});

// Update entity
app.put('/api/entities/:id', (req,res) => { 
 console.log(`Actualizar entidad ${req.params.id}`)  
 res.send({ entities: entities })
});

// Create new entity
app.post('/api/entities', (req,res) => {
  const entidad = req.body.entidad ;
  console.log(`Crear entidad. Body: ${JSON.stringify(req.body)}`);
  addEntity(entidad);
  res.send({ entities: entities })
});

app.delete('/api/entities/:id', (req,res) => {
  console.log(`Entidad a borrar ${req.params.id}`)
  removeEntity(req.params.id);
  res.send({ entities: entities })
});


module.exports = app
