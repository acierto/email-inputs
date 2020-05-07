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

    const render = () => {
        const data = storage.getAll();
        const inputElements = data.map((input) => EmailInput(input).render()).join('');
        return `<div class="container">${inputElements}</div>`;
    };

    if (htmlNode) { // TODO: add check here!
        htmlNode.innerHTML = render();
        htmlNode.addEventListener('click', onClickListener);
    }

    return api;
};
