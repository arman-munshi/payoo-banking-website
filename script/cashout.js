document.getElementById("cashout-btn").addEventListener("click", function () {

    // get the agent number and validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if (cashoutNumber.length !== 11) {
        alert("Invalid Agent Number");
        return;
    }

    // get the amount and validation
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    // get the current balance
    const balanceElement = document.getElementById("balance")
    const balance = balanceElement.innerText
    console.log(balance)

    // calculate new Balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    
    // validate the amount
    if (newBalance < 0) {
        alert("Invalid Amount")
        return;
    }
    

    // verify the pin
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if (pin === "1234") {
        alert("Cashout successful");
        console.log("New Balance", newBalance);
        balanceElement.innerText = newBalance;
        
    }
    else {
        alert("Invalid pin")
        return;
    }
 




})