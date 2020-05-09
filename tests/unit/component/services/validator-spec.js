import {validate} from '~/src/component/services/validator';

describe('validator', () => {
    describe('validate', () => {
        it('should return true if email is valid', () => {
            expect(validate('john@miro.com')).toEqual(true);
            expect(validate('john123@miro.com')).toEqual(true);
        });
        it('should return false if email is invalid', () => {
            expect(validate('john@@miro.com')).toEqual(false);
            expect(validate('john123@mirocom')).toEqual(false);
            expect(validate('john123miro.com')).toEqual(false);
            expect(validate('john123@')).toEqual(false);
        });
    });
});
