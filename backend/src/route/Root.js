import express from "express";

import Response from "../Response.js";
import ResponseException from "../response/Exception.js";

const Root = express.Router();

Root.get("/", async (req, res) => {
    try {
        res.send(new Response({}))
    } catch(e) {
        res.send(new ResponseException(e));
    }
});

export default Root;