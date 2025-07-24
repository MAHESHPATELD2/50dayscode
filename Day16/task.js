const people=[{FirstName:"Basani",LastName:"Mahesh"},
    {FirstName:"Santhosham",LastName:"Lakshith"}];
    const peoplewithFullName=people.map(person=>{
        return{... person,FullName:`${person.FirstName}${person.LastName}` };
    });
        console.log("original person:",people);
        console.log("person with Full Name:",peoplewithFullName);

// document.getElementById("Detials").innerHTML="   FirstName:   "+person.FirstName+"   LastName:    "+person.LastName+"   FullName:   "+person.FullName;