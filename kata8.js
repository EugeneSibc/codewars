/*Complete function saleHotdogs/SaleHotDogs/sale_hotdogs,
    function accepts 1 parameter:n, n is the number of hotdogs
a customer will buy, different numbers have different prices (refer to the following table),
return how much money will the customer spend to buy that number of hotdogs.
    number of hotdogs	price per unit (cents)
        n < 5	                100
        n >= 5 and n < 10	    95
        n >= 10	                90*/

function saleHotdogs(n){
    if(n < 5) return n * 100
    else if(n >= 5 && n < 10) return n * 95
    else if(n >= 10) return n * 90
    //or return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n >= 10 ? n * 90 : null
}

const { assert } = require('chai');

describe("Tests", () => {
    it("Sample tests", () => {
        assert.strictEqual(saleHotdogs(  1),  100);
        assert.strictEqual(saleHotdogs(  4),  400);
        assert.strictEqual(saleHotdogs(  5),  475);
        assert.strictEqual(saleHotdogs(  9),  855);
        assert.strictEqual(saleHotdogs( 10),  900);
        assert.strictEqual(saleHotdogs(100), 9000);
    });
});



