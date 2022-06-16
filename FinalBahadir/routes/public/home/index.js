/**
 * index.js
 */
"use strict";

const express = require("express");
const path = require("path");
const homepageRouter = express.Router();


homepageRouter.get("/", (req, res) => {
    
    res.sendFile(path.join(__dirname, "../../../views/public/home", "index.html"));
});

homepageRouter.get("/fsap", (req, res) => {
    
    res.sendFile(path.join(__dirname, "../../../views/public/home", "index.html"));
});

homepageRouter.get("/fsap/home", (req, res) => {
    
    res.sendFile(path.join(__dirname, "../../../views/public/home", "index.html"));
});

module.exports = homepageRouter;