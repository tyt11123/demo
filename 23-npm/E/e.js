const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/", function (req, res) {
    let ans = { "sum" : 0 };
    ans.sum = req.body.arr.reduce( (x,y) => x + y );
    res.send( JSON.stringify(ans) );
});

app.listen(8080);