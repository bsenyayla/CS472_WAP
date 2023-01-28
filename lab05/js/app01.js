//SET hashTable gibi düşünebilirsin veriler tekil olur
console.log("== SET ==============================================================================");
const letters=new Set(["a","b"]);// değeler uniq olur
const letCopy=new Set();// değeler uniq olur

letters.add("d");
letters.add("a");
letters.add("c");

letters.forEach(function(value){
    letCopy.add(value);
    
});

for(const x of letCopy){
    console.log("E Copy:" + x);
}
//---------------------------------------------------------------------------------------------
console.log("== MAP(key value pair) ================================================================");
// get-set -delete -has-forEach-size
const fruits = new Map();
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);
    fruits.set("watermeloon", 100);
    fruits.set("kiwi",120);

let text = "";
fruits.forEach (function(value, key) {
  text +=fruits.get(key);
  console.log("key:" + key + " Value:" + value);
})



//---------------------------------------------------------------------------------------------
console.log("== Array ==============================================================================");
const cars = ["Saab", "Volvo", "BMW"];

cars[4]="d";

for(let i=0; i < cars.length;i++){
  console.log("yummu=" + cars[i])  ;
}



for (let key in cars) {
    console.log("key=> " + cars[key])  ;
}



const numbers = [45, 4, 9, 16, 25];
numbers.push( 10);

let txt = 0;
for (let x in numbers) {
  txt += numbers[x];
}
console.log("Toplam:" + txt);

for(let i=0;i< numbers.length;i++){
    console.log("num--:" + numbers[i]);    
}


console.log("== Map ConvertToArray ==============================================================================");

var myTranslation = { 
    "my house": "mein Haus", 
    "my boat": "mein Boot", 
    "my horse": "mein Pferd"
}

var ii=0, xkey="", xkeys=[];
xkeys = Object.keys( myTranslation);

for (ii=0; ii < xkeys.length; ii++) {
    xkey = xkeys[ii];
    //alert('The translation of '+ key +' is '+ myTranslation[key]);
    console.log('The translation of '+ xkey +' is '+ myTranslation[xkey]);
}

