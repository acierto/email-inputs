import './demo-menu-option.less';
import {createElement} from '../service/create-element';

export const DemoMenuOption = (rootElement, options) => {
    const {
        onClick,
        text
    } = options;

    const element = createElement('button', 'demo-menu-option', text);
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
