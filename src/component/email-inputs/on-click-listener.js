import {dataTypes} from '../data-types';

const onElementInputListener = (storage, {id, type}) => {
    if (dataTypes.REMOVE_EMAIL_INPUT === type) {
        storage.removeInput(id);
    }
};

export const onClickListener = (storage) => (event) => {
    const {dataset} = event.target.dataset;
    onElementInputListener(storage, dataset);
};
