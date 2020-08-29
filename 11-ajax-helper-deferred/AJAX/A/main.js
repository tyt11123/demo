$.ajax({
  url: "http://127.0.0.1:8080/data.json",
  type: "GET",
})
  .done(function (response) {
    console.log("hello world");
    console.log(response);
  })
  .fail(function (data) {
    console.log("This will only run on error.");
    console.log(data, "fail");
  })
  .always(function (data) {
    console.log("This will always run regardless.");
    console.log(data, "always");
  });
