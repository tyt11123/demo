const EventEmitter = require("events");

const firstTimerInstance = new EventEmitter();

firstTimerInstance.on("tick", function (time) {
  (time === 0) ? console.log('Kaboom'): console.log(`Time remaining: ${time}`);
});
firstTimerInstance.on("pause", function () {
  console.log(`Pause..`);
});
firstTimerInstance.on("stop", function () {
  console.log(`Stopped`);
});

module.exports = firstTimerInstance;