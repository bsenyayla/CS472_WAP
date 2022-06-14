"use strict";
import { Person } from "./personEx.js";

export class Employee extends Person{
    #salary=0;
    #hireDate=new Date();

    constructor( name, dateOfBirth, salary, hireDate){      
        super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }

}

/*
another way
export class EmployeeEx{
    #pperson;
    constructor( name, dateOfBirth, salary, hireDate){
        this.#pperson=new Person(name,dateOfBirth);
        //super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }

    showInfo(){
        console.log("im running.." + this.#pperson.getName());
    }
}
*/


const ttt=new EmployeeEx( "Şenyayla",new Date(2001,3,3), 3, new Date(2001,3,3));
ttt.showInfo();



/*
export class Employee{
    constructor(name, dateOfBirth, salary, hireDate){
        //super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }

    getSalary(){ return this.salary; }
    getHireDate(){ return this.hireDate; }
    setSalary(newSalary) {
        this.salary = newSalary;
    }
    setHireDate(newHireDate){
        this.hireDate = newHireDate;
    }
    doJob(jobTitle){
        console.log(`${this.getName()} is a ${jobTitle} who earns $${this.getSalary()}`);
    }
}
*/