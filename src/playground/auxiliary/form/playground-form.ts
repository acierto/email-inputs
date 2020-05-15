import {createDiv} from '../service/create-element';
import {getNextEmail} from '../email-generator';
import {getStyles} from '../service/common-service';
import styles from './playground-form.less';
import {PlaygroundFormOptionsType, PlaygroundFormOptionType} from './playground-form-options-type';
import {EmailsInputApi} from '~/component/emails-input/emails-input-api-type';

export const PlaygroundForm = (rootElement: HTMLElement, options: PlaygroundFormOptionsType): void => {
    const toStyles = (name) => getStyles(['styles', name], options);

    const render = (): string => `
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

    const element = (): HTMLDivElement => createDiv(styles.playgroundForm, render());

    const addEmailListener = (emailsInputApi: EmailsInputApi) => (): void => {
        const emails = emailsInputApi.getAllEmails();
        emailsInputApi.replaceAll([...emails.map((input) => input.email), getNextEmail()]);
    };

    const getEmailsCountListener = (emailsInputApi: EmailsInputApi) => (): void => {
        const emails = emailsInputApi.getAllEmails();
        alert(emails.filter((input) => input.valid).length);
    };

    const registerListeners = (emailsInputApi: EmailsInputApi) => {
        rootElement.querySelector(`.${styles.playgroundForm} .add-email`)
            .addEventListener('click', addEmailListener(emailsInputApi));
        rootElement.querySelector(`.${styles.playgroundForm} .get-emails-count`)
            .addEventListener('click', getEmailsCountListener(emailsInputApi));
        emailsInputApi.subscribe((message) => {
            console.info('Added email(s)', message.added);
            console.info('Removed email(s)', message.removed);
            console.info('Currently containing emails', message.inputs);
        });
    };

    const postRender = (): void => {
        options.emailsInputList.forEach((emailsInputConfig: PlaygroundFormOptionType) => {
            const {id, placeholder, showTitle, validators} = emailsInputConfig;
            const inputContainerNode = document.querySelector(`#${id}`);

            const emailsInputApi = EmailsInput(inputContainerNode, {placeholder, showTitle, validators});
            emailsInputApi.replaceAll(emailsInputConfig.initialData);
            registerListeners(emailsInputApi);
        });
    };

    rootElement.appendChild(element());
    postRender();
};
