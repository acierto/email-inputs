import {Observer} from '~/component/observer';
import {createNotification} from '~/component/services/notification';
import {validEmail} from '../helpers/objects-creator';

describe('Observable', () => {

    it('should be possible to get notifications while listener is subscribed yet', () => {
        const listener = jest.fn();
        const observable = Observer();
        const unsubscribe = observable.subscribe(listener);
        const notification1 = createNotification(
            [validEmail(1, 'john')], [validEmail(2, 'alex')]);
        observable.notify(notification1);
        expect(listener).toHaveBeenCalledWith(notification1);

        const notification2 = createNotification(
            [validEmail(3, 'marieke')], [validEmail(4, 'paul')]);
        observable.notify(notification2);
        expect(listener).toHaveBeenCalledWith(notification2);
        unsubscribe();

        const notification3 = createNotification(
            [validEmail(5, 'sara')], [validEmail(6, 'daphne')]);
        observable.notify(notification3);
        expect(listener).toHaveBeenCalledWith(notification2);
    });
});
