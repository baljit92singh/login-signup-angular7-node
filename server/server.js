const mysql = require('mysql');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
const express = require('express');
var cookieParser = require('cookie-parser')
var path = require('path');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cookieParser());
app.use(express.static((path.join(__dirname, '../client/dist'))))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
});
var login_routes = require('./routes/loginroutes');
var register_routes = require('./routes/registerroutes')
app.use('/api', router);
login_routes.configure(router);
register_routes.configure(router);

app.listen(3300, () => console.log('Express server is runing at port numner 3300'));