import {EmailInput} from './email-input/email-input-type';

export type Storage = {
    addEmails: (emails: string[]) => void,
    getAllEmails: () => Array<EmailInput>,
    removeById: (string) => void,
    replaceAllEmails: (emails: Array<string>) => void
};
