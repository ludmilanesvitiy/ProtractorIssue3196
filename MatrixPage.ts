'use strict';

let filterByThing = $('.things-filter-button-content');
let searchInFilterByThing = $('input[type*="search"]');
let thingNameOnFilter = element.all(by.css('.things-filter-button-content>span')).first();
let thingInFilter = $('.thing-name');

let MatrixPage = function () {
    this.getFilterByThing = () => { return filterByThing; };
    this.getSearchInFilterByThing = () => { return searchInFilterByThing; };
    this.getThingNameOnFilter = () => { return thingNameOnFilter; };
    this.getThingInFilter = () => {return thingInFilter; };
};
module.exports = MatrixPage;