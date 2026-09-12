function maxArea(height: number[]): number {
    let l = 1;
    let r = height.length;
    let res = 0;
    while (l < r) {
        let w = r - l;
        let h = Math.min(height[l - 1], height[r - 1]);

        res = Math.max(res, (w * h));

        if (height[l - 1] < height[r - 1])
            l++;
        else
            r--;
    }

    return res;
};