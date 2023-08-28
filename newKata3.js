function minMax(arr){
    let list = [];
    list.push(arr.reduce((x,y)=>Math.min(x,y)));
    list.push(arr.reduce((x,y)=>Math.max(x,y)));
    return list;
}
_______________________________

function minMax(arr){
    let list = [];
    list.push(Math.min(...arr));
    list.push(Math.max(...arr));
    return list;
}
_______________________________

