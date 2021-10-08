
 
// let SquareArr = myArr.map(function(x){
//     return x*x
// })

// console.log(myArr);
// console.log(SquareArr)
// custom Map function  1 ....... map funtions
let myArr = [1,2,3,4,5,6,7,8,9]
function mypolyfileMap(arr,cb){
    let newArr =[]
    for(let i = 0; i < arr.length; i++){
        newArr.push(cb(arr[i]))
    }
    return newArr
}

function Square(x){
    return x*x
}
console.log(myArr)
console.log(mypolyfileMap(myArr , Square))
