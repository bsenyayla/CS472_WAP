console.log("== DataSummaryz ================================================================================");



//komplike summaryz
var r=[{
    Product: "A",
    star1: "Not Earned",
    star2: "In Progress",
    star3: "Earned",
    star4: "Not Earned",
    star5: "Earned"
  },{
    Product: "B",
    star1: "In Progress",
    star2: "Not Earned",
    star3: "In Progress",
    star4: "Earned",
    star5: "Earned"
  },{
    Product: "C",
    star1: "In Progress",
    star2: "Not Earned",
    star3: "Not Earned",
    star4: "Earned",
    star5: "In Progress"
  }];
  
  var sums = {}; // A count holder
  
  
  


//console.log(r[0]);

  Object.keys(r[0]).forEach(
      
    function(k){ // For each key in the data of a single data object

        console.log("KK=> " + k);
        
        


       this[k]=r.map(function(o){
                    
                    console.log("içk=>" + o[k]);
                    return o[k] 
                
                }) // Pluck values


                .map(function(w){
                    
                    console.log("içW=>" + w);
                    if(this[w])
                    {
                        this[w]++;
                    }
                    else
                    {
                        this[w]=1;
                    } // Count values using an object

                    return this;
                },{}).pop();  // Take just one of the count object copies (poor-man's reduce with this)

  }, sums);
  
  // View result:
  JSON.stringify(sums, null, "\t")

  //console.log(JSON.stringify(sums, null, "\t"));
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