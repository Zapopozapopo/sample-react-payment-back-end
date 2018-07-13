const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const auth = require('./Routes/Auth/index');
const product = require('./Routes/Product/index');
const pay = require('./Routes/Payment/index');
const checkDB = require('./helpers/checkProducts');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});

checkDB.checkProducts();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', auth);
app.use('/api/product', product);
app.use('/api/pay',pay);

module.exports = app;