// --------------------------------start-----------------------------/

// const person ={
//     name: 'mahender',
//     agev: 22
// }
// const person2 = person;
// console.log(person)
// console.log(person2)

// ----------------------------------end-------------------------------//

// -------------------------------start--------------------------------//
// const person ={
//     name: 'mahender',
//     agev: 22
// }
// const person2 = person;
// person2.name = 'deepanshu';
// console.log(person)
// console.log(person2)


// ---------------------------------end =--------------------------------

// -------------------------------start  ans 1--------------------------------


// const person ={
//     name: 'mahender',
//     agev: 22
// }
// const person2 = Object.assign({},person)
// person2.name = 'deepanshu';
// console.log(person)
// console.log(person2)


// -----------------------------------end-------------------------------------
// -----------------------------------spradeOpeator =-------------------------

    const person = 
    {
        name: 'mahender',
        age: 22
    }
    const person2 = {...person}
    person2.name = 'deepanshu';
    console.log(person)
    console.log(person2)