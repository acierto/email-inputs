import {preGeneratedEmails1, preGeneratedEmails2} from './pregenerated-emails';

export const case1 = {emailsInputList: [{id: 'email-inputs'}]};

export const case2 = {
    emailsInputList: [{
        id: 'email-inputs',
        initialData: preGeneratedEmails1
    }]
};

export const case3 = {
    emailsInputList: [{
        id: 'email-inputs',
        initialData: preGeneratedEmails1,
        placeholder: 'add more emails...',
        showTitle: true,
        validators: [
            (email) => email.indexOf('v') === -1,
            (email) => email.length < 20,
            (email, allEmails) => allEmails.indexOf(email) === -1,
            (email, allEmails) => allEmails.length < 6
        ]
    }]
};

export const case4 = {
    emailsInputList: [{
        id: 'more-people',
        initialData: preGeneratedEmails1
    }, {
        id: 'more-emails',
        initialData: preGeneratedEmails2,
        showTitle: true
    }],
    styles: {
        formContentStyles: {
            'height': '304px',
            'max-height': '304px'
        },
        formWrapperStyles: {height: '400px'}
    }
};
