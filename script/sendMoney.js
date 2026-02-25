document.getElementById("send-money-btn").addEventListener("click", function () {
  // get the sender number
  const sendMoneyNumber = getValueFromInput("send-money-number");
  if (sendMoneyNumber.length !== 11) {
    alert("Invalid Number");
    return;
  }

  // get the amount
  const sendMoneyAmount = getValueFromInput("send-money-amount");

  // get the current balance
  const currentBalance = getBalance();

  // calculate the balance
  const newBalance = currentBalance - Number(sendMoneyAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getValueFromInput("send-money-pin");
  if (pin === "1234") {
    alert("Sendmoney Successful");
      setBalance(newBalance);
      
    // send money transactions history
    const history = document.getElementById("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
          sendmoney ${sendMoneyAmount} Taka Success to ${sendMoneyNumber} , at ${new Date()}
        </div>
        `;
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});