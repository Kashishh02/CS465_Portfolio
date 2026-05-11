const express = require('express');
const path = require('path');
const hbs = require('hbs');

const routes = require('./app_server/routes/index');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname)));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Travlr app listening at http://localhost:${port}`);
});