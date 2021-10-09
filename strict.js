//1. gollobaly console.log
//2. functionally console log 
//3. object function
//4. object function function 

'use strict'
//1. gollobaly console.log

// console.log(this) return empty object 
// 2.

// function showThis(){
//     console.log(this)   //return undefined
// }
// showThis()
// 3

// let object ={
//     name:"mahender",
//     age:22,
//     contact:9540354422,
//     f:function(){
//     console.log(this)  // object itself return
//     }
// }
// object.f()

// 4. object funtion - function 
// let object ={
//         name:"mahender",
//         age:22,
//         contact:9540354422,
//         f:function(){
//             function g(){
//                 console.log(this) // retrun undefined
//             }
//         g()
//         }

//     }
//     object.f()