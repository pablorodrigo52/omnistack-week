const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); //wll pass a json in a body of my requests
app.use(routes); //invoke my routes from 'routes.js' file

app.listen(3333);