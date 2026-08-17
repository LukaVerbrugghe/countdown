function renderTimers(timeInfo){
  const $fragment = document.createDocumentFragment();

  const $template = document.querySelector("template");
  timeInfo.forEach(time => {
    const $clone = document.importNode($template.content, true);
    $clone.querySelector("h2").textContent = time.name;
    $clone.querySelector(".months").textContent = time.months;
    $clone.querySelector(".days").textContent = time.days;
    $clone.querySelector(".hours").textContent = time.hours;
    $fragment.appendChild($clone);
  });

  document.querySelector("#timers").appendChild($fragment);
}

export {renderTimers};