const timeout = 30000;

export class HandleElement {

    static findElement(element) {
        let timeOutErrorMessage = `Can not find element ${element}`;
        $(element).waitForExist(
            timeout,
            false,
            timeOutErrorMessage
        );
        return $(element)
    }
}

