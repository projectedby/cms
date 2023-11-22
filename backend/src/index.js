import express from "express";
import cors from "cors";

import Log from "log";

import Root from "./route/Root.js";

// import Post from "./route/Post.js";
// import User from "./route/User.js";

import Module from "./Module.js";
import { StorageExtensionContentManagementSystemWordpress } from "cms";

import Storage from "storage";

Log.name = "backend";           // TODO: 설정에서 어플리케이션 이름을 삽입하도록 하자.
Module.cms(new Storage(new StorageExtensionContentManagementSystemWordpress('http://localhost:8080/')));

const application = express();

application.use(express.json());

application.use(cors({
    // TODO: 설정에서 CORS 리스트를 삽입할 수 있도록 하자.
    origin: [
        "http://localhost:8070"
    ],
    credentials: true
}));

// application.use(async (req, res, next) => {
//     try {
//         const authorization = req.header('Authorization');
//         const auth = authorization && authorization.split(" ")[1];

//         req.auth = auth;
//         req.user = auth && await Module.database.call('user', auth);
//     } catch(e) {
//         console.log(e);
//     }

//     next();
// });

// // DEFINE ROUTER: START

application.use("/", Root);

// application.use("/post", Post);
// application.use("/user", User);

// // DEFINE ROUTER: END

// TODO: 설정에서 포트 번호를 가지고 올 수 있도록 하자.
// TODO: 서버 러닝 메시지를 예쁘게 꾸미자.
application.listen(8090, () => console.log("backend is running."));
