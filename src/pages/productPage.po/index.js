const BaseForm = require('../../framework/baseForm');
const elements = require('./elements');

class ProductPage extends BaseForm {
    constructor() {
        super(elements.productTitle, 'Product page');
    }

    async getProductTitle() {
        return elements.productTitle.getText();
    }

    async getProductPrice() {
        const text = await elements.productPrice.getText();
        return text;
    }
}

module.exports = new ProductPage();