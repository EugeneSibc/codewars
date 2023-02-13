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
