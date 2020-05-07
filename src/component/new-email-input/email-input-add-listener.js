export const onEnterListener = (event) => event.key === 'Enter';  // TODO: check IE 11
export const onCommaListener = (event) => event.key === ',';

export const onAddEmailListener = (element, storage, condition = () => true, listeners = []) => (event) => {
    const {target} = event;

    if (condition(event)) {
        listeners.forEach(({type, listener}) => {
            element.removeEventListener(type, listener, false);
        });

        const {value} = target;
        if (value !== '') {
            storage.addEmail(value);
        }
    }
};
