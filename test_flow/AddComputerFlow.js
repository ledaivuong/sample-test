import AddPage from "../page_object/AddPage";
import HomePage from '../page_object/HomePage';

class AddComputerFlow {

    openHomePage() {
        browser.url("");
        return this;
    }

    goToAddPage() {
        HomePage.clickOnAddButton();
        return this;
    }

    addComputer({name = "", introducedDate = "", discontinuedDate = "", company = "-- Choose a company --"}) {
        AddPage
            .inputOnName(name)
            .inputOnIntroducedDate(introducedDate)
            .inputOnDiscontinuedDate(discontinuedDate)
            .selectCompany(company)
            .clickOnSubmitButton();
    }
}

export default AddComputerFlow;