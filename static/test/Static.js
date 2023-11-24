import Static from "../src/Static.js";

import url from "url";
import path from "path";

describe('static', () => {
    it('generate static website', async () => {
        const theme = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "../../theme/cms");
        const destination = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "../../docs");
        const pages = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "../../pages");
        const posts = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "../../posts");

        await Static.gen(theme, destination, pages, posts);
    });
});
