import {createNotification} from '~/component/services/notification';
import {EmailInput} from '~/component/email-input/email-input-type';

const email = (num: number): EmailInput => ({id: num.toString(), email: `${num}@miro.com`, valid: true});

describe('notification', () => {
    const email1 = email(1);
    const email2 = email(2);

    describe('createNotification', () => {
        it('case 1. should create notification with information of final result, what was added and removed', () => {
            const previousInput = [email1];
            const newInput = [email2];
            expect(createNotification(previousInput, newInput)).toEqual({
                added: [email2],
                inputs: [email2],
                removed: ['1']
            });
        });
        it('case 2. should create notification with information of final result, what was added and removed', () => {
            const previousInput = [email1, email2];
            const newInput = [email2];

            expect(createNotification(previousInput, newInput)).toEqual({
                added: [],
                inputs: [email2],
                removed: ['1']
            });
        });
        it('case 3. should create notification with information of final result, what was added and removed', () => {
            const previousInput = [];
            const newInput = [email1];

            expect(createNotification(previousInput, newInput)).toEqual({
                added: [email1],
                inputs: [email1],
                removed: []
            });
        });
    });
});
