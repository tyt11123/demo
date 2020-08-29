alert('insert a number into the input');

function minuteAlarm(timeframe) {
    let x = Number(timeframe);
    if ((Number.isInteger(x)) && (x > 0) && (x < 61)) {         // check timeframe condition
        let y = x * 1000;                                       // use y in setTimeout
        setTimeout(function () {
            var currentdate = new Date();
            var datetime = currentdate.getHours() + ":"         // datetime is the current time
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
            console.log(`Alarm ringing at ${datetime}`);
        }, y);
    } else {
        alert('only allow 1-60 input');
    }
}

let elem = document.getElementById("form1");
elem.addEventListener('submit', function (event) {
    event.preventDefault();
    minuteAlarm(elem.children[0].children[0].value);
});