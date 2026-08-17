import {renderTimers} from "./render.js";
import {TIMERS} from "./data.js";
import {timersToTimeData} from "./utils.js";

function init(){
  renderTimers(timersToTimeData(TIMERS));
}

init();