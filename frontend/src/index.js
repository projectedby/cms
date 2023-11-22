import express from "express";
import cookie from "cookie-parser";
import ejs from "ejs";
import path from "path";

import { fileURLToPath } from 'url';

import Log from "log";

// import Card from "./route/Card.js";
// import Post from "./route/Post.js";
// import Profile from "./route/Profile.js";
import Root from "./route/Root.js";

// import Module from "./Module.js";

Log.name = "projectedby";

// const tag = "frontend";

const application = express();

application.use(cookie());

application.use((req, res, next) => {
    res.header('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    next();
});
        
application.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// application.use(async (req, res, next) => {
//     try {
//         req.auth = req.cookies.auth;
//         req.user = await Module.backend.call('user', req.auth);
//     } catch(e) {
//         Log.w(tag, e);
//     }
//     next();
// });

application.engine('.html', ejs.__express);
application.set('views', path.join(path.dirname(fileURLToPath(import.meta.url)), '../html'));
application.set('view engine', 'ejs');

// DEFINE ROUTER: START

application.use("/", Root);
// application.use("/post", Post);
// application.use("/profile", Profile);
// application.use("/card", Card);

// DEFINE ROUTER: END

application.use(function(req, res, next) {
    const extension = path.extname(req.originalUrl);

    if(extension === '.ejs' || extension === '.html') {
        res.status(404).end();
        return;
    }
    
    next();
});

application.use("/", express.static("./html"));

application.listen(8070, () => console.log("server is running."));
