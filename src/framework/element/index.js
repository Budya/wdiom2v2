const Logger = require('../utils/logger');
const { ENVIRONMENT } = require('../../../src/environment/envConfig');
const env = require(`../../../src/environment/${ENVIRONMENT}Environment`);

module.exports = class Element {
    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    async isDisplayed() {
        Logger.info(`Check that element ${this.name} is displayed`);
        return (await $(this.locator)).isDisplayed();
    }

    async waitForExist() {
        Logger.info(`Wait for element ${this.name} is exist`);
        return (await $(this.locator)).waitForExist();
    }

    async click() {
        await this.waitForExist();
        Logger.info(`Click at ${this.name}`);
        return (await $(this.locator)).click();
    }

    async type(text) {
        await this.waitForExist();
        Logger.info(`Type text ${text} into element ${this.name}`);
        return (await $(this.locator)).setValue(text);
    }

    async getText() {
        await this.waitForExist();
        Logger.info(`Get text from ${this.name}`);
        return (await $(this.locator)).getText();
    }

    async getAttribute(attribute) {
        await this.waitForExist();
        Logger.info(`Get attribute value from ${this.name}`);
        return (await $(this.locator)).getAttribute(attribute);
    }

    async waitUntilWisible() {
        await $(this.locator).waitUntil(async function() {
            return this.isDisplayed();
        }, {timeout: env.untilTimeout});
    }

    getLocator() {
        return this.locator;
    }

    async switchToFrame() {
        const elem = await (await $(this.locator));
        return browser.switchToFrame(elem);
    }

    async waitElements() {
        await browser.waitUntil(
            async () => {
                const elements = await ( await $$(this.locator));
                return elements.length > 0; 
            }, { timeout: env.untilTimeout }
        );
    }

    async getElementsCount() {
        Logger.info(`Get count of elements "${this.name}"`);        
        const elements = await (await $$(this.locator));
        return elements.length;
    }    
};