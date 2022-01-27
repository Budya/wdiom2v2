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

    async searchItem(searchText) {
        return elements.mainSearchInput.type(searchText);
    }

    async waitResultPopUp() {
        await elements.popup.waitUntilWisible();        
    }

    async isPopUpVisible() {
        return elements.popup.isDisplayed();
    }

    async switchToPopUp() {
        return elements.popup.switchToFrame();
    }
}

module.exports = new SmartWatchesPage();