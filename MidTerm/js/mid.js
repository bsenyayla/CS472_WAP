"use strict"


window.onload=function(){
    const censusForm=document.getElementById("censusForm");
    censusForm.addEventListener("submit",function(event){
        event.preventDefault();


        
        const accOwnerType = censusForm.elements["radBtnAccountOwnerType"].value;
        const fullName = document.getElementById("fullName").value;
        
        const address = document.getElementById("address").value;
        const accountNumber = document.getElementById("accountNumber").value;
        
        const typeofaccount = document.getElementById("typeofaccount").value;
        
        alert(
            "Account Owner Ship Type: " + accOwnerType + "\n" +
            "Customer FullName: " + fullName + "\n" +
            "Address: " + address + "\n" +
            "Account Number: " + accountNumber + "\n" +
            "Type of Account: " + typeofaccount 
        
        
        );
    });





}

 