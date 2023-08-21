const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg*fuelLeft >= distanceToPump ? true : false;
};

const assert = require("chai").assert;

describe("zeroFill", function() {
    it("Sample Tests", function() {
        assert.equal(zeroFuel(50, 25, 2), true);
        assert.equal(zeroFuel(100, 50, 1), false);
    });
});
________________________________
var countSheep = function (num){
    let murmur = '';
    if(num<1){
        return murmur;
    } else {
        for(let i=1; i<=num; i++){
            murmur += i + " sheep...";
        }
    }
    return murmur;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(countSheep(0), "");
        assert.strictEqual(countSheep(1), "1 sheep...");
        assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
        assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
    });
});
________________________________

function findAverage(array) {
    let sum = 0;
    let average;
    if (array.length) {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        average = sum / array.length;
        return average;
    }
    return 0;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

if (typeof findAverage !== 'function')
    findAverage = find_average;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(findAverage([1,1,1]), 1);
        assert.strictEqual(findAverage([1,2,3]), 2);
        assert.strictEqual(findAverage([1,2,3,4]), 2.5);
    });
});

describe("Random tests", () => {

    function randint(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for(let i = 0; i < 100; i++){
        let arr = Array.from({length: randint(0, 15)}, (_, i) => randint(1, 100))
        let expected = !arr.length ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length
        it(`findAverage(${JSON.stringify(arr)}) should equal ${expected}`, () => {
            assert.strictEqual(findAverage(arr), expected);
        });
    }
})