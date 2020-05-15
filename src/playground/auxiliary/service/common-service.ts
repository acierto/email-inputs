export const pathOr = (path: string[], defaultValue: any, object: object): any => {
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

export const getStyles = (path: string[], object: object): string => {
    const styles = pathOr(path, {}, object);
    return Object.keys(styles).reduce((acc, key) => [...acc, `${key}:${styles[key]}`], []).join(';');
};
