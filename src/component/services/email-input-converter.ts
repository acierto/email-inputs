import {validate} from './validator';
import {getNextId} from './id-generator';

import {Validator} from '../validator-type';
import {EmailInput} from '../email-input/email-input-type';

export const emailToEmailInput = (validators: Validator[]) => (email: string, allEmails: EmailInput[]) => ({
    email,
    id: getNextId(),
    valid: validate(email, allEmails, validators)
});
