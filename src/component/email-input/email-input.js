import {dataTypes} from '../data-types';
import './email-input.less';

export const EmailInput = (input) => {
    const innerHtml = () => {
        const {email, id} = input;

        return `<span class="email">${email}</span>
                <span class="remove-email">
                    <i class="remove-icon" data-id="${id}" data-type="${dataTypes.REMOVE_EMAIL_INPUT}"></i>
                </span>`;
    };

    const element = () => {
        const {id, valid} = input;
        const div = document.createElement('span');
        div.className = `email-input ${valid ? 'valid' : 'invalid'}`;
        div.innerHTML = innerHtml();
        div.setAttribute('data-id', id);
        return div;
    };

    return element();
};
