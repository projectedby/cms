import express from "express";

import Opengraph from "../Opengraph.js";

const Root = express.Router();

Root.get("/", async (req, res) => {
    const opengraph = new Opengraph("");        // TODO: 
    const view = 'posts';
    const posts = [];
    res.render("index.ejs", { opengraph, view, posts });
});

export default Root;
