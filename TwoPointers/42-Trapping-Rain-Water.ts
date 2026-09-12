function trap(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let maxL = height[l];
    let maxR = height[r];
    let sum = 0;

    while (l <= r) {
        if (maxL <= maxR) {
            let temp = maxL - height[l];
            sum += temp < 0 ? 0 : temp;
            maxL = Math.max(maxL, height[l]);
            l++;
        }
        else if (maxR < maxL) {
            let temp = maxR - height[r];
            sum += temp < 0 ? 0 : temp;
            maxR = Math.max(maxR, height[r]);
            r--;
        }
    }

    return sum;
};