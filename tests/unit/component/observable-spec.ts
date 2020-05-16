import {Observer} from '~/component/observer';
import {createNotification} from '~/component/services/notification-service';
import {replaceOp, validEmail} from '../helpers/objects-creator';
import {getNextId} from '../../../src/component/services/id-generator';

jest.mock('../../../src/component/services/id-generator');

const getNextIdMock = getNextId as jest.Mock;

describe('Observable', () => {
    it('should be possible to get notifications while listener is subscribed yet', () => {
        getNextIdMock
            .mockImplementationOnce(() => '2')
            .mockImplementationOnce(() => '4')
            .mockImplementationOnce(() => '6');

        const listener = jest.fn();
        const observable = Observer();
        const unsubscribe = observable.subscribe(listener);
        const notification1 = createNotification(
            [validEmail(1, 'john')], replaceOp(['alex@miro.com']));
        observable.notify(notification1);
        expect(listener).toHaveBeenCalledWith(notification1);

        const notification2 = createNotification(
            [validEmail(3, 'marieke')], replaceOp(['paul@miro.com']));
        observable.notify(notification2);
        expect(listener).toHaveBeenCalledWith(notification2);
        unsubscribe();

        const notification3 = createNotification(
            [validEmail(5, 'sara')], replaceOp(['daphne@miro.com']));
        observable.notify(notification3);
        expect(listener).toHaveBeenCalledWith(notification2);
    });
});
