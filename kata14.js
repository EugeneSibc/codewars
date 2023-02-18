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