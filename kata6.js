/*
In this simple assignment you are given
a number and have to make it negative.
But maybe the number is already negative?
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative(num) {
    if ( num < 0 ) {
        return num;
    } else {
        return num*(-1);
    }
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(makeNegative(42), -42);
        Test.assertEquals(makeNegative(-9), -9);
        Test.assertEquals(makeNegative(0), 0);
        Test.assertEquals(makeNegative(1), -1);
        Test.assertEquals(makeNegative(-1), -1);

        Test.assertEquals(makeNegative(0.12), -0.12);
        Test.assertEquals(makeNegative(0.00001), -0.00001);
        Test.assertEquals(makeNegative(-0.00001), -0.00001);

        var rnd = Math.floor(Math.random() * 101);
        Test.assertEquals(makeNegative(rnd), -rnd);

        rnd = -Math.floor(Math.random() * 101);
        Test.assertEquals(makeNegative(rnd), rnd);
    });
});