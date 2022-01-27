const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class SmartWatchesPage extends BaseForm {
    constructor() {
        super(elements.pageTitle, 'Smart watches page');
    }

    async getFirstItemTitle() {
        return elements.firstItemTitle.getText();
    }

    async getFirstItemPrise() {
        return elements.firstItemPrice.getText();
    }

    

  
}

module.exports = new SmartWatchesPage();