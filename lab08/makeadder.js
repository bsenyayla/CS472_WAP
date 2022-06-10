"use strict"

let add=(
    function(){

     var min=0;
     return function(){
         return min +=1;
     }  
})();

console.log(add());
console.log(add());

//the issue
const person0={
    name:"Anna",
    dob:new Date(1998,11,25),
    sayHi:function(){     
            console.log(this);
            return "Hello," +  this.name ;      
    }
};

const funcSayHi0 = person0.sayHi();
console.log(person0.sayHi());
console.log(funcSayHi0);


//solution1:Use Self-Pattern
const personel1={
    name:"Anna",
    dob:new Date(1998,11,25),
    sayHi:function(){
        const self=this;
        return function(){
            console.log(self);
            return "HEllo " + self.name;
        }
    }
}

console.log(personel1.sayHi()()); 