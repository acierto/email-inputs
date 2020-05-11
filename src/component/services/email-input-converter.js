import {validate} from './validator';
import {getNextId} from './id-generator';

export const emailToEmailInput = (validators) => (email) => ({
    email,
    id: getNextId(),
    valid: validate(email, validators)
});
