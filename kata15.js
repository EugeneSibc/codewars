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


function digitize(n){
    return (n + '').split('').map(Number).reverse();
}
//function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
};

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
};