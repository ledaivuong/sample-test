import {HandleElement} from '../utils/HandleElement';

class EditPage {
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
        this.nameInput.clearValue();
        this.nameInput.addValue(value);
        return this;
    }

    get introducedDateInput() {
        return HandleElement.findElement('#introduced');
    }

    inputOnIntroducedDate(value) {
        this.introducedDateInput.clearValue();
        this.introducedDateInput.addValue(value);
        return this;
    }

    get discontinuedDateInput() {
        return HandleElement.findElement('#discontinued');
    }

    inputOnDiscontinuedDate(value) {
        this.discontinuedDateInput.clearValue();
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
        return HandleElement.findElement('//input[@value="Save this computer"]');
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

    get deleteButton() {
        return HandleElement.findElement('//input[@value="Delete this computer"]');
    }

    clickOnDeleteButton() {
        this.deleteButton.click();
        return HomePage;
    }
}

export default new EditPage();

import HomePage from "./HomePage";