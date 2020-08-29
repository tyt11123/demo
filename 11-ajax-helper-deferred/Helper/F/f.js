let elem = document.getElementById("form1");
let lat = 0;
let long = 0;
let a = new Date();
a.setDate(a.getDate() - 1);
let b = new Date();
b.setDate(b.getDate() + 1);
let c = new Date();
let lastday = `${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,'0')}-${String(a.getDate()).padStart(2,'0')}`;
let nextday = `${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,'0')}-${String(b.getDate()).padStart(2,'0')}`;
let thisday = `${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,'0')}-${String(c.getDate()).padStart(2,'0')}`;

// change milliseconds to hh:mm:ss
function hms(ms) {
    let temp = Math.floor( ms / 1000 );
    let h = Math.floor( temp / 3600 );
    let m = Math.floor( (temp % 3600) / 60 );
    let s = Math.floor( temp % 60 );
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

//fetch sunrise and sunset API
function fetchSunAPI(date, latitude, longitude, callback) {
    $.get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`)
    .done(response => {
        callback(response);
    }).fail(data => {alert('fail')});
}

elem.addEventListener('submit', function (event) {
    event.preventDefault();
    lat = Number(elem.children[0].children[1].value);
    long = Number(elem.children[1].children[1].value);
    fetchSunAPI(lastday, lat, long, yesterday => {          // Both 'yesterday', 'today' and 'tomorrow'
        fetchSunAPI(thisday, lat, long, today => {          // are the parameters storing the response
            fetchSunAPI(nextday, lat, long, tomorrow => {   // get from the API
                let now = Date.parse(String(new Date()));

                let x = now - Date.parse(today.results.sunrise);    // today's sunrise
                let y = now - Date.parse(today.results.sunset);     // today's sunset
                // if x is negative, sun is still not rised today
                // if x is positive, we need to look at y
                // if y is negative, sun is rised but not set today
                // if y is positive, sun is already set today
                
                let d = hms(Math.abs(now - Date.parse(yesterday.results.sunrise)));
                let e = hms(Math.abs(now - Date.parse(yesterday.results.sunset)));
                let f = hms(Math.abs(now - Date.parse(today.results.sunrise)));
                let g = hms(Math.abs(now - Date.parse(today.results.sunset)));
                let h = hms(Math.abs(now - Date.parse(tomorrow.results.sunrise)));
                let i = hms(Math.abs(now - Date.parse(tomorrow.results.sunset)));
                
                // 3 different conditions
                if (x < 0) {
                    $('#form1').append(`<div>The time difference between previous sunrise and now is ${d}</div>`);
                    $('#form1').append(`<div>The time difference between next sunrise and now is ${f}</div>`);
                    $('#form1').append(`<div>The time difference between previous sunset and now is ${e}</div>`);
                    $('#form1').append(`<div>The time difference between next sunset and now is ${g}</div>`);
                } else if (y < 0) {
                    $('#form1').append(`<div>The time difference between previous sunrise and now is ${f}</div>`);
                    $('#form1').append(`<div>The time difference between next sunrise and now is ${h}</div>`);
                    $('#form1').append(`<div>The time difference between previous sunset and now is ${e}</div>`);
                    $('#form1').append(`<div>The time difference between next sunset and now is ${g}</div>`);
                } else {
                    $('#form1').append(`<div>The time difference between previous sunrise and now is ${f}</div>`);
                    $('#form1').append(`<div>The time difference between next sunrise and now is ${h}</div>`);
                    $('#form1').append(`<div>The time difference between previous sunset and now is ${g}</div>`);
                    $('#form1').append(`<div>The time difference between next sunset and now is ${i}</div>`);
                }
                $('#form1').append(`<div>The time difference between sunrise of yesterday and now is ${d}</div>`);
                $('#form1').append(`<div>The time difference between sunset of yesterday and now is ${e}</div>`);
                $('#form1').append(`<div>The time difference between tomorrow sunrise and now is ${h}</div>`);
                $('#form1').append(`<div>The time difference between tomorrow sunset and now is ${i}</div>`);
            })
        })
    })
});
