require('./hooks');
const onlinerPage = require('../../src/pages/onlinerPage.po');
const baraholkaPage = require('../../src/pages/baraholkaPage.po');
const smartWatchesPage = require('../../src/pages/smartWatches.po');



describe('Onliner test', () => {    
    
    it('Baraholka onliner', async () => {
       
       
        expect(await onlinerPage.isFormOpened()).toBeTrue();
        await onlinerPage.clickBaraholkaBtn();
        expect(await baraholkaPage.isFormOpened()).toBeTrue();
        await baraholkaPage.smartWatchButtonClick();
        expect(await smartWatchesPage.isFormOpened()).toBeTrue();

        console.log(await smartWatchesPage.getFirstItemPrise(), await smartWatchesPage.getFirstItemTitle())
    
        
        
    });
});