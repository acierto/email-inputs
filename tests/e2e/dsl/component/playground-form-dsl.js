import {Action, Alert} from 'protractor-base-dsl';
import EmailsInputDsl from './emails-input-dsl';

const demoFormSelector = '#root .playground-form__playground-form';
const addEmailButtonSelector = `${demoFormSelector} .add-email`;
const getEmailsCountButtonSelector = `${demoFormSelector} .get-emails-count`;

const clickAddEmailButton = () => Action.jsClick(addEmailButtonSelector);
const clickGetEmailsCountButton = () => Action.jsClick(getEmailsCountButtonSelector);

const addGeneratedEmail = (expectedNewCount, expectedNewEmailName) => {
    clickAddEmailButton();
    EmailsInputDsl.expectAllEmails(expectedNewCount);
    EmailsInputDsl.nthEmailIs(expectedNewCount, expectedNewEmailName);
};

const expectValidEmails = (count) => {
    EmailsInputDsl.isVisible();
    clickGetEmailsCountButton();
    Alert.textEquals(count);
    Alert.accept();
};

const expectAllEmails = (count) => {
    EmailsInputDsl.isVisible();
    EmailsInputDsl.expectAllEmails(count);
};

const removeLastEmail = () => {
    EmailsInputDsl.removeNthEmail();
};

const PlaygroundFormDsl = {
    addGeneratedEmail,
    clickGetEmailsCountButton,
    expectAllEmails,
    expectValidEmails,
    removeLastEmail
};

export default PlaygroundFormDsl;
