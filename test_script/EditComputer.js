const assert = require('assert');

import EditPage from '../page_object/EditPage';
import HomePage from '../page_object/HomePage';

import AddComputerFlow from '../test_flow/AddComputerFlow';
import EditComputerFlow from '../test_flow/EditComputerFlow';
import DeleteComputerFlow from '../test_flow/DeleteComputerFlow';

import testingData from '../resources/test_data/EditComputerData';

import {CommonFunction} from '../utils/CommonFunction';
import {HandleElement} from '../utils/HandleElement';

describe('Edit computer', () => {
    let computerPreparation = {
        "name": CommonFunction.generateText(8),
        "introducedDate": "2019-05-13",
        "discontinuedDate": "2030-05-14",
        "company": CommonFunction.randomCompany()
    };
    before('Make sure testing site is clear', () => {
        let theTable = $('//tbody');
        assert.equal(false, theTable.isExisting());
    });
    beforeEach('Add a computer', () => {
        let addComputerFlow = new AddComputerFlow();
        addComputerFlow
            .openHomePage()
            .goToAddPage()
            .addComputer(computerPreparation)
    })

    it('UAC_H_0011 It should edit computer successfully', () => {
        //Get data test
        let testData = testingData.get('UAC_H_0011').info;

        //Execute steps
        let editComputerFlow = new EditComputerFlow();
        editComputerFlow
            .openHomePage()
            .goToEditPage(computerPreparation.name)
            .editComputer(testData);

        //Check message on home page
        let actualMessage  = HomePage.alertMessage.getText();
        let expectedMessage = `Done! Computer ${testData.name} has been updated`;
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
    it('UAC_H_0012 It should edit computer successfully', () => {
        //Get data test
        let testData = testingData.get('UAC_H_0012').info;

        //Execute steps
        let editComputerFlow = new EditComputerFlow();
        editComputerFlow
            .openHomePage()
            .goToEditPage(computerPreparation.name)
            .editComputer(testData);

        //Check message on home page
        let actualMessage  = HomePage.alertMessage.getText();
        let expectedMessage = `Done! Computer ${testData.name} has been updated`;
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
    it('UAC_H_0014 It should cancel the action of updating a computer', () => {
        //Get data test
        let testData = testingData.get('UAC_H_0014').info;

        //Execute steps
        let editComputerFlow = new EditComputerFlow()
        editComputerFlow
            .openHomePage()
            .goToEditPage(computerPreparation.name);
        EditPage
            .inputOnName(testData.name)
            .inputOnIntroducedDate(testData.introducedDate)
            .inputOnDiscontinuedDate(testData.discontinuedDate)
            .selectCompany(testData.company)
            .clickOnCancelButton();

        //Verify that message does not exist
        let actualMessage  = $('//div[@class="alert-message warning"]');
        assert.equal(false, actualMessage.isExisting());

        //Verify that record of computer does not update on table
        let actualComputerName = HandleElement.findElement('//tbody/tr/td/a').getText();
        let actualIntroducedDate = HandleElement.findElement('//tbody/tr[1]/td[2]').getText();
        let actualDiscontrinuedDate = HandleElement.findElement('//tbody/tr[1]/td[3]').getText();
        let actualCompany = HandleElement.findElement('//tbody/tr[1]/td[4]').getText();
        assert.equal(actualComputerName, computerPreparation.name);
        assert.equal(actualIntroducedDate, CommonFunction.formatDate(computerPreparation.introducedDate));
        assert.equal(actualDiscontrinuedDate, CommonFunction.formatDate(computerPreparation.discontinuedDate));
        assert.equal(actualCompany, computerPreparation.company);

        //Delete data after executing test
        let deleteComputerFlow = new DeleteComputerFlow();
        deleteComputerFlow
            .openHomePage()
            .goToEditPage(computerPreparation.name)
            .deleteComputer();
    });
    it('UAC_U_0015 Error should happen when input blank to [Computer Name]', () => {
        //Execute steps
        let editComputerFlow = new EditComputerFlow();
        editComputerFlow
            .openHomePage()
            .goToEditPage(computerPreparation.name)
            .editComputer({})

        //Verify error happen
        let divError = HandleElement.findElement('//label[@for="name"]/..');
        let actualClassOfDiv = "clearfix error";
        let expectedClassOfDiv = divError.getAttribute('class');
        assert.equal(actualClassOfDiv, expectedClassOfDiv)
        EditPage.clickOnCancelButton()

        //Verify that record of computer does not update on table
        let actualComputerName = HandleElement.findElement('//tbody/tr/td/a').getText();
        let actualIntroducedDate = HandleElement.findElement('//tbody/tr[1]/td[2]').getText();
        let actualDiscontrinuedDate = HandleElement.findElement('//tbody/tr[1]/td[3]').getText();
        let actualCompany = HandleElement.findElement('//tbody/tr[1]/td[4]').getText();
        assert.equal(actualComputerName, computerPreparation.name);
        assert.equal(actualIntroducedDate, CommonFunction.formatDate(computerPreparation.introducedDate));
        assert.equal(actualDiscontrinuedDate, CommonFunction.formatDate(computerPreparation.discontinuedDate));
        assert.equal(actualCompany, computerPreparation.company);

        //Delete data after executing test
        let deleteComputerFlow = new DeleteComputerFlow();
        deleteComputerFlow
            .openHomePage()
            .goToEditPage(computerPreparation.name)
            .deleteComputer();
    })
});