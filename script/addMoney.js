document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("add-money-bank");
  console.log(bankAccount);
  if (bankAccount == "select bank") {
    alert("please select a bank");
    return;
    }
    
    const addMoneyNumber = getValueFromInput("add-money-number");
    if (addMoneyNumber.length !== 11) {
        alert("invalid number");
        return;
    }

    const amount = getValueFromInput("add-money-amount");

    // calculate number
    const balance = getBalance()
    const newBalance = balance + Number(amount);
    console.log(newBalance);

    const pin = getValueFromInput("add-money-pin");
    if (pin === "1234") {
        alert(`Add Money Success form ${bankAccount} at ${new Date()}`);
        setBalance(newBalance)
        // add transactions history
        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
          Add Money Success form ${bankAccount} , add-money-number ${addMoneyNumber} at ${new Date()}
        </div>
        `
        history.append(newHistory);
    }
    else {
        alert("invalid pin");
        return;
    }




});
