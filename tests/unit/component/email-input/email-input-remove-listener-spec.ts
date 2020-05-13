import {getDataSet} from '~/component/services/event-service';
import {onRemoveEmailListener} from '~/component/email-input/email-input-remove-listener';
import {dataTypes} from '~/component/data-types';
import {createStorageMock} from '../../helpers/objects-creator';

jest.mock('../../../../src/component/services/event-service');

const getDataSetMock = getDataSet as jest.Mock;

describe('Email input remove listener', () => {

    describe('onRemoveEmailListener', () => {
        it('should remove email by id if user clicked on a corresponding element', () => {
            getDataSetMock.mockImplementationOnce(() => ({id: '1', type: dataTypes.REMOVE_EMAIL_INPUT}));
            const storageMock = createStorageMock();
            onRemoveEmailListener(storageMock)(new (<any>MouseEvent)('click', {}));
            expect(storageMock.removeById).toHaveBeenCalledWith('1');
        });

        it('should not remove email if user clicked on other element', () => {
            getDataSetMock.mockImplementationOnce(() => ({id: '2', type: 'other'}));
            const storageMock = createStorageMock();
            onRemoveEmailListener(storageMock)(new (<any>MouseEvent)({}));
            expect(storageMock.removeById).not.toHaveBeenCalled();
        });
    });
});
