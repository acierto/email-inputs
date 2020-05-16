import {EmailInput} from '~/component/email-input/email-input-type';
import {Storage} from '~/component/storage-type';

export const validEmail = (id: number | string, name: string): EmailInput => ({
    email: `${name}@miro.com`,
    id: id.toString(),
    valid: true
});

const doNothing = () => {
};

export const createStorageMock = (addEmails = doNothing): Storage => ({
    addEmails,
    getAllEmails: () => [],
    removeById: jest.fn(),
    replaceAllEmails: () => {
    }
});
