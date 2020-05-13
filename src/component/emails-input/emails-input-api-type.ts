import {EmailInput} from '../email-input/email-input-type';
import {Listener} from '../listener-type';
import {Unsubscribe} from '../unsubscribe-type';

export type EmailsInputApi = {
    getAllEmails: () => Array<EmailInput>,
    replaceAll: (emails: Array<string>) => void,
    subscribe: (listener: Listener) => Unsubscribe
}
