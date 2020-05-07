import './demo-form.less';
import {EmailInputs} from '../component/email-inputs/email-inputs';
import {getNextEmail} from './email-generator';

export const DemoForm = (rootNode) => {
    const render = () => `
        <div class="demo-form">
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
        </div>
    `;

    const addEmailListener = (emailInputs) => () => {
        const emails = emailInputs.getAllEmails();
        emailInputs.replaceAll([...emails.map((input) => input.email), getNextEmail()]);
    };

    const getEmailsCountListener = (emailInputs) => () => {
        const emails = emailInputs.getAllEmails();
        alert(emails.filter((input) => input.valid).length);
    };

    const registerListeners = (emailInputs) => {
        rootNode.querySelector('.demo-form .add-email')
            .addEventListener('click', addEmailListener(emailInputs));
        rootNode.querySelector('.demo-form .get-emails-count')
            .addEventListener('click', getEmailsCountListener(emailInputs));
    };

    const postRender = () => {
        const inputContainerNode = document.querySelector('#email-inputs');
        const emailInputs = EmailInputs(inputContainerNode, {});
        registerListeners(emailInputs);
    };

    return {
        postRender,
        registerListeners,
        render
    };
};
