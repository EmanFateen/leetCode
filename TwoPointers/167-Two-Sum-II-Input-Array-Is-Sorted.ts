function twoSum(numbers: number[], target: number): number[] {
    let left = numbers.length - 1;
    let right = 0;

    while (right < left) {
        if (numbers[right] + numbers[left] > target) {
            left--;
            continue;
        }
        if (numbers[right] + numbers[left] < target) {
            right++;
            continue;
        }

        return [right + 1, left + 1];
    }
};