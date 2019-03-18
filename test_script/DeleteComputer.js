const assert = require('assert');

import AddComputerFlow from '../test_flow/AddComputerFlow';
import DeleteComputerFlow from '../test_flow/DeleteComputerFlow';

import {CommonFunction} from '../utils/CommonFunction';

describe('Delete computer', () => {
    before('Make sure testing site is clear', () => {
        let theTable = $('//tbody');
        assert.equal(false, theTable.isExisting());
    });

    it('UAC_H_0011 It should edit computer successfully', () => {
        //Data test
        let computerPreparation = {
            "name": CommonFunction.generateText(8),
            "introducedDate": "2019-05-13",
            "discontinuedDate": "2030-05-14",
            "company": CommonFunction.randomCompany()
        };
        
        //Prepare a computer
        let addComputerFlow = new AddComputerFlow();
        addComputerFlow
            .openHomePage()
            .goToAddPage()
            .addComputer(computerPreparation);

        //Execute steps
        let deleteComputerFlow = new DeleteComputerFlow();
        deleteComputerFlow
            .openHomePage()
            .goToEditPage(computerPreparation.name)
            .deleteComputer();

        //Verify the record of computer is deleted on table
        let theTable = $('//tbody');
        assert.equal(false, theTable.isExisting());
    });
});