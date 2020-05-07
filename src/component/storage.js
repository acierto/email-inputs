import {emailToEmailInput} from './services/email-input-converter';

export const Storage = (observer) => {
    let inputs = [];

    const updateInputs = (newInputs) => {
        inputs = newInputs;
        observer.notify(newInputs);
    };

    return {
        addEmail: (email) => {
            const input = emailToEmailInput(email);
            inputs.push(input);
            observer.notify(inputs);
        },
        getAll: () => inputs,
        removeById: (id) => {
            updateInputs(inputs.filter((input) => input.id !== id));
        },
        replaceAll: (emails) => {
            const newInputs = emails.map(emailToEmailInput);
            updateInputs(newInputs);
        }
    };
};
