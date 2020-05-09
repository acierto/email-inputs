import {validate} from '~/src/component/services/validator';

describe('validator', () => {
    describe('validate', () => {
        it('should return true if email is valid', () => {
            expect(validate('john@miro.com')).toBeTruthy();
            expect(validate('john123@miro.com')).toBeTruthy();
        });
        it('should return false if email is invalid', () => {
            expect(validate('john@@miro.com')).toBeFalsy();
            expect(validate('john123@mirocom')).toBeFalsy();
            expect(validate('john123miro.com')).toBeFalsy();
            expect(validate('john123@')).toBeFalsy();
        });
    });
});
