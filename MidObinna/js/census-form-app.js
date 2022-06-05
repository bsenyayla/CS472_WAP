/**
 * census-form-app.js
 */
"use strict";

window.onload = function() {
    const censusForm = document.getElementById("censusForm");
    // censusForm.addEventListener("submit", function(event) {
        
    // });
    censusForm.addEventListener("submit", event => {
        event.preventDefault();
        const fullName = document.getElementById("fullName");
        const citizenId = document.getElementById("citizenId");
        const ssn = document.getElementById("ssn");
        const state = document.getElementById("state");
        const snrCitizen = censusForm.elements["radBtnSnrCitizen"];
        // const formData = ;
        // alert(`
        //     Full Name: ${fullName.value}
        //     Citizen ID: ${citizenId.value}
        //     Social Sec No: ${ssn.value}
        //     State: ${state.value}
        //     Is a Senior Citizen: ${snrCitizen.value}
        // `);
        fullName.value = "";
        citizenId.value = "";
        ssn.value = "";
        state.value = "";
        // snrCitizen.value = "";
    })
}