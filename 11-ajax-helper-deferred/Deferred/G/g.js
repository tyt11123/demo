let elem = document.getElementById("form1");
let country = [];
let sunrise = [];
let sunset = [];

// change milliseconds to hh:mm:ss
function hms(ms) {
    let temp = Math.floor( ms / 1000 );
    let h = Math.floor( temp / 3600 );
    let m = Math.floor( (temp % 3600) / 60 );
    let s = Math.floor( temp % 60 );
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

elem.addEventListener('submit', function (event) {
    event.preventDefault();
    let country1 = elem.children[0].children[1].value;
    let country2 = elem.children[1].children[1].value;
    $( function() {
        let getDeferred1 = $.get(`https://restcountries.eu/rest/v2/name/${country1}`);
        let getDeferred2 = $.get(`https://restcountries.eu/rest/v2/name/${country2}`);
        let combined = $.when(getDeferred1, getDeferred2);
        combined.done( (result1, result2) => {
            country.push(result1[0][0].name);                   // country name 1
            country.push(result2[0][0].name);                   // country name 2

            let getDeferred3 = $.get(`https://api.sunrise-sunset.org/json?lat=${result1[0][0].latlng[0]}&lng=${result1[0][0].latlng[1]}&date=today&formatted=0`);
            let getDeferred4 = $.get(`https://api.sunrise-sunset.org/json?lat=${result2[0][0].latlng[0]}&lng=${result2[0][0].latlng[1]}&date=today&formatted=0`);
            let combined2 = $.when(getDeferred3, getDeferred4);

            combined2.done( (result3, result4) => {
                sunrise.push(new Date(result3[0].results.sunrise).getTime());   //  sunrise time of country 1 in milliseconds
                sunrise.push(new Date(result4[0].results.sunrise).getTime());   //  sunrise time of country 2 in milliseconds
                let max = sunrise.indexOf( Math.max(...sunrise) );    // < check whether sunrise[0] and sunrise[1] is larger
                //  ^ and store the relevant index in 'max'
                let difference = hms( Math.abs( sunrise[0] - sunrise[1] ) );    //  difference of sunrise time
                let str = ['later', 'earlier'];     //  if max === 0, the sunrise time of country 1 is the later one
                $('#form1').append(`<div>Sunrise of ${country[0]} is ${str[max]} than ${country[1]} by ${difference}</div>`);

                sunset.push(new Date(result3[0].results.sunset).getTime());     //  sunset is similar to sunrise
                sunset.push(new Date(result4[0].results.sunset).getTime());
                max = sunset.indexOf( Math.max(...sunset) );
                difference = hms( Math.abs( sunset[0] - sunset[1] ) );
                $('#form1').append(`<div>Sunset of ${country[0]} is ${str[max]} than ${country[1]} by ${difference}</div>`);
            }).fail( (error3, error4) => {
                alert('fail');
            });
        }).fail( (error1, error2) => {
            alert('fail');
        });
    }
    )
});