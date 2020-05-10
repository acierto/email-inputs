import {isDefined, isNotBlank} from '../services/common-service';

export const createInputListeners = (element, storage) => {
    const toMails = (value) => isDefined(value) ? value.split(',') : [];

    const addEmails = (value) => {
        toMails(value).forEach((email) => {
            const trimmedEmail = email.trim();
            if (isNotBlank(trimmedEmail)) {
                storage.addEmail(trimmedEmail);
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
        const getValue = () => {
            const {clipboardData} = event.originalEvent || event;
            if (isDefined(clipboardData)) {
                return clipboardData.getData('text/plain');
            }
            return window.clipboardData.getData('text');
        };

        const value = getValue();
        addEmails(value);
        event.preventDefault();
    };

    return {
        blurListener,
        keyPressListener,
        pasteListener
    };
};
