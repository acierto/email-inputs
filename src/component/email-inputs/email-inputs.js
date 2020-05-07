import {testDataList2} from '../data-list';
import {Storage} from '../storage';
import {EmailInput} from '../email-input/email-input';
import {Observable} from '../observable';
import {NewEmailInput} from '../new-email-input/new-email-input';
import {onRemoveEmailListener} from '../email-input/email-input-remove-listener';

import './email-inputs.less';

export const EmailInputs = (rootNode) => {
    const observer = Observable();
    const storage = Storage(observer);

    const api = {
        getAllEmails: () => storage.getAll(),
        replaceAll: (emails) => storage.replaceAll(emails),
        subscribe: (subscriber) => observer.subscribe(subscriber)
    };

    const render = (emailInputs = []) => {
        const inputElements = emailInputs.map((input) => EmailInput(input).render()).join('');
        const newInputElement = NewEmailInput(rootNode, storage);
        const output = `<div class="email-inputs">
                            <div class="email-container">
                                ${inputElements}${newInputElement.render()}
                            </div>
                        </div>`;

        if (rootNode) {
            rootNode.innerHTML = output; // TODO: change implementation
            newInputElement.registerListeners();
            newInputElement.focus();
        } else {
            console.warn('The root element for "email-inputs" has not found.');
        }
    };

    observer.subscribe(render);
    storage.replaceAll(testDataList2);

    rootNode.addEventListener('click', onRemoveEmailListener(storage));

    return api;
};
