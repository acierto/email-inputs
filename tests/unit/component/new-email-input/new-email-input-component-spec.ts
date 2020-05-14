import {NewEmailInputComponent} from '~/component/new-email-input/new-email-input-component';

describe('New email input component', () => {
    const addEmailMock = jest.fn();
    const storageMock = {
        addEmail: addEmailMock,
        getAllEmails: () => [],
        removeById: () => {},
        replaceAllEmails: () => {}
    };

    it('should render with default placeholder text', () => {
        expect(NewEmailInputComponent(document.body, storageMock).render())
            .toContain('placeholder="add more people..."');
    });

    it('should render with custom placeholder text', () => {
        expect(NewEmailInputComponent(document.body, storageMock, {placeholder: 'add more emails...'}).render())
            .toContain('placeholder="add more emails..."');
    });
});
