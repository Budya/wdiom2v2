const BaseForm = require("../../framework/baseForm");
const elements = require('./elements');

class SecurePage extends BaseForm {
    constructor() {
        super(elements.messageLabel, 'Secure page');
    }

    async getTextFromMessage() {
        return elements.messageLabel.getText();
    }
}

module.exports = new SecurePage();