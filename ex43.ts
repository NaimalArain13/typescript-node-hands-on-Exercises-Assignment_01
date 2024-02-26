// Unchanged Magicians: Start with your work from Exercise 40. 

// Because the original array will be unchanged, return the new array and store it in a separate array. 


let magicians_names:string[] = [
    "Harry Houdini",
    "Criss Angel",
    "David Blaine",
    "M.Ejaz Mughal"
];



function Make_great(magician:string[]): string[]{
    let newmagician:string[] = []
    for(let i = 0; i < magician.length; i++){
        newmagician.push(`The Great ${magicians_names[i]}`);
        
    } 
       return newmagician;
}

function Show_magicians(magicians:string[]){
    for(let i = 0; i < magicians.length; i++){
        console.log(magicians[i]);
    }
}

// Call the function make_great() with a copy of the array of magicians’ names. 
let newarray = Make_great(magicians_names);


// Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.

Show_magicians(magicians_names);
Show_magicians(newarray);
