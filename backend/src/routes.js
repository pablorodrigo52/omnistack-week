const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const conn = require('./database/connection');
const route = express.Router();

route.get('/ongs', OngController.list); // list ongs
route.post('/ongs', OngController.create); // create de ongs

route.get('/incidents', IncidentController.list);
route.post('/incidents', IncidentController.create);
route.delete('/incidents/:id', IncidentController.delete);

route.get ('/profile', ProfileController.list);

route.post('/session', SessionController.create);

module.exports = route;