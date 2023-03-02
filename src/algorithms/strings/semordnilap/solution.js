// O(n * m) Time | O(n * m) Space
function semordnilap(words) {
    const wordsSet = new Set(words);
    const semordnilapPairs = [];

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

exports.semordnilap = semordnilap;
