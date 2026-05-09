function twoSum(nums: number[], target: number): number[] {

    let compMap = new Map<number, number>;

    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (compMap.has(nums[i])) {
            return [compMap.get(nums[i]), i];
        }
        compMap.set(comp, i);
    }
};