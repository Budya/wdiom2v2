const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class BaraholkaPage extends BaseForm {
    constructor() {
        super(elements.smartWatchBtn, 'Baraholka page');
    }

    async smartWatchButtonClick() {
        return elements.smartWatchBtn.click(); 
    }
}

module.exports = new BaraholkaPage();