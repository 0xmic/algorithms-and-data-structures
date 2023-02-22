// O(n) Time | O(1) Space
// n = length of the input string
function firstNonRepeatingCharacter(string) {
    const characterFrequencies = {};

    for (const character of string) {
        if (!(character in characterFrequencies)) characterFrequencies[character] = 0;
        characterFrequencies[character]++;
    };

    for (let idx = 0; idx < string.length; idx++) {
        const character = string[idx];
        if (characterFrequencies[character] === 1) return idx;
    };

    return -1;
};

exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
