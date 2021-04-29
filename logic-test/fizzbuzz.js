function createFizzBuzz(num) {
    let result = [];

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz')
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i)
        }
        
    }

    return result;
}

console.log( createFizzBuzz(3) )
console.log( createFizzBuzz(5) )
console.log( createFizzBuzz(15) )