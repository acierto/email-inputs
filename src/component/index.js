export class EmailInputs {
    render() {
        const content = 'Input component';
        return `<div class="email-inputs">${content}</div>`;
    }
}

const emailInputsComponent = new EmailInputs();
document.querySelector('#email-inputs').innerHTML = emailInputsComponent.render();
