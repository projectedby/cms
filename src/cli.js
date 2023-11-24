#!/usr/bin/env node

import minimist from "minimist";
import url from "url";
import path from "path";

import Static from "static";


import { ExceptionUnsupportedCommand } from "exception";

const command = minimist(process.argv.slice(2));

console.log(command);

if(command._[0]==='static') {
    if(command._[1] === 'gen') {
        const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "../");

        command.theme = path.resolve(root, command.theme);
        command.destination = path.resolve(root, command.destination);
        command.pages = path.resolve(root, command.pages || "./pages");
        command.posts = path.resolve(root, command.posts || "./posts");

        await Static.gen(command.theme, command.destination, command.pages, command.posts);

        process.exit();
    }
}

throw new ExceptionUnsupportedCommand();
