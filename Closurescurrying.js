function add(x){
    return function(y){
        console.log(x+y)
    }
}
let add2 = add(3)
add2(8)