import {Action, Alert} from 'protractor-base-dsl';
import EmailInputsDsl from './email-inputs-dsl';

const demoFormSelector = '#root .playground-form';
const addEmailButtonSelector = `${demoFormSelector} .add-email`;
const getEmailsCountButtonSelector = `${demoFormSelector} .get-emails-count`;

const clickAddEmailButton = () => Action.jsClick(addEmailButtonSelector);
const clickGetEmailsCountButton = () => Action.jsClick(getEmailsCountButtonSelector);

const addGeneratedEmail = (expectedNewCount, expectedNewEmailName) => {
    clickAddEmailButton();
    EmailInputsDsl.expectAllEmails(expectedNewCount);
    EmailInputsDsl.nthEmailIs(expectedNewCount, expectedNewEmailName);
};

const expectValidEmails = (count) => {
    EmailInputsDsl.isVisible();
    clickGetEmailsCountButton();
    Alert.textEquals(count);
    Alert.accept();
};

const expectAllEmails = (count) => {
    EmailInputsDsl.isVisible();
    EmailInputsDsl.expectAllEmails(count);
};

const removeLastEmail = () => {
    EmailInputsDsl.removeNthEmail();
};

const PlaygroundFormDsl = {
    addGeneratedEmail,
    clickGetEmailsCountButton,
    expectAllEmails,
    expectValidEmails,
    removeLastEmail
};

export default PlaygroundFormDsl;
