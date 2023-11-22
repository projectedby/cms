import express from "express";

import Response from "../Response.js";
import ResponseException from "../response/Exception.js";

import Module from "../Module.js";

const Root = express.Router();

Root.get("/", async (req, res) => {
    try {
        res.send(new Response({}))
    } catch(e) {
        res.send(new ResponseException(e));
    }
});

Root.post("/subscribe", async (req, res) => {
    try {
        await Module.database.call('subscribe', req.body.email);

        res.send(new Response(true));
    } catch(e) {
        console.log(e);
        res.send(new ResponseException(e));
    }
});

export default Root;