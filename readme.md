async function loadScript(url) {
  let response = await fetch(url);
  let script = await response.text();
  eval(script);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
loadScript("https://cdn.rawgit.com/entrptaher/DomPredictionHelper/102b3cdd/build/dom.js");
