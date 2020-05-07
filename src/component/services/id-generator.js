let currentId = 0;

export const getNextId = () => {
    currentId += 1;
    return currentId.toString();
};
