import {validateAll} from '../validator';
import {Storage} from '../storage';
import {EmailInput} from '../email-input/email-input';
import {Observable} from '../observable';
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
        const output = `<div class="container">${inputElements}</div>`;
        // TODO: remove listeners as well
        if (htmlNode) { // TODO: add check here!
            htmlNode.innerHTML = output;
            htmlNode.addEventListener('click', onClickListener(storage));
        }
    };

    observer.subscribe(render);
    storage.replaceAll([{ // TODO: remove it
        email: 'john@miro.com',
        id: '1',
        valid: true
    }, {
        email: 'invalid.email',
        id: '2',
        valid: false
    }, {
        email: 'mike@miro.com',
        id: '3',
        valid: true
    }]);

    return api;
};
