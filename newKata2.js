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