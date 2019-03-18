import {HandleElement} from '../utils/HandleElement';

class HomePage {
    get url() {
        return browser.getUrl();
    }

    get title() {
        return HandleElement.findElement('/html/head/title');
    }

    get h1ComputerFound() {
        return HandleElement.findElement('//section/h1');
    }

    get alertMessage() {
        return HandleElement.findElement('//div[@class="alert-message warning"]');
    }

    get addButton() {
        return HandleElement.findElement('#add');
    }

    clickOnAddButton() {
        this.addButton.click();
        return AddPage;
    }

    get filterTextBox() {
        return HandleElement.findElement('#searchbox');
    }

    inputFilterTextBox(filterValue) {
        this.filterTextBox.addValue(filterValue);
        return this;
    }

    get filterButton() {
        return HandleElement.findElement('#searchsubmit');
    }

    clickOnFilterButton() {
        this.filterButton.click();
        return this;
    }

    get tableItem() {
        return HandleElement.findElement('//tbody');
    }

    get previousPaginationLink() {
        return HandleElement.findElement('//li[@class="prev"]/a');
    }

    clickOnPreviousPaginaionLink() {
        this.previousPaginationLink.click();
        return this;
    }

    get currentPaginationLink() {
        return HandleElement.findElement('//li[@class="current"]');
    }

    get nextPaginationLink() {
        return HandleElement.findElement('//li[@class="next"]/a');
    }

    clickOnNextPaginationLink() {
        this.nextPaginationLink.click();
        return this;
    }
}

export default new HomePage();

import AddPage from './AddPage';

