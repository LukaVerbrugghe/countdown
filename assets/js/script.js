import {renderTimers} from "./render.js";

function init(){
  renderTimers([{name: "Timer 1", months: 1, days: 2, hours: 3}, {name: "Timer 2", months: 4, days: 5, hours: 6}]);
}

init();