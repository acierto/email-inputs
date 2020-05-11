export const pathOr = (path, defaultValue, object) => {
    let current = {...object};

    path.forEach((key) => {
        if (current === undefined || current[key] === undefined) {
            current = undefined;
        } else {
            current = current[key];
        }
    });

    return current || defaultValue;
};

export const getStyles = (path, object) => {
    const styles = pathOr(path, {}, object);
    return Object.keys(styles).reduce((acc, key) => [...acc, `${key}:${styles[key]}`], []).join(';');
};
