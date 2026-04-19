function containsDuplicate(nums: number[]): boolean {
    let checkerMap = new Map<number,number>();

    for(let i = 0 ;i < nums.length; i++){
        if(checkerMap.has(nums[i]))
            return true;
        checkerMap.set(nums[i], 1);
    }
    return false;
};