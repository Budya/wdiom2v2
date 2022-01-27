const Element = require('../../framework/element');

module.exports = {    
    productTitle: new Element("//div[contains(@class,'m-title')]//h1//a", 'Product title'),
    productPrice: new Element("//div[contains(@class,'m-title')]//li[@class='price-primary']", 'Product price'),   
}