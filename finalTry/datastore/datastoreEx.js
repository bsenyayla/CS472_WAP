"use strict";

const dataStore = require("./datastore");

const DataStoreEx=(function(){
    const dataList=[
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

    function addRow(){                   
        dataList.push(ss);
    }
    
    function addRowEx(studentId,fullName,levelOfStudy){
        const newRow= {
            studentId: studentId,
            fullName: fullName,
            levelOfStudy: levelOfStudy
        };
        
        dataList.push(newRow);
        return true;
    }
    
    const getDataList=()=>{
        return dataList;
    }

    return {
        getDataList: getDataList,
        addRow: addRow,
        addRowEx:addRowEx
      };
})();

module.exports = DataStoreEx;