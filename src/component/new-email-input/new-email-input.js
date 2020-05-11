import {propOr} from '../services/common-service';
import {createInputListeners} from './create-new-email-input-listeners';
import styles from './new-email-input.less';

export const NewEmailInput = (rootComponent, storage, options = {}) => {
    const placeholder = propOr('placeholder', 'add more people...', options);

    const getRef = () => rootComponent.querySelector(`.${styles.newEmailInput}`);

    const render = () => `<input 
                                class="${styles.newEmailInput}"
                                placeholder="${placeholder}"/>`;

    const registerListeners = () => {
        const element = getRef();

        const {
            blurListener,
            keyPressListener,
            pasteListener
        } = createInputListeners(element, storage);

        element.addEventListener('blur', blurListener);
        element.addEventListener('keypress', keyPressListener);
        element.addEventListener('paste', pasteListener);
    };

    return {
        registerListeners,
        render
    };
};
