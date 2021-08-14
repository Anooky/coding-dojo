# Possible solutions

## Solution 1
if (i % 15 == 0) 
    console.log("FizzBuzz");
else if (i % 3 == 0) 
    console.log("Fizz");
else if (i % 5 == 0) 
    console.log("Buzz");
else 
    console.log(i);

## Solution 2
var f = i % 3 == 0, b = i % 5 == 0;
console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);

## Solution 3
var msg = "";
if (!(i%3)) msg+="Fizz"; 
if (!(i%5)) msg+="Buzz"; 
console.log(msg || i); 

## Solution 4
console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)