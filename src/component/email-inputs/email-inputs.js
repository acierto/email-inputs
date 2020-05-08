import {testDataList1} from '../data-list';
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

    const render = () => {
        const newInputElement = NewEmailInput(rootNode, storage);
        const output = `<div class="email-inputs">
                            <div class="email-container">
                                ${newInputElement.render()}
                            </div>
                        </div>`;

        if (rootNode) {
            rootNode.innerHTML = output;
            newInputElement.registerListeners();
        } else {
            console.warn('The root element for "email-inputs" has not found.');
        }
    };

    const rerender = ({added, removed}) => {
        const ref = rootNode.querySelector('.email-container');

        for (const input of added) {
            ref.insertBefore(EmailInput(input), ref.childNodes[ref.children.length - 1]);
        }

        for (const id of removed) {
            ref.querySelector(`.email-input[data-id="${id}"]`).remove();
        }
    };

    render();
    observer.subscribe(rerender);
    storage.replaceAll(testDataList1);

    rootNode.addEventListener('click', onRemoveEmailListener(storage));

    return api;
};
