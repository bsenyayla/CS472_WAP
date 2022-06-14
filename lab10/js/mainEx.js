"use strict";
import { Person } from "./model/personEx.js";
import { Employee } from "./model/employeeEx.js";

console.log("MainEx.js =======================================================================");

const persons = [
    new Person("Ana Smith", new Date(1998,11,15)),
    new Person("Bob June", new Date(1945,10,16)),
    new Person("Carlos Slim Helu", new Date(1976,9,24))
];


for(let vl of persons){
    vl.showInfo();
}

const emp=new Employee("Jim Hanson",new Date(2001,1,1),245990.00,new Date(2001,1,2));
emp.doJob("Software Engineer");
//OR
/*
persons.forEach(p=> {
    p.showInfo();
});

persons.forEach(p=>p.showInfo());
*/

//persons.forEach(p=>console.log(p.toString()));
//var yy=new Person("Ahmet",new Date(2005,2,3));
//yy.showInfo();
