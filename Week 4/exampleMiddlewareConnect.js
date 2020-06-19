const express = require('express');
const app = express();
const port= 3001;
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'connectfour'
})
connection.connect();
