import {dataTypes} from '../data-types';

const onRemoveEmailListener = (storage, {id, type}) => {
    if (dataTypes.REMOVE_EMAIL_INPUT === type) {
        storage.removeInput(id);
    }
};

const onAddEmailListener = (storage, {type}, email) => {
    if (dataTypes.ADD_EMAIL_INPUT === type) {
        storage.addInput(email);
    }
};

export const onClickListener = (storage) => (event) => {
    const {dataset, value} = event.target;
    onRemoveEmailListener(storage, dataset);
    onAddEmailListener(storage, dataset, value);
};
