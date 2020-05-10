import './playground-menu.less';
import {createDiv} from '../service/create-element';
import {PlaygroundMenuOption as MenuOption} from './playground-menu-option';

const renderMenuContent = (rootElement, renderFn) => {
    const content = rootElement.querySelector('.playground-menu-content');
    if (content) {
        rootElement.removeChild(content);
    }
    const contentElement = createDiv('playground-menu-content');
    rootElement.appendChild(contentElement);
    renderFn(contentElement);
};

const createOptions = (rootElement, text, renderFn) => ({
    onClick: () => renderMenuContent(rootElement, renderFn),
    text
});

export const PlaygroundMenu = (rootElement, options) => {
    const menuElement = createDiv('playground-menu');
    const menuHeaderElement = createDiv('playground-menu-header');
    rootElement.appendChild(menuElement);
    menuElement.appendChild(menuHeaderElement);

    Object.keys(options).forEach((optionKey) => {
        const option = options[optionKey];
        const menuOption = MenuOption(menuHeaderElement, createOptions(menuElement, optionKey, option.render));
        if (option.default) {
            renderMenuContent(menuElement, option.render);
            menuOption.classList.add('active');
        }
    });
};
