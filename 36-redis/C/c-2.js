const redis = require("redis");
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on("error", (error) => {
    console.log(error);
});

client.lrange('list', -1, 0, (error, response) => {
    if (error) {console.log(error);}
    console.log(response);
    client.quit(()=> {
        console.log("quit client");
    });
});