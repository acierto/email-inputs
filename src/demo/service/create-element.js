const createElement = (tagName, className = '', html = '') => {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = html;
    return element;
};

export const createButton = (className, html) => createElement('button', className, html);
export const createDiv = (className, html) => createElement('div', className, html);
