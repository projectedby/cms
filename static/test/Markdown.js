import Markdown from "../src/Markdown.js";
import fs from "fs";

describe('Markdown', () => {
    it('parse', () => {
        console.log(Markdown.parse(fs.readFileSync('./test/Helloworld.md', { encoding: 'utf8' })));
    });
});
