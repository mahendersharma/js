function add(a,b){
console.log(a +b)
}
let add1 = add.bind(this)
add1(5,5)