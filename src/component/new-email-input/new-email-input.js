import './new-email-input.less';
import {dataTypes} from '../data-types';
import {createBlurListener, createKeyPressListener} from './create-new-email-input-listeners';

export const NewEmailInput = (htmlNode, storage, options = {}) => {
    const placeholder = options.placeholder || 'add more people...';

    const getRef = () => htmlNode.querySelector('.new-email-input');

    const render = () => `<input 
                                class="new-email-input"
                                data-type="${dataTypes.ADD_EMAIL_INPUT}"
                                name="new-email-input" 
                                placeholder="${placeholder}"/>`;

    const registerListeners = () => {
        const element = getRef();
        const blurListener = createBlurListener(element, storage);
        const keyPressListener = createKeyPressListener(element, storage);

        element.addEventListener('keypress', keyPressListener);
        element.addEventListener('blur', blurListener);
    };

    return {
        registerListeners,
        render
    };
};
