const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class LoginPage extends BaseForm {
    constructor() {
        super(elements.loginInput, 'Login page');
    }

    async typeLogin(login) {
        return elements.loginInput.type(login);
    }

    async typePassword(password) {
        return elements.passwordInput.type(password);
    }

    async clickLoginButtton() {
        return elements.loginButton.click();
    }
}

module.exports = new LoginPage();