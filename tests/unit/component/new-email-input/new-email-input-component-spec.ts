import {NewEmailInput} from '~/component/new-email-input/new-email-input';

describe('New email input component', () => {
    const addEmailMock = jest.fn();
    const storageMock = {
        addEmail: addEmailMock,
        getAllEmails: () => [],
        removeById: () => {},
        replaceAllEmails: () => {}
    };

    it('should render with default placeholder text', () => {
        expect(NewEmailInput(document.body, storageMock).render())
            .toContain('placeholder="add more people..."');
    });

    it('should render with custom placeholder text', () => {
        expect(NewEmailInput(document.body, storageMock, {placeholder: 'add more emails...'}).render())
            .toContain('placeholder="add more emails..."');
    });
});
