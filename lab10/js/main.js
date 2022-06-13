"use strict";
import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";
const persons = [
    new Person("Ana Smith", new Date(1998,11,15)),
    new Person("Bob June", new Date(1945,10,16)),
    new Person("Carlos Slim Helu", new Date(1976,9,24))
];

persons.forEach(p=>console.log(p.toString()));

const jim = new Employee("Jim Hanson", new Date(1990,11,5), 245990.00, new Date(2019,11,15));
jim.doJob("Software Engineer");