function longestConsecutive(nums: number[]): number {
    let container = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        container.add(nums[i]);
    }

    let longestCon = 0;
    for (let item of container) {
        if (container.has((item - 1)))
            continue;

        let count = 0;
        while (container.has((item + count))) {
            count++;
        }

        longestCon = Math.max(longestCon, count);
    }

    return longestCon;
};