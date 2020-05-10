import {emailToEmailInput} from './services/email-input-converter';
import {createNotification} from './services/notification';

export const Storage = (observer) => {
    let inputs = [];

    const updateInputs = (newInputs) => {
        const prevInputs = [...inputs];
        inputs = newInputs;
        observer.notify(createNotification(prevInputs, newInputs));
    };

    return {
        addEmail: (email) => {
            const prevInputs = [...inputs];
            const input = emailToEmailInput(email);
            inputs.push(input);
            observer.notify(createNotification(prevInputs, inputs));
        },
        getAllEmails: () => inputs,
        removeById: (id) => {
            updateInputs(inputs.filter((input) => input.id !== id));
        },
        replaceAllEmails: (emails = []) => {
            const newInputs = emails.map(emailToEmailInput);
            updateInputs(newInputs);
        }
    };
};
