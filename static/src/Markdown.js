import showdown from "showdown";
import yaml from "yaml";

export default class Markdown {
    static #converter = new showdown.Converter({
        metadata: true,
        tables: true
    });

    static parse(o) {
        const html = Markdown.#converter.makeHtml(o);
        const metadata = yaml.parse(Markdown.#converter.getMetadata(true));

        return { html, metadata };
    }
}