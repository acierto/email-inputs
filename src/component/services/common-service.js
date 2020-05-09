export const includes = (array, item) => array.indexOf(item) !== -1;

export const isUndefined = (variable) => typeof variable === 'undefined' || variable === null;

export const isDefined = (variable) => !isUndefined(variable);

export const isNotBlank = (variable) => isDefined(variable) && variable !== '';

export const propOr = (propName, defaultValue, object) =>
    isUndefined(object[propName]) ? defaultValue : object[propName];
