const redis = require("redis");
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on("error", (error) => {
    console.log(error);
});

client.lpush("shoppingList",'Eggs', 'Cream', 'Garlic', 'Butter', 'Horse Radish', 'Beef cubes', 'Milk', 'Bacon', 'Sugar', (error, response) => {
    if (error) {console.log(error);}
    console.log(response);
});

client.sort('shoppingList','alpha', (error, response) => {
    if (error) {console.log(error);}
    console.log(response);
    client.quit(()=> {
        console.log("quit client");
    });
});