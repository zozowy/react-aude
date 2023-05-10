const express = require('express');

const cookie = require('cookie-parser');




const routes = require('./routes');

const app = express();
app.use(express.static(`${__dirname}/../client/build`));
app.use(cookie());
app.use(express.json());
require ('./database');
app.use(routes);

app.use('*', (req, res) => {
    res.status(404).end();
})


app.listen(8080);