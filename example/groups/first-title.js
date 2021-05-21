export default function example(select, helper) {
  const firstTitleElem = document.querySelector(".storylink");
  const firstTitleSelector = select(firstTitleElem);
  // will produce unique selector

  console.group("Get all Titles");
  console.log(
    `The first comment of document is ` + `%c${firstTitleElem.innerText}`,
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
  
  console.groupEnd("Get all Titles");
}
