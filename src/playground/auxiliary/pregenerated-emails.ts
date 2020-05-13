const arrayOf = (num: number): any[] => Array(num).fill(null).map((_, ind: number) => ind);
const mapNTimes = (num: number, func: (num: number) => string) => arrayOf(num).map((_, ind: number) => func(ind));
const repeat = (num: number, text: string) => arrayOf(num).reduce((acc) => text + acc, '');

export const preGeneratedEmails1: string[] = [
    'john@miro.com', 'invalid.email',
    'mike@miro.com', 'alex@miro.com', 'paul@miro.com', 'martijn@miro.com'
];

const preGeneratedEmails: string[] = mapNTimes(1000, (ind) => `preGenerated${ind}@miro.com`);

export const preGeneratedEmails2: string[] = [
    'john@miro.com', 'invalid.email',
    'mike@miro.com', 'alex@miro.com', 'paul@miro.com', 'martijn@miro.com',
    `${repeat(50, 'really')}longname@miro.com`,
    ...preGeneratedEmails
];
