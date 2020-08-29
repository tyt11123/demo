let elem = document.getElementById("form1");
let daylength = 0;
let daylengthHK = 0;

elem.addEventListener('submit', function (event) {
    event.preventDefault();
    lat = Number(elem.children[0].children[1].value);
    long = Number(elem.children[1].children[1].value);
    $.get(`https://api.sunrise-sunset.org/json?lat=22.302711&lng=114.177216&date=today&formatted=0`)
    .done(response => {
        daylengthHK = Number(response.results.day_length);
        $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today&formatted=0`)
        .done(response2 => {
            daylength = Number(response2.results.day_length);
            if ( daylength >= daylengthHK ) {
                $('#form1').append(`<div>Your input has a longer day time than Hong Kong</div>`);
            } else {
                $('#form1').append(`<div>Your input has a shorter day time than Hong Kong</div>`);
            }
        })
        .fail(data => {alert('fail')});
    })
    .fail(data => {alert('fail')});
});
