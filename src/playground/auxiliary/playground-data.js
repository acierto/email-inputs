import {preGeneratedEmails1, preGeneratedEmails2} from './pregenerated-emails';

export const case1 = {
    classname: 'case1',
    emailsInputList: [{id: 'email-inputs'}]
};

export const case2 = {
    classname: 'case2',
    emailsInputList: [{
        id: 'email-inputs',
        initialData: preGeneratedEmails1
    }]
};

export const case3 = {
    classname: 'case3',
    emailsInputList: [{
        id: 'email-inputs',
        initialData: preGeneratedEmails2,
        placeholder: 'add more emails...'
    }]
};

export const case4 = {
    classname: 'case4',
    emailsInputList: [{
        id: 'more-people',
        initialData: preGeneratedEmails1,
        placeholder: 'add more people...'
    }, {
        id: 'more-emails',
        initialData: preGeneratedEmails2,
        placeholder: 'add more emails...'
    }]
};
