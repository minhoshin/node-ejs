"use strict";

const express = require('express');
const app = express();

// config
const commonConfig = require('./config/common.config');

// bodyParser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// session middleware
const session = require('express-session');
app.use(session({
    secret: commonConfig.secretKey,
    resave: false,
    saveUninitialized: true
}));

// ejs setting
app.set('views','./views');
app.set('view engine', 'ejs');

// ejs-layouts setting
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

// static file setting
app.use(express.static(__dirname + '/public'));

// favicon middleware
const favicon = require('serve-favicon');
// app.use(favicon(__dirname + '/public/img/ico/favicon.ico'));

// route setting
const routerConfig = require('./config/router.config');
routerConfig.routes.forEach((val) => {
    app.use('/'+val, require('./routes/'+val));
});

// route exception
app.get('*', (req, res) => {
    res.redirect('/');
});

// server running
app.listen(commonConfig.server.port);
console.log(commonConfig.server.host + ":" + commonConfig.server.port + ", server running : " + Date());