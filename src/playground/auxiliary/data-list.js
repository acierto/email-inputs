const arrayOf = (num) => Array.apply(1, {length: num});
const mapNTimes = (num, func) => arrayOf(num).map((_, ind) => func(ind));
const repeat = (num, text) => arrayOf(num).reduce((acc) => text + acc, '');

export const testDataList1 = [
    'john@miro.com', 'invalid.email',
    'mike@miro.com', 'alex@miro.com', 'paul@miro.com', 'martijn@miro.com'
];

const preGeneratedEmails = mapNTimes(1000, (ind) => `preGenerated${ind}@miro.com`);

export const testDataList2 = [
    'john@miro.com', 'invalid.email',
    'mike@miro.com', 'alex@miro.com', 'paul@miro.com', 'martijn@miro.com',
    `${repeat(50, 'really')}longname@miro.com`,
    ...preGeneratedEmails
];
