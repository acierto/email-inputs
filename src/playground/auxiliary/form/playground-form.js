import {createDiv} from '../service/create-element';
import {getNextEmail} from '../email-generator';
import './playground-form.less';
import './playground-form-case4.less';

export const PlaygroundForm = (rootElement, options) => {
    const render = () => `
            <div class="playground-form-wrapper ${options.classname}">
               <div class="form-content">
                   <div class="form-header">
                       Share <strong>Board game</strong> with others
                   </div>
                   ${options.emailsInputList.map(({id}) => `<div id="${id}"></div>`).join('')}
               </div>
               <div class="buttons-panel">
                    <button class="add-email">Add email</button> 
                    <button class="get-emails-count">Get emails count</button>
               </div>
           </div>
    `;

    const element = () => createDiv('playground-form', render());

    const addEmailListener = (emailsInput) => () => {
        const emails = emailsInput.getAllEmails();
        emailsInput.replaceAll([...emails.map((input) => input.email), getNextEmail()]);
    };

    const getEmailsCountListener = (emailsInput) => () => {
        const emails = emailsInput.getAllEmails();
        alert(emails.filter((input) => input.valid).length);
    };

    const registerListeners = (emailsInput) => {
        rootElement.querySelector('.playground-form .add-email')
            .addEventListener('click', addEmailListener(emailsInput));
        rootElement.querySelector('.playground-form .get-emails-count')
            .addEventListener('click', getEmailsCountListener(emailsInput));
    };

    const postRender = () => {
        options.emailsInputList.forEach((emailsInputConfig) => {
            const {id, placeholder} = emailsInputConfig;
            const inputContainerNode = document.querySelector(`#${id}`);
            const emailsInput = EmailsInput(inputContainerNode, {placeholder});
            emailsInput.replaceAll(emailsInputConfig.initialData);
            registerListeners(emailsInput);
        });
    };

    rootElement.appendChild(element());
    postRender();
};
