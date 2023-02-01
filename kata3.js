const reverseSeq = n => {
    let array = [];
    while(n>0){
        array.push(n);
        n--
    }
    return array;
};


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("reverseSeq", function() {
    it("Sample Test", function() {
        assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
    });
});