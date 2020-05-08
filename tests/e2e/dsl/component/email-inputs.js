import {
    Action,
    ElementUtil,
    Expectation
} from 'protractor-base-dsl';
import {isDefined} from '../../services/common-service';

const componentSelector = '#email-inputs';
const emailContainerSelector = `${componentSelector} .email-container`;
const emailSelector = `${emailContainerSelector} .email-input`;
const newEmailInputSelector = `${emailContainerSelector} .new-email-input`;
const nthEmailSelector = (nth) => `${emailSelector}:nth-child(${nth})`;
const nthEmailRemoveIconSelector = (nth) => `${nthEmailSelector(nth)} .remove-icon`;

const expectAllEmails = (count) => Expectation.count(emailSelector, count);

const findEmailByName = (email) =>
    ElementUtil.elementFinder(emailContainerSelector)
        .all(By.css('.email-input'))
        .filter((elem) =>
            elem.getText()
                .then(
                    (text) => text === email)
        )
        .first();

const expectEmailNotPresent = (email) => Expectation.notPresent(findEmailByName(email));

const expectEmailPresent = (email) => Expectation.present(findEmailByName(email));

const nthEmailIs = (nth, text) => Expectation.textEquals(nthEmailSelector(nth), text);

const isVisible = () => Expectation.displayed(componentSelector);

const typeNewEmail = (email) => Action.typeText(newEmailInputSelector, email);

const clickToRemoveNthEmail = (nth) => Action.jsClick(nthEmailRemoveIconSelector(nth));

const addNewEmailOnEnter = (email) => {
    typeNewEmail(email);
    Action.clickEnter(newEmailInputSelector);
    findEmailByName(email);
}

const addNewEmailOnComma = (email) => {
    typeNewEmail(`${email},`);
    findEmailByName(email);
}

const addNewEmailOnBlur = (email) => {
    typeNewEmail(email);
    Action.click(emailContainerSelector);
    findEmailByName(email);
}

const removeNthEmail = (nth) => {
    ElementUtil.elementFinder(emailContainerSelector)
        .all(By.css('.email-input'))
        .count()
        .then((count) => {
            const nthEmail = isDefined(nth) ? nth : count;
            clickToRemoveNthEmail(nthEmail);
            expectAllEmails(count - 1);
        });
};

const EmailInputs = {
    addNewEmailOnBlur,
    addNewEmailOnComma,
    addNewEmailOnEnter,
    expectAllEmails,
    expectEmailPresent,
    expectEmailNotPresent,
    isVisible,
    nthEmailIs,
    removeNthEmail
};
export default EmailInputs;
