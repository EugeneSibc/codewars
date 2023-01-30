const repeatStr = (n, s) => {
    return s.repeat(n); //кончтруирует и возвращает новцю строку с количеством n копий строки s
}



const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", function() {
    it ("Basic tests", function() {
        assert.strictEqual(repeatStr(3, "*"), "***");
        assert.strictEqual(repeatStr(5, "#"), "#####");
        assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
    });
});