import {onRemoveEmailListener} from '~/src/component/email-input/email-input-remove-listener';
import {dataTypes} from '~/src/component/data-types';

describe('Email input remove listener', () => {
    describe('onRemoveEmailListener', () => {
        it('should remove email by id if user clicked on a corresponding element', () => {
            const storage = {removeById: jest.fn()};
            const event = {target: {dataset: {id: '1', type: dataTypes.REMOVE_EMAIL_INPUT}}};
            onRemoveEmailListener(storage)(event);
            expect(storage.removeById).toHaveBeenCalledWith('1');
        });

        it('should not remove email if user clicked on other element', () => {
            const storage = {removeById: jest.fn()};
            const event = {target: {dataset: {id: '1', type: 'other'}}};
            onRemoveEmailListener(storage)(event);
            expect(storage.removeById).not.toHaveBeenCalled();
        });
    });
});
