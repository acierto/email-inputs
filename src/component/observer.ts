import {Listener} from './listener-type';
import {Observable} from './observable-type';
import {EmailsNotification} from './emails-notification-type';
import {Unsubscribe} from './unsubscribe-type';

export const Observer = (): Observable => {
    let observers = [];

    const unsubscribe = (listener: Listener) => () => {
        observers = observers.filter((subscriber) => subscriber !== listener);
    };

    return {
        notify: (notification: EmailsNotification): void => {
            observers.forEach((listener) => listener(notification));
        },
        subscribe: (listener: Listener): Unsubscribe => {
            observers.push(listener);
            return unsubscribe(listener);
        }
    };
};
