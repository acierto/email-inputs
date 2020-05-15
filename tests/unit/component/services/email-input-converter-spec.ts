import {emailToEmailInput} from '~/component/services/email-input-converter';
import {getNextId} from '~/component/services/id-generator';

jest.mock('../../../../src/component/services/id-generator');

const getNextIdMock = getNextId as jest.Mock;

describe('email-input-converter', () => {
    getNextIdMock.mockImplementation(() => '1');

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
