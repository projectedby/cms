import fs from "fs/promises";
import path from "path";
import ejs from "ejs";

import Markdown from "./Markdown.js";

import Opengraph from "./Opengraph.js";

export default class Static {
    static async #copy(root, source, destination) {
        const current = path.resolve(root, source ? source : './');
        for(const f of await fs.readdir(current)) {
            const stat = await fs.stat(path.resolve(current, f));
            const position = `${source ? source : '.'}/${f}`;
            if(stat.isDirectory()) {
                await fs.mkdir(path.resolve(destination, position));
                await Static.#copy(root, position, destination)
            } else {
                if(path.extname(f) !== '.ejs') {
                    await fs.copyFile(path.resolve(root, position), path.resolve(destination, position))
                }
            }
        }
    }

    static async gen(theme, destination, pages, posts) {
        // DIRECTORY 면 ...
        try {
            await fs.access(destination, fs.constants.F_OK)
        } catch(e) {
            await fs.mkdir(destination, { recursive: true });
        }

        for(const f of await fs.readdir(destination)) {
            await fs.rm(path.resolve(destination, f), { recursive: true });
        }

        await Static.#copy(theme, null, destination);

        for(const f of await fs.readdir(pages)) {
            if(path.extname(f) === '.md') {
                const markdown = Markdown.parse(await fs.readFile(path.resolve(pages, f), { encoding: 'utf8' }));
                const opengraph = new Opengraph(markdown.metadata.opengraph);

                const html = await ejs.renderFile(path.resolve(theme, markdown.metadata.layout + '.ejs'), {
                    opengraph,
                    html: markdown.html,
                    view: markdown.metadata.view
                });

                await fs.writeFile(path.resolve(destination, markdown.metadata.permalink), html, { encoding: 'utf8' });
            }
        }

        for(const f of await fs.readdir(posts)) {
            if(path.extname(f) === '.md') {
                const markdown = Markdown.parse(await fs.readFile(path.resolve(posts, f), { encoding: 'utf8' }));
                const opengraph = new Opengraph(markdown.metadata.opengraph);

                console.log(markdown);

                const html = await ejs.renderFile(path.resolve(theme, markdown.metadata.layout + '.ejs'), {
                    opengraph,
                    html: markdown.html,
                    view: markdown.metadata.view
                });
                const position = path.resolve(destination, `.${markdown.metadata.permalink}`);

                await fs.mkdir(path.dirname(position), { recursive: true });
                await fs.writeFile(position, html, { encoding: 'utf8' });
            }
        }
    }
}
