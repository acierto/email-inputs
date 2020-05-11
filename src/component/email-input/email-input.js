import {dataTypes} from '../data-types';
import styles from './email-input.less';

export const EmailInput = (input, {showTitle} = {}) => {
    const innerHtml = () => {
        const {email, id} = input;

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
