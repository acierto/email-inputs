import {validEmail} from '../helpers/objects-creator';
import {Storage} from '~/src/component/storage';
import {Observable} from '~/src/component/observable';
import {getNextId} from '~/src/component/services/id-generator';

jest.mock('../../../src/component/services/id-generator');

describe('Storage', () => {
    let storage;
    beforeEach(() => {
        storage = new Storage(new Observable());
        const addEmail = (id, name) => {
            getNextId.mockImplementation(() => id.toString());
            storage.addEmail(`${name}@miro.com`);
        };
        addEmail(1, 'john');
        addEmail(2, 'maria');
        addEmail(3, 'paul');
        addEmail(4, 'jeroen');
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

    it('should be possible to replace all emails. casee 1', () => {
        getNextId.mockImplementation(() => '5');
        storage.replaceAllEmails(['maria@miro.com']);
        expect(storage.getAllEmails()).toEqual([
            validEmail(5, 'maria')
        ]);
    });

    it('should be possible to replace all emails. case 2', () => {
        getNextId.mockImplementation(() => '5');
        storage.replaceAllEmails();
        expect(storage.getAllEmails()).toEqual([]);
    });
});
