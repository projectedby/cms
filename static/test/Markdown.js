import Markdown from "../src/Markdown.js";
import fs from "fs";
import url from "url";
import path from "path";

describe('markdown', () => {
    it('parse markdown', () => {
        console.log(Markdown.parse(fs.readFileSync('./test/Helloworld.md', { encoding: 'utf8' })));
        console.log(import.meta.url);
        console.log(path.dirname(url.fileURLToPath(import.meta.url)));
    });
});
