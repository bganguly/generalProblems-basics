/*
given any string - print its permutations
*/

const getPermutations = inputStr => {
  if (inputStr.length <=1) {
    return new Set(inputStr)
  } else {
    const inputStrReduced = inputStr.slice(0,inputStr.length - 1)
    const getReducedPermutations = getPermutations(inputStrReduced)

    const lastCharOfInputStr = inputStr[inputStr.length - 1]
    return enlargeReducedPermuataions(lastCharOfInputStr, getReducedPermutations)
  }

}

const enlargeReducedPermuataions = (lastCharOfInputStr, getReducedPermutations) => {
  const permutations = new Set();
  getReducedPermutations.forEach(eachReducedPermutation => {
    for (let i=0; i<= eachReducedPermutation.length; i++) {
      const newPermutation = eachReducedPermutation.slice(0,i)
      + lastCharOfInputStr + eachReducedPermutation.slice(i)
      permutations.add(newPermutation)
    }
  })
  return permutations
}

const inputStr = 'cat'
console.log('inputStr : ',inputStr)
console.log(getPermutations(inputStr))