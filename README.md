# Payoo Banking Website 💳

A responsive mobile banking web application built with HTML, JavaScript, Tailwind CSS, and DaisyUI. The project simulates common mobile financial services such as adding money, cashing out, sending money, paying bills, and viewing transaction history.

## 🚀 Live Demo

(https://arman-munshi.github.io/payoo-banking-website/)

## 📌 About The Project

Payoo is a frontend-based mobile banking application developed to practice JavaScript DOM manipulation, event handling, form validation, dynamic balance management, and transaction history functionality.

The application provides a simple mobile banking interface where users can log in and perform different financial operations.

## ✨ Features

* 🔐 User login authentication
* 💰 Add money from a selected bank
* 💸 Cash out money through an agent
* 📤 Send money to another user
* 🧾 Pay bills
* 📊 View transaction history
* 💵 Dynamic balance calculation
* 🔢 Mobile number validation
* 🔑 PIN validation
* ⚠️ Insufficient balance validation
* 📱 Mobile-focused responsive interface
* 🎨 Modern UI using DaisyUI and Tailwind CSS

## 🛠️ Technologies Used

* HTML5
* JavaScript (ES6)
* Tailwind CSS
* DaisyUI
* Font Awesome
* Google Fonts

## 📂 Project Structure

```text
payoo-banking-website/
│
├── assets/
│   ├── Logo-full.png
│   ├── logo.png
│   └── opt-1.png ... opt-6.png
│
├── script/
│   ├── addMoney.js
│   ├── cashout.js
│   ├── login.js
│   ├── machine.js
│   ├── payBill.js
│   └── sendMoney.js
│
├── home.html
├── index.html
└── tailwind.config.js
```

## 🔑 Demo Login Credentials

Use the following credentials to access the application:

**Mobile Number**

```text
01302700060
```

**PIN**

```text
1234
```

> This is a frontend practice project, so the login credentials are hardcoded and should not be used for a real financial application.

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/arman-munshi/payoo-banking-website.git
```

### 2. Navigate to the project directory

```bash
cd payoo-banking-website
```

### 3. Open the project

Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code for a better development experience.

## 💡 How It Works

### Login

The user enters a mobile number and PIN. The application validates the credentials and redirects the user to the banking dashboard.

### Add Money

Users can select a bank, enter an account number and amount, and verify the PIN. After successful validation, the amount is added to the available balance.

### Cash Out

Users enter an agent number and withdrawal amount. The application checks the available balance before completing the transaction.

### Send Money

Users can send money to another account by entering the recipient's mobile number and amount.

### Pay Bill

Users can select a bank, enter the required account information, and pay a bill using their available balance.

### Transaction History

Successful transactions are dynamically added to the transaction history section.

## 📚 Learning Objectives

This project helped me practice:

* JavaScript DOM manipulation
* Event listeners
* Functions and reusable logic
* Input validation
* Conditional statements
* Dynamic UI updates
* Working with browser-based data
* Git and GitHub workflow
* Responsive frontend development

## 🔮 Future Improvements

Possible improvements for future versions:

* Connect the application to a real backend
* Implement secure authentication
* Store user and transaction data in a database
* Add persistent transaction history
* Add proper error handling and notifications
* Implement user registration
* Add transaction filtering and search
* Improve accessibility
* Add automated testing
* Deploy the application online

## 👨‍💻 Author

**Md. Arman Munshi**

Computer Science & Engineering Graduate

* GitHub: [arman-munshi](https://github.com/arman-munshi)
* LinkedIn: [Arman Munshi](https://www.linkedin.com/in/arman-munshi-a15711342/)

---

⭐ If you find this project useful, feel free to explore the repository and give it a star.
