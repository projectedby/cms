import express from "express";

import Opengraph from "../Opengraph.js";
import Module from "../Module.js";

const Post = express.Router();

Post.get("/:id", async (req, res) => {
    try {
        const opengraph = new Opengraph('');
        const view = 'post';
        const posts = await Module.backend.call('getPost', { id: req.params.id });

        if(posts.length > 0) {
            res.render('index.ejs', { opengraph, view, post: posts[0] });
        } else {
            res.render('index.ejs', { opengraph: new Opengraph(''), view: 'nodata' });
        }

        
    } catch(e) {
        const opengraph = new Opengraph('');
        const view = 'error';
        console.log(e);
        res.render('index.ejs', { opengraph, view });
    }
});

export default Post;
