const timer = require('./timer.js');
const {
  start,
  pause,
  stop
} = require('./timer-utils');

start(timer, 6);
setTimeout(() => {pause(timer);}, 2000);
setTimeout(() => {start(timer);}, 4000);
setTimeout(() => { stop(timer);}, 8000);