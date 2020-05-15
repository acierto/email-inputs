import {getNextId} from '~/component/services/id-generator';

describe('id-generator', () => {
    describe('getNextId', () => {
        it('should generate new consequent string id every new call', () => {
            expect(getNextId()).toEqual('1');
            expect(getNextId()).toEqual('2');
            expect(getNextId()).toEqual('3');
        });
    });
});
