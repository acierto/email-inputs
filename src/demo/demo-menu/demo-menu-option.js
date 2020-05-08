import './demo-menu-option.less';
import {createElement} from '../service/create-element';

export const DemoMenuOption = (rootElement, options) => {
    const {
        onClick,
        text
    } = options;

    const render = () => `${text}`;

    const element = createElement('button', 'demo-menu-option', render());
    element.addEventListener('click', onClick);

    rootElement.appendChild(element);
};
