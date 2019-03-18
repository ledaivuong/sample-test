import EditPage from '../page_object/EditPage';
import {HandleElement} from '../utils/HandleElement';

class Edit {

    openHomePage() {
        browser.url("");
        return this;
    }

    goToEditPage(nameOfComputer) {
        let elementOfComputerName = HandleElement.findElement(`//tbody//a[text()="${nameOfComputer}"]`);
        elementOfComputerName.click();
        return this;
    }

    editComputer({name = "", introducedDate = "", discontinuedDate = "", company = "-- Choose a company --"}) {
        EditPage
            .inputOnName(name)
            .inputOnIntroducedDate(introducedDate)
            .inputOnDiscontinuedDate(discontinuedDate)
            .selectCompany(company)
            .clickOnSubmitButton();
    }
}

export default Edit;;