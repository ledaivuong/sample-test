const assert = require('assert');

import HomePage from '../page_object/HomePage';

import AddComputerFlow from '../test_flow/AddComputerFlow';
import FilterAndSortFlow from '../test_flow/FilterAndSortFlow';
import DeleteComputerFlow from '../test_flow/DeleteComputerFlow';

import testingData from '../resources/test_data/FilterAndListViewData'

import {CommonFunction} from '../utils/CommonFunction';
import {HandleElement} from '../utils/HandleElement';

describe('Add computer', () => {
    let testData = testingData.get('FLV_H_0022').info;
    before('Make sure testing site is clear and prepare date', () => {
        let theTable = $('//tbody');
        assert.equal(false, theTable.isExisting());
        //Prepare data
        let addComputerFlow = new AddComputerFlow();
        addComputerFlow.openHomePage();
        let theLengthOfTestData = testData.length;
        for(let i = 0; i < theLengthOfTestData; i++) {
            addComputerFlow
                .goToAddPage()
                .addComputer(testData[i]);
        }
    });
    it('FLV_H_0022 FLV_H_0023 It should filter data by name',()=>{
        //Get name of computer and filter in data test
        let stringFilter = "test filter"
        let arrayExpectedResult = [];
        for(let i = 0, theLengthOfTestData = testData.length; i < theLengthOfTestData; i++) {
            arrayExpectedResult.push(testData[i].name);
        }
        arrayExpectedResult = arrayExpectedResult.filter(item => item.toLowerCase().includes(stringFilter))
        
        //Execute steps
        let filterFlow = new FilterAndSortFlow();
        filterFlow
            .openHomePage()
            .filter(stringFilter);

        //verify the pagination
        let currentPagination = HomePage.currentPaginationLink.getText()
        let expectedPagination = `Displaying 1 to 10 of ${arrayExpectedResult.length}`
        assert.equal(currentPagination, expectedPagination)

        //Get name of computers on site
        let arrayActualResult = [];
        let theLength = $$('//tbody/tr/td/a').length;
        for(let i = 0; i < theLength; i++) {
            arrayActualResult.push($$('//tbody/tr/td/a')[i].getText());
        }
        //Navigate to the next page and keep pushing the name of computer
        HomePage.clickOnNextPaginationLink();
        theLength = $$('//tbody/tr/td/a').length;
        for(let i = 0; i < theLength; i++) {
            arrayActualResult.push($$('//tbody/tr/td/a')[i].getText());
        }
        
        assert.equal(arrayActualResult.toString(), (arrayExpectedResult.sort()).toString())

        //Delete data after executing test
        let deleteComputerFlow = new DeleteComputerFlow();
        deleteComputerFlow.openHomePage();
        for(let i = 0, theLength = testData.length; i < theLength; i++) {
            deleteComputerFlow
                .goToEditPage(testData[i].name)
                .deleteComputer();
        }
    });
});