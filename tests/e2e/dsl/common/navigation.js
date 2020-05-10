import {
    Action,
    XPath
} from 'protractor-base-dsl';

const menuHeaderSelector = '.playground-menu-header';
const buttonSelector = (buttonName) => XPath.withButtonContains(`${menuHeaderSelector}`, buttonName);

class Navigation {
    static openCase(n) {
        Action.jsClick(buttonSelector(`Case ${n}`))
    }
}

export default Navigation;
global.Navigation = Navigation;
