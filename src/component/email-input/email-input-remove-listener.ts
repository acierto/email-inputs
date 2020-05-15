import {Storage} from '../storage-type';

export const onRemoveEmailListener = (storage: Storage) => (event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
        const {id} = event.target.dataset;
        storage.removeById(id);
    }
};
