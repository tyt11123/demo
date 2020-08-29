const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let jsonParser = bodyParser.json();

app.post('/api/message', jsonParser, function (req, res) {
    res.send(`${req.body.message} well received.`);
});

app.listen(8080);