export const isUndefined = (variable) => typeof variable === 'undefined';

export const isUndefinedOrEmpty = (variable) => isUndefined(variable) || variable === '';

export const propOr = (propName, defaultValue, object) =>
    isUndefined(object[propName]) ? defaultValue : object[propName];
