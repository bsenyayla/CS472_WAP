function TakeValues(){
      var voterNo = document.getElementById("voterNo").value;
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var levelOfStudy = document.getElementById("levelOfStudy").value;

      alert('Voter NO: ' + voterNo + "\n" +
            "First Name: " +  firstName + "\n" +
            "Last Name: " +  lastName + "\n" +
            "Level Of Study: " +  levelOfStudy + "\n" 
      );
  }