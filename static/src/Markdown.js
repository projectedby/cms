import showdown from "showdown";
import yaml from "yaml";
import showdownKatex from "showdown-katex";

export default class Markdown {
    static #converter = new showdown.Converter({
        metadata: true,
        tables: true,
        extensions: [
            showdownKatex({
              // maybe you want katex to throwOnError
              throwOnError: true,
              // disable displayMode
              displayMode: false,
              // change errorColor to blue
              errorColor: '#1500ff',
              delimiters: [
                { left: "$", right: "$", display: false, asciimath: true },
                { left: '~', right: '~', display: false, asciimath: true },
              ],
            }),
        ],
    });

    static parse(o) {
        const html = Markdown.#converter.makeHtml(o);
        const metadata = yaml.parse(Markdown.#converter.getMetadata(true));

        return { html, metadata };
    }
}