export const includes = (array: any[], item: any) => array.indexOf(item) !== -1;

export const isUndefined = (variable?: any) => typeof variable === 'undefined' || variable === null;

export const isDefined = (variable?: any) => !isUndefined(variable);

export const isNotBlank = (variable?: any) => isDefined(variable) && variable !== '';

export const propOr = (propName: string, defaultValue: any, object: object) =>
    isUndefined(object[propName]) ? defaultValue : object[propName];
