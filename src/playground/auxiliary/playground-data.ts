import {preGeneratedEmails1, preGeneratedEmails2} from './pregenerated-emails';
import {PlaygroundFormOptionsType} from "./form/playground-form-options-type";
import {EmailInput} from "../../component/email-input/email-input-type";

export const case1: PlaygroundFormOptionsType = {emailsInputList: [{id: 'email-inputs'}]};

export const case2: PlaygroundFormOptionsType = {
    emailsInputList: [{
        id: 'email-inputs',
        initialData: preGeneratedEmails1
    }]
};

export const case3: PlaygroundFormOptionsType = {
    emailsInputList: [{
        id: 'email-inputs',
        initialData: preGeneratedEmails1,
        placeholder: 'add more emails...',
        showTitle: true,
        validators: [
            (email: string) => email.indexOf('v') === -1,
            (email: string) => email.length < 20,
            (email: string, allEmails: EmailInput[]) =>
                allEmails.map((input: EmailInput) => input.email).indexOf(email) === -1,
            (email: string, allEmails: EmailInput[]) => allEmails.length < 6
        ]
    }]
};

export const case4: PlaygroundFormOptionsType = {
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
