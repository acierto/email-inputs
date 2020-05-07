let currentId = 1;

export const getNextId = () => {
    currentId += 1;
    return currentId.toString();
};
