import {validEmail} from '../../helpers/objects-creator';
import {EmailsInput} from '~/component/emails-input/emails-input-component';

describe('Emails input component', () => {
    afterEach(() => {
        for (const child of document.body.children) {
            document.body.removeChild(child);
        }
    });

    it('should properly work all API methods of the component', () => {
        const email1 = validEmail(1, 'marieke');
        const email2 = validEmail(2, 'andreas');

        const expectedLastReceivedNotificationMessage = {
            added: [email1, email2],
            inputs: [email1, email2],
            removed: [],
            updated: []
        };

        const listener = jest.fn();
        const componentApi = EmailsInput(document.body, {placeholder: 'type here...'});
        expect(componentApi.getAllEmails()).toEqual([]);
        const unsubscribe = componentApi.subscribe(listener);
        componentApi.replaceAll([email1.email, email2.email]);
        expect(componentApi.getAllEmails()).toEqual([email1, email2]);

        expect(listener).toHaveBeenCalledWith(expectedLastReceivedNotificationMessage);
        unsubscribe();
        componentApi.replaceAll([email1.email]);
        expect(listener).toHaveBeenCalledWith(expectedLastReceivedNotificationMessage);
    });

    it('should properly render elements and remove them', () => {
        const email1 = validEmail(1, 'robert');
        const email2 = validEmail(2, 'ronald');
        const email3 = validEmail(3, 'roland');

        const componentApi = EmailsInput(document.body, {placeholder: 'one more?'});
        componentApi.replaceAll([email1.email, email2.email, email3.email]);

        const component = document.body.querySelector('.emailsInput');
        expect(component.querySelector('.newEmailInput')).toBeDefined();

        const emailInputList = [...component.querySelectorAll('.emailInput')];
        expect(emailInputList.length).toBe(3);
        expect(emailInputList.map((emailInput) => emailInput.querySelector('.email').innerHTML))
            .toEqual([email1.email, email2.email, email3.email]);
    });

    it('should update emails and keep them in order defined by the user', () => {
        const email1 = validEmail(1, 'robert');
        const email2 = validEmail(2, 'ronald');
        const email3 = validEmail(3, 'roland');

        const componentApi = EmailsInput(document.body, {placeholder: 'one more?'});
        componentApi.replaceAll([email1.email, email2.email, email3.email]);
        componentApi.replaceAll([email3.email, email2.email, email1.email]);

        const component = document.body.querySelector('.emailsInput');
        expect(component.querySelector('.newEmailInput')).toBeDefined();

        const emailInputList = [...component.querySelectorAll('.emailInput')];
        expect(emailInputList.length).toBe(3);
        expect(emailInputList.map((emailInput) => emailInput.querySelector('.email').innerHTML))
            .toEqual([email3.email, email2.email, email1.email]);
    });

    it('should warn if no root element provided', () => {
        console.warn = jest.fn();
        EmailsInput(null);
        expect(console.warn).toHaveBeenCalledWith('The root element for "emails-input" has not found.');
    });
});
