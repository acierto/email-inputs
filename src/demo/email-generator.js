let currentEmailInd = 0;

export const getNextEmail = () => {
    currentEmailInd += 1;
    return `generated${currentEmailInd}@miro.com`;
};
