import {emailToEmailInput} from './services/email-input-converter';

export const Storage = (observer) => {
    let inputs = [];

    const updateInputs = (newInputs) => {
        inputs = newInputs;
        observer.notify(newInputs);
    };

    return {
        addInput: (email) => {
            const input = emailToEmailInput(email);
            inputs.push(input);
            observer.notify(inputs);
        },
        getAll: () => inputs,
        removeInput: (id) => {
            updateInputs(inputs.filter((input) => input.id !== id));
        },
        removeInputs: () => updateInputs([]),
        replaceAll: (newInputs) => updateInputs(newInputs)
    };
};
