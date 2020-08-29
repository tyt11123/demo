var pg = require('pg');
require('dotenv').config();

var config = {
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

function myAuthorizer(username, password, callback) {

    var client = new pg.Client(config);
    client.connect()
    client
    .query(`SELECT username, password FROM users`)
    .then(result => {
        let user = result.rows.filter((user) => user.username == username);
        if (user.length === 0) {return callback(null, false);}
        if (user[0].username === username && user[0].password === password) {
            return callback(null, true);
        } else {
            return callback(null, false);
        }
    })
    .catch(e => console.error(e.stack))
    .then(() => client.end())
    
};

module.exports = myAuthorizer;