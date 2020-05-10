import {
    includes,
    isDefined,
    isNotBlank,
    isUndefined,
    propOr
} from '~/src/component/services/common-service';

describe('common-service', () => {
    describe('includes', () => {
        it('should return true only if array contains the item', () => {
            expect(includes([1, 2, 3], 1)).toBeTruthy();
            expect(includes([1, 2, 3], 2)).toBeTruthy();
            expect(includes([1, 2, 3], 4)).toBeFalsy();
        });
    });
    describe('isDefined', () => {
        it('should return true only if a variable is defined', () => {
            expect(isDefined(undefined)).toBeFalsy();
            expect(isDefined(null)).toBeFalsy();
            expect(isDefined()).toBeFalsy();
            expect(isDefined(0)).toBeTruthy();
            expect(isDefined(false)).toBeTruthy();
            expect(isDefined({})).toBeTruthy();
        });
    });
    describe('isNotBlank', () => {
        it('should return true only if a variable is defined and not blank', () => {
            expect(isNotBlank(undefined)).toBeFalsy();
            expect(isNotBlank(null)).toBeFalsy();
            expect(isNotBlank()).toBeFalsy();
            expect(isNotBlank('')).toBeFalsy();

            expect(isNotBlank(0)).toBeTruthy();
            expect(isNotBlank(false)).toBeTruthy();
            expect(isNotBlank({})).toBeTruthy();
            expect(isNotBlank(' ')).toBeTruthy();
            expect(isNotBlank('a')).toBeTruthy();
        });
    });
    describe('isUndefined', () => {
        it('should return true only if a variable is not defined', () => {
            expect(isUndefined(undefined)).toBeTruthy();
            expect(isUndefined(null)).toBeTruthy();
            expect(isUndefined()).toBeTruthy();
            expect(isUndefined(0)).toBeFalsy();
            expect(isUndefined(false)).toBeFalsy();
            expect(isUndefined({})).toBeFalsy();
        });
    });
    describe('propOr', () => {
        it('should return property of the object or default value when property is not found', () => {
            expect(propOr('name', 'John', {name: 'Mattheu'})).toEqual('Mattheu');
            expect(propOr('name', 'John', {firstName: 'Mattheu'})).toEqual('John');
            expect(propOr('name', 'John', {name: null})).toEqual('John');
        });
    });
});
