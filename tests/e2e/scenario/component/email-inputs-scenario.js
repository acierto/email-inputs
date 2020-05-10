import PlaygroundFormDsl from '../../dsl/component/playground-form-dsl';
import EmailInputsDsl from '../../dsl/component/email-inputs-dsl';
import Navigation from '../../dsl/common/navigation';

describe('Email inputs', () => {
    beforeAll(() => {
        Navigation.openCase(2);
    })
    it('should display valid and invalid emails', () => {
        PlaygroundFormDsl.expectValidEmails(5);
        PlaygroundFormDsl.expectAllEmails(6);
    });

    it('should be possible to add and remove a new random email', () => {
        PlaygroundFormDsl.addGeneratedEmail(7, 'generated1@miro.com');
        PlaygroundFormDsl.expectValidEmails(6);
        PlaygroundFormDsl.removeLastEmail();
        EmailInputsDsl.expectEmailNotPresent('generated1@miro.com');
    });

    it('should be possible to add emails on blur', () => {
        EmailInputsDsl.addNewEmailOnBlur('addedOnBlur@miro.com');
        PlaygroundFormDsl.removeLastEmail();
    });

    it('should be possible to add emails on comma', () => {
        EmailInputsDsl.addNewEmailOnComma('addedOnComma@miro.com');
        PlaygroundFormDsl.removeLastEmail();
    });

    it('should be possible to add emails on enter', () => {
        EmailInputsDsl.addNewEmailOnEnter('addedOnEnter@miro.com');
        PlaygroundFormDsl.removeLastEmail();
    });
});
