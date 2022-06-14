"use strict";
export class Person {
   #name="";
   #dateOfBirth=new Date();

   constructor(name,date){
      this.#name=name;
      this.#dateOfBirth=date;
   }

   getName(){
      return this.#name;
   }
   setName(vlName){
      this.#name=vlName;
   }

   getDateOfBirth(){
      return this.#dateOfBirth;
   }

   setDateOfBirth(vlDate){
      this.#dateOfBirth=vlDate;
   }

   toString(){
      return "Name:" + this.#name + " , DateOfBirth:" + formatDate(this.getDateOfBirth());
   }

   showInfo(){
      console.log(this.toString());
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



/*
console.log("ClassPerson =========================================================================") ;
var nt=new Person("bahadır");
console.log("nt:" + nt.name) ;
console.log("nt:" + nt.getName()) ;
console.log(nt.toString());*/

