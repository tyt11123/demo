const timer = require("./timer.js");
const firstTimerInstance = new timer();
firstTimerInstance.on("tick", function (time) {
  (time === 0) ? console.log('Kaboom'): console.log(`Time remaining: ${time}`);
});
firstTimerInstance.tick(3);