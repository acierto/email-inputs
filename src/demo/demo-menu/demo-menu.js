import './demo-menu.less';
import {createDiv} from '../service/create-element';
import {DemoMenuOption} from './demo-menu-option';

const renderMenuContent = (rootElement, renderFn) => {
    const content = rootElement.querySelector('.demo-menu-content');
    if (content) {
        rootElement.removeChild(content);
    }
    const contentElement = createDiv('demo-menu-content');
    rootElement.appendChild(contentElement);
    renderFn(contentElement);
};

const createOption = (rootElement, text, renderFn) => ({
    onClick: () => renderMenuContent(rootElement, renderFn),
    text
});

export const DemoMenu = (rootElement, options) => {
    const menuElement = createDiv('demo-menu');
    const menuHeaderElement = createDiv('demo-menu-header');
    rootElement.appendChild(menuElement);
    menuElement.appendChild(menuHeaderElement);

    Object.keys(options).forEach((optionKey) => {
        const option = options[optionKey];
        const demoMenuOption = DemoMenuOption(menuHeaderElement, createOption(menuElement, optionKey, option.render));
        if (option.default) {
            renderMenuContent(menuElement, option.render);
            demoMenuOption.classList.add('active');
        }
    });
};
