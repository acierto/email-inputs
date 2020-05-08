import {Action, Alert} from 'protractor-base-dsl';
import EmailInputs from './email-inputs';

const demoFormSelector = '#root .demo-form';
const addEmailButtonSelector = `${demoFormSelector} .add-email`;
const getEmailsCountButtonSelector = `${demoFormSelector} .get-emails-count`;

const clickAddEmailButton = () => Action.jsClick(addEmailButtonSelector);
const clickGetEmailsCountButton = () => Action.jsClick(getEmailsCountButtonSelector);

const addGeneratedEmail = (expectedNewCount, expectedNewEmailName) => {
    clickAddEmailButton();
    EmailInputs.expectAllEmails(expectedNewCount);
    EmailInputs.nthEmailIs(expectedNewCount, expectedNewEmailName);
};

const expectValidEmails = (count) => {
    EmailInputs.isVisible();
    clickGetEmailsCountButton();
    Alert.textEquals(count);
    Alert.accept();
};

const expectAllEmails = (count) => {
    EmailInputs.isVisible();
    EmailInputs.expectAllEmails(count);
}

const removeLastEmail = () => {
    EmailInputs.removeNthEmail();
}

const DemoForm = {
    addGeneratedEmail,
    clickGetEmailsCountButton,
    expectAllEmails,
    expectValidEmails,
    removeLastEmail
};

export default DemoForm;
