let currentEmailInd = 0;

export const getNextEmail = (): string => {
    currentEmailInd += 1;
    return `generated${currentEmailInd}@miro.com`;
};
