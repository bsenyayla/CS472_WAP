"use strict";

const express = require("express");
const path = require("path");

const homepageRoutes = require("./routes/public/home/index");
const extraRoutes = require("./routes/public/extra/index");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "static-assets")));


// Setup routes for homepage
app.use("", homepageRoutes);

// Setup routes for product-related pages
app.use("/extra", extraRoutes);

// middleware for PageNotFound Error 404
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views/public/error", "404.html"));
});

const PORT_NUMBER = 4000;

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`);
});
