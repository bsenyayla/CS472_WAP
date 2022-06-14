"use strict";

// Q1
console.log("Q1 =====================================================================================");
const person= {    
    name:null,
    dateOfBirth:null,
    getName:function(){
        return this.name;
    },
    setName:function(vlName){
        this.name=vlName;
    },
    setDateOfBirth:function(vlDate){
        this.dateOfBirth=vlDate;
    },
    getFormatedDate:function(){
        return this.dateOfBirth.toISOString().slice(0, 10);               
    },
    info:function(){
        console.log(`The person's name is ${this.getName()}`);
        console.log(`${this.getName()} was born on ${this.getFormatedDate()}`);       
    }
};

/*person.setName=function(vlName){
    this.name=vlName;
}*/

person.setDateOfBirth(new Date(2000,1,1));
//console.log("Name:" + person.getName());
person.setName("Şenyayla");
person.info();

const nnn=Object.create(person,{
    name:{
        value:"Stieve"
    },
    dateOfBirth:{
        value:new Date(1998,12,10)
    }
})

nnn.info();


const john = Object.create(person, {
    name: {
        value: "John"
    },
    dateOfBirth: {
        value: new Date(1998,11,10)
    }
});

john.info();

// Q2
console.log("Q2 =====================================================================================");
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const Employee={
    __proto__:person,
    salary:0,
    hireDate:new Date(),
    setSalary:function(vlSalary){
        this.salary=vlSalary;
    },  
    getSalary:function(){
        return formatter.format(this.salary);
    },
    doJob:function(jobTitle){
        console.log(this.getName() + " is a " + jobTitle + " who earns " + this.getSalary());
    }
};

const emp=Object.create(Employee);
emp.setName("Anna");
emp.setDateOfBirth(new Date());
emp.setSalary(249995.50); 
emp.doJob("Programmer");

// Q3
console.log("Q3 =====================================================================================");

function Person2(vlName,vlDOB) {
    const name=vlName;
    const dateOfBirth = vlDOB;

    this.getName=function(){
        return name;
    };

    this.getDateOfBirth=function(){
        return dateOfBirth.toISOString().slice(0, 10);
    }

    this.toString=function(){
        console.log("Name: "+ this.getName() + " DateOfBirth: "+ this.getDateOfBirth());
    }
}
    
    let user = new Person2("Peter",new Date(1988,11,10)).toString();


