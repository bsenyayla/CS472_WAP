"use strict"

const address={
street:"NORTH 4th street",
city:"Fairfield"
};

var aa='Test';

console.log(`sdf   ${address.city}`);


function foo3(){
    this.prop="hello";  //strict modda hata verir
}
//foo3();
/*
console.log(prop);
console.log(this);
console.log(this.prop);
*/

function foo4(){
    const PI=3.14;
    function bar(){
        console.log(this);
    }
    //bar();
    console.log(this);
}

foo4();