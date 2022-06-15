/**
 * @author: Raj Kumar Thapa
 * March 17 2022
 */
 "use strict";
 $(document).ready(function(){
     const articleList = $('#articlesList');
     articleList.on('click', 'a', function(event){
         event.preventDefault();
         const newArticle = ` <article>
         <p>Here is an Account - 
             <a href="http://www.google.com">Click to Add a new Account</a>
         </p>
     </article>`;
     articleList.append(newArticle);
     });
 });