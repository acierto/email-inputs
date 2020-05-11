import {EmailInput} from '~/src/component/email-input/email-input';

describe('Email input', () => {
    it('should properly display valid email', () => {
        const component = EmailInput({email: 'john@miro.com', id: '1', valid: true});
        expect(component.querySelector('.email').innerHTML).toBe('john@miro.com');
        expect(component.querySelector('.remove-icon')).toBeDefined();
        expect(component.outerHTML.indexOf('emailInput valid')).not.toBe(-1);
        expect(component.outerHTML.indexOf('data-id="1"')).not.toBe(-1);
    });

    it('should properly display invalid email', () => {
        const component = EmailInput({email: 'john', id: '1', valid: false});
        expect(component.querySelector('.email').innerHTML).toBe('john');
        expect(component.querySelector('.removeIcon')).toBeDefined();
        expect(component.outerHTML.indexOf('emailInput invalid')).not.toBe(-1);
        expect(component.outerHTML.indexOf('data-id="1"')).not.toBe(-1);
    });

    it('should be possible to see title', () => {
        const component = EmailInput({email: 'john@miro.com', id: '1', valid: true}, {showTitle: true});
        expect(component.querySelector('.email').outerHTML).toContain('title="john@miro.com"');
        expect(component.querySelector('.removeIcon')).toBeDefined();
        expect(component.outerHTML.indexOf('emailInput valid')).not.toBe(-1);
        expect(component.outerHTML.indexOf('data-id="1"')).not.toBe(-1);
    });
});
