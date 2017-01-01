const logger = require('bunyan');
const conf   = require('./conf');
const app    = require('express')();
const path   = require('path');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8080, () => {
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, './views'));
    console.log('started');
});

logger.createLogger({name: 'tian.ran'});

