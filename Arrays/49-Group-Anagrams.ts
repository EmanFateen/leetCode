function groupAnagrams(strs: string[]): string[][] {

    let anagramsDictionary = new Map<string, string[]>;

    for (let i = 0; i < strs.length; i++) {
        anagramsDictionary = upsertAnagramGroup(strs[i], anagramsDictionary);
    }

    return extractGroups(anagramsDictionary);
};

function upsertAnagramGroup(currentWord, dictionary): Map<string, string[]> {
    let sortedWord = currentWord.split('').sort().join('');

    if (dictionary.has(sortedWord)) {
        let currentAnagrams = dictionary.get(sortedWord);
        currentAnagrams.push(currentWord);
        dictionary.set(sortedWord, currentAnagrams);
    }
    else {
        dictionary.set(sortedWord, [currentWord]);
    }

    return dictionary;
}

function extractGroups(dictionary): string[][] {
    return Array.from(dictionary.values());
}