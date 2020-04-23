const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const utils = require('./utils');
const con = require('./connection');

// Variable =


async function init() {
    let data = await utils.getDataFromFile('./dataFile.csv')
    console.log(data);
}
init();

// Create Express app.
const app = express();
const PORT = 5000;
const apiRoutes = require('./api');

/**
Start Server
connect to db
create table
insert data
write api to fetch data
tasks for today..?done
*/
// app.set('port', PORT);

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.use('/api', apiRoutes);
app.listen(PORT, () => console.log("Server started on port "+PORT));

