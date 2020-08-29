const express = require("express");
const app = express();

var pg = require('pg');

var config = {
    user: 'alex',
    database: 'fruits',
    password: 'alex', //whatever your password is, the default is postgres or password or ''
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();

client.query("SELECT * FROM citrus WHERE color = 'orange'", function(err, results) {
    if(err) {
        console.log(err);
    }
    console.log(results.rows);
})

app.listen(8080);