function isValidSudoku(board: string[][]): boolean {
    if (isValidRows(board) === false) return false;
    if (isValidCoulumns(board) === false) return false;
    if (isValidSquares(board) === false) return false;
    return true;
};

function isValidRows(board: string[][]): boolean {
    let map = new Set<number>();
    for (let i = 0; i < 9; i++) {
        map.clear();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.')
                continue;

            let currentItem = parseInt(board[i][j], 10);
            if (currentItem < 1 || currentItem > 9)
                return false;

            if (map.has(currentItem))
                return false;

            map.add(currentItem);
        }
    }
}

function isValidCoulumns(board: string[][]): boolean {
    let map = new Set<number>();
    for (let i = 0; i < 9; i++) {
        map.clear();
        for (let j = 0; j < 9; j++) {
            if (board[j][i] === '.')
                continue;

            let currentItem = parseInt(board[j][i], 10);
            if (currentItem < 1 || currentItem > 9)
                return false;

            if (map.has(currentItem))
                return false;

            map.add(currentItem);
        }
    }
}

function isValidSquares(board: string[][]): boolean {
    let map = new Set<number>();

    for (let l = 0; l <= 6; l += 3) {
        for (let k = 0; k <= 6; k += 3) {
            map.clear();
            for (let i = k; i < (k + 3); i++) {
                for (let j = l; j < (l + 3); j++) {
                    if (board[i][j] === '.')
                        continue;

                    let currentItem = parseInt(board[i][j], 10);
                    if (currentItem < 1 || currentItem > 9)
                        return false;

                    if (map.has(currentItem))
                        return false;

                    map.add(currentItem);
                }
            }
        }
    }
}