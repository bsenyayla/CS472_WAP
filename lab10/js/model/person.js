"use strict";
export class Person {

    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
     }

     getName(){ return this.name; }
     getDateOfBirth() { return this.dateOfBirth; }
     setName(newName){
        this.name = newName;
     }
     setDateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
     }

     toString(){
        return `Name: ${this.name}, DateOfBirth: ${formatDate(this.dateOfBirth)}`;
     }
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) 
        month = '0' + month;
        if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}