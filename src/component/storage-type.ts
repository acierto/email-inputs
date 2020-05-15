import {EmailInput} from './email-input/email-input-type';

export type Storage = {
    addEmail: (email: string) => void,
    getAllEmails: () => Array<EmailInput>,
    removeById: (string) => void,
    replaceAllEmails: (emails: Array<string>) => void
};
