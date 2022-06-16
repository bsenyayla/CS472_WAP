"use strict";

const dataStore = (function () {
  const registrationData = [
    {
      studentId: "000-11-0001",
      fullName: "Shelly Batton",
      levelOfStudy: "Graduate",
      country:"Brazil"
    },
    {
      studentId: "000-11-0002",
      fullName: "Bahadır ŞENYAYLA",
      levelOfStudy: "Undergraduate",
      country:"Turkia"
    },
    {
      studentId: "000-11-0003",
      fullName: "Obinna Kalu",
      levelOfStudy: "Undergraduate",
      country:"USA"
    },
  ];

  const getData = function () {
    return registrationData;
  };

  const addData = function (newStudent) {
    console.log(newStudent);
    registrationData.push(newStudent);
    return true;
  };

  const getTotalRow=function(){
    return registrationData.length;
  };

  return {
    getData: getData,
    addData: addData,
    getTotalRow: getTotalRow
  };
})();

module.exports = dataStore;