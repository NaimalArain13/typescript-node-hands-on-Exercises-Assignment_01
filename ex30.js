"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
let usernames = ["Natalia", "Naimal", "Gulzaib", "Admin", "Fuzail"];
//Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:
for (let i = 0; i < usernames.length; i++) {
    // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    if (usernames[i] === "Admin") {
        console.log("Hello " + usernames[i] + ", would you like to see a status report");
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else {
        console.log("Hello " + usernames[i] + ", thank you for logging in again");
    }
}
