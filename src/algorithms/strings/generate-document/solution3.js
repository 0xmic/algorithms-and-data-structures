// O(n + m) Time | O(c) Space
// n = number of characters
// m = length of document
// c = number of unique characters in document
function generateDocument(characters, document) {
    const characterCounts = {};

    for (const character of characters) {
        if (!(character in characterCounts)) characterCounts[character] = 0;

        characterCounts[character]++;
    };

    for (const character of document) {
        if (!(character in characterCounts) || characterCounts[character] === 0) return false;

        characterCounts[character]--;
    };

    return true;
};

exports.generateDocument = generateDocument;
