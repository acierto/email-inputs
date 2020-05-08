import DemoForm from '../../dsl/component/demo-form';
import EmailInputs from '../../dsl/component/email-inputs';

describe('Email inputs', () => {
    it('should display valid and invalid emails', () => {
        DemoForm.expectValidEmails(5);
        DemoForm.expectAllEmails(6);
    });

    it('should be possible to add a new random email', () => {
        DemoForm.addGeneratedEmail(7, 'generated1@miro.com');
        DemoForm.expectValidEmails(6);
    });

    it('should be possible to remove email', () => {
        DemoForm.removeLastEmail();
        EmailInputs.expectEmailNotPresent('generated1@miro.com');
    });

    it('should be possible to add emails on enter, blur or using comma', () => {
        DemoForm.expectAllEmails(6);
        EmailInputs.addNewEmailOnBlur('addedOnBlur@miro.com');
        EmailInputs.addNewEmailOnComma('addedOnComma@miro.com');
        EmailInputs.addNewEmailOnEnter('addedOnEnter@miro.com');
        DemoForm.expectAllEmails(9);
        DemoForm.removeLastEmail();
        DemoForm.removeLastEmail();
        DemoForm.removeLastEmail();
        DemoForm.expectAllEmails(6);
    });
});
