let FilterArr = [1,2,3,4,5,6,7,8,9]


// let evenArr = FilterArr.filter(function(x){
//     return x%2 === 0;
// })
// console.log(evenArr)


// custom filter function  1 ....... ❤❤❤❤ funtions


function myFilter(arr,cb){
    let filterarr1 = [];
    for(let i = 0; i < arr.length; i++){
if(cb(arr[i])){
    filterarr1.push(arr[i])
}
    }
    return filterarr1
}

function iseven(x){
    if(x%2==0){
        return x
    }
}

console.log(myFilter(FilterArr,iseven))