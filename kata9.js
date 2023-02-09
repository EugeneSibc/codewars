//loop statement --while and do..while
function padIt(str,n){
    while(n>0){
        if(n%2===0) str=str +'*'
        else str='*' + str
        n--
    }
    return str;
}

describe("Tests", () => {
    it("test", () => {
        Test.assertSimilar(padIt("a",1),"*a");
        Test.assertSimilar(padIt("a",2),"*a*");
        Test.assertSimilar(padIt("a",3),"**a*");
        Test.assertSimilar(padIt("a",4),"**a**");
        Test.assertSimilar(padIt("a",5),"***a**");
    });
});


// loop statement --for
function pickIt(arr){
    var odd=[],even=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2) odd.push(arr[i])
        else even.push(arr[i])
    }
    return [odd,even];
}

describe("Tests", () => {
    it("test", () => {
        Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
        Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
        Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
        Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
        Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
        Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
    });
});
