export const testDataList = ['john@miro.com', 'invalid.email',
    'mike@miro.com', 'alex@miro.com', 'paul@miro.com', 'martijn@miro.com',
    `${"really".repeat(50)}longname@miro.com`,
    ...([ ...Array(1000).keys() ].map( ind => `generated${ind}@miro.com`))];
