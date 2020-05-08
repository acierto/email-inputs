import {includes} from './common-service';

export const createNotification = (previousInputs, newInputs) => {
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
