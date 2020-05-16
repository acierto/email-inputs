import {EmailInput, PositionedEmailInput} from '../email-input/email-input-type';
import {EmailsNotification} from '../emails-notification-type';
import {
    AddOperation,
    InputsOperation,
    OperationKind,
    RemoveOperation,
    ReplaceOperation
} from './inputs-operation';
import {emailToEmailInput} from './email-input-converter';
import {includes, isUndefined} from './common-service';

const toPositioned = (input: EmailInput, position: number, oldId?: string): PositionedEmailInput => ({
    ...input,
    oldId,
    position
});

const addInputs = (previousInputs: EmailInput[], operation: InputsOperation): EmailsNotification => {
    const {emails, validators} = operation as AddOperation;
    const added = emails.reduce((acc: EmailInput[], email: string) =>
        [...acc, emailToEmailInput(validators)(email, previousInputs)], []);
    return {
        added,
        inputs: [...previousInputs, ...added],
        removed: [],
        updated: []
    }
}

const removeInputs = (previousInputs: EmailInput[], operation: InputsOperation): EmailsNotification => {
    const {ids} = operation as RemoveOperation;
    return {
        added: [],
        inputs: previousInputs.filter((input: EmailInput) => !includes(ids, input.id)),
        removed: ids,
        updated: []
    }
};

const replaceInputs = (previousInputs: EmailInput[], operation: InputsOperation): EmailsNotification => {
    const {emails, validators} = operation as ReplaceOperation;

    const notification: EmailsNotification =
        emails.reduce((acc: EmailsNotification, email: string, pos: number) => {
            if (isUndefined(previousInputs[pos])) {
                const input = emailToEmailInput(validators)(email);
                return {
                    ...acc,
                    added: [...acc.added, input],
                    inputs: [...acc.inputs, input]
                };
            } else if (previousInputs[pos].email !== email) {
                const input = emailToEmailInput(validators)(email);
                return {
                    ...acc,
                    inputs: [...acc.inputs, input],
                    updated: [...acc.updated, toPositioned(input, pos, previousInputs[pos].id)]
                };
            }
            return {...acc, inputs: [...acc.inputs, previousInputs[pos]]};
        }, {
            added: [],
            inputs: [],
            removed: [],
            updated: []
        });

    if (previousInputs.length > emails.length) {
        return previousInputs.slice(emails.length)
            .reduce((acc: EmailsNotification, input: EmailInput) => (
                {...acc, removed: [...acc.removed, input.id]}
            ), notification);
    }

    return notification;
};

export const createNotification = (previousInputs: EmailInput[], operation: InputsOperation): EmailsNotification => {
    switch (operation.kind) {
        case OperationKind.Add: {
            return addInputs(previousInputs, operation);
        }
        case OperationKind.Remove: {
            return removeInputs(previousInputs, operation);
        }
        case OperationKind.Replace: {
            return replaceInputs(previousInputs, operation);
        }
    }
};
