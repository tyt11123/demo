const redis = require("redis");
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on("error", (error) => {
    console.log(error);
});

setInterval(() =>{
    client.rpop('list', (error, response) => {
        if (error) {console.log(error);}
        if (response) {
            console.log(`Data retrieved, item = ${response}`);
            console.log('Finished getting last item, going to get another..');
        } else {
            console.log(`No item in the list`);
        }
    });
}, 5000);