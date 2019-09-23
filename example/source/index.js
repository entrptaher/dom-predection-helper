import fs from "fs";
const sourceHtml = fs.readFileSync(__dirname + "/index.html", "utf-8");
document.write(sourceHtml);