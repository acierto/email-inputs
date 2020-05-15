import {createButton} from '../service/create-element';
import styles from './playground-menu-option.less';
import {PlaygroundMenuOptionOptions} from './playground-menu-option-options-type';

export const PlaygroundMenuOption = (rootElement: HTMLElement,
                                     options: PlaygroundMenuOptionOptions): HTMLButtonElement => {
    const {
        onClick,
        text
    } = options;

    const element = createButton(styles.playgroundMenuOption, text);
    rootElement.appendChild(element);

    element.addEventListener('click', (event: MouseEvent): void => {
        for (const child of rootElement.children) {
            child.classList.remove(styles.active);
        }
        element.classList.add(styles.active);
        onClick(event);
    });

    return element;
};
