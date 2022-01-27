const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class SearchPopUp extends BaseForm {
    constructor() {
        super(elements.popup, 'Search result pop up');
    }

    async clickOnFirstListItem() {
        return elements.firstListItem.click();
    }

    async getElementsCount() {
        return elements.listItem.getElementsCount();
    }

    async getItemPriceByText(text) {
        const elem = await elements.listItemPriceByText(text).getText();
        return elem + ' р.';
    }

    async getTitleOfItemByText(text) {
        return elements.listItemByText(text).getText();
    }

    async clickOnItemWithText(text) {
        return elements.listItemByText(text).click();
    }

    async waitForListItems() {
        await elements.listItem.waitElements();
    }
}

module.exports = new SearchPopUp();