var http = new XMLHttpRequest();

// Initialize the request that we want to fire, in the case below it is a get request targeting the url below.
http.open('GET', 'data.json')
 
// http.onreadystatechange is a function that tracks the readyState of the http request, there are five stages, the     onreadystatechange will trigger the associated function every time the readyState changes. Therefore the function     will run four times, as we are only interested in the final result of the request.
http.onreadystatechange = function() {
 
// This is a conditional statement to check if the readyState is not 4 (DONE). We are only really interested if     we get Done and 200 (which is success)
if(http.readyState != XMLHttpRequest.DONE) {
return;
   
// if the http.status == 200 then we console.log our http.responseText which is the information that we are     looking for.
} else if(http.status == 200) {
console.log(http.responseText);
} else {
console.log('error occurred' + http.status);
    }
}
 
// http.send() invokes the whole function, by using this line we send our request and await our response
http.send();