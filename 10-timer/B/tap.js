function dropper() {
    console.log('drop');
}

function drippingTap() {
    return setInterval(dropper, 1000);
}

function turnOffTap(intervalTimer) {
    clearInterval(intervalTimer);
}

let timer = drippingTap();
setTimeout(function () {
    turnOffTap(timer); 
}, 8000);
