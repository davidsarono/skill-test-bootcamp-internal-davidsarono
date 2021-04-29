function findFibonacci(arr) {
    const total = arr.reduce((sum, cur) => sum += cur, 0);

    function createFibonacciSeries(total) {
        let result = [];
        let n1 = 0;
        let n2 = 1;
        let nextTerm = n1 + n2;

        result.push(n1);
        result.push(n2);

        while (nextTerm <= total) {
            result.push(nextTerm);
            n1 = n2;
            n2 = nextTerm;
            nextTerm = n1 + n2;
        }

        return result;
    }

    const arrBelow = createFibonacciSeries(total);
    const below = arrBelow[arrBelow.length - 1]
    const above = arrBelow[arrBelow.length - 1] + arrBelow[arrBelow.length - 2]

    if (Math.abs(total - above) > Math.abs(total - below)) {
        return Math.abs(total - below);
    } else {
        return Math.abs(total - above);
    }
}

const test = [15,1,3];

console.log( findFibonacci(test) );