// TODO: implement  a task using Strategy pattern:
//  https://leetcode.com/problems/fizz-buzz/
// Two strategies:
// a. Return fizz-buzz numbers: ["1","2","Fizz","4","Buzz"]
// b. Return numbers without any processing: ["1","2","3","4","5"]

class Solution {
    constructor(strategy) {
        this.strategy = strategy
    }
    takeResult(userNumber) {
        return this.strategy.doAction(userNumber);
    }
}
class FizzBuzzStrategy {
    doAction(userNumber) {
        let arr = []
        for (let i = 0; i < userNumber; i++) {
            arr[i] = ''
            if ((i + 1) % 3 === 0) {
                arr[i] += "Fizz"
            }
            if ((i + 1) % 5 === 0) {
                arr[i] += "Buzz"
            }
            if (arr[i] === '') {
                arr[i] += (i + 1)
            }
        }
        return arr;
    }
}
class NormalStrategy {
    doAction(userNumber) {
        let arr = []
        for (let i = 0; i < userNumber; i++) {
            arr[i] = "" + (i + 1)
        }
        return arr;
    }
}


const fizzBuzz = new Solution(new FizzBuzzStrategy());
const normal = new Solution(new NormalStrategy());

let n = 15
console.log(fizzBuzz.takeResult(n));
console.log(normal.takeResult(n));