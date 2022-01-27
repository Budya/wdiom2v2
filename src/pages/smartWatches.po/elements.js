const Element = require('../../framework/element');

module.exports = {    
    pageTitle: new Element("//h1[contains(@title, 'Умные часы и фитнес-браслеты')]", 'Smart watches page title'),     
    firstItemTitle: new Element("//table[@class = 'ba-tbl-list__table']//tr[2]//h2//a", 'First item title'),
    firstItemPrice: new Element("//table[@class = 'ba-tbl-list__table']//tr[2]//td[@class = 'cost']//div", 'First item price'),
    mainSearchInput: new Element("//input[@class= 'fast-search__input']", 'Main search input'),
    popup: new Element("//iframe[@class = 'modal-iframe']", 'Search result popup'),
}