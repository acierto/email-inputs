import {PlaygroundForm} from './auxiliary/form/playground-form';
import {PlaygroundMenu} from './auxiliary/menu/playground-menu';
import {case1, case2, case3} from './auxiliary/playground-data';
import './playground.less';

export const Playground = () => {
    const rootElement = document.querySelector('#root');

    PlaygroundMenu(rootElement, {
        'Case 1': {
            default: true,
            render: (parentElement) => PlaygroundForm(parentElement, case1)
        },
        'Case 2': {render: (parentElement) => PlaygroundForm(parentElement, case2)},
        'Case 3': {render: (parentElement) => PlaygroundForm(parentElement, case3)}
    });
};
