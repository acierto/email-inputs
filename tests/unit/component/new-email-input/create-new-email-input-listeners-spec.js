import {createInputListeners} from '~/src/component/new-email-input/create-new-email-input-listeners';

describe('create-new-email-input-listeners', () => {
    describe('blurListener', () => {
        it('should process triggered "blur" event', () => {
            const elementMock = {value: 'sara@miro.com'};
            const addEmailMock = jest.fn();
            const storageMock = {addEmail: addEmailMock};
            const {blurListener} = createInputListeners(elementMock, storageMock);
            const eventMock = {target: {value: 'sara@miro.com'}};
            blurListener(eventMock);
            expect(elementMock).toEqual({value: ''});
            expect(addEmailMock).toHaveBeenCalledWith('sara@miro.com');
        });
    });
    describe('keyPressListener', () => {
        it('should process triggered "keypress" event. Case "Enter"', () => {
            const elementMock = {value: 'rosa@miro.com'};
            const addEmailMock = jest.fn();
            const storageMock = {addEmail: addEmailMock};
            const {keyPressListener} = createInputListeners(elementMock, storageMock);

            const preventDefault = jest.fn();
            const eventMock = {
                key: 'Enter',
                preventDefault: preventDefault,
                target: {value: 'rosa@miro.com'}
            };
            keyPressListener(eventMock);

            expect(preventDefault).not.toHaveBeenCalled();
            expect(elementMock).toEqual({value: ''});
            expect(addEmailMock).toHaveBeenCalledWith('rosa@miro.com');
        });

        it('should process triggered "keypress" event. Case "Comma"', () => {
            const elementMock = {value: 'daphne@miro.com'};
            const addEmailMock = jest.fn();
            const storageMock = {addEmail: addEmailMock};
            const {keyPressListener} = createInputListeners(elementMock, storageMock);

            const preventDefault = jest.fn();
            const eventMock = {
                key: ',',
                preventDefault: preventDefault,
                target: {value: 'daphne@miro.com'}
            };
            keyPressListener(eventMock);

            expect(preventDefault).toHaveBeenCalled();
            expect(elementMock).toEqual({value: ''});
            expect(addEmailMock).toHaveBeenCalledWith('daphne@miro.com');
        });

        it('should process triggered "keypress" event. Case "Other key"', () => {
            const elementMock = {value: 'choyin@miro.com'};
            const addEmailMock = jest.fn();
            const storageMock = {addEmail: addEmailMock};
            const {keyPressListener} = createInputListeners(elementMock, storageMock);

            const preventDefault = jest.fn();
            const eventMock = {
                key: 'l',
                preventDefault: preventDefault,
                target: {value: 'choyin@miro.com'}
            };
            keyPressListener(eventMock);

            expect(preventDefault).not.toHaveBeenCalled();
            expect(elementMock).toEqual({value: 'choyin@miro.com'});
            expect(addEmailMock).not.toHaveBeenCalled();
        });
    });
    describe('pasteListener', () => {
        it('should process triggered "paste" event. Case 1 for "Not IE browser"', () => {
            const elementMock = {value: 'c'};
            const addEmailMock = jest.fn();
            const storageMock = {addEmail: addEmailMock};
            const {pasteListener} = createInputListeners(elementMock, storageMock);
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
            pasteListener(eventMock);
            expect(preventDefault).toHaveBeenCalled();
            expect(elementMock).toEqual({value: ''});
            expect(addEmailMock.mock.calls).toEqual([['choyin@miro.com'], ['sara@miro.com']]);
        });
        it('should process triggered "paste" event. Case 2 for "Not IE browser"', () => {
            const elementMock = {value: 'c'};
            const addEmailMock = jest.fn();
            const storageMock = {addEmail: addEmailMock};
            const {pasteListener} = createInputListeners(elementMock, storageMock);
            const preventDefault = jest.fn();
            const eventMock = {
                originalEvent: {
                    clipboardData: {
                        getData: (type) => {
                            if (type === 'text/plain') {
                                return 'choyin@miro.com,sara@miro.com';
                            }
                            return undefined;
                        }
                    }
                },
                preventDefault
            };
            pasteListener(eventMock);
            expect(preventDefault).toHaveBeenCalled();
            expect(elementMock).toEqual({value: ''});
            expect(addEmailMock.mock.calls).toEqual([['choyin@miro.com'], ['sara@miro.com']]);
        });
        it('should process triggered "paste" event. Case 3 for "Not IE browser"', () => {
            const elementMock = {value: 'c'};
            const addEmailMock = jest.fn();
            const storageMock = {addEmail: addEmailMock};
            const {pasteListener} = createInputListeners(elementMock, storageMock);
            const preventDefault = jest.fn();
            const eventMock = {
                originalEvent: {clipboardData: {getData: (type) => undefined}},
                preventDefault
            };
            pasteListener(eventMock);
            expect(preventDefault).toHaveBeenCalled();
            expect(elementMock).toEqual({value: 'c'});
            expect(addEmailMock).not.toHaveBeenCalled();
        });
        it('should process triggered "paste" event. Case 1 for "IE browser"', () => {
            const elementMock = {value: 'c'};
            const addEmailMock = jest.fn();
            const storageMock = {addEmail: addEmailMock};
            const {pasteListener} = createInputListeners(elementMock, storageMock);
            const preventDefault = jest.fn();
            window.clipboardData = {
                getData: (type) => {
                    if (type === 'text') {
                        return 'choyin@miro.com,sara@miro.com,,';
                    }
                    return undefined;
                }
            };
            const eventMock = {preventDefault};
            pasteListener(eventMock);
            expect(preventDefault).toHaveBeenCalled();
            expect(elementMock).toEqual({value: ''});
            expect(addEmailMock.mock.calls).toEqual([['choyin@miro.com'], ['sara@miro.com']]);
        });
        it('should process triggered "paste" event. Case 2 for "IE browser"', () => {
            const elementMock = {value: 'c'};
            const addEmailMock = jest.fn();
            const storageMock = {addEmail: addEmailMock};
            const {pasteListener} = createInputListeners(elementMock, storageMock);
            const preventDefault = jest.fn();
            window.clipboardData = {getData: () => undefined};
            const eventMock = {preventDefault};
            pasteListener(eventMock);
            expect(preventDefault).toHaveBeenCalled();
            expect(elementMock).toEqual({value: 'c'});
            expect(addEmailMock).not.toHaveBeenCalled();
        });
    });
});
