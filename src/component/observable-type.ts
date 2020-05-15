import {EmailsNotification} from './emails-notification-type';
import {Listener} from "./listener-type";
import {Unsubscribe} from './unsubscribe-type';

export type Observable = {
    notify: (notification: EmailsNotification) => void,
    subscribe: (listener: Listener) => Unsubscribe
}
