"use strict";
import { Person } from "./person.js";
export class Employee extends Person{
    constructor(name, dateOfBirth, salary, hireDate){
        super(name, dateOfBirth);
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