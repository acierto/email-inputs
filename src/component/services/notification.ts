import {includes} from './common-service';
import {EmailInput} from '../email-input/email-input-type';
import {EmailsNotification} from '../emails-notification-type';

export const createNotification = (previousInputs: EmailInput[], newInputs: EmailInput[]): EmailsNotification => {
    const getId = (input) => input.id;

    const previousIds = previousInputs.map(getId);
    const newIds = newInputs.map(getId);

    const added = newInputs.filter(({id}) => !includes(previousIds, id));
    const removed = previousIds.filter((id) => !includes(newIds, id));

    return {
        added,
        inputs: newInputs,
        removed
    };
};
