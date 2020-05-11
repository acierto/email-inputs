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
        it('should return false if email is invalid', () => {
            expect(validate('john@@miro.com')).toBeFalsy();
            expect(validate('john123@mirocom')).toBeFalsy();
            expect(validate('john123miro.com')).toBeFalsy();
            expect(validate('john123@')).toBeFalsy();
        });
        it('should take into account custom validators', () => {
            expect(validate('john@@miro.com', [], [() => true])).toBeFalsy();
            expect(validate('john@miro.com', [], [() => false])).toBeFalsy();
            expect(validate('john@miro.com', [], [() => true, () => false])).toBeFalsy();
            expect(validate('john@miro.com', [], [() => true, () => true])).toBeTruthy();

            expect(validate('john@miro.com', ['john@miro.com'],
                [(email, allEmails) => allEmails.indexOf(email) === -1])).toBeFalsy();
            expect(validate('john@miro.com', ['mike@miro.com'],
                [(email, allEmails) => allEmails.length !== 1])).toBeFalsy();
        });
    });
});
