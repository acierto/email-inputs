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
            expect(includes([1, 2, 3], 1)).toEqual(true);
            expect(includes([1, 2, 3], 2)).toEqual(true);
            expect(includes([1, 2, 3], 4)).toEqual(false);
        });
    });
    describe('isDefined', () => {
        it('should return true only if a variable is defined', () => {
            expect(isDefined(undefined)).toEqual(false);
            expect(isDefined(null)).toEqual(false);
            expect(isDefined()).toEqual(false);
            expect(isDefined(0)).toEqual(true);
            expect(isDefined(false)).toEqual(true);
            expect(isDefined({})).toEqual(true);
        });
    });
    describe('isNotBlank', () => {
        it('should return true only if a variable is defined and not blank', () => {
            expect(isNotBlank(undefined)).toEqual(false);
            expect(isNotBlank(null)).toEqual(false);
            expect(isNotBlank()).toEqual(false);
            expect(isNotBlank('')).toEqual(false);

            expect(isNotBlank(0)).toEqual(true);
            expect(isNotBlank(false)).toEqual(true);
            expect(isNotBlank({})).toEqual(true);
            expect(isNotBlank(' ')).toEqual(true);
            expect(isNotBlank('a')).toEqual(true);
        });
    });
    describe('isUndefined', () => {
        it('should return true only if a variable is not defined', () => {
            expect(isUndefined(undefined)).toEqual(true);
            expect(isUndefined(null)).toEqual(true);
            expect(isUndefined()).toEqual(true);
            expect(isUndefined(0)).toEqual(false);
            expect(isUndefined(false)).toEqual(false);
            expect(isUndefined({})).toEqual(false);
        });
    });
    describe('propOr', () => {
        it('should return property of the object or default value when property is not found', () => {
            expect(propOr('name', 'John', {name: 'Mattheu'})).toEqual('Mattheu');
            expect(propOr('name', 'John', {firstName: 'Mattheu'})).toEqual('John');
        });
    });
});
