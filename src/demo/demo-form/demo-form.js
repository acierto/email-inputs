import {EmailInputs} from '../../component/email-inputs/email-inputs';
import {createDiv} from '../service/create-element';
import {getNextEmail} from '../email-generator';
import './demo-form.less';

export const DemoForm = (rootElement, options) => {
    const render = () => `
            <div class="demo-form-wrapper">
               <div class="form-content">
                   <div class="form-header">
                       Share <strong>Board game</strong> with others
                   </div>
                   <div id="email-inputs"></div>
               </div>
               <div class="buttons-panel">
                    <button class="add-email">Add email</button> 
                    <button class="get-emails-count">Get emails count</button>
               </div>
           </div>
    `;

    const element = () => createDiv('demo-form', render());

    const addEmailListener = (emailInputs) => () => {
        const emails = emailInputs.getAllEmails();
        emailInputs.replaceAll([...emails.map((input) => input.email), getNextEmail()]);
    };

    const getEmailsCountListener = (emailInputs) => () => {
        const emails = emailInputs.getAllEmails();
        alert(emails.filter((input) => input.valid).length);
    };

    const registerListeners = (emailInputs) => {
        rootElement.querySelector('.demo-form .add-email')
            .addEventListener('click', addEmailListener(emailInputs));
        rootElement.querySelector('.demo-form .get-emails-count')
            .addEventListener('click', getEmailsCountListener(emailInputs));
    };

    const postRender = () => {
        const inputContainerNode = document.querySelector('#email-inputs');
        const emailInputs = EmailInputs(inputContainerNode, {placeholder: 'add more emails...'});
        emailInputs.replaceAll(options.initialData);
        registerListeners(emailInputs);
    };

    rootElement.appendChild(element());
    postRender();
};
