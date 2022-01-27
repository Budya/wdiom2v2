const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class OnlinerPage extends BaseForm {
    constructor() {
        super(elements.baraholkaBtn, 'Onliner page');
    }

    async clickBaraholkaBtn() {
        return elements.baraholkaBtn.click();
    }
}

module.exports = new OnlinerPage();