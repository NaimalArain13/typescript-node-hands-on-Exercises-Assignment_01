/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. */



//create a list of people i invite to the dinner.
var Invited_People = ["SheharBano", "Rukhsar", "Ali Rehman"];  

//compose an invitiation and send them to the people i invite.
console.log("Hello, " + Invited_People[0] + " I cordially invite you to the dinner");
console.log("Hello, " + Invited_People[1] + " I cordially invite you to the dinner");
console.log("Hello, " + Invited_People[2] + " I cordially invite you to the dinner");

//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(Invited_People[0] + ", can't make the dinner tpnight with us.");

//replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var Modify_Guest_List = Invited_People.splice(0, 1, "Meherma");

//printing the new guest list to make sure that changing have made.
console.log(Invited_People);





//compose second invitiation and send them to the people i invite.

console.log("Hello, " + Invited_People[0] + " I cordially invite you to the dinner");
console.log("Hello, " + Invited_People[1] + " I cordially invite you to the dinner");
console.log("Hello, " + Invited_People[2] + " I cordially invite you to the dinner");


console.log("Hello to the goodies, I am glad to inform you that now I have found a bigger dinner table so I want to invite three more friens of mine.");
Invited_People.unshift("Nilofer");
Invited_People.splice(2 , 0 , "Shehzad Hussain"),
Invited_People.push("Bakhtawar");

console.log(Invited_People);


console.log("Hello, " + Invited_People[0] + " I cordially invite you to the dinner");
console.log("Hello, " + Invited_People[1] + " I cordially invite you to the dinner");
console.log("Hello, " + Invited_People[2] + " I cordially invite you to the dinner");
console.log("Hello, " + Invited_People[3] + " I cordially invite you to the dinner");
console.log("Hello, " + Invited_People[4] + " I cordially invite you to the dinner");
console.log("Hello, " + Invited_People[5] + " I cordially invite you to the dinner");

