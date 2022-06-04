// #1 function to find out max between 2 numbers
function max(a, b){
return (a > b) ? a : b;
}
const a = 3;
const b = 8;
console.log("Max between 2 numbers: " + a + " and " + b + " is " + max(a,b));

// #2 function to find out max between 3 numbers
function maxOfThree(a, b, c){
    let max;
    max = (a > b) ? a : b;
    return (max > c) ? max : c;
}
const c = 9;
console.log("Max between 3 numbers: " + a + ", " + b +" and " + c + " is " + maxOfThree(a, b, c));

// #3 function to find out it the single word is vowel or not
function isVowel(letter){
    const pattern = /[aeiou]/;
    return pattern.test(letter);
}
const letter = 'f';
console.log("The character " + letter + " is " + " a vowel:" + isVowel(letter));

// #4 function to find out the sum in array of numbers
const numbers = [1,2,3,4,5,6];
function sum(numbers){
	let sum = 0;
  for(const n in numbers){
  	sum += n;
  }
  return sum;
}
console.log("The sum of numbers in " + numbers + " is " + sum(numbers));

// #4 function to find out the multiplication in array of numbers
function multiply(numbers){
 	let prod = 1;
  for (const n in numbers){
  	prod *= n;
  }
  return prod;
}
console.log("The product of numbers in " + numbers + " is " + multiply(numbers));

// #5 function to reverse a string
const word = "jsfiddle";
function reverse(word){
	let length = word.length;
    let reverse = [];
    for (let i = 0; i < length; i++){
        reverse.push(word.charAt(length - i - 1));
  	    //reverse[i] = word.charAt(length - i - 1);
    }
    return reverse.toString().replaceAll(',','');
}
console.log("The reverse of " + word + " is " + reverse(word));

// #6 function to find out the length of longest word in an array
function findLongestWord(wordArray){
  let maxLength = 0;
  for(const word in wordArray){
  	maxLength = (maxLength > word.length) ? maxLength : word.length;
  }
  return maxLength;
}
const wordArray = ["jsfiddle", "tel", "cat", "listing", "messaging", "private"];
console.log("The length of longest word in " + wordArray + " is " + findLongestWord(wordArray));

// #7 function to find out the words in an array whose length is greater than integer
const n = 7;
function filterLongWords(wordArray, n){
	let i = 0;
  let longWordsArray = [];
  for(const word in wordArray){
  	if (word.length > n){
    	longWordsArray[i] = word;
      i++;
    }
  }
  return longWordsArray;
}
console.log("The words with length greater than " +  n + " in " + wordArray + " are " + filterLongWords(wordArray, n));

// #8 function to find out the sum of squares of numbers in an array
function computeSumOfSquares(numbers){
  return numbers.reduce((sumOfSquares, numbers) => sumOfSquares + (numbers * numbers));
}
console.log("The sum of Squares of numbers in an array " + numbers + " is " + computeSumOfSquares(numbers)); 

//#9 function to find the odd numbers in an array
function printOddNumbersOnly(numbers){
  return numbers.filter(numbers => numbers % 2 == 1);
}
console.log("The odd numbers in an array of " + numbers + " are " + printOddNumbersOnly(numbers)); 

// #10 function to find the sum of squares of even numbers in an array
function computeSumOfSquaresOfEvensOnly(numbers){
    return numbers.filter(numbers => numbers % 2 == 0).
    reduce((sumOfSquaresOfEven, numbers, array) => sumOfSquaresOfEven + (numbers * numbers),0);
}
console.log("The sum of squares of even numbers in an array of " + numbers + " are " + computeSumOfSquaresOfEvensOnly(numbers)); 

// #11 function to find sum and product of numbers in an array using reduce
function sumFunc(numbers){
  return numbers.
  reduce((sum, numbers) => sum + numbers);
}
console.log("The sum of numbers in an array of " + numbers + " are " + sumFunc(numbers));
function multiplyFunc(numbers){
	return numbers.reduce((product, numbers) => product * numbers);
}
console.log("The product of numbers in an array of " + numbers + " are " + multiplyFunc(numbers));


// #12 function to find second largest number in an array
function findSecondBiggest(numbers){
	const max =  numbers.reduce((a,b) => Math.max(a,b), -Infinity);
  const nums = numbers.filter(n => n!= max);
 	return nums.reduce((a,b) => Math.max(a,b), -Infinity);
}
console.log("The second largest number in the array: " + numbers + " is " + findSecondBiggest(numbers));

// #13 function to print the fibonacci series of length n starting with j and k
function printFibo(length, x, y){
	if (length == null || length == 0) return null;
  let fiboSeries = [];
  let a = x;
  let b = y;
  let c = 0;
  for (let i = 0; i < length; i++) {
  	if (i == 0) fiboSeries.push(a);
    else if (i == 1) fiboSeries.push(b);
    else {
      		c = a + b;
      		fiboSeries.push(c);
          a = b;
          b = c;
      }
  }
  console.log("The fibonacci series of length " + length + " starting with " + x + " and " + y + " is: " + fiboSeries);
}
const length = 5;
const j = 0;
const k = 1;
printFibo(length, j, k);



function setDateAndTime(){
    setInterval(getDateAndTime, 1000)
}

// #Get clock 
function getDateAndTime(){
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let mi = date.getMinutes();
  let s = date.getSeconds();
  document.getElementById("dateAndTime").innerHTML = y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;
}
setDateAndTime();