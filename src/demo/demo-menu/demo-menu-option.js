import './demo-menu-option.less';
import {createButton} from '../service/create-element';

export const DemoMenuOption = (rootElement, options) => {
    const {
        onClick,
        text
    } = options;

    const element = createButton('demo-menu-option', text);
    rootElement.appendChild(element);

    element.addEventListener('click', (event) => {
        for (const child of rootElement.children) {
            child.classList.remove('active');
        }
        element.classList.add('active');
        onClick(event);
    });

    return element;
};
