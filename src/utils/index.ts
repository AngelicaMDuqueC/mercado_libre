/**
 * Takes multiple strings or undefined values and merge them in one single string
 * @param strings Strings to merge into a single string
 * @returns
 */
export const mergeStrings = (...strings: (string | undefined)[]): string => strings.join(' ').trim();


export const HEADING_TYPES = new Map([
  ['h1', 'heading-1'],
  ['h2', 'heading-2'],
  ['h3', 'heading-3'],
  ['h4', 'heading-4'],
  ['h5', 'heading-5'], 
]);
