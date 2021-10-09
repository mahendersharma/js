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
    let showBind = showdeatils.bind(person2,'delhi','Audi')
    showBind()