const factorial = (n) => {
  if (n <= 1) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}

console.log(factorial(5))

const input = [-8, 2, -3]
const filterPositives = () => {
  return input.filter(function(val,i) {
    return val > 0
  })
}

// console.log(filterPositives(input))

// current
// 3.0.1
// ^3.0.1
// ~3.0.1