import {EmailInput} from './email-input-type';
import {EmailInputOptions} from './email-input-options-type';

import styles from './email-input-component.less';

export const EmailInputComponent = (input: EmailInput, options: EmailInputOptions = {}) => {

    const createCrossButton = (id) => {
        const crossButton = document.createElement('button');
        crossButton.className = styles.removeEmail;
        crossButton.dataset.id = id;
        return crossButton;
    };

    const createEmailText = (email, showTitle): HTMLSpanElement => {
        const emailText = document.createElement('span');
        emailText.className = styles.email;
        emailText.textContent = email;
        if (showTitle) {
            emailText.title = email;
        }
        return emailText;
    }

    const create = () => {
        const {id, email, valid} = input;
        const {showTitle} = options;
        const emailInputComponent = document.createElement('span');
        emailInputComponent.className = `${styles.emailInput} ${valid ? styles.valid : styles.invalid}`;
        emailInputComponent.setAttribute('data-id', id);
        emailInputComponent.appendChild(createEmailText(email, showTitle));
        emailInputComponent.appendChild(createCrossButton(id));
        return emailInputComponent;
    };

    return create();
};
