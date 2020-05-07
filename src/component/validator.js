export const validate = (email) => ({email, valid: true});

export const validateAll = (emails) => emails.forEach(validate);
