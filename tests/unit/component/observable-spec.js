import {Observable} from '~/src/component/observable';

describe('Observable', () => {
    it('should be possible to get notifications while listener is subscribed yet', () => {
        const listener = jest.fn();
        const observable = new Observable();
        const unsubscribe = observable.subscribe(listener);
        observable.notify(1);
        expect(listener).toHaveBeenCalledWith(1);
        observable.notify(2);
        expect(listener).toHaveBeenCalledWith(2);
        unsubscribe();
        observable.notify(3);
        expect(listener).toHaveBeenCalledWith(2);
    });
});
