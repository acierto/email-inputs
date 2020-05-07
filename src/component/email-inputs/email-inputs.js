import {validateAll} from '../services/validator';
import {Storage} from '../storage';
import {EmailInput} from '../email-input/email-input';
import {Observable} from '../observable';
import {NewEmailInput} from '../new-email-input/new-email-input';
import {emailsToEmailInputs} from '../services/email-input-converter';
import {onClickListener} from './on-click-listener';

import './email-inputs.less';

export const EmailInputs = (htmlNode) => {
    const observer = Observable();
    const storage = Storage(observer);

    const api = {
        getAllEmails: () => storage.getAll().map((email) => email.email),
        replaceAll: (emails) => storage.replaceAll(validateAll(emails)),
        subscribe: (subscriber) => observer.subscribe(subscriber)
    };

    const render = (emailInputs = []) => {
        const inputElements = emailInputs.map((input) => EmailInput(input).render()).join('');
        const newInputElement = NewEmailInput().render();
        const output = `<div class="email-inputs">${inputElements}${newInputElement}</div>`;
        // TODO: remove listeners as well
        if (htmlNode) { // TODO: add check here!
            htmlNode.innerHTML = output;
            htmlNode.addEventListener('click', onClickListener(storage));
        }
    };

    observer.subscribe(render);
    storage.replaceAll(emailsToEmailInputs(['john@miro.com', 'invalid.email',
        'mike@miro.com', 'alex@miro.com', 'paul@miro.com', 'martijn@miro.com']));

    return api;
};
