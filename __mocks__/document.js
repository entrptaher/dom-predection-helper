import fs from 'fs';
const sourceHtml = fs.readFileSync(__dirname + '/hacker-news.html', 'utf-8');
document.write(sourceHtml);
