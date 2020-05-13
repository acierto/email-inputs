import {EmailInput} from './email-input/email-input-type';

export type EmailsNotification = {
    added: Array<EmailInput>,
    inputs: Array<EmailInput>,
    removed: Array<string>,
};
