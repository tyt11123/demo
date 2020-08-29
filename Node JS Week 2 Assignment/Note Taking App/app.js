const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");
const hb = require("express-handlebars");
const myAuthorizer = require("./myAuthorizer");

app.use(basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
    authorizeAsync: true,
    realm: 'My Application'
}));

const router = require("./router");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', hb({defaultLayout: "main"}));
app.set('view engine','handlebars');

app.use('/', router);

app.listen(8080);