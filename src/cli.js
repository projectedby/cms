#!/usr/bin/env node

import minimist from "minimist";
import path from "path";

import Static from "../static/src/index.js";
import { ExceptionUnsupportedCommand } from "../exception/src/index.js";

const command = minimist(process.argv.slice(2));

if(command._[0]==='static') {
    if(command._[1] === 'gen') {
        const root = process.cwd();

        command.destination = path.resolve(root, command.destination);
        command.pages = path.resolve(root, command.pages || "./pages");
        command.posts = path.resolve(root, command.posts || "./posts");

        await Static.gen(command.theme, command.destination, command.pages, command.posts);

        process.exit();
    } else if(command._[1] === 'theme') {
        await Static.theme();
        for(const theme of Static.themes.keys()) {
            console.log(theme);
        }

        process.exit();
    }
}

throw new ExceptionUnsupportedCommand();
