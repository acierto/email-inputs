import {isUndefinedOrEmpty} from '../services/common-service';

export const createInputListeners = (element, storage) => {
    const toMails = (value) => value.split(',');

    const addEmails = (value) => {
        toMails(value).forEach((email) => {
            if (!isUndefinedOrEmpty(email)) {
                storage.addEmail(email);
                element.value = '';
            }
        });
    };

    const blurListener = (event) => addEmails(event.target.value);

    const keyPressListener = (event) => {
        const {value} = event.target;
        switch (event.key) {
            case 'Enter':
                addEmails(value);
                break;
            case ',':
                addEmails(value);
                event.preventDefault();
                break;
        }
    };

    const pasteListener = (event) => {
        const value = (event.originalEvent || event).clipboardData.getData('text/plain');
        addEmails(value);
        event.preventDefault();
    };

    return {
        blurListener,
        keyPressListener,
        pasteListener
    };
};
