import {createInputListeners} from '~/component/new-email-input/create-new-email-input-listeners';
import {createStorageMock} from '../../helpers/objects-creator';
import {getInputValue} from '../../../../src/component/services/event-service';

jest.mock('../../../../src/component/services/event-service');

// const getInputValueMock = getInputValue as jest.Mock;

const createInputElement = (email: string): HTMLInputElement => {
    // getInputValueMock.mockImplementationOnce(() => (email));
    const element = document.createElement('input');
    element.value = email;
    return element;
}

describe('create-new-email-input-listeners', () => {
    describe('blurListener', () => {
        it('should process triggered "blur" event', () => {
            const element = createInputElement('sara@miro.com');
            const addEmailMock = jest.fn();
            const storageMock = createStorageMock(addEmailMock);

            const {blurListener} = createInputListeners(element, storageMock);
            element.addEventListener('blur', blurListener);
            expect(element.value).toEqual('');
            expect(addEmailMock).toHaveBeenCalledWith('sara@miro.com');
        });
    });
    // describe('keyPressListener', () => {
    //     it('should process triggered "keypress" event. Case "Enter"', () => {
    //         const element = createInputElement('rosa@miro.com');
    //         const addEmailMock = jest.fn();
    //         const storageMock = createStorageMock(addEmailMock);
    //
    //         const {keyPressListener} = createInputListeners(element, storageMock);
    //
    //         keyPressListener(new (<any>KeyboardEvent)('click', {key: 'Enter'}));
    //
    //         expect(element.value).toEqual('');
    //         expect(addEmailMock).toHaveBeenCalledWith('rosa@miro.com');
    //     });
    //
    //     it('should process triggered "keypress" event. Case "Comma"', () => {
    //         const element = createInputElement('daphne@miro.com');
    //
    //         const addEmailMock = jest.fn();
    //         const storageMock = createStorageMock(addEmailMock);
    //         const {keyPressListener} = createInputListeners(element, storageMock);
    //
    //         keyPressListener(new (<any>KeyboardEvent)('click', {key: ','}));
    //         expect(element.value).toEqual('');
    //         expect(addEmailMock).toHaveBeenCalledWith('daphne@miro.com');
    //     });
    //
    //     it('should process triggered "keypress" event. Case "Other key"', () => {
    //         const element = createInputElement('choyin@miro.com');
    //
    //         const addEmailMock = jest.fn();
    //         const storageMock = createStorageMock(addEmailMock);
    //         const {keyPressListener} = createInputListeners(element, storageMock);
    //
    //         keyPressListener(new (<any>KeyboardEvent)('click', {key: 'l'}));
    //         expect(element.value).toEqual('choyin@miro.com');
    //         expect(addEmailMock).not.toHaveBeenCalled();
    //     });
    // });
    describe('pasteListener', () => {
        // it('should process triggered "paste" event. Case 1 for "Not IE browser"', () => {
        //     const addEmailMock = jest.fn();
        //     const storageMock = createStorageMock(addEmailMock);
        //     const element = createInputElement('c');
        //
        //     const {pasteListener} = createInputListeners(element, storageMock);
        //     const preventDefault = jest.fn();
        //     const eventMock = {
        //         clipboardData: {
        //             getData: (type) => {
        //                 if (type === 'text/plain') {
        //                     return 'choyin@miro.com,sara@miro.com';
        //                 }
        //                 return undefined;
        //             }
        //         },
        //         preventDefault
        //     };
        //     pasteListener(new (<any>ClipboardEvent)('click'));
        //     expect(preventDefault).toHaveBeenCalled();
        //     expect(element).toEqual('');
        //     expect(addEmailMock.mock.calls).toEqual([['choyin@miro.com'], ['sara@miro.com']]);
        // });
        // it('should process triggered "paste" event. Case 2 for "Not IE browser"', () => {
        //     const elementMock = {value: 'c'};
        //     const addEmailMock = jest.fn();
        //     const storageMock = {addEmail: addEmailMock};
        //     const {pasteListener} = createInputListeners(elementMock, storageMock);
        //     const preventDefault = jest.fn();
        //     const eventMock = {
        //         originalEvent: {
        //             clipboardData: {
        //                 getData: (type) => {
        //                     if (type === 'text/plain') {
        //                         return 'choyin@miro.com,sara@miro.com';
        //                     }
        //                     return undefined;
        //                 }
        //             }
        //         },
        //         preventDefault
        //     };
        //     pasteListener(eventMock);
        //     expect(preventDefault).toHaveBeenCalled();
        //     expect(elementMock).toEqual({value: ''});
        //     expect(addEmailMock.mock.calls).toEqual([['choyin@miro.com'], ['sara@miro.com']]);
        // });
        // it('should process triggered "paste" event. Case 3 for "Not IE browser"', () => {
        //     const elementMock = {value: 'c'};
        //     const addEmailMock = jest.fn();
        //     const storageMock = {addEmail: addEmailMock};
        //     const {pasteListener} = createInputListeners(elementMock, storageMock);
        //     const preventDefault = jest.fn();
        //     const eventMock = {
        //         originalEvent: {clipboardData: {getData: () => undefined}},
        //         preventDefault
        //     };
        //     pasteListener(eventMock);
        //     expect(preventDefault).toHaveBeenCalled();
        //     expect(elementMock).toEqual({value: 'c'});
        //     expect(addEmailMock).not.toHaveBeenCalled();
        // });
        // it('should process triggered "paste" event. Case 1 for "IE browser"', () => {
        //     const elementMock = {value: 'c'};
        //     const addEmailMock = jest.fn();
        //     const storageMock = {addEmail: addEmailMock};
        //     const {pasteListener} = createInputListeners(elementMock, storageMock);
        //     const preventDefault = jest.fn();
        //     window.clipboardData = {
        //         getData: (type) => {
        //             if (type === 'text') {
        //                 return 'choyin@miro.com,sara@miro.com,,';
        //             }
        //             return undefined;
        //         }
        //     };
        //     const eventMock = {preventDefault};
        //     pasteListener(eventMock);
        //     expect(preventDefault).toHaveBeenCalled();
        //     expect(elementMock).toEqual({value: ''});
        //     expect(addEmailMock.mock.calls).toEqual([['choyin@miro.com'], ['sara@miro.com']]);
        // });
        // it('should process triggered "paste" event. Case 2 for "IE browser"', () => {
        //     const elementMock = {value: 'c'};
        //     const addEmailMock = jest.fn();
        //     const storageMock = {addEmail: addEmailMock};
        //     const {pasteListener} = createInputListeners(elementMock, storageMock);
        //     const preventDefault = jest.fn();
        //     window.clipboardData = {getData: () => undefined};
        //     const eventMock = {preventDefault};
        //     pasteListener(eventMock);
        //     expect(preventDefault).toHaveBeenCalled();
        //     expect(elementMock).toEqual({value: 'c'});
        //     expect(addEmailMock).not.toHaveBeenCalled();
        // });
    });
});
