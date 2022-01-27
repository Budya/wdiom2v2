const Element = require('../../framework/element');

module.exports = {    
    popup: new Element("//iframe[@class = 'modal-iframe']", 'Search result pop up'),     
    firstListItem: new Element("//*[@id='search-page']/div[2]/ul/li[1]", 'First list item'),
    listItem: new Element("//ul[@class='search__results']//li", 'Pop up list item'),
    listItemByText: (text) => { return new Element(`//ul[@class='search__results']//li//div//a//strong[text() = '${text}']`, `Item with text '${text}'`)},
    listItemPriceByText: (text) => { return new Element(`//ul[@class='search__results']//li//div//a//strong[text() = '${text}']//ancestor::div[@class = 'result__item result__item_baraholka']//div[@class='baraholka__price']//span[@data-bind = 'html: $data.priceBynFormatted']`, `Item '${text}' price element`) },
}