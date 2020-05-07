let currentEmailInd = 0;

export const getNextEmail = () => {
    currentEmailInd++;
    return `generated${currentEmailInd}@miro.com`;
}
