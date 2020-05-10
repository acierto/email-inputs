import {PlaygroundForm} from './auxiliary/form/playground-form';
import {PlaygroundMenu} from './auxiliary/menu/playground-menu';
import {testDataList1, testDataList2} from './auxiliary/data-list';
import './playground.less';

export const Playground = () => {
    const rootElement = document.querySelector('#root');

    PlaygroundMenu(rootElement, {
        'Demo 1': {
            default: true,
            render: (parentElement) => PlaygroundForm(parentElement, {initialData: testDataList1})
        },
        'Demo 2': {render: (parentElement) => PlaygroundForm(parentElement, {initialData: testDataList2})}
    });
};
