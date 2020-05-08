import './demo-menu.less';
import {createElement} from '../service/create-element';
import {DemoMenuOption} from './demo-menu-option';

const renderMenuContent = (rootElement, renderFn) => {
    const content = rootElement.querySelector('.demo-menu-content');
    if (content) {
        rootElement.removeChild(content);
    }
    const contentElement = createElement('div', 'demo-menu-content');
    rootElement.appendChild(contentElement);
    renderFn(contentElement);
};

const createOption = (rootElement, name, renderFn) => ({
    onClick: () => renderMenuContent(rootElement, renderFn),
    text: name
});

export const DemoMenu = (rootElement, options) => {
    const menuElement = createElement('div', 'demo-menu');
    const menuHeaderElement = createElement('div', 'demo-menu-header');
    rootElement.appendChild(menuElement);
    menuElement.appendChild(menuHeaderElement);

    Object.keys(options).forEach((optionKey) => {
        const option = options[optionKey];
        DemoMenuOption(menuHeaderElement, createOption(menuElement, optionKey, option.render, option.default));
        if (option.default) {
            renderMenuContent(menuElement, option.render);
        }
    });
};
