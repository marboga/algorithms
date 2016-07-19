// rFibonacci

// Write a function rFib(n) that, given a number n,
//recursively computes and returns the nth number in
// the Fibonacci sequence. As earlier, consider the
// first two (n = 0, n = 1) Fibonacci numbers to be 0
// and 1. Thus, rFib(2) = 1; rFib(3) = 2; rFib(4) = 3;
// rFib(5) = 5.

functionrFib(num){

if( num < 1 ){ return 0;}

if( num < 2 ){ return 1;}

return rFib( num ‐ 1 ) + rFib( num ‐ 2 );

}
