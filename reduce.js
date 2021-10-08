let myarr =[1,2,3,4,5];


let newarr= myarr.reduce(function(accum,x){
    return accum+x
},2)
console.log(newarr)