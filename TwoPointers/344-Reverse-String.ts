/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    SwappingWithTemp(s);
    // DestructuringAssignment(s);
    // BuiltIn(s);
};

function DestructuringAssignment(s: string[]): void {
    let left = 0, right = s.length - 1;

    while (left < right) {
        [s[right], s[left]] = [s[left], s[right]];

        left++; right--;
    }
}

function SwappingWithTemp(s: string[]): void {
    let left = 0, right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++; right--;
    }
}

function BuiltIn(s: string[]): void {
    s.reverse();
}