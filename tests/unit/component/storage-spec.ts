import {validEmail} from '../helpers/objects-creator';
import {EmailsStorage} from '~/component/emails-storage';
import {Observer} from '~/component/observer';
import {getNextId} from '~/component/services/id-generator';

jest.mock('../../../src/component/services/id-generator');

const getNextIdMock = getNextId as jest.Mock;

describe('Storage', () => {
    let storage;
    beforeEach(() => {
        storage = EmailsStorage(Observer());
        getNextIdMock
            .mockImplementationOnce(() => '1')
            .mockImplementationOnce(() => '2')
            .mockImplementationOnce(() => '3')
            .mockImplementationOnce(() => '4');

        const toEmail = (name) => `${name}@miro.com`;
        storage.addEmails(['john', 'maria', 'paul', 'jeroen'].map(toEmail));
    });

    it('should store added emails and return all of them', () => {
        expect(storage.getAllEmails()).toEqual([
            validEmail(1, 'john'),
            validEmail(2, 'maria'),
            validEmail(3, 'paul'),
            validEmail(4, 'jeroen')
        ]);
    });

    it('should be possible to remove an email by id', () => {
        storage.removeById('1');
        storage.removeById('2');
        storage.removeById('3');
        storage.removeById('25');

        expect(storage.getAllEmails()).toEqual([
            validEmail(4, 'jeroen')
        ]);
    });

    it('should be possible to replace all emails. case 1', () => {
        getNextIdMock.mockImplementation(() => '5');
        storage.replaceAllEmails(['maria@miro.com']);
        expect(storage.getAllEmails()).toEqual([
            validEmail(5, 'maria')
        ]);
    });

    it('should be possible to replace all emails. case 2', () => {
        getNextIdMock.mockImplementation(() => '5');
        storage.replaceAllEmails();
        expect(storage.getAllEmails()).toEqual([]);
    });
});
