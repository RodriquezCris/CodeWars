function sumTwoSmallestNumbers(numbers) {  
    //Code here
    //when i used Math.min()again i will get the 2nd elem
    let first = Math.min(...numbers)
    numbers.splice(numbers.indexOf(first), 1);
    let second = Math.min(...numbers);
    //result sum of 1 and 2#
    return first + second
  };