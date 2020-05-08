import './new-email-input.less';
import {dataTypes} from '../data-types';
import {createInputListeners} from './create-new-email-input-listeners';

export const NewEmailInput = (htmlNode, storage, options = {}) => {
    const placeholder = options.placeholder || 'add more people...';

    const getRef = () => htmlNode.querySelector('.new-email-input');

    const render = () => `<input 
                                class="new-email-input"
                                data-type="${dataTypes.ADD_EMAIL_INPUT}"
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
