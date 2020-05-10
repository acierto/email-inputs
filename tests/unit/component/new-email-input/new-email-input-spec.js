import {NewEmailInput} from '~/src/component/new-email-input/new-email-input';

describe('new-email-input', () => {
    it('should render with default placeholder text', () => {
        const addEmailMock = jest.fn();
        const storageMock = {addEmail: addEmailMock};
        expect(NewEmailInput(document.body, storageMock).render())
            .toContain("placeholder=\"add more people...\"");
    });

    it('should render with custom placeholder text', () => {
        const addEmailMock = jest.fn();
        const storageMock = {addEmail: addEmailMock};
        expect(NewEmailInput(document.body, storageMock, {placeholder: 'add more emails...'}).render())
            .toContain("placeholder=\"add more emails...\"");
    });
});
