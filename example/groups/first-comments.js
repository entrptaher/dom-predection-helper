export default function example(select, helper) {
  const firstTitleElem = document.querySelector(".subtext a+ a");
  const firstTitleSelector = select(firstTitleElem);

  const topBarElem = document.querySelector(".pagetop a+ a");
  const topBarSelector = select(topBarElem);

  const hideElem = document.querySelector(".age~ span+ a");
  const hideElemSelector = select(hideElem);

  const commonSelector = helper.predictCss(
    document.querySelectorAll(firstTitleSelector),
    document.querySelectorAll([topBarSelector, hideElemSelector].join(","))
  );
  const results = document.querySelectorAll(commonSelector);

  console.group("Get all Comments");
  console.log(
    `The first title of document is ` + `%c${firstTitleElem.innerText}`,
    "color: blue; font-weight:bold;"
  );
  console.log(
    `Which have a unique selector of ` + `%c${firstTitleSelector}`,
    "color: red; font-weight:bold;"
  );
  console.log(
    `If we pass it like ` +
      `%chelper.predictCss(document.querySelectorAll("${firstTitleSelector}"), [])`,
    "color: brown; font-weight:bold;"
  );
  console.log(
    `We will get a common selector ` +
      `%c${helper.predictCss(document.querySelectorAll(firstTitleSelector), [])}`,
    "color: green; font-weight:bold;"
  );
  console.log(
    `But if we reject the elements with the text, ` +
      `%c${hideElem.innerText} %c and %c ${topBarElem.innerText}`,
    "color: green; font-weight:bold;",
    "color: black;",
    "color: green; font-weight:bold;"
  );
  console.log(
    `Like this ` +
      `%chelper.predictCss(document.querySelectorAll("${firstTitleSelector}"), document.querySelectorAll(\`${hideElemSelector}, ${topBarSelector}\`))`,
    "color: brown; font-weight:bold;"
  );
  console.log(
    `We get this` + `%c${commonSelector}`,
    "color: brown; font-weight:bold;"
  );
  console.log(`This will give me all comments,`, results);
  console.groupEnd("Get all Comments");
}
