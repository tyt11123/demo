let count = 0;
let i = 0;
let intervalObj = '';
let pauseObj = '';

function start(event, time) {
  if (time) {i = time; count = time;}
  clearInterval(pauseObj);
  intervalObj = setInterval(function () {
    event.emit("tick", i);
    i--;
  }, 1000)
}
function pause(event) {
  clearInterval(intervalObj);
  pauseObj = setInterval(function () {
    event.emit("pause");
  }, 1000)
}
function stop(event) {
  i = count;
  clearInterval(intervalObj);
  clearInterval(pauseObj);
  event.emit("stop");
}

module.exports = {
    start,
    pause,
    stop,
}