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
        const {children} = rootElement;
        for (let ind = 0; ind < children.length; ind += 1) {
            children[ind].classList.remove(styles.active);
        }
        element.classList.add(styles.active);
        onClick(event);
    });

    return element;
};
