const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs  = require('express-handlebars');
const basicAuth = require('express-basic-auth');
const fs = require("fs");

app.use(basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
    authorizeAsync: true,
    realm: 'My Application'
}));

function myAuthorizer(username, password, callback) {
    const USERS = fs.readFileSync('./users.json', 'utf-8', async (err, data) => {
        if (err) {
            throw err
        }
        return await data
    });
 
    let parsed = JSON.parse(USERS);
     
    let user = parsed.users.filter((user) => user.username == username);
    if (user.length === 0) {return callback(null, false);}
    if (user[0].username === username && user[0].password === password) {
        return callback(null, true);
    } else {
        return callback(null, false);
    }
};

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine','handlebars');

app.get('/', (req, res) => {
    res.render('index', {
        title: req.auth.user
    });
});

app.get('/gallery', (req, res) => {
    res.render('gallery', {
        title: req.auth.user
    });
});

let items = [
    {
        name: 'Hawaiian Pizza',
        description: 'Smoked ham, juicy pineapple with tomato base.',
        small: 150,
        large: 175
    },
    {
        name: 'Meat Lovers Pizza',
        description: 'Smoked ham, pepperoni, Italian sauces, chicken breast fillets, grounded beef and bacon with BBQ base.',
        small: 155,
        large: 185
    },
    {
        name: 'Napolitana Pizza',
        description: 'Tomato and Mozzarella cheese.',
        small: 150,
        large: 175
    }
]

app.get('/menu', (req, res) => {
    res.render('menu', { menu: items,
        title: req.auth.user
    });
});

app.listen(8080);