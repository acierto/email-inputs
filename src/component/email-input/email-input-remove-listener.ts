import {dataTypes} from '../data-types';
import {Storage} from '../storage-type';
import {getDataSet, RemoveMouseEvent} from '../services/event-service';

export const onRemoveEmailListener = (storage: Storage) => (event: RemoveMouseEvent) => {
    const {id, type} = getDataSet(event);
    if (dataTypes.REMOVE_EMAIL_INPUT === type) {
        storage.removeById(id);
    }
};
