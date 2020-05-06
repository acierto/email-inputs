import {Expectation} from 'protractor-base-dsl';

describe('Email inputs', () => {
    const componentCssSelector = '#email-inputs';
    it('should display email inputs', () => {
        Expectation.displayed(componentCssSelector);
    });
});
