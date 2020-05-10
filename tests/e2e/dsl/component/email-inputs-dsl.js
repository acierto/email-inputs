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

const typeNewEmail = (email) => Action.typeText(newEmailInputSelector, email);

const countAllEmails = () => ElementUtil.elementFinder(emailContainerSelector)
    .all(By.css('.email-input'))
    .count();
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

const addNewEmail = (email, specificAction = () => true) => {
    countAllEmails()
        .then((count) => {
            typeNewEmail(email);
            specificAction();
            findEmailByName(email);
            expectAllEmails(count + 1);
        });
};
const addNewEmailOnBlur = (email) => addNewEmail(email, () => Action.click(emailContainerSelector));
const addNewEmailOnComma = (email) => addNewEmail(`${email},`);
const addNewEmailOnEnter = (email) => addNewEmail(email, () => Action.clickEnter(newEmailInputSelector));

const clickToRemoveNthEmail = (nth) => Action.jsClick(nthEmailRemoveIconSelector(nth));
const expectEmailNotPresent = (email) => Expectation.notPresent(findEmailByName(email));
const expectEmailPresent = (email) => Expectation.present(findEmailByName(email));
const nthEmailIs = (nth, text) => Expectation.textEquals(nthEmailSelector(nth), text);
const isVisible = () => Expectation.displayed(componentSelector);
const removeNthEmail = (nth) => {
    countAllEmails()
        .then((count) => {
            const nthEmail = isDefined(nth) ? nth : count;
            clickToRemoveNthEmail(nthEmail);
            expectAllEmails(count - 1);
        });
};

const EmailInputsDsl = {
    addNewEmailOnBlur,
    addNewEmailOnComma,
    addNewEmailOnEnter,
    expectAllEmails,
    expectEmailNotPresent,
    expectEmailPresent,
    isVisible,
    nthEmailIs,
    removeNthEmail
};
export default EmailInputsDsl;
