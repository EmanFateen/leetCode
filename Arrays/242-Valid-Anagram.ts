function isAnagram(s: string, t: string): boolean {
    s = [...s].sort().join();
    t = [...t].sort().join();

    return s === t;
};