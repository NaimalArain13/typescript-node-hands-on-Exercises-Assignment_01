// Great Magicians: Start with a copy of your program from Exercise 39. 


let great_magicians:string[] = [
    "Harry Houdini",
    "Criss Angel",
    "David Blaine",
    "M.Ejaz Mughal"
];

// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great(){
    for(let i = 0; i < great_magicians.length; i++){
        console.log(`The Great ${great_magicians[i]}`)
    }    
}

// Call show_magicians() to see that the list has actually been modified.
make_great();
