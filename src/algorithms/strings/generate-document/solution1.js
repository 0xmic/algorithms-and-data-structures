// O(m * (n + m)) Time | O(1) Space
// n = number of characters
// m = length of the document
function generateDocument(characters, document) {
    for (const character of document) {
        const documentFrequency = countCharacterFrequency(character, document);
        const characterFrequency = countCharacterFrequency(character, characters);
        if (documentFrequency > charactersFrequency) return false;
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
