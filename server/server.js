const path = require('path');
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const proxy = require('./proxy');
const {BASE_PATH} = require('./constants');
const buildPath = path.join(__dirname, '../build');

const PORT = process.env.PORT || 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', buildPath);

app.use(BASE_PATH + '/', express.static(buildPath, {index: false}));

app.get(`${BASE_PATH}/internal/isAlive`, (req, res) => res.sendStatus(200));
app.get(`${BASE_PATH}/internal/isReady`, (req, res) => res.sendStatus(200));

app.use(proxy);

//app.get('/', (req, res) => res.redirect(BASE_PATH));

app.get(BASE_PATH + '/*', (req, res) => {
    res.sendFile(path.resolve(buildPath, 'index.html'));
});



app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});

