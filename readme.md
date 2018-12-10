Load it:
```
async function loadScript(url) {
  let response = await fetch(url);
  let script = await response.text();
  eval(script);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
loadScript("https://cdn.jsdelivr.net/gh/entrptaher/DomPredictionHelper@102b3cdd/build/dom.js");
```

Test it out:
```
var pHelper = new DomPredictionHelper();
var css = pHelper.predictCss(jQuery(".title > .storylink"), jQuery("[id=\"15781883\"]"))
console.log(css);
```
