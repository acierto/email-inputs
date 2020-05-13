let currentId = 0;

export const getNextId = (): string => {
    currentId += 1;
    return currentId.toString();
};
