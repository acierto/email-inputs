export const createElement = (tagName, className = '', html = '', attributes = {}) => {
    const div = document.createElement(tagName);
    div.className = className;
    div.innerHTML = html;
    Object.keys(attributes).forEach((key) => {
        div.setAttribute(key, attributes[key]);
    });
    return div;
};
