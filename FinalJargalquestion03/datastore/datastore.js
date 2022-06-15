"use strict";

const dataStore = (function () {
  const registrationData = [
    {
      studentId: "000-11-0001",
      fullName: "Anna Lynn Smith",
      levelOfStudy: "Graduate",
    },
    {
      studentId: "000-11-0002",
      fullName: "Bahadır ŞENYAYLA",
      levelOfStudy: "Undergraduate",
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

  return {
    getData: getData,
    addData: addData,
  };
})();

module.exports = dataStore;