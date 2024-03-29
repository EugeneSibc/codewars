function DNAtoRNA(dna) {
    let v = '';
    for(let i=0; i<dna.length; i++){
        if( dna[i] === "T"){
            v += 'U';
        } else {
            v += dna[i];
        }
    }
    return v;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
        assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
        assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
        assert.strictEqual(DNAtoRNA("GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC"), "GAUUCCACCGACUUCCCAAGUACCGGAAGCGCGACCAACUCGCACAGC")
        assert.strictEqual(DNAtoRNA("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA"), 'CACGACAUACGGAGCAGCGCACGGUUAGUACAGCUGUCGGUGAACUCCAUGACA')
        assert.strictEqual(DNAtoRNA("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA"), 'CACGACAUACGGAGCAGCGCACGGUUAGUACAGCUGUCGGUGAACUCCAUGACA')
        assert.strictEqual(DNAtoRNA("AACCCTGTCCACCAGTAACGTAGGCCGACGGGAAAAATAAACGATCTGTCAATG"), 'AACCCUGUCCACCAGUAACGUAGGCCGACGGGAAAAAUAAACGAUCUGUCAAUG')
        assert.strictEqual(DNAtoRNA("GAAGCTTATCCGTTCCTGAAGGCTGTGGCATCCTCTAAATCAGACTTGGCTACGCCGTTAGCCGAGGGCTTAGCGTTGAGTGTCATTATATACGCGGCCTGCGACCTGGCCACACAATGCCCTCGAAAATTTTTCTTTCGGTTATACGAGTTGCGAAACCTTTCGCGCGTAGACGAAGAATTTGAAGTGGCCTACACCGTTTGGAAAGCCGTTCTCATTAGAATGGTACCGACTACTCGGCTCGGAGTCATTGTATAGGGAGAGTGTCGTATCAACATCACACACTTTTAGCATTTAAGGTCCATGGCCGTTGACAGGTACCGA"), 'GAAGCUUAUCCGUUCCUGAAGGCUGUGGCAUCCUCUAAAUCAGACUUGGCUACGCCGUUAGCCGAGGGCUUAGCGUUGAGUGUCAUUAUAUACGCGGCCUGCGACCUGGCCACACAAUGCCCUCGAAAAUUUUUCUUUCGGUUAUACGAGUUGCGAAACCUUUCGCGCGUAGACGAAGAAUUUGAAGUGGCCUACACCGUUUGGAAAGCCGUUCUCAUUAGAAUGGUACCGACUACUCGGCUCGGAGUCAUUGUAUAGGGAGAGUGUCGUAUCAACAUCACACACUUUUAGCAUUUAAGGUCCAUGGCCGUUGACAGGUACCGA')
    });
})
___________________________________________

const stringToNumber = function(str){
    let num=str*1;
    return num;
}

const Test = require('@codewars/test-compat');

describe( "stringToNumber", function(){
    it( "should work for the examples" , function(){
        Test.assertEquals(stringToNumber("1234"),1234)
        Test.assertEquals(stringToNumber("605"), 605)
        Test.assertEquals(stringToNumber("1405"),1405)
        Test.assertEquals(stringToNumber("-7"),  -7)
    });
});
____________________________________________

const areaOrPerimeter = function(l , w) {
    if(l===w){
        return l*w;
    }else{
        return l*2+w*2
    }
};

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(areaOrPerimeter(3,  3),  9);
        assert.strictEqual(areaOrPerimeter(6, 10), 32);
    });
});
_______________________________________
function DNAStrand(dna){
    let rule = {
        'A':'T',
        'C':'G',
        'G':'C',
        'T':'A'
    };
    let output = '';
    for(let i=0; i<dna.length; i++){
        output += rule[dna[i]];
    }
    return output;
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
        assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
        assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")
    })
})