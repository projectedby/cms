import Static from "./Static.js";
import ejs from "ejs";

const html = await ejs.renderFile('./theme/single.ejs');

console.log(html);


// let ejs = require('ejs');
// let people = ['geddy', 'neil', 'alex'];
// let html = ejs.render('<%= people.join(", "); %>', {people: people});

export default Static;





// import Markdown from "./Markdown.js";

// import fs from "fs";

// const text = fs.readFileSync("./posts/2023-11-23-Helloworld.md", { encoding: 'utf8' });

// console.log(Markdown.parse(text));
