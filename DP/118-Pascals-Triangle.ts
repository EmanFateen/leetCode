function generate(numRows: number): number[][] {
    let result = [[1]];

    if (numRows === 0) return [];
    if (numRows === 1) return result;

    for (let level = 2; level <= numRows; level++) {
        result.push(getRow(level));
    }

    return result;
};

function getRow(level: number): number[] {
    let left = [];
    for (let z = 0; z < level / 2; z++) {
        left.push(getCombinationCount(level - 1, z));
    }

    let right = [...left];
    if (level % 2 === 1) {
        right.pop();
    }
    right = right.reverse();

    return [...left, ...right];
}

function getCombinationCount(n: number, k: number): number {
    // return Math.floor(factorial(n) / (factorial(k) * factorial(n - k)));
    let result = 1;

    for (let i = 1; i <= k; i++) {
        result = (result * (n - i + 1)) / i;
    }

    return result;
}

function factorial(n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}