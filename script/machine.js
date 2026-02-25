// machine id --> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

// machine -> balance
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("current balance", Number(balance));
  return Number(balance);
}

// machine value -> set balance

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// machine id > hide all > show id

function showOnly(id) {
  const addmoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const transaction = document.getElementById("history");
  const latestPayment = document.getElementById("latest-payment");
  //   console.log(`add Money- ${addmoney} , cashout - ${cashout}`);

  // hide all
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transaction.classList.add("hidden");
  latestPayment.classList.add("hidden");

  // id wala element show me
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
