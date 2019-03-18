import AddPage from "../page_object/AddPage";
import HomePage from '../page_object/HomePage';

class FilterAndSortFlow {

    openHomePage() {
        browser.url("");
        return this;
    }

    filter(filterValue) {
        HomePage
            .inputFilterTextBox(filterValue)
            .clickOnFilterButton();
    }
}

export default FilterAndSortFlow;