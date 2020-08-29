let elem = document.getElementById("form1");
let lat = 0;
let long = 0;

elem.addEventListener('submit', function (event) {
    event.preventDefault();
    lat = Number(elem.children[0].children[1].value);
    long = Number(elem.children[1].children[1].value);
    $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today&formatted=0`)
    .done(response => {
        let sunset = new Date(response.results.sunset).toString();
        let sunrise = new Date(response.results.sunrise).toString();
        $('#form1').append(`<div>Sunrise is at: ${sunrise}</div>`);
        $('#form1').append(`<div>Sunset is at: ${sunset}</div>`);
    })
    .fail(data => {alert('fail')});
});
