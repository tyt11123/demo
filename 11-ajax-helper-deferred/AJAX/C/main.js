function informMe (endpoint, value) {
  $.get(`https://restcountries.eu/rest/v2/${endpoint}/${value}`)
    .done(function (response) {
      console.log(response);
    })
    .fail(function (data) {
      console.log("This will only run on error.");
      console.log(data, "fail");
    }); 
}