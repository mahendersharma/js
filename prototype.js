
// Array protoType
let a = [1,2,3,4,5,6,7,8];
Array.prototype.showfunction = function(){
    console.log(this);
}

a.showfunction()


// Map ProtoTypes Use 


// let arr = [1,2,3,4,5,6,7,8];
// Array.prototype.MyMap = function(cb){
//     let newArr = [];
//     for(let i =0; i < this.length;i++){
//     newArr.push(cb(this[i]))
//     }
//     return newArr
// }

// function Square(x){
//     return x*x
// }
// let mappedArr = arr.MyMap(Square)
// console.log(mappedArr)


// filter Prototypes 

let arr1 = [1,2,3,4,5,6,7,8];
Array.prototype.MyMap = function(cb){
    let newArr = [];
    for(let i =0; i < this.length;i++){
        if(isEven(this[i]))
            newArr.push((this[i]))
        
   
    }
    return newArr
}

function isEven(x){
    return x%2 === 0
}
let mappedArr1 = arr1.MyMap(isEven)
console.log(mappedArr1)