// Square value ((----------------------Imperative--------------------------))
const x = 4;
const xsquare = x*x;

let iseven;
if(xsquare % 2 === 0){
    iseven = true;
}
else{
    iseven = false;
}


console.log(iseven);


// declarative code 😍😍😍🤦‍♂️🤦‍♂️😒😒😢😢❤❤❤🤣😂😂😂😊😊😊😍😍🤦‍♂️🤦‍♂️😒😒😢.


const isSquareEven = (x)=>((x*x)%2 ===0?true:false)

console.log(isSquareEven(5))