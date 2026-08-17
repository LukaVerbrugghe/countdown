const NOW = Date.now();

function timersToTimeData(timers){
  const timeData = [];
  timers.forEach(timer => {
    const timeObject = {
      name: timer.name,
      months: getMonths(timer.date),
      days: getDays(timer.date),
      hours: getHours()
    };
    timeData.push(timeObject);
  });

  return timeData;
}

function getMonths(date){
  return date.toLocaleDateString();
}

function getDays(date){
  return Math.floor(Math.abs(NOW - date) / (1000 * 60 * 60 * 24));
}

function getHours(date){
  return "NOT YET IMPLEMENTED";
}

export {timersToTimeData};