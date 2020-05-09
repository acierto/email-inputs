import {validate} from './validator';
import {getNextId} from './id-generator';

export const emailToEmailInput = (email) => ({
    email,
    id: getNextId(),
    valid: validate(email)
});
