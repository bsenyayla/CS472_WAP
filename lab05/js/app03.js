/*
function countStars(accumulator, product) {
    for(var prop in accumulator) {
        accumulator[prop][product[prop]] += 1;
    };

    return accumulator;
}
*/

const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);




//komplike summaryz
var r=[
    {    Product: "A"  },
    {    Product: "B"  },
    {    Product: "B"  },
    {    Product: "C"  },
    {    Product: "C"  }
];
  

const product = new Map();



for(let i=0; i < r.length;i++){
    if(product.has(r[i].Product)){
        product.set(r[i].Product,product.get(r[i].Product)+1);
    }
    else
    {
        product.set(r[i].Product,1);
    }
}


product.forEach (function(value, key) {
    
    console.log("key:" + key + " Value:" + value);
  })



  var sums = {}; // A count holder
  
//console.log(r[0]);

  Object.keys(r[0]).forEach(
      
    function(k){ // For each key in the data of a single data object

        console.log("KK=> " + k);
        
        


       this[k]=r.map(function(o){
                    
                    
                    return o[k] 
                
                }) // Pluck values


                .map(function(w){
                    
                    console.log("=====>" + w);
                    if(this[w])
                    {
                        this[w]++;
                    }
                    else
                    {
                        this[w]=1;
                    } // Count values using an object
console.log(this[w]);

                    return this;
                },{}).pop();  // Take just one of the count object copies (poor-man's reduce with this)

  }, sums);
  
  // View result:
  JSON.stringify(sums, null, "\t")

  console.log(JSON.stringify(sums, null, "\t"));
  /* == {
      "Product": {
          "A": 1,
          "B": 1,
          "C": 1
      },
      "star1": {
          "Not Earned": 1,
          "In Progress": 2
      },
      "star2": {
          "In Progress": 1,
          "Not Earned": 2
      },
      "star3": {
          "Earned": 1,
          "In Progress": 1,
          "Not Earned": 1
      },
      "star4": {
          "Not Earned": 1,
          "Earned": 2
      },
      "star5": {
          "Earned": 2,
          "In Progress": 1
      }
  */