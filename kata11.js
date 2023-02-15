//Count the divisors of a number
function getDivisorsCnt(n){
    let divisors = [];
    for(let i = 0; i<n; i++){
        if(n%i)continue;
        divisors.push(i);
    }
    return divisors.length;
}

const assert = require('chai').assert;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(getDivisorsCnt(1),  1);
        assert.strictEqual(getDivisorsCnt(10), 4);
        assert.strictEqual(getDivisorsCnt(11), 2);
        assert.strictEqual(getDivisorsCnt(54), 8);
    });
});

//Square(n) Sum
function squareSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum+=(numbers[i]**2);
    }
    return sum;
}

const chai = require("chai");
const assert2 = chai.assert2;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("test", () => {
        assert2.strictEqual(squareSum([1,2]), 5);
        assert2.strictEqual(squareSum([0, 3, 4, 5]), 50);
        assert2.strictEqual(squareSum([]), 0);
    });
});
