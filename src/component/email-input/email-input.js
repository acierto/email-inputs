import {dataTypes} from '../data-types';

import './email-input.less';

export const EmailInput = (input) => ({
    render() {
        const {email, id, valid} = input;
        const classNames = `email-input  ${valid ? 'valid' : 'invalid'}`;

        return `<span class="${classNames}">
                    <span class="email">${email}</span>
                    <a 
                        class="remove-email" 
                        href="#">
                        <i class="remove-icon" data-id="${id}" data-type="${dataTypes.REMOVE_EMAIL_INPUT}"/>
                    </a>
                </span>`;
    }
});
