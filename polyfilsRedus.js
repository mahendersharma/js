let myArr = [1,2,3,4,5,6,7,8,9]



function getArraySum(a){
    var total=0;
    for(let i = 0; i < a.length; i++) { 
        total += a[i];
    }
    return total;
}


console.log(getArraySum(myArr))