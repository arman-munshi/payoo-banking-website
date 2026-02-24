console.log("login function is create");

document.getElementById("login-btn").addEventListener("click", function () {
  //    1. get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
    console.log(contactNumber);
    

  // 2.get the pin input
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
    console.log(pin);
    
    // 3- match pin & mobile number
    if (contactNumber == "01302700060" && pin == "1234") {
        alert("login Success");

        // connect to the home.html page
        window.location.assign("home.html");
        
    }
    else {
        alert("login Failed");
        return;
    }
});
