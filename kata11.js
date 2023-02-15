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

//A Needle in the Haystack
function findNeedle(haystack) {
    for(let i=0; i<haystack.length; i++){
        if(haystack[i] === 'needle'){
            return "found the needle at position " + i;
        }
    }
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
        var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
        var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

        Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
        Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
        Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5')
        Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
    });
});
