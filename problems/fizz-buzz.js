/*
given a positive integer n
print, on a new line for each int <= n,
- fizz if divisible by 3
- buzz if divisible by 5
- fizzbuzz if divisible by 15
- the integer itself if none of the above occur
*/

const printFizzBuzz = n => {
  for (let i=1; i<=n; i++) {
    if ( i % 15 === 0) {
      console.log('FizzBuzz')
    } else if ( i % 3 === 0) {
      console.log('Fizz')
    } else if ( i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

printFizzBuzz(31)