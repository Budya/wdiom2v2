require('./hooks');
const allureReporter = require('@wdio/allure-reporter').default;
const loginPage = require('../../src/pages/loginPage.po');
const securePage = require('../../src/pages/securePage.po');

describe('My Login application', () => {    
    
    it('should login with valid credentials', async () => {
        allureReporter.addDescription('User logs in to application with valid credentials');
        allureReporter.addTestId('001');
        expect(await loginPage.isFormOpened()).withContext('Login page is not opened').toBeTrue();
        await loginPage.typeLogin('tomsmith');
        await loginPage.typePassword('SuperSecretPassword!');
        await loginPage.clickLoginButtton(); 
        allureReporter.addStep('Assert that Secure page is open');
        expect(await securePage.isFormOpened()).toBeTrue();
        expect(await securePage.getTextFromMessage())
            .toContain('You logged into a secure area!!');
        
    });
});

