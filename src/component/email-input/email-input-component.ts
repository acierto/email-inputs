import {dataTypes} from '../data-types';
import {EmailInput} from './email-input-type';
import {EmailInputOptions} from './email-input-options-type';

import styles from './email-input-component.less';

export const EmailInputComponent = (input: EmailInput, options: EmailInputOptions) => {
    const innerHtml = () => {
        const {email, id} = input;
        const {showTitle} = options;

        const displayEmailComponent = showTitle ?
            `<span class=${styles.email} title="${email}">${email}</span>` :
            `<span class=${styles.email}>${email}</span>`;

        return `${displayEmailComponent}
                <span class=${styles.removeEmail}>
                    <i class=${styles.removeIcon} data-id="${id}" data-type="${dataTypes.REMOVE_EMAIL_INPUT}"></i>
                </span>`;
    };

    const element = () => {
        const {id, valid} = input;
        const div = document.createElement('span');
        div.className = `${styles.emailInput} ${valid ? styles.valid : styles.invalid}`;
        div.innerHTML = innerHtml();
        div.setAttribute('data-id', id);
        return div;
    };

    return element();
};
