export const isUndefined = (variable) => typeof variable === 'undefined';

export const isUndefinedOrEmpty = (variable) => isUndefined(variable) || variable === '';
