"use strict";


$("#container a").on("click", function(event) {

    event.preventDefault(); 
   
    $("#container").append('<section id="articlesList"><article><p>Article Title - <a href="">Click to Add a new Article</a></p></article></section>');
    
  });
  