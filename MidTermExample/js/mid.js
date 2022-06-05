"use strict"


window.onload=function(){
    const censusForm=document.getElementById("censusForm");
    censusForm.addEventListener("submit",function(event){
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const citizenId = document.getElementById("citizenId").value;
        const ssn = document.getElementById("ssn").value;
        const state = document.getElementById("state").value;
        const snrCitizen = censusForm.elements["radBtnSnrCitizen"].value;

        alert(
            "FullName: " + fullName + "\n" +
            "CitizenId: " + citizenId + "\n" +
            "ssn: " + ssn + "\n" +
            "state: " + state + "\n" +
            "snrCitizen: " + snrCitizen 
        
        
        );
    });





}

 