import './index.less';
import {DemoForm} from './demo/demo-form';
const rootElement = document.querySelector('#root');

const demoForm = DemoForm(rootElement);
rootElement.innerHTML = demoForm.render();
demoForm.postRender();
