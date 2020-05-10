import {Storage} from '../storage';
import {EmailInput} from '../email-input/email-input';
import {Observable} from '../observable';
import {NewEmailInput} from '../new-email-input/new-email-input';
import {onRemoveEmailListener} from '../email-input/email-input-remove-listener';

import './emails-input.less';

export const EmailsInput = (rootComponent, options = {}) => {
    const observer = Observable();
    const storage = Storage(observer);

    const api = {
        getAllEmails: () => storage.getAllEmails(),
        replaceAll: (emails) => storage.replaceAllEmails(emails),
        subscribe: (subscriber) => observer.subscribe(subscriber)
    };

    const render = () => {
        const newInputElement = NewEmailInput(rootComponent, storage, {placeholder: options.placeholder});
        const output = `<div class="email-inputs">
                            <div class="email-container">
                                ${newInputElement.render()}
                            </div>
                        </div>`;

        if (rootComponent) {
            rootComponent.innerHTML = output;
            newInputElement.registerListeners();
        } else {
            console.warn('The root element for "email-inputs" has not found.');
        }
    };

    const rerender = ({added, removed}) => {
        const ref = rootComponent.querySelector('.email-container');

        for (const input of added) {
            ref.insertBefore(EmailInput(input), ref.childNodes[ref.children.length - 1]);
        }

        for (const id of removed) {
            const child = ref.querySelector(`.email-input[data-id="${id}"]`);
            ref.removeChild(child);
        }
    };

    render();

    if (rootComponent) {
        observer.subscribe(rerender);
        rootComponent.addEventListener('click', onRemoveEmailListener(storage));
    }

    return api;
};
