class User {
    constructor(options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.email = options.email;
        this.dob = options.dob;
    }
    //first name, last name, email, date of birth
}

function createUser(callback) {
    let http = new XMLHttpRequest();
    http.open("GET", "https://randomuser.me/api/?results=5", true);
    http.onreadystatechange = function() {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            let data = JSON.parse(http.responseText);
            let dude = [];
            for (let i =0; i < 5; i++) {
                let u = new User({
                    firstName: data.results[i].name.first,
                    lastName: data.results[i].name.last,
                    email: data.results[i].email,
                    dob: data.results[i].dob
                });
                dude.push(u);
            }
            callback(dude);
        } else {
            console.log(`Error code ${http.status}`);
        }
    }
    http.send();
}

let a = [];
createUser(function(b) {
    a = b;
    console.log('bad');
    console.log(a);
});
console.log('good');
console.log(a);