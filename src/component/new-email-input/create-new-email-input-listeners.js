const addEmail = (element, storage, event) => {
    const email = event.target.value;
    if (email !== '') {
        storage.addEmail(email);
        element.value = '';
    }
};

export const createBlurListener = (element, storage) => (event) => {
    addEmail(element, storage, event);
};

export const createKeyPressListener = (element, storage) => (event) => {
    switch (event.key) {
        case 'Enter':
            addEmail(element, storage, event);
            break;
        case ',':
            addEmail(element, storage, event);
            event.preventDefault();
            break;
    }
};
