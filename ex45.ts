// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.


//declaring a custom object type 
type carinfo = {
    manufacturer:string,
    model:string,
//this is an index signature for dynamic keys and it is represented by square brackets.
    [key:string]:any; 
};

// Cars: Write a function that stores information about a car in a Object.
function carCreators(manufacturer:string, model:string, optional: Record<string, any>): carinfo{
    return{
        manufacturer,
        model,
        ...optional  //this will accepts N number of key-value pairs  (Arbitary numbers of keyword arguments)
    }
}


// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
let myCar: carinfo = carCreators("Toyota","Corolla2022",{color:"white",year:2022,type:"auto"});

// Print the Object that’s returned to make sure all the information was stored correctly.
console.log(myCar);
