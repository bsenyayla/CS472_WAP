"use strict";

var TextAreaAdd =function(x){
    var resultText=document.getElementById("resultText");
    resultText.innerHTML=x + resultText.innerHTML;
}

const finSecondFin = (n,arr) => {
    if(arr.length < n){
        console.log('Küçük array..');
    }
    else{
        var retVal=arr.find(m=> n==m);
        console.log("Arama sonucu:" + retVal);    
    }
    console.log('Lenght => ' + arr.length);
}

finSecondFin(1,[4,5,3,6,8,9]);
var sayibul=function(){
    for(let i=0;i <5 ;i++){
        TextAreaAdd('i: ' + i + "\n");
    }
};
sayibul();

var filterLongWords=(words,i) => {
    const longWords=[];

    for(const word of words){
        if(word.length >i){
            longWords.push(word);
        }
        
    }

    for(const xxx of longWords){
        console.log("Word:" + xxx);
    }
    
}

filterLongWords(["bir","iki","araba","otomobil","traktör"],3);
const longWords2=(words,i)=> {
var filWords=words.filter(word=>word.length>i);
    for(const ccc of filWords){
        console.log("Sonuc:" + ccc);
    }
};


console.log("== Compute Sum Of Squares ==========================================================================");
longWords2(["bir","iki","araba","otomobil","traktör"],3);
    function computeSumOfSquares(a){
        return a.map(n=> n*n).reduce((sum,n)=>sum+n); 
    }
console.log(computeSumOfSquares([1, 2, 3, 4]));

console.log("== Find Second Biggest ==========================================================================");
function findSecondBiggest(arr){
    let first=0;
    let second=0;

    for(const xx of arr){
        if(first < xx){
            second=first;
            first=xx;
        }    
        else
        {
            if(second < xx)
            {
                second=xx;
            }
        }
        
    }

    console.log("First: " + first);
    console.log("Second: " + second);

}

findSecondBiggest([6,1,3,7,0,1,5]);

console.log("== Find Second Biggest -SecondWay ==========================================================================");
function findSecondBiggestV2(numbers){
    const max=numbers.reduce((a,b)=> Math.max(a,b),-Infinity);
    const nums =numbers.filter(n=> n != max);

    const second =nums.reduce((a,b)=> Math.max(a,b),-Infinity);

    console.log("Max:" + max); 
    console.log("Nums:" + nums); 
    console.log("Second:" + second);
}
findSecondBiggestV2([6,1,3,7,0,1,5]);


console.log("== Odd & Even Number Only ==========================================================================");
function printOddNumbersOnly(a){
    a.filter(n=> n%2 ==1 ).forEach(n=> {
        console.log(n);
    });

    const evenNumber=a.filter(n=> n%2==0);
    evenNumber.forEach(element => {
        console.log("Even:" + element);
    });


}

printOddNumbersOnly([6,1,3,7,0,1,5]);


console.log("== xxx ==========================================================================");

