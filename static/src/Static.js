import fs from "fs/promises";
import path from "path";
import ejs from "ejs";

import Markdown from "./Markdown.js";

import Opengraph from "./Opengraph.js";

export default class Static {
    static #themes = new Map();

    static get themes(){ return Static.#themes; }

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
        await Static.theme();

        // DIRECTORY 면 ...
        try {
            await fs.access(destination, fs.constants.F_OK);
        } catch(e) {
            await fs.mkdir(destination, { recursive: true });
        }

        for(const f of await fs.readdir(destination)) {
            await fs.rm(path.resolve(destination, f), { recursive: true });
        }

        await Static.#copy(path.resolve(process.cwd(), Static.#themes.get(theme)), null, destination);

        const articles = [];

        for(const f of await fs.readdir(posts)) {
            if(path.extname(f) === '.md') {
                const markdown = Markdown.parse(await fs.readFile(path.resolve(posts, f), { encoding: 'utf8' }));
                const opengraph = new Opengraph(markdown.metadata.opengraph);

                markdown.html = `<h1><a href="${markdown.metadata.permalink}">${markdown.metadata.title}</a></h1>` + markdown.html;

                articles.push({ markdown, opengraph });
            }
        }

        // 아티클을 날짜별로 정렬하기
        articles.sort((x, y) => {
            x = new Date(x.markdown.metadata.date);
            y = new Date(y.markdown.metadata.date);

            return y.getTime() - x.getTime();
        });

        for(const f of await fs.readdir(pages)) {
            if(path.extname(f) === '.md') {
                const markdown = Markdown.parse(await fs.readFile(path.resolve(pages, f), { encoding: 'utf8' }));
                const opengraph = new Opengraph(markdown.metadata.opengraph);

                const html = await ejs.renderFile(path.resolve(path.resolve(process.cwd(), Static.#themes.get(theme)), markdown.metadata.layout + '.ejs'), {
                    opengraph,
                    posts: articles,
                    markdown,
                    html: markdown.html,
                    view: markdown.metadata.view
                });

                await fs.writeFile(path.resolve(destination, markdown.metadata.permalink), html, { encoding: 'utf8' });
            }
        }

        for(const { markdown, opengraph } of articles) {  
            const html = await ejs.renderFile(path.resolve(path.resolve(process.cwd(), Static.#themes.get(theme)), markdown.metadata.layout + '.ejs'), {
                opengraph,
                posts: articles,
                markdown,
                html: markdown.html,
                view: markdown.metadata.view
            });

            const position = path.resolve(destination, `.${markdown.metadata.permalink}`);

            await fs.mkdir(path.dirname(position), { recursive: true });
            await fs.writeFile(position, html, { encoding: 'utf8' });
        }
    }

    static async theme() {
        Static.#themes.clear();

        try {
            await fs.access(path.resolve(process.cwd(), './node_modules/@projectedby/cms/theme'), fs.constants.F_OK);

            for(const f of await fs.readdir(path.resolve(process.cwd(), './node_modules/@projectedby/cms/theme'))) {
                const stat = await fs.stat(path.resolve(process.cwd(), `./node_modules/@projectedby/cms/theme/${f}`));
                if(stat.isDirectory()) {
                    if(f !== 'scss' && f !== 'src' && f !=='webpack') {
                        Static.#themes.set(f, `./node_modules/@projectedby/cms/theme/${f}`);
                    }
                }
            }
        } catch(e) {
            
        }

        for(const f of await fs.readdir(path.resolve(process.cwd(), './theme'))) {
            const stat = await fs.stat(path.resolve(process.cwd(), `./theme/${f}`));
            if(stat.isDirectory()) {
                if(f !== 'scss' && f !== 'src' && f !=='webpack') {
                    Static.#themes.set(f, `./theme/${f}`);
                }
            }
        }
    }
}
