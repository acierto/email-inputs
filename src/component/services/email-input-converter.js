import {validate} from './validator';
import {getNextId} from './id-generator';

export const emailToEmailInput = (validators) => (email, allEmails) => ({
    email,
    id: getNextId(),
    valid: validate(email, allEmails, validators)
});
