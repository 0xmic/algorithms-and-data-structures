// O(n) Time | O(n) Space
// n = length of the string
function reverseWordsInString(string) {
    const characters = [];
    for (const char of string) {
        characters.push(char);
    }
    reverseListRange(characters, 0, characters.length - 1);

    let startOfWord = 0;
    while (startOfWord < characters.length) {
        let endOfWord = startOfWord;
        while (endOfWord < characters.length && characters[endOfWord] != ' ') {
            endOfWord++
        }

        reverseListRange(characters, startOfWord, endOfWord - 1);
        startOfWord = endOfWord + 1;
    }
    return characters.join('');
}

function reverseListRange(list, start, end) {
    while (start < end) {
        const temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end--;
    }
}

exports.reverseWordsInString = reverseWordsInString;
