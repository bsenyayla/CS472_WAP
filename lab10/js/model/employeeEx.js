"use strict";
import { Person } from "./personEx.js";

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export class Employee extends Person{
    #salary=0;
    #hireDate=new Date();

    constructor( name, dateOfBirth, salary, hireDate){      
        super(name, dateOfBirth);
        this.#salary = salary;
        this.#hireDate = hireDate;
    }

    getSalary(){
        return this.#salary;
    }

    getHireDate(){
        return this.#hireDate;
    }

    doJob(jobTitle){       
        console.log(`${this.getName()} is a ${jobTitle} who earns  formatter ${formatter.format(this.getSalary())}`);
    }
}