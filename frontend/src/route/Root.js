import express from "express";

import Opengraph from "../Opengraph.js";

import Module from "../Module.js";

const Root = express.Router();

Root.get("/", async (req, res) => {
    
    try {
        const opengraph = new Opengraph("");        // TODO: 
        const view = 'posts';    
        const posts = await Module.backend.call('getPost');

        console.log(posts);
    
        res.render("index.ejs", { opengraph, view, posts });
    } catch(e) {
        console.log(e);
        const opengraph = new Opengraph("");        // TODO: 
        const view = 'error';    

        res.render('index.ejs', { opengraph, view });
    }

});

Root.get("/signup", async (req, res) => {
    const opengraph = new Opengraph("");        // TODO: 
    const view = 'signup';
    const posts = [];

    res.render("index.ejs", { opengraph, view, posts });
});

Root.get("/signin", async (req, res) => {
    const opengraph = new Opengraph("");        // TODO: 
    const view = 'signin';
    const posts = [];

    res.render("index.ejs", { opengraph, view, posts });
});

Root.get("/subscribe", async (req, res) => {
    const opengraph = new Opengraph("");        // TODO: 
    const view = 'subscribe';
    const posts = [];

    res.render("index.ejs", { opengraph, view, posts });
});

Root.get("/forget", async (req, res) => {
    const opengraph = new Opengraph("");        // TODO: 
    const view = 'forget';
    const posts = [];

    res.render("index.ejs", { opengraph, view, posts });
});

export default Root;
