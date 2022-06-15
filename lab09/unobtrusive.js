var btnOK=document.getElementById("btnOK");
btnOK.onclick=okClick;

function okClick(){
    alert("Ok click");
}

document.cookie = 'position={"data":1,"row":2}' ;
// Another Way 

// Anonymous function example
window.onload = function() {
    var okButton = document.getElementById("btnOK2");
    okButton.onclick = okayClick;
};

function okayClick() {
    alert("booyah");
    this.className="highlighted";
}
    

//Functions can be assigned to variables
const myfunc = function(a, b) {
    return a * b;
};

const myfuncX = function(a, b) {
    return a + b;
};
    

console.log("Sonuc:" + myfunc(1,2));    

function apply(a, b, funcName) {
    const  y= funcName(a, b);

    return y;
}
    const x = apply(2, 3, myfuncX); // 6
    console.log("X: " + x);


function getAlert(str){
    return function(){
        alert(str);
    }
}

const malert=getAlert("ben geldim");
//malert();

//getAlert("bu sefer tek satırda..")();

//Arrow Function 
const carp=(a,b,c)=> {
    return a * b* c;
};

console.log("ArrowFunc:" + carp(1,2,3));
//Map
const a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
    ];
    
    const a2 = a.map(function(s) { return s.length });
    console.log("a2: " + a2);
    const a3 = a.map(s => s.length);
    console.log("a3: " + a3);

    
//Filter
    const a2F = a.filter(function(s) {return s.length > 7 });
    const a3F = a.filter( s => s.length > 7 ); 
    
// for in 
const things = {
    'a': 97,
    'b': 98,
    'c': 99
};

for (const key in things) {
    console.log(key + ', ' + things[key]);
}

const thingss = [97,98,99];
for (const key in thingss) { //bu bütün özelliklerini basar
    console.log(key + ', ' + thingss[key]);
}

//for of burada objenin değerini basar diğer detayları vermez

let letters = ['x', 'y', 'z'];
for (let i in letters) {
console.log(i); } // "0", "1", "2", 

for (let i of letters) {
console.log(i); } // “x", “y", “z"

//Rest Parameters ES6
console.log("== Rest Parameters =====================================================================================================================");

function sum(x, y, ...more) {
    //"more" is array of all extra passed params
    let total = x + y;
    if (more.length > 0) {
        for (let i = 0; i < more.length; i++) {
            total += more[i];
        }
    }
    console.log("Total: " + total);
    return total;
}
    
sum(5, 5, 5);
sum(6, 6, 6, 6, 6);


console.log("Cookie Data:" + document.cookie);