//Double Char
function doubleChar(str) {
    let doubleCharStr = "";
    for(let i=0; i<str.length; i++){
        doubleCharStr+=str[i]+str[i]
    }
    return doubleCharStr;
}

const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(str) {
    return str.split("").map(function (c) {
        return c + c;
    }).join("");
}

function positiveSum(arr) {
    let positiveArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0)continue;
        positiveArr.push(arr[i]);
    }
    if(positiveArr.length === 0) return 0;
    return positiveArr.reduce((a,b)=>a+b);
}

function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
        if (arr[i] > 0) {                   // if arr[i] is greater than zero
            total += arr[i];                  // add arr[i] to total
        }
    }
    return total;                         // return total
}

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
/*
const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(positiveSum([1,2,3,4,5]),15);
        assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
        assert.strictEqual(positiveSum([]),0);
        assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
        assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
});*/
