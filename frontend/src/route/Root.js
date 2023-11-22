import express from "express";

const Root = express.Router();

Root.get("/", async (req, res) => {
    res.send({});
});

export default Root;
