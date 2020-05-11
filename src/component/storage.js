import {emailToEmailInput} from './services/email-input-converter';
import {createNotification} from './services/notification';

export const Storage = (observer, validators) => {
    let inputs = [];

    const updateInputs = (newInputs) => {
        const prevInputs = [...inputs];
        inputs = newInputs;
        observer.notify(createNotification(prevInputs, newInputs));
    };

    return {
        addEmail: (email) => {
            const prevInputs = [...inputs];
            const input = emailToEmailInput(validators)(email, prevInputs);
            inputs.push(input);
            observer.notify(createNotification(prevInputs, inputs));
        },
        getAllEmails: () => inputs,
        removeById: (id) => {
            updateInputs(inputs.filter((input) => input.id !== id));
        },
        replaceAllEmails: (emails = []) => {
            const newInputs = emails.map((email) => emailToEmailInput(validators)(email, [...inputs]));
            updateInputs(newInputs);
        }
    };
};
