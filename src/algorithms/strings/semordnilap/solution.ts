// O(n * m) Time | O(n * m) Space
export function semordnilap(words: string[]) {
  const wordsSet = new Set(words);
  const semordnilapPairs: [string, string][] = [];

  for (const word of words) {
      const reverse = word.split('').reverse().join('');
      if(wordsSet.has(reverse) && reverse !== word) {
          semordnilapPairs.push([word, reverse]);
          wordsSet.delete(word);
          wordsSet.delete(reverse);
      }
  }

  return semordnilapPairs;
}
