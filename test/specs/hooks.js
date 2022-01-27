const { ENVIRONMENT } = require('../../src/environment/envConfig');
const env = require(`../../src/environment/${ENVIRONMENT}Environment`);
const setup = require('../../src/framework/browserActions');

beforeEach(async() => {
    await setup();
    await browser.maximizeWindow();
    await browser.url(env.startURL);
});

afterEach(async() => {
    return browser.reloadSession();
});