import {dataTypes} from '../data-types';

export const onRemoveEmailListener = (storage) => (event) => {
    const {id, type} = event.target.dataset;
    if (dataTypes.REMOVE_EMAIL_INPUT === type) {
        storage.removeById(id);
    }
};
