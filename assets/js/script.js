import {renderTimers} from "./render.js";

function init(){
  renderTimers([{name: "Timer 1", months: 1, days: 2, hours: 3},{name: "Timer 2", months: 1, days: 2, hours: 3},{name: "Timer 3", months: 1, days: 2, hours: 3},{name: "Timer 4", months: 1, days: 2, hours: 3},{name: "Timer 5", months: 1, days: 2, hours: 3},{name: "Timer 600000000", months: 1, days: 2, hours: 3},{name: "Timer 700000", months: 1, days: 2, hours: 3},{name: "Timer 8", months: 1, days: 2, hours: 3},{name: "Timer 9", months: 1, days: 2, hours: 3},{name: "Timer 10000", months: 1, days: 2, hours: 3}]);
}

init();