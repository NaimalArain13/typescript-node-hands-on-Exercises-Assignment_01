// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users: string[] = ["Daniyal" , "Salahuddin" , "Naimal" , "Natalia" , "Laraib"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ["Gulzaib" , "Salahuddin" , "NaiMAl" , "Asra" , "Kainat"];

new_users

// • Loop through the new_users list to see if each new username has already been used. 
for(let i=0 ; i < new_users.length ; i++){
// If it has, print a message that the person will need to enter a new username. 
    if(current_users[i].toLowerCase() === new_users[i].toLowerCase()){
        console.log("Please enter new username");
    }
// If a username has not been used, print a message saying that the username is available.
    else{
        console.log("Username is available");
    }
}

    
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.