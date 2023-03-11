/*
Description:
Write a function that reverses a list, without using any built-in reverse functions.
JS : Array#reverse has been modified.
*/

const reverseList = (arr) => arr.reverse();

console.log(reverseList([]), '<=> []');
console.log(reverseList([1, 2, 3]), '<=> [3,2,1]');
