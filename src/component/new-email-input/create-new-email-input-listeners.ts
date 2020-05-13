import {isDefined, isNotBlank} from '../services/common-service';
import {InputListeners} from './input-listerners-type';
import {Storage} from '../storage-type';
import {getInputValue} from '~/component/services/event-service';

export const createInputListeners = (element: HTMLInputElement, storage: Storage): InputListeners => {
    const toMails = (value: string) => isDefined(value) ? value.split(',') : [];

    const addEmails = (value: string) => {
        toMails(value).forEach((email: string) => {
            const trimmedEmail = email.trim();
            if (isNotBlank(trimmedEmail)) {
                storage.addEmail(trimmedEmail);
                element.value = '';
            }
        });
    };

    const blurListener = (event: FocusEvent): void => {
        addEmails(getInputValue(event));
    };

    const keyPressListener = (event: KeyboardEvent): void => {
        const value = getInputValue(event);
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
            // @ts-ignore TODO:
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
