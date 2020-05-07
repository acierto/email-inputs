import {testDataList} from '../data-list';
import {validateAll} from '../services/validator';
import {Storage} from '../storage';
import {EmailInput} from '../email-input/email-input';
import {Observable} from '../observable';
import {NewEmailInput} from '../new-email-input/new-email-input';
import {emailsToEmailInputs} from '../services/email-input-converter';
import {onRemoveEmailListener} from '../email-input/email-input-remove-listener';

import './email-inputs.less';

export const EmailInputs = (rootNode) => {
    const observer = Observable();
    const storage = Storage(observer);

    const api = {
        getAllEmails: () => storage.getAll().map((email) => email.email),
        replaceAll: (emails) => storage.replaceAll(validateAll(emails)),
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

        if (rootNode) { // TODO: add check here!
            rootNode.innerHTML = output;
            newInputElement.registerListeners();
        }
    };

    observer.subscribe(render);
    storage.replaceAll(emailsToEmailInputs(testDataList));

    rootNode.addEventListener('click', onRemoveEmailListener(storage)); // TODO: revise it

    return api;
};
