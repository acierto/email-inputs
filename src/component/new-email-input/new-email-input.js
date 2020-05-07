import './new-email-input.less';
import {dataTypes} from '../data-types';

export const NewEmailInput = (options = {}) => {
    const placeholder = options.placeholder || 'add more people...';

    const render = () => `<input 
                                class="new-email-input"
                                data-type="${dataTypes.ADD_EMAIL_INPUT}"
                                name="new-email-input" 
                                placeholder="${placeholder}"/>`;

    return {render};
};
