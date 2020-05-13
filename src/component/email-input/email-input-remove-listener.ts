import {dataTypes} from '../data-types';
import {Storage} from '../storage-type';

interface EmailEventTarget extends EventTarget {
    dataset: any
}

interface RemoveMouseEvent extends MouseEvent {
    target: EmailEventTarget | null
}

export const onRemoveEmailListener = (storage: Storage) => (event: RemoveMouseEvent) => {
    const {id, type} = event.target.dataset;
    if (dataTypes.REMOVE_EMAIL_INPUT === type) {
        storage.removeById(id);
    }
};
