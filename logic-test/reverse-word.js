function reverseWord(str) {
    const arrStr = str.split(' ');

    return arrStr.map(str => {
        if (str[0].match(/[A-Z]/)) {
            return str.substring(0, str.length - 1).toLowerCase() + str.substring(str.length - 1).toUpperCase()
        } else {
            return str
        }
    }).map(str => str.split('').reverse().join('')).join(' ');
}


const test = "I am A Great human";
const test2 = "Refactory is Awesome";
const test3 = "I am Learning Vue";

console.log( reverseWord(test) )
console.log( reverseWord(test2) )
console.log( reverseWord(test3) )