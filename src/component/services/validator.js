export const defaultEmailValidator = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line max-len
    return re.test(String(email).toLowerCase());
};

export const validate = (email, allEmails, validators = []) => {
    const validatorsToCheck = [...validators, defaultEmailValidator];
    return validatorsToCheck.reduce((acc, validator) => acc && validator(email, allEmails), true);
};
