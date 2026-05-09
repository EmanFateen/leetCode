function topKFrequent(nums: number[], k: number): number[] {
    let dictionary = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let value = dictionary.get(nums[i]) ?? 0;
        value = value + 1;
        dictionary.set(nums[i], value);
    }

    const sortedDictionary = new Map<number, number>(
        [...dictionary].sort((a, b) => b[1] - a[1])
    );

    return Array.from(sortedDictionary.keys()).slice(0, k);
};