const factorial = (n) => {
  if (n <= 1) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}

console.log('factorial : ' ,factorial(5))

// write a filter for returning only positive integers 
const input = [-8, 2, -3]
const filterPositives = () => {
  return input.filter((val) => {
    return val > 0
  })
}

console.log('filterPositives : ', filterPositives(input))

// current
// 3.0.1
// ^3.0.1
// ~3.0.1