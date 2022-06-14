"use strict";

$(document).ready(function () {
  $("#articlesList").on("click", function (event) {
    
    event.preventDefault();
    const $article = '<article><p>Article Title - <a href="http://www.google.com">Click to Add a new Article</a>  </p></article>';
 
    $("#articlesList").append($article);
  });
});
