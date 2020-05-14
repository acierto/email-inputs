import {EmailsStorage} from '../emails-storage';
import {EmailInputComponent} from '../email-input/email-input-component';
import {Observer} from '../observer';
import {NewEmailInputComponent} from '../new-email-input/new-email-input-component';
import {onRemoveEmailListener} from '../email-input/email-input-remove-listener';
import {EmailsInputOptions} from './emails-input-options-type';
import {EmailsInputApi} from './emails-input-api-type';

import styles from './emails-input-component.less';
import emailInputStyles from '../email-input/email-input-component.less';

export const EmailsInputComponent = (rootComponent, options: EmailsInputOptions = {}): EmailsInputApi => {
    const observer = Observer();
    const storage = EmailsStorage(observer, options.validators);
    let emailContainer: HTMLDivElement;

    const api = {
        getAllEmails: () => storage.getAllEmails(),
        replaceAll: (emails) => storage.replaceAllEmails(emails),
        subscribe: (subscriber) => observer.subscribe(subscriber)
    };

    const appendToRootComponent = () => {
        if (!rootComponent) {
            console.warn('The root element for "emails-input" has not found.');
            return;
        }

        const newInputElement = NewEmailInputComponent(storage, {placeholder: options.placeholder});

        emailContainer = document.createElement("div");
        emailContainer.className = styles.emailContainer;
        emailContainer.appendChild(newInputElement);
        emailContainer.addEventListener('click', onRemoveEmailListener(storage));

        const emailsInput = document.createElement("div");
        emailsInput.className = styles.emailsInput;
        emailsInput.appendChild(emailContainer);

        rootComponent.appendChild(emailsInput);

        observer.subscribe(rerender);
    };

    const rerender = ({added, removed}) => {
        for (const input of added) {
            const inputOptions = {showTitle: options.showTitle};
            emailContainer.insertBefore(EmailInputComponent(input, inputOptions),
                emailContainer.childNodes[emailContainer.children.length - 1]);
        }

        for (const id of removed) {
            const child = emailContainer.querySelector(`.${emailInputStyles.emailInput}[data-id="${id}"]`);
            emailContainer.removeChild(child);
        }
    };

    appendToRootComponent();

    return api;
};