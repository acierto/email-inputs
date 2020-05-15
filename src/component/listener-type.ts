import {EmailsNotification} from './emails-notification-type';

export type Listener = (notification: EmailsNotification) => any;
