import {createNotification} from '~/component/services/notification-service';
import {EmailInput} from '~/component/email-input/email-input-type';
import {getNextId} from '~/component/services/id-generator';
import {replaceOp} from '../../helpers/objects-creator';

const email = (num: number): string => `${num}@miro.com`;
const emailInput = (num: number): EmailInput => ({id: num.toString(), email: email(num), valid: true});

jest.mock('../../../../src/component/services/id-generator');
const getNextIdMock = getNextId as jest.Mock;


describe('notification', () => {
    const email1 = emailInput(1);
    const email2 = emailInput(2);
    const email3 = emailInput(3);
    const email4 = emailInput(4);

    describe('createNotification', () => {
        it('case 1. should create notification with information of final result, what was added and removed', () => {
            getNextIdMock.mockImplementation(() => '2');

            const previousInput = [email1];
            expect(createNotification(previousInput, replaceOp([email(2)]))).toEqual({
                added: [],
                inputs: [email2],
                removed: [],
                updated: [{
                    ...email2,
                    oldId: '1',
                    position: 0
                }]
            });
        });
        it('case 2. should create notification with information of final result, what was added and removed', () => {
            getNextIdMock.mockImplementation(() => '2');
            const previousInput = [email1, email2];

            expect(createNotification(previousInput, replaceOp([email(2)]))).toEqual({
                added: [],
                inputs: [email2],
                removed: ['2'],
                updated: [{
                    ...email2,
                    oldId: '1',
                    position: 0,
                }]
            });
        });
        it('case 3. should create notification with information of final result, what was added and removed', () => {
            getNextIdMock.mockImplementation(() => '1');
            const previousInput = [];

            expect(createNotification(previousInput, replaceOp([email(1)]))).toEqual({
                added: [email1],
                inputs: [email1],
                removed: [],
                updated: []
            });
        });

        it('case 4. should create notification with information of final result, what was added and removed', () => {
            getNextIdMock
                .mockImplementationOnce(() => '5')
                .mockImplementationOnce(() => '6')
                .mockImplementationOnce(() => '7');
            const previousInput = [email1, email2, email3, email4];

            expect(createNotification(previousInput,
                replaceOp([email(1), email(3), email(5)]))).toEqual({
                added: [],
                inputs: [
                    email1, {
                        id: '5',
                        email: email(3),
                        valid: true
                    }, {
                        id: '6',
                        email: email(5),
                        valid: true
                    }],
                removed: ['4'],
                updated: [{
                    id: '5',
                    email: email(3),
                    oldId: '2',
                    position: 1,
                    valid: true
                }, {
                    id: '6',
                    email: email(5),
                    oldId: '3',
                    position: 2,
                    valid: true
                }]
            });
        });
    });
});
