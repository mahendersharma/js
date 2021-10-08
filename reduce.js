let myarr =[1,2,3,4,5];
let newarrs= myarr.reduce(function(x){
    return x+x
})
console.log(newarrs)



// 2------------------------



let newarr= myarr.reduce(function(accum,x){
    return accum+x
},2)
console.log(newarr)