import EditPage from '../page_object/EditPage';
import {HandleElement} from '../utils/HandleElement';
class LoginFlow {

    openHomePage() {
        browser.url("");
        return this;
    }

    goToEditPage(nameOfComputer) {
        let elementOfComputerName = HandleElement.findElement(`//tbody//a[text()="${nameOfComputer}"]`);
        elementOfComputerName.click();
        return this;
    }

    deleteComputer() {
        EditPage.clickOnDeleteButton();
    }
}

export default LoginFlow;