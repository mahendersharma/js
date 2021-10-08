// function cal(a,b){
//     let result = a + b
//     return result
// }
// console.log(cal(8,9))


// lecsical Scop funtions
function cat(){
    let a  = 4;
    
function addchild(){
    console.log(a + 5)
}

    return addchild()

}
let catchcal =cat()
console.log(catchcal)
// catchcal()