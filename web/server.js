const logger = require('bunyan');
const conf   = require('./conf');
const app    = require('express')();
const path   = require('path');

const port   = conf.web.port;

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, './views'));
    console.log('started on port ' + port);
});

logger.createLogger({name: 'tian.ran'});

