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
                   ${options.emailInputsList.map(({id}) => `<div id="${id}"></div>`).join('')}
               </div>
               <div class="buttons-panel">
                    <button class="add-email">Add email</button> 
                    <button class="get-emails-count">Get emails count</button>
               </div>
           </div>
    `;

    const element = () => createDiv('playground-form', render());

    const addEmailListener = (emailInputs) => () => {
        const emails = emailInputs.getAllEmails();
        emailInputs.replaceAll([...emails.map((input) => input.email), getNextEmail()]);
    };

    const getEmailsCountListener = (emailInputs) => () => {
        const emails = emailInputs.getAllEmails();
        alert(emails.filter((input) => input.valid).length);
    };

    const registerListeners = (emailInputs) => {
        rootElement.querySelector('.playground-form .add-email')
            .addEventListener('click', addEmailListener(emailInputs));
        rootElement.querySelector('.playground-form .get-emails-count')
            .addEventListener('click', getEmailsCountListener(emailInputs));
    };

    const postRender = () => {
        options.emailInputsList.forEach((emailInputsConfig) => {
            const {id, placeholder} = emailInputsConfig;
            const inputContainerNode = document.querySelector(`#${id}`);
            const emailInputs = EmailInputs(inputContainerNode, {placeholder});
            emailInputs.replaceAll(emailInputsConfig.initialData);
            registerListeners(emailInputs);
        });
    };

    rootElement.appendChild(element());
    postRender();
};
