import './index.less';
import {DemoForm} from './demo/demo-form/demo-form';
import {DemoMenu} from './demo/demo-menu/demo-menu';
import {testDataList1, testDataList2} from './demo/data-list';

const rootElement = document.querySelector('#root');

DemoMenu(rootElement, {
    'Demo 1': {
        default: true,
        render: (parentElement) => DemoForm(parentElement, {initialData: testDataList1})
    },
    'Demo 2': {render: (parentElement) => DemoForm(parentElement, {initialData: testDataList2})}
});
