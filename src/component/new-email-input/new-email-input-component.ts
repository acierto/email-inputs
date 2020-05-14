import {propOr} from '../services/common-service';
import {createInputListeners} from './create-new-email-input-listeners';
import styles from './new-email-input-component.less';
import {Storage} from '../storage-type';

export const NewEmailInputComponent = (storage: Storage, options = {}) => {
    const placeholder = propOr('placeholder', 'add more people...', options);

    const create = () => {
        const component:HTMLInputElement = document.createElement("input");
        component.placeholder = placeholder;
        component.className = styles.newEmailInput;
        registerListeners(component);
        return component;
    };

    const registerListeners = (element: HTMLInputElement) => {
        const {
            blurListener,
            keyPressListener,
            pasteListener
        } = createInputListeners(element, storage);

        element.addEventListener('blur', blurListener);
        element.addEventListener('keypress', keyPressListener);
        element.addEventListener('paste', pasteListener);
    };

    return create();
};
