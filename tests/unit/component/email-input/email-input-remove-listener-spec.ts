import simulateEvent from 'simulate-event';
import {onRemoveEmailListener} from '~/component/email-input/email-input-remove-listener';
import {createStorageMock} from '../../helpers/objects-creator';

describe('Email input remove listener', () => {
    describe('onRemoveEmailListener', () => {
        it('should remove email by id if user clicked on a corresponding element', () => {
            const button = document.createElement('button');
            button.setAttribute('data-id', '1');
            const storageMock = createStorageMock();
            button.addEventListener('click', onRemoveEmailListener(storageMock));
            simulateEvent.simulate(button, 'click');
            expect(storageMock.removeById).toHaveBeenCalledWith('1');
        });

        it('should not remove email if user clicked on other element', () => {
            const storageMock = createStorageMock();
            onRemoveEmailListener(storageMock)(new (<any>MouseEvent)({}));
            expect(storageMock.removeById).not.toHaveBeenCalled();
        });
    });
});
