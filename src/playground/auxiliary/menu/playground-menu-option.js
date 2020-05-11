import {createButton} from '../service/create-element';
import styles from './playground-menu-option.less';

export const PlaygroundMenuOption = (rootElement, options) => {
    const {
        onClick,
        text
    } = options;

    const element = createButton(styles.playgroundMenuOption, text);
    rootElement.appendChild(element);

    element.addEventListener('click', (event) => {
        for (const child of rootElement.children) {
            child.classList.remove(styles.active);
        }
        element.classList.add(styles.active);
        onClick(event);
    });

    return element;
};
