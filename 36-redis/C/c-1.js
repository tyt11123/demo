const express = require("express");
const bodyParser = require("body-parser");
const redis = require("redis");
const app = express();
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on("error", (error) => {
    console.log(error);
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/api", (req, res) => {
    client.lpush("list", Object.values(req.body), (error, response) => {
        if (error) {console.log(error);}
    });
    client.lrange('list', 0, -1, (error, response) => {
        if (error) {console.log(error);}
        res.status(200).send(response.join(","));
    });
    
});

app.listen(8080);