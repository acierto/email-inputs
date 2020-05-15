import {EmailInput} from './email-input/email-input-type';

export type Validator = (email: string, allEmails: Array<EmailInput>) => boolean;
