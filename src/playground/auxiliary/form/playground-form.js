import {createDiv} from '../service/create-element';
import {getNextEmail} from '../email-generator';
import {getStyles} from '../service/common-service';
import styles from './playground-form.less';

export const PlaygroundForm = (rootElement, options) => {
    const toStyles = (name) => getStyles(['styles', name], options);

    const render = () => `
            <div class="${styles.playgroundFormWrapper}" style="${toStyles('formWrapperStyles')}">
               <div class="${styles.formContent}" style="${toStyles('formContentStyles')}">
                   <div class="${styles.formHeader}">
                       Share <strong>Board game</strong> with others
                   </div>
                   ${options.emailsInputList.map(({id}) =>
        `<div class="${styles.emailsInputEntry}" id="${id}"></div>`).join('')}
               </div>
               <div class="${styles.buttonsPanel}">
                    <button class="add-email">Add email</button> 
                    <button class="get-emails-count">Get emails count</button>
               </div>
           </div>
    `;

    const element = () => createDiv(styles.playgroundForm, render());

    const addEmailListener = (emailsInput) => () => {
        const emails = emailsInput.getAllEmails();
        emailsInput.replaceAll([...emails.map((input) => input.email), getNextEmail()]);
    };

    const getEmailsCountListener = (emailsInput) => () => {
        const emails = emailsInput.getAllEmails();
        alert(emails.filter((input) => input.valid).length);
    };

    const registerListeners = (emailsInput) => {
        rootElement.querySelector(`.${styles.playgroundForm} .add-email`)
            .addEventListener('click', addEmailListener(emailsInput));
        rootElement.querySelector(`.${styles.playgroundForm} .get-emails-count`)
            .addEventListener('click', getEmailsCountListener(emailsInput));
        emailsInput.subscribe((message) => {
            console.log('Added email(s)', message.added);
            console.log('Removed email(s)', message.removed);
            console.log('Currently containing emails', message.inputs);
        });
    };

    const postRender = () => {
        options.emailsInputList.forEach((emailsInputConfig) => {
            const {id, placeholder, showTitle, validators} = emailsInputConfig;
            const inputContainerNode = document.querySelector(`#${id}`);
            const emailsInput = EmailsInput(inputContainerNode, {placeholder, showTitle, validators});
            emailsInput.replaceAll(emailsInputConfig.initialData);
            registerListeners(emailsInput);
        });
    };

    rootElement.appendChild(element());
    postRender();
};
