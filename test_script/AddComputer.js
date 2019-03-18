const assert = require('assert');

import AddPage from '../page_object/AddPage';
import HomePage from '../page_object/HomePage';

import AddComputerFlow from '../test_flow/AddComputerFlow';
import DeleteComputerFlow from '../test_flow/DeleteComputerFlow';

import testingData from '../resources/test_data/AddComputerData'

import {CommonFunction} from '../utils/CommonFunction';
import {HandleElement} from '../utils/HandleElement';

describe('Add computer', () => {
    before('Make sure testing site is clear', () => {
        let theTable = $('//tbody');
        assert.equal(false, theTable.isExisting());
    });
    it('ANC_H_0001 It should add computer successfully', () => {
        //Get data test
        let testData = testingData.get('ANC_H_0001').info;

        //Execute steps
        let addComputerFlow = new AddComputerFlow();
        addComputerFlow
            .openHomePage()
            .goToAddPage()
            .addComputer(testData);

        //Check message on home page
        let actualMessage  = HomePage.alertMessage.getText();
        let expectedMessage = `Done! Computer ${testData.name} has been created`;
        assert.equal(actualMessage, expectedMessage);

        //Check item on table
        let actualComputerName = HandleElement.findElement('//tbody/tr/td/a').getText();
        let actualIntroducedDate = HandleElement.findElement('//tbody/tr[1]/td[2]').getText();
        let actualDiscontrinuedDate = HandleElement.findElement('//tbody/tr[1]/td[3]').getText();
        let actualCompany = HandleElement.findElement('//tbody/tr[1]/td[4]').getText();
        assert.equal(actualComputerName, testData.name);
        assert.equal(actualIntroducedDate, CommonFunction.formatDate(testData.introducedDate));
        assert.equal(actualDiscontrinuedDate, CommonFunction.formatDate(testData.discontinuedDate));
        assert.equal(actualCompany, testData.company);

        //Delete data after executing test
        let deleteComputerFlow = new DeleteComputerFlow();
        deleteComputerFlow
            .openHomePage()
            .goToEditPage(testData.name)
            .deleteComputer();
    });
    it('ANC_H_0002 It should add computer successfully', () => {
        //Get data test
        let testData = testingData.get('ANC_H_0002').info;

        //Execute steps
        let addComputerFlow = new AddComputerFlow();
        addComputerFlow
            .openHomePage()
            .goToAddPage()
            .addComputer(testData);

        //Check message on home page
        let actualMessage  = HomePage.alertMessage.getText();
        let expectedMessage = `Done! Computer ${testData.name} has been created`;
        assert.equal(actualMessage, expectedMessage);

        //Check item on table
        let actualComputerName = HandleElement.findElement('//tbody/tr/td/a').getText();
        let actualIntroducedDate = HandleElement.findElement('//tbody/tr[1]/td[2]').getText();
        let actualDiscontrinuedDate = HandleElement.findElement('//tbody/tr[1]/td[3]').getText();
        let actualCompany = HandleElement.findElement('//tbody/tr[1]/td[4]').getText();
        assert.equal(actualComputerName, testData.name);
        assert.equal(actualIntroducedDate, "-");
        assert.equal(actualDiscontrinuedDate, "-");
        assert.equal(actualCompany, "-");

        //Delete data after executing test
        let deleteComputerFlow = new DeleteComputerFlow();
        deleteComputerFlow
            .openHomePage()
            .goToEditPage(testData.name)
            .deleteComputer();
    });
    it('ANC_H_0004 It should cancel the action of adding a computer', () => {
        //Get data test
        let testData = testingData.get('ANC_H_0004').info;

        //Execute steps
        let addComputerFlow = new AddComputerFlow();
        addComputerFlow
            .openHomePage()
            .goToAddPage();
        AddPage
            .inputOnName(testData.name)
            .inputOnIntroducedDate(testData.introducedDate)
            .inputOnDiscontinuedDate(testData.discontinuedDate)
            .selectCompany(testData.company)
            .clickOnCancelButton();

        //Verify that message does not exist
        let actualMessage  = $('//div[@class="alert-message warning"]');
        assert.equal(false, actualMessage.isExisting());

        //Verify that record of computer does not exist on table
        let actualTable = $('//tbody');
        assert.equal(false, actualTable.isExisting());
    });
    it('ANC_H_0005 Error should happen when input blank to [Computer Name]', () => {
        //Execute steps
        let addComputerFlow = new AddComputerFlow();
        addComputerFlow
            .openHomePage()
            .goToAddPage()
            .addComputer({});
        //Verify error happen
        let divError = HandleElement.findElement('//label[@for="name"]/..');
        let actualClassOfDiv = "clearfix error";
        let expectedClassOfDiv = divError.getAttribute('class');
        assert.equal(actualClassOfDiv, expectedClassOfDiv)
    });
});