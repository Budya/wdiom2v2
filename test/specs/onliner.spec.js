require('./hooks');
const onlinerPage = require('../../src/pages/onlinerPage.po');
const baraholkaPage = require('../../src/pages/baraholkaPage.po');
const smartWatchesPage = require('../../src/pages/smartWatches.po');
const searchPopUp = require('../../src/pages/popUpPage.po');
const productPage = require('../../src/pages/productPage.po');


describe('Onliner test', () => {
    it('Baraholka onliner', async () => {
        expect(await onlinerPage.isFormOpened()).toBeTrue();
        
        await onlinerPage.clickBaraholkaBtn();
        expect(await baraholkaPage.isFormOpened()).toBeTrue();
        
        await baraholkaPage.smartWatchButtonClick();
        expect(await smartWatchesPage.isFormOpened()).toBeTrue();                
        
        const itemPrice = await smartWatchesPage.getFirstItemPrise();            
        const itemName = await smartWatchesPage.getFirstItemTitle();
        await smartWatchesPage.searchItem(itemName);
        await smartWatchesPage.waitResultPopUp();
        expect(await smartWatchesPage.isPopUpVisible()).toBeTrue();
        
        await smartWatchesPage.switchToPopUp();
        await searchPopUp.waitForListItems();
        expect(await searchPopUp.getElementsCount()).toBeGreaterThan(0);
        expect(await searchPopUp.getTitleOfItemByText(itemName) == itemName).toBeTrue();        
        expect(await searchPopUp.getItemPriceByText(itemName) == itemPrice).toBeTrue();        
        
        await searchPopUp.clickOnItemWithText(itemName);
        expect(await productPage.isFormOpened()).toBeTrue();
        expect(await productPage.getProductTitle() == itemName).toBeTrue();        
        expect(await productPage.getProductPrice() == itemPrice).toBeTrue();       
    });
});