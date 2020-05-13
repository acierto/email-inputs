const createElement = (tagName: string, className: string = '', html: string = ''): HTMLElement => {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = html;
    return element;
};

export const createButton = (className: string, html?: string): HTMLButtonElement =>
    createElement('button', className, html) as HTMLButtonElement;

export const createDiv = (className: string, html?: string): HTMLDivElement =>
    createElement('div', className, html) as HTMLDivElement;
