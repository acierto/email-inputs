import {emailToEmailInput} from './services/email-input-converter';
import {createNotification} from './services/notification';

import {Observable} from './observable-type';
import {Validator} from './validator-type';
import {EmailInput} from './email-input/email-input-type';
import {Storage} from './storage-type';

export const EmailsStorage = (observer: Observable, validators: Validator[]): Storage => {
    let inputs = [];

    const updateInputs = (newInputs: EmailInput[]) => {
        const prevInputs = [...inputs];
        inputs = newInputs;
        observer.notify(createNotification(prevInputs, newInputs));
    };

    return {
        addEmail: (email: string): void => {
            const prevInputs = [...inputs];
            const input = emailToEmailInput(validators)(email, prevInputs);
            inputs.push(input);
            observer.notify(createNotification(prevInputs, inputs));
        },
        getAllEmails: (): EmailInput[] => inputs,
        removeById: (id: string): void => {
            updateInputs(inputs.filter((input) => input.id !== id));
        },
        replaceAllEmails: (emails: string[] = []): void => {
            const newInputs = emails.map((email) => emailToEmailInput(validators)(email, [...inputs]));
            updateInputs(newInputs);
        }
    };
};
