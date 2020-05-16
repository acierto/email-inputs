import {NewEmailInputComponent} from '~/component/new-email-input/new-email-input-component';

describe('New email input component', () => {
    const storageMock = {
        addEmails: jest.fn(),
        getAllEmails: () => [],
        removeById: () => {},
        replaceAllEmails: () => {}
    };

    it('should render with default placeholder text', () => {
        expect(NewEmailInputComponent(storageMock).outerHTML)
            .toContain('placeholder="add more people..."');
    });

    it('should render with custom placeholder text', () => {
        expect(NewEmailInputComponent(storageMock, {placeholder: 'add more emails...'}).outerHTML)
            .toContain('placeholder="add more emails..."');
    });
});
