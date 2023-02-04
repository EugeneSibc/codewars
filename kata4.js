function hoopCount (n) {
    if(n>=10){
        return 'Great, now move on to tricks'
    } else {
        return 'Keep at it until you get it'
    }
}

/*or
function hoopCount(n) {
    return n >= 10 ?
        "Great, now move on to tricks" :
        "Keep at it until you get it";
}*/

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(hoopCount(3),"Keep at it until you get it" )
        Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
    });
});
