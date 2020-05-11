import {emailToEmailInput} from '~/src/component/services/email-input-converter';
import {getNextId} from '~/src/component/services/id-generator';

jest.mock('../../../../src/component/services/id-generator');

describe('email-input-converter', () => {
    getNextId.mockImplementation(() => '1');

    describe('emailToEmailInput', () => {
        it('should convert string to email input object having no custom validators', () => {
            expect(emailToEmailInput()('john@miro.com')).toEqual({
                email: 'john@miro.com',
                id: '1',
                valid: true
            });

            expect(emailToEmailInput()('john')).toEqual({
                email: 'john',
                id: '1',
                valid: false
            });
        });

        it('should convert string to email input object and check custom validators as well', () => {
            expect(emailToEmailInput([() => true])('john@miro.com')).toEqual({
                email: 'john@miro.com',
                id: '1',
                valid: true
            });

            expect(emailToEmailInput([() => false])('john@miro.com')).toEqual({
                email: 'john@miro.com',
                id: '1',
                valid: false
            });

            expect(emailToEmailInput([() => true])('john')).toEqual({
                email: 'john',
                id: '1',
                valid: false
            });
        });
    });
});
