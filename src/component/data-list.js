export const testDataList1 = [
    'john@miro.com', 'invalid.email',
    'mike@miro.com', 'alex@miro.com', 'paul@miro.com', 'martijn@miro.com'
];

const preGeneratedEmails = [...Array(1000).keys()].map((ind) => `preGenerated${ind}@miro.com`);

export const testDataList2 = [
    'john@miro.com', 'invalid.email',
    'mike@miro.com', 'alex@miro.com', 'paul@miro.com', 'martijn@miro.com',
    `${'really'.repeat(50)}longname@miro.com`,
    ...preGeneratedEmails
];
