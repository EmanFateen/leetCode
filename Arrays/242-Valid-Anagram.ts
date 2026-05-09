function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    s = [...s].sort().join();
    t = [...t].sort().join();

    return s === t;
};