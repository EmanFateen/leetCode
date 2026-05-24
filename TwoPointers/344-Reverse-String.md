## 344 Reverse String
Very simple function, we use this idea almost every day. 

You have two values, and you want to swap them. 
Okay, use a temp variable. Simple!
```ts
 let temp = left; 
left = right; 
right = temp; 
```

But this is not the only way to swap two values.
There is another way called `Destructuring assignment`.
```ts
[right, left] = [left, right]; 
```
BOOM! Swapped! 🚀
You can read about it from [here](https://javascript.info/destructuring-assignment), or [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
The links above related to JS. But the same technique exists in other languages too like PHP, Python, GO, ets...

---------------------------------------------------------

I remember 19 years ago, during my first month learning programming in college, my mentor gave me this problem and I got stuck.
Then he told me: 
"Okay, what about using a temp variable?" 

We declare a temp variable to hold on of the values until the other value overrides it, 
then restore the saved value from the temp variable.

I got an adrenaline rush like I had just discovered Mars. 😄
“There’s actually a solution then! At first, I thought we were stuck forever 😄”

19 years later, I really miss the days when my biggest problem was swapping two values 😭.

