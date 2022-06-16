"use strict";

const express = require("express");
const path = require("path");
const registrationRouter = express.Router();

const dataStore = require("../../../datastore/datastore");

registrationRouter.get("/", (req, res) => {
  console.log(`Presenting registration page`);

  const totalRow=dataStore.getTotalRow();

  const registers = dataStore.getData();
  res.locals = { totalrow: totalRow };
  res.locals = { registers: registers };
  
  res.render("public/extra/register");
});

registrationRouter.post("/new", (req, res) => {
  const newStudent = {
    studentId: req.body.txtStudentId,
    fullName: req.body.txtFullName,
    levelOfStudy: req.body.ddlLevelOfStudy,
    country:req.body.ddlcountry

  };

  const result = dataStore.addData(newStudent);
  if (result) res.redirect(303, "/extra");
});

module.exports = registrationRouter;