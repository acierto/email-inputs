import {validate} from '~/src/component/services/validator';

describe('validator', () => {
    describe('validate', () => {
        it('should return true if email is valid', () => {
            expect(validate('john@miro.com')).toBeTruthy();
            expect(validate('john+son/company=miro@miro.com')).toBeTruthy();
            expect(validate('john!#+-={|}.`^/\'&@miro.com')).toBeTruthy();
            expect(validate('"john doe"@mrio.com')).toBeTruthy();
        });
        it('should return false if email is invalid', () => {
            expect(validate('john@@miro.com')).toBeFalsy();
            expect(validate('john123@mirocom')).toBeFalsy();
            expect(validate('john123miro.com')).toBeFalsy();
            expect(validate('john123@')).toBeFalsy();
        });
    });
});
