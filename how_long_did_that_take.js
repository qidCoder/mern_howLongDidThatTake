// Calculating prime numbers
// Let's start with a prototype function to calculate if a number is prime...


// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }


//rewritten:

Number.prototype.isPrime = function() {
    if(Number.isInteger(Math.sqrt(this))){
        return false;
    }


    for( let i=2; i<Math.ceil(Math.sqrt(this)) ; i++ ) {

        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

// and then see how long it takes to find the 10,000th prime number.


// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e4 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// On this author's laptop this took 50 seconds.


// This took a considerable amount of time considering the prime we calculated is only 6 digits long and primes used in RSA encryption are hundreds of digits in length. Calculating primes is hard work; as the numbers get bigger it takes more and more work to see if they are evenly divisible by smaller numbers, and division is already a slow operation on CPUs (as much as 6 times slower than multiplication). There are some tricks we can use to speed this up though, for instance we don't need to search past the square root of the number we are checking to see if it is evenly divisible by smaller numbers. Try rewriting the isPrime() function above and seeing how much quicker this runs. You should see results similar to the below image.

// Try calculating the 100,000th and 1,000,000th prime numbers

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e5 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 100,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e6 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 1,000,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

////////////////////////////////////////////////////////////////////////////
// Fibonacci

// Which implementation of Fibonacci should be faster?

// // recursive
// function rFib( n ) {
//     if ( n < 2 ) {
//         return n;
//     }
//     return rFib( n-1 ) + rFib( n-2 );
// }
// rFib(20);


// // iterative
// function iFib( n ) {
//     const vals = [ 0, 1 ];
//     while(vals.length-1 < n) {
//         let len = vals.length;
//         vals.push( vals[len-1] + vals[len-2] );
//     }
//     return vals[n];
// }
// iFib(20);
//////////////////////////////////////////////////////////////////////////////////

// Reversing a string

// Can we reverse a string more efficiently?

function reverseString(str){
    var newStr = '';
    for( let i = str.length - 1; i > 0; i--){
        newStr += str[i];
    }
    return newStr;
}

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");
// console.log(reversed1)

console.log(reverseString(story));

