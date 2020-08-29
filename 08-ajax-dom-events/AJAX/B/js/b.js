function informMe(endpoint, value, callback) {
    // Call the AJAX here, And get the Data

    // Create a variable called http, store a new XMLHttpRequest (this is a class, which we talk about later)
    var http = new XMLHttpRequest();
    let data = {};

    // Initialize the request that we want to fire, in the case below it is a get request targeting the url below.
    let link = `https://restcountries.eu/rest/v2/${endpoint}/${value}`;
    http.open("GET", link, true);

    // http.onreadystatechange is a function that tracks the readyState of the http request, there are five stages, the     onreadystatechange will trigger the associated function every time the readyState changes. Therefore the function     will run four times, as we are only interested in the final result of the request.

    http.onreadystatechange = function () {

        // This is a conditional statement to check if the readyState is not 4 (DONE). We are only really interested if     we get Done and 200 (which is success)
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
            // if the http.status == 200 then we console.log our http.responseText which is the information that we are     looking for.
        } else if (http.status == 200) {
            data = JSON.parse(http.responseText);
            // then maybe you can `console.log()` that data inside the callback function?
            console.log(data);
            callback(data); // Return the Data by calling callback with the resulting data
        } else {
            console.log('error occurred' + http.status);
        }
    }

    // http.send() invokes the whole function, by using this line we send our request and await our response
    http.send();
}