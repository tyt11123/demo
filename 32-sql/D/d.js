const Fs = require('fs');
const CsvReadableStream = require('csv-reader');
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

let inputStream = Fs.createReadStream('transaction_record.csv', 'utf8');

inputStream
    .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', async function (row) {
        console.log('A row arrived: ', row);
        if (row[0] === 'BUY') {
            // Below is an example of how to utilize a transaction, you may construct multiple queries.
            await begin(async function(){
                await client.query(`UPDATE stock SET quantity = quantity + ${row[2]} FROM citrus WHERE citrus.id = stock.citrus_id AND citrus.name = '${row[1]}'`, async function (err, results) {
                    if (err) {
                        await rollback(function () {
                            console.log(`${row} Transaction is rolled back!`);
                        });
                    }
                    else {
                        await commit(function () {
                            console.log(`${row} Transaction is committed!`);
                        });
                    }
                });
            });
        }
        else {
            // Below is an example of how to utilize a transaction, you may construct multiple queries.
            await begin(async function(){
                await client.query(`UPDATE stock SET quantity = CASE WHEN quantity >= ${row[2]} THEN quantity - ${row[2]} ELSE quantity END FROM citrus WHERE citrus.id = stock.citrus_id AND citrus.name = '${row[1]}'`, async function (err, results) {
                    if (err) {
                        await rollback(function () {
                            console.log(`${row} Transaction is rolled back!`);
                        });
                    }
                    else {
                        await commit(function () {
                            console.log(`${row} Transaction is committed!`);
                        });
                    }
                });
            });
        }
    })
    .on('end', function (data) {
        console.log('No more rows!');
    });

async function begin(done){
    await client.query('BEGIN', async function (err) {
        if (err) {
            console.log(err);
        }
        await done();
    });
}

async function commit(done){
    await client.query('COMMIT', async function(err){
        if(err){
            console.log(err);
        }
        await done();
    });
}

async function rollback(done){
    await client.query('ROLLBACK', async function(err){
        if(err){
            console.log(err);
        }
        await done();
    });
}