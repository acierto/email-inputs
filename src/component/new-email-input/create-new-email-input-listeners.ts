import {isDefined, isNotBlank} from '../services/common-service';
import {InputListeners} from './input-listerners-type';
import {Storage} from '../storage-type';

export const createInputListeners = (element: HTMLInputElement, storage: Storage): InputListeners => {
    const toMails = (value: string) => isDefined(value) ? value.split(',') : [];

    const addEmails = (value: string) => {
        const emails = toMails(value)
            .map((email: string) => email.trim())
            .filter((email: string) => isNotBlank(email));

        if (emails.length > 0) {
            storage.addEmails(emails);
            element.value = '';
        }
    };

    const blurListener = (event: FocusEvent): void => {
        addEmails((event.target as HTMLInputElement).value);
    };

    const keyPressListener = (event: KeyboardEvent): void => {
        const {value} = (event.target as HTMLInputElement);
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

    const pasteListener = (event: ClipboardEvent): void => {
        const getValue = () => {
            const {clipboardData} = event;
            if (isDefined(clipboardData)) {
                return clipboardData.getData('text/plain');
            }
            return (window as any).clipboardData.getData('text');
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
