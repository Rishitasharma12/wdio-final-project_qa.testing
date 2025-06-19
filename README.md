# WebdriverIO Automation Project – QA Testing 🚀

This project is an end-to-end UI test automation framework built using **WebdriverIO** and **Node.js**, created as part of a QA/Testing internship task.

It covers an E-Commerce "Add to Cart & Checkout" scenario on [rahulshettyacademy.com](https://rahulshettyacademy.com/client), fully automated using the Page Object Model (POM).

---

## 📁 Project Structure

```
.
├── cartTest.js            # Test script
├── login.page.js          # Login page object
├── product.page.js        # Product page object
└── checkout.page.js       # Checkout page object
```

---

## 💻 Tech Stack

| Tool / Tech     | Purpose                       |
|----------------|-------------------------------|
| WebdriverIO     | UI Automation Framework       |
| Node.js         | JavaScript Runtime            |
| Mocha           | Test Runner                   |
| VS Code         | Code Editor                   |
| Git & GitHub    | Version Control & Hosting     |
| Linux Ubuntu    | Development Environment       |

---

## 🚀 How to Run the Test

1. **Clone the repo**

```bash
git clone https://github.com/Rishitasharma12/wdio-final-project_qa.testing.git
cd wdio-final-project_qa.testing
```

2. **Install dependencies** (if `package.json` exists)

```bash
npm install
```

3. **Run the test (manually)**

Make sure your Chrome browser is installed.

```bash
npx wdio run wdio.conf.js
```

4. **Or run the script directly (basic)**

```bash
node cartTest.js
```

---

## 🧪 Test Scenario Automated

✅ User logs in  
✅ Selects product: **ADIDAS ORIGINAL**  
✅ Adds to cart  
✅ Proceeds to checkout  
✅ Selects country **India**  
✅ Verifies "Thank you for the order" confirmation

---

## 👩‍💻 Author

**Rishita Sharma**  
Intern @ GIIT Solutions  
[GitHub](https://github.com/Rishitasharma12)

---

## ⭐ Acknowledgements

- [Rahul Shetty Academy](https://rahulshettyacademy.com/)
- [WebdriverIO Docs](https://webdriver.io/docs/gettingstarted)

---

📌 *Feel free to fork, star, or suggest improvements!*
