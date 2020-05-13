import {PlaygroundForm} from './auxiliary/form/playground-form';
import {PlaygroundMenu} from './auxiliary/menu/playground-menu';
import {case1, case2, case3, case4} from './auxiliary/playground-data';
import './playground.less';

export const Playground = () => {
    const rootElement: HTMLElement = document.querySelector('#root');

    PlaygroundMenu(rootElement, {
        'Case 1': {
            default: true,
            render: (parentElement: HTMLElement) => PlaygroundForm(parentElement, case1)
        },
        'Case 2': {render: (parentElement: HTMLElement) => PlaygroundForm(parentElement, case2)},
        'Case 3': {render: (parentElement: HTMLElement) => PlaygroundForm(parentElement, case3)},
        'Case 4': {render: (parentElement: HTMLElement) => PlaygroundForm(parentElement, case4)}
    });
};
