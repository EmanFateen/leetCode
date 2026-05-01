## 118 Pascal's Triangle

Well then, first I wanted to find one general math equation to solve the problem in terms of the level.
After time of thinking, these are my findings:
1. Each level starts with 1
2. The second element in each level equals level - 1
3. Each level result is symmetric (not exactly for the odd ones), so we can only calculate the left side, then reverse it
4. The number of elements in each level equals the level itself
5. Of course, the last element in the left side for odd levels will not appear again in the right side

### Okay now, how to generate each row (level result)
Hmmm, it took me a while to figure it out as I’m not familiar with Pascal's Triangle theory, but here we are I realized that
each element in the row is actually equal to `(level - 1 C i)`, where i represents the element index in the row.

Great!

### Let's implement it
To calculate the combination, we can use factorials:
`nCk = n! / (k! * (n - k)!)`

1. I implemented the `factorial` function
2. Then `getCombinationCount`
3. Then `getRow`, which takes the level and returns an array with the result
4. Then just a for loop on numRows to calculate each row, push it to the result and…

**BOOM!** I solved it

It works fine with small numbers of numRows. But for `numRows = 25`, it gives me a wrong answer!!

### Bit floating point
Hmmm, I have an overflow problem! It happens while calculating the combination,
as it depends on division, which could lead to floating point issues.

I had to change the implementation of the `getCombinationCount` function. I did…
Everything works fine. I got accepted 🎉


But I solved it in 1ms while others solved it in 0ms :(

### Let's calculate the time complexity
Obviously, we can find three nested loops, split across three functions.

The time complexity of this solution is `O(n³)` where n = number of rows.

I started with the intention to find a general math equation that would be faster and give me lower time complexity,
but it ended up being `O(n³)`.

This approach helped me understand the math behind it, but in practice, generating each row from the previous one gives a simpler and more efficient `O(n²)` solution.

I will implement it tomorrow then 😉
