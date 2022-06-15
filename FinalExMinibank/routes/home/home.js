/**
 * home.js
 */
"use strict";

const express = require("express");
const path = require("path");
const homeRouter = express.Router();

// Define home page routes
homeRouter.get("/", (req, res, next) => {
    console.log(`Presenting homepage 1`);
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});
homeRouter.get("/home", (req, res, next) => {
    console.log(`Presenting homepage 2`);
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});


homeRouter.get("/product/list", (req, res, next) => {
    console.log(`Presenting homepage 2`);
    res.sendFile(path.join(__dirname, "../../views", "product-form.html"));
});

homeRouter.get("/product/api", (req, res, next) => {
    console.log(`Presenting homepage 2`);
    res.sendFile(path.join(__dirname, "../../views", "product-form.html"));
});
module.exports = homeRouter;