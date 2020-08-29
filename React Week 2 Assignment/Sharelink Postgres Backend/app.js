const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors());

app.get('/links', (req, res) => {
    if (req.body.keyword) {
        let result = knex('links')
        .where('url', 'ILIKE', `%${req.body.keyword}%`)
        .orWhere('title', 'ILIKE', `%${req.body.keyword}%`)
        .orWhere('tags', 'ILIKE', `%${req.body.keyword}%`)
        .select('url', 'title', 'tags');
        result.then((data) => {
            console.log(req.body.keyword);
            res.send(JSON.stringify(data));
        }).catch((err)=>{console.log(err);});
    } else {
        let result = knex('links').select('url', 'title', 'tags');
        result.then((data) => {
            res.send(JSON.stringify(data));
        }).catch((err)=>{console.log(err);});
    }
});

app.post('/link', (req, res) => {
    if (req.body.url) {
        let a = {
            url: req.body.url,
            title: req.body.title,
            tags: req.body.tags
        };
        knex.raw('SELECT setval(\'links_id_seq\', (SELECT MAX(id) from links));')
        .then(() => {
            knex('links').insert(a)
            .then((data) => {
                res.status(200).send("Posted");
            });
        }).catch((err) => {console.log(err);});
    }
});

app.delete('/link', (req, res) => {
    if (req.query.index) {
        let id = Number(req.query.index) + 1;
        knex('links').where({id}).del()
        .then((row) => {
            if (row) {
                knex.raw('ALTER SEQUENCE links_id_seq RESTART;')
                .then(() => {
                    knex.raw('UPDATE links SET id = DEFAULT;')
                    .then(() => {
                        res.status(200).send('Deleted');
                    });
                });
            } else {
                res.status(404).send("Not found");
            }
        }).catch((err) => {
            res.status(400).send(err);
        });
    } else {
        res.status(300).send("Missing parameter");
    };
});

app.listen(2031, () => { console.log('App listening to port 2031...'); });