import simulateEvent from 'simulate-event';
import {createInputListeners} from '~/component/new-email-input/create-new-email-input-listeners';
import {createStorageMock} from '../../helpers/objects-creator';

const createInputElement = (email: string): HTMLInputElement => {
    const element = document.createElement('input');
    element.value = email;
    return element;
}

describe('create-new-email-input-listeners', () => {
    describe('blurListener', () => {
        it('should process triggered "blur" event', () => {
            const inputElement = createInputElement('sara@miro.com');
            const addEmailMock = jest.fn();
            const storageMock = createStorageMock(addEmailMock);

            const {blurListener} = createInputListeners(inputElement, storageMock);
            inputElement.addEventListener('blur', blurListener);
            simulateEvent.simulate(inputElement, 'blur');
            expect(inputElement.value).toEqual('');
            expect(addEmailMock).toHaveBeenCalledWith('sara@miro.com');
        });
    });
    describe('keyPressListener', () => {
        it('should process triggered "keypress" event. Case "Enter"', () => {
            const inputElement = createInputElement('rosa@miro.com');
            const addEmailMock = jest.fn();
            const storageMock = createStorageMock(addEmailMock);

            const {keyPressListener} = createInputListeners(inputElement, storageMock);
            inputElement.addEventListener('keypress', keyPressListener);
            simulateEvent.simulate(inputElement, 'keypress', {key: 'Enter'});

            expect(inputElement.value).toEqual('');
            expect(addEmailMock).toHaveBeenCalledWith('rosa@miro.com');
        });

        it('should process triggered "keypress" event. Case "Comma"', () => {
            const inputElement = createInputElement('daphne@miro.com');

            const addEmailMock = jest.fn();
            const storageMock = createStorageMock(addEmailMock);
            const {keyPressListener} = createInputListeners(inputElement, storageMock);
            inputElement.addEventListener('keypress', keyPressListener);
            simulateEvent.simulate(inputElement, 'keypress', {key: ','});

            expect(inputElement.value).toEqual('');
            expect(addEmailMock).toHaveBeenCalledWith('daphne@miro.com');
        });

        it('should process triggered "keypress" event. Case "Other key"', () => {
            const inputElement = createInputElement('choyin@miro.com');

            const addEmailMock = jest.fn();
            const storageMock = createStorageMock(addEmailMock);
            const {keyPressListener} = createInputListeners(inputElement, storageMock);
            inputElement.addEventListener('keypress', keyPressListener);
            simulateEvent.simulate(inputElement, 'keypress', {key: 'l'});

            expect(inputElement.value).toEqual('choyin@miro.com');
            expect(addEmailMock).not.toHaveBeenCalled();
        });
    });
    describe('pasteListener', () => {
        const invokePasteListener = (pasteListener, eventMock) => pasteListener(eventMock);

        it('should process triggered "paste" event. Case 1 for "Not IE browser"', () => {
            const inputElement = createInputElement('c');
            const addEmailMock = jest.fn();
            const storageMock = createStorageMock(addEmailMock);
            const {pasteListener} = createInputListeners(inputElement, storageMock);
            const preventDefault = jest.fn();
            const eventMock = {
                clipboardData: {
                    getData: (type) => {
                        if (type === 'text/plain') {
                            return 'choyin@miro.com,sara@miro.com';
                        }
                        return undefined;
                    }
                },
                preventDefault
            };
            invokePasteListener(pasteListener, eventMock);
            expect(preventDefault).toHaveBeenCalled();
            expect(inputElement.value).toEqual('');
            expect(addEmailMock.mock.calls).toEqual([['choyin@miro.com'], ['sara@miro.com']]);
        });
        it('should process triggered "paste" event. Case 2 for "Not IE browser"', () => {
            const inputElement = createInputElement('c');
            const addEmailMock = jest.fn();
            const storageMock = createStorageMock(addEmailMock);
            const {pasteListener} = createInputListeners(inputElement, storageMock);
            const preventDefault = jest.fn();
            const eventMock = {
                originalEvent: {clipboardData: {getData: () => undefined}},
                preventDefault
            };
            (window as any).clipboardData = {getData: () => undefined};
            invokePasteListener(pasteListener, eventMock);
            expect(preventDefault).toHaveBeenCalled();
            expect(inputElement.value).toEqual('c');
            expect(addEmailMock).not.toHaveBeenCalled();
        });
        it('should process triggered "paste" event. Case 1 for "IE browser"', () => {
            const inputElement = createInputElement('c');
            const addEmailMock = jest.fn();
            const storageMock = createStorageMock(addEmailMock);
            const {pasteListener} = createInputListeners(inputElement, storageMock);
            const preventDefault = jest.fn();
            (window as any).clipboardData = {
                getData: (type) => {
                    if (type === 'text') {
                        return 'choyin@miro.com,sara@miro.com,,';
                    }
                    return undefined;
                }
            };
            const eventMock = {preventDefault};
            invokePasteListener(pasteListener, eventMock);
            expect(preventDefault).toHaveBeenCalled();
            expect(inputElement.value).toEqual('');
            expect(addEmailMock.mock.calls).toEqual([['choyin@miro.com'], ['sara@miro.com']]);
        });
        it('should process triggered "paste" event. Case 2 for "IE browser"', () => {
            const inputElement = createInputElement('c');
            const addEmailMock = jest.fn();
            const storageMock = createStorageMock(addEmailMock);
            const {pasteListener} = createInputListeners(inputElement, storageMock);
            const preventDefault = jest.fn();
            (window as any).clipboardData = {getData: () => undefined};
            const eventMock = {preventDefault};
            invokePasteListener(pasteListener, eventMock);
            expect(preventDefault).toHaveBeenCalled();
            expect(inputElement.value).toEqual('c');
            expect(addEmailMock).not.toHaveBeenCalled();
        });
    });
});
