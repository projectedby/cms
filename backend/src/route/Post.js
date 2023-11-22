import express from "express";

import Response from "../Response.js";
import ResponseException from "../response/Exception.js";
import Module from "../Module.js";

const Post = express.Router();

Post.get("/", async (req, res) => {
    try {
        const posts = await Module.cms.call('getPost');
        res.send(new Response(posts.map(post => {
            post.url = `http://localhost:8090/${post.id}`;

            return post;
        })));
    } catch(e) {
        console.log(e);
        res.send(new ResponseException(e));
    }
});

Post.get("/:id", async (req, res) => {
    try {
        const posts = await Module.cms.call('getPost', { id: req.params.id });
        res.send(new Response(posts.map(post => {
            post.url = `http://localhost:8090/${post.id}`;

            return post;
        })));
    } catch(e) {
        console.log(e);
        res.send(new ResponseException(e));
    }
});

export default Post;
