// O(c * (n + m)) Time | O(c) Space
// n = number of characters
// m = length of document
// c = number of unique characters in document
function generateDocument(characters, document) {
    const alreadyCounted = new Set();

    for (const character of document) {
        if (character in alreadyCounted) continue;

        const documentFrequency = countCharacterFrequency(character, document);
        const characterFrequency = countCharacterFrequency(character, characters);
        if (documentFrequency > characterFrequency) return false;

        alreadyCounted.add(character);
    };

    return true;
};

function countCharacterFrequency(character, target) {
    let frequency = 0;
    for (const char of target) {
        if (char === character) frequency++;
    };

    return frequency;
};

exports.generateDocument = generateDocument;
