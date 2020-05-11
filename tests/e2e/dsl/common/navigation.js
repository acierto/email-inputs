import {
    Action,
    XPath
} from 'protractor-base-dsl';

const menuHeaderSelector = '.playground-menu__playground-menu-header';
const buttonSelector = (buttonName) => XPath.withButtonContains(`${menuHeaderSelector}`, buttonName);

class Navigation {
    static openCase(num) {
        Action.jsClick(buttonSelector(`Case ${num}`));
    }
}

export default Navigation;
