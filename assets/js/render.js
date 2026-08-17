function renderTimers(timeInfo){
  const $fragment = document.createDocumentFragment();

  const $template = document.querySelector("template");
  timeInfo.forEach(time => {
    const $clone = document.importNode($template.content, true);
    $fragment.appendChild($clone);
  });

  document.querySelector("#timers").appendChild($fragment);
}

export {renderTimers};