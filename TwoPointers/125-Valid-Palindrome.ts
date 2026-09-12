function isPalindrome(s: string): boolean {
    s = s.toLowerCase();
    let rightPointer = s.length - 1;
    let leftPointer = 0;

    while (leftPointer < rightPointer) {

        let n = s[rightPointer].charCodeAt(0);
        if (!isNumber(n) && !isChar(n)) {
            rightPointer--;
            continue;
        }

        let m = s[leftPointer].charCodeAt(0);
        if (!isNumber(m) && !isChar(m)) {
            leftPointer++;
            continue;
        }

        if (s[rightPointer] !== s[leftPointer])
            return false;

        rightPointer--;
        leftPointer++;
    }

    return true;
};

function isNumber(char: number): boolean {
    return char > 47 && char < 58;
}

function isChar(char: number): boolean {
    return char > 96 && char < 123;
}