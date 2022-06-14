"use strict"

window.onload=function(){
    const censusForm=document.getElementById("frmPatient");

    censusForm.addEventListener("submit",function(event){
        event.preventDefault();       
        const $newRow = `<tr><td>${document.getElementById("patientIdNumber").value}</td>
                            <td>${document.getElementById("firstName").value}</td>
                            <td>${document.getElementById("middleInitials").value}   </td>
                            <td>${document.getElementById("lastName").value}</td>
                            <td>${document.getElementById("dateOfBirth").value}</td>
                            <td>${document.getElementById("ddlDepartment").value}</td>
                            <td>${censusForm.elements["radioIsOutPatient"].value}</td></tr>`;
        
        $("#tbodyPatientsList").append($newRow);        
        censusForm.reset();
    });




    const btnLoadData=document.getElementById("btnLoadData");
    btnLoadData.addEventListener("click",function(event){
        const patientType ={
            patientIdNumber:"",
            firstName:"",
            middleInitials:"",
            lastName:"",
            dateOfBirth:"",
            ddlDepartment:"",
            IsOutPatient:"",
            filla:function(
                patientIdNumber, firstName,                middleInitials,                lastName,
                dateOfBirth,                ddlDepartment,                IsOutPatient
            ){
                this.patientIdNumber=patientIdNumber;
                this.firstName=firstName;
                this.middleInitials=middleInitials;
                this.lastName=lastName;
                this.dateOfBirth=dateOfBirth;
                this.ddlDepartment=ddlDepartment;
                this.IsOutPatient=IsOutPatient;
            },
            setFirstName:function(vlFirstName){
                this.firstName=vlFirstName;
            }

        };

        const emp=Object.create(patientType)
        emp.filla(1,"FirstName","","last",new Date(),1,1);

        const emp1=Object.create(patientType)
        emp1.filla(1,"FirstName","","last",new Date(),1,1);

        const emp2=Object.create(patientType)
        emp2.filla(1,"FirstName","","last",new Date(),1,1);
        
        
        alert(emp.firstName);



    });

}

/*

const persons = [
    new Person("Ana Smith", new Date(1998,11,15)),
    new Person("Bob June", new Date(1945,10,16)),
    new Person("Carlos Slim Helu", new Date(1976,9,24))
];
*/