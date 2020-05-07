export const Storage = (observer) => {
    let inputs = [{ // TODO: remove it
        email: 'john@miro.com',
        id: 1,
        valid: true
    }, {
        email: 'invalid.email',
        id: 2,
        valid: false
    }, {
        email: 'mike@miro.com',
        id: 3,
        valid: true
    }];

    const updateInputs = (newInputs) => {
        inputs = newInputs;
        observer.notify(newInputs);
    };

    return {
        addInput: (input) => {
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
