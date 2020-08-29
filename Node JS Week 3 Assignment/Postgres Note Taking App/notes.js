var pg = require('pg');                 // not using knex for SQL query
var escape = require('pg-escape');      // use another package to avoid SQL injection
require('dotenv').config();             // https://github.com/segmentio/pg-escape

var config = {
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

async function readNotesFromDB (who) {
    var client = new pg.Client(config);
    var client2 = new pg.Client(config);
    var sql = escape('CREATE TABLE IF NOT EXISTS %I (id serial PRIMARY KEY, note varchar(10485760) NOT NULL)', who);
    var sql2 = escape('SELECT note, id FROM %I ORDER BY id DESC', who);
    let temp1 = [];

    await client.connect();
    await client.query(sql);
    await client.end();
    await client2.connect();
    temp1 = await client2.query(sql2);
    await client2.end();
    return await temp1.rows;
}

async function addNotes(notesArray, who, note) {
    var client = new pg.Client(config);
    var client2 = new pg.Client(config);
    var sql = escape('INSERT INTO %I (note) VALUES (%L);', who, note);
    var sql2 = escape('SELECT note, id FROM %I ORDER BY id DESC', who);
    let temp1 = [];

    await client.connect();
    await client.query(sql);
    await client.end();
    await client2.connect();
    temp1 = await client2.query(sql2);
    await client2.end();
    notesArray = temp1.rows;
    return await notesArray;
}

async function putNotes(notesArray, who, index, note) {
    var client = new pg.Client(config);
    var client2 = new pg.Client(config);
    var sql = escape('UPDATE %I SET note = %L WHERE id = %L', who, note, String(index));
    var sql2 = escape('SELECT note, id FROM %I ORDER BY id DESC', who);
    let temp1 = [];

    await client.connect();
    await client.query(sql);
    await client.end();
    await client2.connect();
    temp1 = await client2.query(sql2);
    await client2.end();
    notesArray = temp1.rows;
    return await notesArray;
}

async function deleteNotes(notesArray, who, index) {
    var client = new pg.Client(config);
    var client2 = new pg.Client(config);
    var sql = escape('DELETE FROM %I WHERE id = %L', who, String(index));
    var sql2 = escape('SELECT note, id FROM %I ORDER BY id DESC', who);
    let temp1 = [];

    await client.connect();
    await client.query(sql);
    await client.end();
    await client2.connect();
    temp1 = await client2.query(sql2);
    await client2.end();
    notesArray = temp1.rows;
    return await notesArray;
}

module.exports = {
    readNotesFromDB,
    addNotes,
    putNotes,
    deleteNotes
}