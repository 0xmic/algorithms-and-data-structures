// O(n * l) Time | O(c) Space
// n = number of words
// l = length of longest word
// c = number of unique characters across all words
function minimumCharactersForWords(words) {
    const maximumCharacterFrequencies = {};

    for (const word of words) {
        const characterFrequencies = countCharacterFrequencies(word);
        updateMaximumFrequencies(characterFrequencies, maximumCharacterFrequencies);
    }

    return makeArrayFromCharacterFrequencies(maximumCharacterFrequencies);
}

function countCharacterFrequencies(string) {
    const characterFrequencies = {};

    for (const character of string) {
        if (!(character in characterFrequencies)) {
            characterFrequencies[character] = 0;
        }

        characterFrequencies[character] += 1;
    }

    return characterFrequencies;
}

function updateMaximumFrequencies(frequencies, maximumFrequencies) {
    for (const character in frequencies) {
        const frequency = frequencies[character];

        if (character in maximumFrequencies) {
            maximumFrequencies[character] = Math.max(frequency, maximumFrequencies[character]);
        } else {
            maximumFrequencies[character] = frequency;
        }
    }
}

function makeArrayFromCharacterFrequencies(characterFrequencies) {
    const characters = [];

    for (const character in characterFrequencies) {
        const frequency = characterFrequencies[character];

        for (let idx = 0; idx < frequency; idx++) {
            characters.push(character);
        }
    }

    return characters;
}

exports.minimumCharactersForWords = minimumCharactersForWords;
