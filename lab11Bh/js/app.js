"use strict"
const censusForm=document.getElementById("frmPatient");

window.onload=function(){
    const objPatient=new Patient("frmPatient");    

    censusForm.addEventListener("submit",function(event){
        event.preventDefault();       
        objPatient.AddNewPostedData();
    });

    const btnLoadData=document.getElementById("btnLoadData");
    btnLoadData.addEventListener("click",function(event){
        objPatient.FillData();
    });
}


 class Patient {
     
    constructor(formName){
        this.form=document.getElementById(formName);
    }
    
    doJob(){
        console.log("OKKK");
    }
    

    AddNewPostedData(){
        const $newRow = `<tr><td>${document.getElementById("patientIdNumber").value}</td>
        <td>${document.getElementById("firstName").value}</td>
        <td>${document.getElementById("middleInitials").value}   </td>
        <td>${document.getElementById("lastName").value}</td>
        <td>${document.getElementById("dateOfBirth").value}</td>
        <td>${document.getElementById("ddlDepartment").value}</td>
        <td>${censusForm.elements["radioIsOutPatient"].value}</td></tr>`;
        $("#tbodyPatientsList").append($newRow);        
        this.form.reset();
    }

    FillData(){
        const dataArr=[
            ["EP-001-123456","Bahadır","","Şenyayla","2011-01-10","Ear, Nose and Throat","Yes"],
            ["EP-002-123456","Obinna" ,"","Kalu","2011-01-10","Cardiology","Yes"],
            ["EP-003-123456","Anna"   ,"","Red","2011-01-10","Primary Care","No"],
            ["EP-004-123456","John"   ,"","Blue","2011-01-10","Cardiology","No"]
        ];

        for(let dr of dataArr)
        {
            const $newRow = `<tr><td>${dr[0]}</td>
            <td>${dr[1]}</td>
            <td>${dr[2]}</td>
            <td>${dr[3]}</td>
            <td>${dr[4]}</td>
            <td>${dr[5]}</td>
            <td>${dr[6]}</td></tr>`;
            $("#tbodyPatientsList").append($newRow);              
        }
    }
}

/*
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
*/