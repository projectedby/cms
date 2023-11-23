import Markdown from "./Markdown.js";

import fs from "fs";

const text = fs.readFileSync("./posts/2023-11-23-Helloworld.md", { encoding: 'utf8' });

console.log(Markdown.parse(text));
