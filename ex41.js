"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
let magician_names = [
    "Harry Houdini",
    "Criss Angel",
    "David Blaine",
    "M.Ejaz Mughal"
];
function show_magicians() {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}
