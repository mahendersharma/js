// let person ={
// name:"mahender",
// age:22,

// showdeatils: function(){
//     console.log(this.name,'is',this.age,'year old')
// }

// }
// person.showdeatils()

// let person2 =
// {
//     name:"banga",
//     age:22
//  }
 
// //   function borrwoin
//  person.showdeatils.call(person2)

 let person ={
    name:"mahender",
    age:22,
    }
    
    
    let person2 =
    {
        name:"banga",
        age:22
     }
    let showdeatils = function(city, car){
        console.log(this.name,'is',this.age,'year old', city, 'drive',car)
    }
     showdeatils.call(person2,'delhi','bmw')