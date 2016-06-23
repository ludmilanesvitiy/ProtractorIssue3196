'use strict';

const MatrixPage = require('../protractor3196/MatrixPage.ts');
const using = require('jasmine-data-provider');
const dataProvider = require('../protractor3196/DataProvider.ts');
let matrixPage = new MatrixPage();

browser.manage().window().maximize();

describe ('Test for reproducing bug at issue 3196', ()=> {
    beforeAll(() => {
        browser.get('/place?thing=Home&place=547c4bc9b787bd0b00dcfb5b&image=547c4f7fb787bd0b00dcfc9a');
    });
    using (dataProvider.matrixPageQueries, (data, description) => {
        it ('Check ' + description, () => {
            matrixPage.getFilterByThing().click();
            matrixPage.getSearchInFilterByThing().clear().then(function () {
                matrixPage.getSearchInFilterByThing().sendKeys(data.query);
                browser.sleep(2000);
            });
            matrixPage.getThingInFilter().click();
            expect(matrixPage.getThingNameOnFilter().getText()).toEqual(data.query);
        });
    });
});