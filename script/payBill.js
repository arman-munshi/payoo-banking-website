document.getElementById("pay-bill-btn").addEventListener("click", function () {
  const payBillBank = getValueFromInput("pay-bill-bank");
  // console.log(payBillBank)
  if (payBillBank == "select bank") {
    alert("please select a bank");
    return;
  }

  const payBillNumber = getValueFromInput("pay-bill-number");
  if (payBillNumber.length !== 11) {
    alert("invalid number");
    return;
  }

  const payBillAmount = getValueFromInput("pay-bill-amount");

  // calculate payment
  const balance = getBalance();
    const newBalance = balance - Number(payBillAmount);
    console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
    }
    
    const pin = getValueFromInput("pay-bill-pin");
    if (pin === "1234") {
        alert(`pay bill Success form ${payBillBank} at ${new Date()}`);
        setBalance(newBalance);
        // add history
        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
          Add Money Success form ${payBillBank} , add-money-number ${payBillNumber} at ${new Date()}
        </div>
        `
       
        history.append(newHistory)
    }
    else {
        alert("invalid pin");
    }
});
