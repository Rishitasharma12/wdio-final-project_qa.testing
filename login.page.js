
class LoginPage {
    get inputUsername() { return $('#userEmail'); }
    get inputPassword() { return $('#userPassword'); }
    get btnLogin() { return $('#login'); }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async open() {
        await browser.url("https://rahulshettyacademy.com/client");
    }
}

module.exports = new LoginPage();