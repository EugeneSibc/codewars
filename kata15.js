//Sum Arrays
function sum (numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((a,b)=>a+b);
};

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(sum([]), 0);
        Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
    });
});*/
