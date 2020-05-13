import {EmailsStorage} from '../emails-storage';
import {EmailInputComponent} from '../email-input/email-input-component';
import {Observer} from '../observer';
import {NewEmailInput} from '../new-email-input/new-email-input';
import {onRemoveEmailListener} from '../email-input/email-input-remove-listener';

import emailInputStyles from '../email-input/email-input-component.less';
import styles from './emails-input.less';
import {EmailsInputOptions} from './emails-input-options-type';
import {EmailsInputApi} from './emails-input-api-type';

export const EmailsInput = (rootComponent, options: EmailsInputOptions = {}): EmailsInputApi => {
    const observer = Observer();
    const storage = EmailsStorage(observer, options.validators);

    const api = {
        getAllEmails: () => storage.getAllEmails(),
        replaceAll: (emails) => storage.replaceAllEmails(emails),
        subscribe: (subscriber) => observer.subscribe(subscriber)
    };

    const render = () => {
        const newInputElement = NewEmailInput(rootComponent, storage, {placeholder: options.placeholder});
        const output = `<div class="${styles.emailsInput}">
                            <div class="${styles.emailContainer}">
                                ${newInputElement.render()}
                            </div>
                        </div>`;

        if (rootComponent) {
            rootComponent.innerHTML = output;
            newInputElement.registerListeners();
        } else {
            console.warn('The root element for "emails-input" has not found.');
        }
    };

    const rerender = ({added, removed}) => {
        const ref = rootComponent.querySelector(`.${styles.emailContainer}`);

        for (const input of added) {
            const inputOptions = {showTitle: options.showTitle};
            ref.insertBefore(EmailInputComponent(input, inputOptions), ref.childNodes[ref.children.length - 1]);
        }

        for (const id of removed) {
            const child = ref.querySelector(`.${emailInputStyles.emailInput}[data-id="${id}"]`);
            ref.removeChild(child);
        }
    };

    render();

    if (rootComponent) {
        observer.subscribe(rerender);
        const container = rootComponent.querySelector(`.${styles.emailContainer}`);
        container.addEventListener('click', onRemoveEmailListener(storage));
    }

    return api;
};
