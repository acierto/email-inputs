import {getDataSet} from '~/component/services/event-service';

describe('event-service', () => {
    describe('getDataSet', () => {
        it('should extract certain fields from dataset from the event ', () => {
            const event = new (<any>KeyboardEvent)('click', {target: {dataset: {id: '1', type: 'some'}}});
            if (event.target instanceof HTMLInputElement) {
                event.target.dataset
            }
            expect(getDataSet(event)).toEqual({id: '1', type: 'some'});
        });
    });
});
