import {createNotification} from './services/notification-service';
import {Observable} from './observable-type';
import {Validator} from './validator-type';
import {EmailInput} from './email-input/email-input-type';
import {Storage} from './storage-type';
import {AddOperation, OperationKind, RemoveOperation, ReplaceOperation} from './services/inputs-operation';

export const EmailsStorage = (observer: Observable, validators?: Validator[]): Storage => {
    let inputs = [];

    return {
        addEmails: (emails: string[]): void => {
            const notification = createNotification(inputs, {
                emails,
                kind: OperationKind.Add,
                validators
            } as AddOperation);

            observer.notify(notification);
            inputs = notification.inputs;
        },
        getAllEmails: (): EmailInput[] => inputs,
        removeById: (id: string): void => {
            const notification = createNotification(inputs, {
                ids: [id],
                kind: OperationKind.Remove
            } as RemoveOperation);

            observer.notify(notification);
            inputs = notification.inputs;
        },
        replaceAllEmails: (emails: string[] = []): void => {
            const notification = createNotification(inputs, {
                emails,
                kind: OperationKind.Replace,
                validators
            } as ReplaceOperation);

            observer.notify(notification);
            inputs = notification.inputs;
        }
    };
};
