const express = require('express');
const path = require('path');
const hbs = require('hbs');

require('./app_server/models/db');

const routes = require('./app_server/routes/index');

const app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname)));
app.use('/', routes);

module.exports = app;