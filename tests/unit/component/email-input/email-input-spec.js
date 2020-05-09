import {EmailInput} from '~/src/component/email-input/email-input';

describe('Email input', () => {
    it('should properly display valid email', () => {
        const component = EmailInput({email: 'john@miro.com', id: '1', valid: true});
        expect(component.querySelector('.email').innerHTML).toBe('john@miro.com');
        expect(component.querySelector('.remove-icon')).toBeDefined();
        expect(component.outerHTML.indexOf('email-input valid')).not.toBe(-1);
        expect(component.outerHTML.indexOf('data-id="1"')).not.toBe(-1);
    });

    it('should properly display invalid email', () => {
        const component = EmailInput({email: 'john', id: '1', valid: false});
        expect(component.querySelector('.email').innerHTML).toBe('john');
        expect(component.querySelector('.remove-icon')).toBeDefined();
        expect(component.outerHTML.indexOf('email-input invalid')).not.toBe(-1);
        expect(component.outerHTML.indexOf('data-id="1"')).not.toBe(-1);
    });
});
