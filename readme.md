This will help you find a common selector for your given element.

# what's a common selector
![](http://i.imgur.com/9txG5YT.png)

For this image, this is a unique selector, that only applies to that first result,

```
#\32 1041784 > td:nth-child(3) > a
```

However, if you use the following, it will return all titles on that page,
```
.storylink
```

So if you give the library a list of elements, it will find a common selector. For example, the following,

```
helper.predictCss(jQuery("#\32 1041784 > td:nth-child(3) > a"))
```

will return the following,
```
.storylink
```

That's a common selector.

Not only that, you can reject few elements and get a more specific common selector.

# Usage
The format for `.predictCss(selected,rejected)` is that you give it a list of selected elements and a list of rejected elements using jQuery. It will return a **common selector** based on that scope.

Load it:
```js
async function loadScript(url) {
  let response = await fetch(url);
  let script = await response.text();
  eval(script);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
loadScript("https://cdn.jsdelivr.net/gh/entrptaher/DomPredictionHelper@102b3cdd/build/dom.js");
```

Test it out:
```js
var pHelper = new DomPredictionHelper();
var css = pHelper.predictCss(jQuery(".title > .storylink"), jQuery("[id=\"15781883\"]"))
console.log(css);
```
