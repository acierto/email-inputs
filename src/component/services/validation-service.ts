import {Validator} from '../validator-type';
import {EmailInput} from '../email-input/email-input-type';

export const defaultEmailValidator = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line max-len
    return re.test(String(email).toLowerCase());
};

export const validate = (email: string, allEmails: EmailInput[] = [], validators: Validator[] = []): boolean => {
    const validatorsToCheck = [...validators, defaultEmailValidator];
    return validatorsToCheck.reduce<boolean>((acc, validator) => acc && validator(email, allEmails), true);
};
