function getResponse(link, callback) {
    var http = new XMLHttpRequest();
    http.open('GET', link, true);
    http.onreadystatechange = function () {

        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            callback(http.responseText);
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
}

function whoIsInSpace() {
    let obj = {};
    getResponse('http://api.open-notify.org/astros.json', function(data) {
        obj = JSON.parse(data);
        const name = obj.people.map(elem => elem.name);
        console.log(name);
        return name;
    });
}

console.log(whoIsInSpace());