import Markdown from "./Markdown.js";

import fs from "fs";

const text = fs.readFileSync("./posts/2023-11-23-Helloworld.md", { encoding: 'utf8' });

console.log(Markdown.parse(text));

// const html = converter.makeHtml(text);
// const metadata = converter.getMetadata(true);
// const metadataFormat = converter.getMetadataFormat();

// console.log(1, html);
// console.log(2, metadata);
// console.log(3, metadataFormat);