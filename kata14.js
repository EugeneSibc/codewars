function fakeBin(x){
    let y = '';
    for(let i = 0; i<x.length; i++){
        x[i] < 5 ? y+='0':
            x[i] >= 5 ? y+='1': null
    }
    return y
}

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
        assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
        assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
    })
});*/
