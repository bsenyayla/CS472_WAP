function startTime() {
    let date = new Date();
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let h = date.getHours();
    let ampm = h >= 12 ? "PM" : "AM";
    h = h>12 ? h-12 : h;
    let m = date.getMinutes();
    let s = date.getSeconds();
    let monthStr = monthNames[date.getMonth()];
    let n = weekday[date.getDay()];
    let dayNumber = date.getDay()-1;
    let y = date.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("gmt").innerText =
      n + ", " +  dayNumber+" " + monthStr + " " + y + "-" + h + ":" + m + ":" + s + " " + ampm;
    let t = setTimeout(startTime, 999);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  // we start doing the form from here ----------------------------------
  const justPrint = () =>{
    const FullName = document.getElementById("FullName").value;
    const CitizenID = document.getElementById("CitizenID").value;
    const SSN = document.getElementById("SSN").value;
    const State = document.getElementById("State").value ;
    const SeniorYes = document.getElementById("SeniorYes").checked;
    const SeniorNo = document.getElementById("SeniorNo").checked ;
    const whoIsSelected = SeniorYes == true ? "Yes\n" : SeniorNo == true ? "No\n" : "\n";
        

    
      alert("CitizenID: "+  CitizenID + '\n' + "SSN:" +SSN+ '\n' + "FULLName: " +FullName + '\n' + "State: " + State+ + '\n'+"\nSenior: " + whoIsSelected)
     
  
  }
  