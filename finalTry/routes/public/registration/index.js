"use strict";

const express = require("express");
const path = require("path");
const registrationRouter = express.Router();

//const dataStore = require("../../../datastore/datastore");
const dataStoreEx = require("../../../datastore/datastoreEx");

registrationRouter.get("/", (req, res) => {
  console.log(`Presenting registration page`);

  const dataList = dataStoreEx.getDataList();
  res.locals = { registers: dataList };
  res.render("registration/register");
});


registrationRouter.post("/new", (req, res) => {
  console.log(`Adding new student`);

  /*const newStudent = {
    studentId: req.body.txtStudentId,
    fullName: req.body.txtFullName,
    levelOfStudy: req.body.ddlLevelOfStudy,
  };

  const result = dataStore.addData(newStudent);
   */
  const result =dataStoreEx.addRowEx(req.body.txtStudentId,req.body.txtFullName,req.body.ddlLevelOfStudy);


  if (result) res.redirect(303, "/registration");
});


module.exports = registrationRouter;

