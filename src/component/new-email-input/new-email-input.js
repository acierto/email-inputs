import './new-email-input.less';
import {dataTypes} from '../data-types';
import {onAddEmailListener, onCommaListener, onEnterListener} from './email-input-add-listener';

export const NewEmailInput = (htmlNode, storage, options = {}) => {
    const placeholder = options.placeholder || 'add more people...';

    const createKeyPressListener = (element, listeners) => {
        const condition = (event) => [onCommaListener, onEnterListener]
            .map((listener) => listener(event))
            .reduce((acc, valid) => acc || valid, false);

        return onAddEmailListener(element, storage, condition, listeners);
    };

    const createBlurListener = (element) => onAddEmailListener(element, storage);

    const render = () => `<input 
                                class="new-email-input"
                                data-type="${dataTypes.ADD_EMAIL_INPUT}"
                                name="new-email-input" 
                                placeholder="${placeholder}"/>`;

    const registerListeners = () => {
        const element = htmlNode.querySelector('.new-email-input');
        const blurListener = createBlurListener(element);
        const keyPressListener = createKeyPressListener(element, [{
            listener: blurListener,
            type: 'blur'
        }]);

        element.addEventListener('keypress', keyPressListener, false);
        // element.addEventListener('blur', blurListener, false);
    };

    return {
        registerListeners,
        render
    };
};
