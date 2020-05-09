import {createNotification} from '~/src/component/services/notification';

const email = (num) => ({id: num.toString(), name: `${num}@miro.com`});

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
            })
        });
        it('case 2. should create notification with information of final result, what was added and removed', () => {
            const previousInput = [email1, email2];
            const newInput = [email2];

            expect(createNotification(previousInput, newInput)).toEqual({
                added: [],
                inputs: [email2],
                removed: ['1']
            })
        });
        it('case 3. should create notification with information of final result, what was added and removed', () => {
            const previousInput = [];
            const newInput = [email1];

            expect(createNotification(previousInput, newInput)).toEqual({
                added: [email1],
                inputs: [email1],
                removed: []
            })
        });
    });
});
