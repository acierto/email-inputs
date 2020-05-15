import {EmailInput} from '~/component/email-input/email-input-type';
import {Storage} from '~/component/storage-type';

export const validEmail = (id: number | string, name: string): EmailInput => ({
    email: `${name}@miro.com`,
    id: id.toString(),
    valid: true
});

const doNothing = () => {
};

export const createStorageMock = (addEmail = doNothing): Storage => ({
    addEmail,
    getAllEmails: () => [],
    removeById: jest.fn(),
    replaceAllEmails: () => {
    }
});
