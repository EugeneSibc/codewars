//loop statement --break,continue
function grabDoll(dolls){
    var bag=[];
    for(let i = 0; i<dolls.length; i++){
        if(dolls[i] !=='Hello Kitty' && dolls[i] !=='Barbie doll') continue
        bag.push(dolls[i]);
        if(bag.length === 3) break;
    }
    return bag;
}

describe("Tests", () => {
    it("test", () => {
        Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]),["Hello Kitty"]);
        Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);
        Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);
        Test.assertSimilar(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]),["Barbie doll","Hello Kitty","Hello Kitty"]);
        Test.assertSimilar(grabDoll(["Mickey Mouse","Barbie doll","Snow white"]),["Barbie doll"]);

    });
});


//loop statement --for..in and for..of
function giveMeFive(obj){
    var arr = [];
    for(var key in obj){
        if(key.length === 5) arr.push(key);
        if(obj[key].length === 5) arr.push(obj[key]);
    }
    return arr;
}

describe("Tests", () => {
    it("test", () => {
        Test.assertSimilar(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
        Test.assertSimilar(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
        Test.assertSimilar(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);

    });
});
