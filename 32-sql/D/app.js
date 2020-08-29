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

async function begin(done){
    client.query('BEGIN',function(err){
        if(err){
            console.log(err);
        }
        await done();
    });
}

async function commit(done){
    client.query('COMMIT',function(err){
        if(err){
            console.log(err);
        }
        await done();
    });
}

async function rollback(done){
    client.query('ROLLBACK',function(err){
        if(err){
            console.log(err);
        }
        await done();
    });
}


// Below is an example of how to utilize a transaction, you may construct multiple queries.
begin(function(){
    client.query("UPDATE bank_accounts SET amount = amount - 1000 WHERE account_holder = 'Alice'",function(err,results){
        if(err){
            rollback(function(){
                console.log("Transaction is rolled back!");
            });
        }else{
            commit(function(){
                console.log("Transaction is committed!");
            });
        }
    });
});

app.listen(8080);