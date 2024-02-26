/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

let Invite_People = ["SheharBano" , "Rukhsar" , "Ali Rehman"];
console.log("Hello, "+ Invite_People[0] + " I cordially invite you to the dinner");
console.log("Hello, "+ Invite_People[1] + " I cordially invite you to the dinner");
console.log("Hello, "+ Invite_People[2] + " I cordially invite you to the dinner");


console.log(Invite_People[0] + ", can't make the dinner tpnight with us.");

let Modifying_Guest_List = Invite_People.splice(0,1, "Meherma");

console.log(Invite_People);

//compose second invitiation and send them to the people i invite.
console.log("Hello, " + Invite_People[0] + " I cordially invite you to the dinner");
console.log("Hello, " + Invite_People[1] + " I cordially invite you to the dinner");
console.log("Hello, " + Invite_People[2] + " I cordially invite you to the dinner");


