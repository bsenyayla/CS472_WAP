 "use strict";

 const express = require("express");
 const path = require("path");
 const homepageRouter = express.Router();
 
 // Define home page routes
 homepageRouter.get("/", (req, res) => {
     console.log(`Presenting homepage 1`);
     res.sendFile(path.join(__dirname, "../../../views/home", "index.html"));
 });
 
 homepageRouter.get("/home", (req, res) => {
     console.log(`Presenting homepage 2`);
     res.sendFile(path.join(__dirname, "../../../views/home", "index.html"));
 });
 

 homepageRouter.get("/about", (req, res) => {   
    res.sendFile(path.join(__dirname, "../../../views/home", "about.html"));
});

 module.exports = homepageRouter;