// let vehicle={Car:"Audi",model:"benzz",year:"2025"};
// document.getElementById("cars").innerHTML="car:   "+vehicle.Car  +"     model:   "+vehicle.model+"   year:    "+vehicle.year;

let person=[{id:"123",name:"Anju",age:"19"}
          ,{id:"124",name:"jaswanth",age:"20"},
          {id:"124",name:"jaswanth",age:"20"},
          {id:"124",name:"jaswanth",age:"20"},
          {id:"124",name:"jaswanth",age:"20"},];
let add=person.map(persons=>{
   return persons.name});
    console.log(add)
          document.getElementById("detials").innerHTML= add

