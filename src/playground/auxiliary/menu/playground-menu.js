import {createDiv} from '../service/create-element';
import styles from './playground-menu.less';
import optionStyles from './playground-menu-option.less';
import {PlaygroundMenuOption as MenuOption} from './playground-menu-option';

const renderMenuContent = (rootElement, renderFn) => {
    const content = rootElement.querySelector(`.${styles.playgroundMenuContent}`);
    if (content) {
        rootElement.removeChild(content);
    }
    const contentElement = createDiv(styles.playgroundMenuContent);
    rootElement.appendChild(contentElement);
    renderFn(contentElement);
};

const createOptions = (rootElement, text, renderFn) => ({
    onClick: () => renderMenuContent(rootElement, renderFn),
    text
});

export const PlaygroundMenu = (rootElement, options) => {
    const menuElement = createDiv(styles.playgroundMenu);
    const menuHeaderElement = createDiv(styles.playgroundMenuHeader);
    rootElement.appendChild(menuElement);
    menuElement.appendChild(menuHeaderElement);

    Object.keys(options).forEach((optionKey) => {
        const option = options[optionKey];
        const menuOption = MenuOption(menuHeaderElement, createOptions(menuElement, optionKey, option.render));
        if (option.default) {
            renderMenuContent(menuElement, option.render);
            menuOption.classList.add(optionStyles.active);
        }
    });
};
