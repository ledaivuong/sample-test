import {HandleElement} from "../utils/HandleElement";

class AddPage {
    get url() {
        return browser.getUrl();
    }

    get title() {
        return HandleElement.findElement('/html/head/title');
    }

    get nameInput() {
        return HandleElement.findElement('#name');
    }

    inputOnName(value) {
        this.nameInput.addValue(value);
        return this;
    }

    get introducedDateInput() {
        return HandleElement.findElement('#introduced');
    }

    inputOnIntroducedDate(value) {
        this.introducedDateInput.addValue(value);
        return this;
    }

    get discontinuedDateInput() {
        return HandleElement.findElement('#discontinued');
    }

    inputOnDiscontinuedDate(value) {
        this.discontinuedDateInput.addValue(value);
        return this;
    }

    get companySelect() {
        return HandleElement.findElement('#company');
    }

    selectCompany(selectText) {
        this.companySelect.selectByVisibleText(selectText);
        return this;
    }

    get submitButton() {
        return HandleElement.findElement('//input[@type="submit"]');
    }

    clickOnSubmitButton() {
        this.submitButton.click();
        return HomePage;
    }

    get cancelButton() {
        return HandleElement.findElement('//a[text()="Cancel"]');
    }

    clickOnCancelButton() {
        this.cancelButton.click();
        return HomePage;
    }
}

export default new AddPage()

import HomePage from "./HomePage";
