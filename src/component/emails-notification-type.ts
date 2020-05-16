import {EmailInput, PositionedEmailInput} from './email-input/email-input-type';

export type EmailsNotification = {
    added: EmailInput[],
    inputs: EmailInput[],
    removed: string[],
    updated: PositionedEmailInput[]
};
