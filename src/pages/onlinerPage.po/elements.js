const Element = require('../../framework/element');

module.exports = {
    baraholkaBtn: new Element("//li//a[contains(@href,'baraholka') and contains(@class,'main-navigation')]", 'Baraholka button'),
    smartWatchBtn: new Element("//li//a[contains(text(),'мные часы')]", 'Smart watch button'), 
    
}