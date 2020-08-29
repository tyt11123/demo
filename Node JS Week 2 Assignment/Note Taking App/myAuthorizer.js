const fs = require("fs");

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

module.exports = myAuthorizer;