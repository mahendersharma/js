// 'non  strict'


//  a = 4;
// console.log(a)

// 1. gollobaly console.log
// console.log(this) return empty object 


// 2. functionally console log 
// function showThis(){
    // console.log(this)   //return gobal object
// }
// showThis()


// 3.object funtion 
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
//                 console.log(this) // retrun global object
//             }
//         g()
//         }

//     }
//     object.f()