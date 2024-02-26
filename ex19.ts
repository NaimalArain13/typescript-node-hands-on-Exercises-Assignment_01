/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner. */

  let InvitedPeople = ["SheharBano", "Rukhsar", "Ali Rehman"];
  //compose an invitiation and send them to the people i invite.
  console.log("Hello, " + InvitedPeople[0] + ", I cordially invite you to the dinner");
  console.log("Hello, " + InvitedPeople[1] + ", I cordially invite you to the dinner");
  console.log("Hello, " + InvitedPeople[2] + ", I cordially invite you to the dinner");
  //Add a print statement at the end of your program stating the name of the guest who can’t make it.
  console.log(InvitedPeople[0] + ", can't make the dinner tonight with us.");
  //replacing the name of the guest who can’t make it with the name of the new person you are inviting.
  let modifying_Guest_List = InvitedPeople.splice(0, 1, "Meherma");
  //printing the new guest list to make sure that changing have made.
  console.log(InvitedPeople);
  //compose second invitiation and send them to the people i invite.
  console.log("Hello, " + InvitedPeople[0] + ", I cordially invite you to the dinner");
  console.log("Hello, " + InvitedPeople[1] + ", I cordially invite you to the dinner");
  console.log("Hello, " + InvitedPeople[2] + ", I cordially invite you to the dinner");
  
  //Add a print statement to the end of your program informing people that you found a bigger dinner table.
  console.log("Hello to the goodies, I am glad to inform you that now I have found a bigger dinner table so I want to invite three more friends of mine.");
  
  //• Add one new guest to the beginning of your array.
  InvitedPeople.unshift("Nilofer");   
  
  //• Add one new guest to the middle of your array.
  InvitedPeople.splice(2, 0, "Shehzad Hussain"),
  
  //• Use append() to add one new guest to the end of your list.append does not exist that is why i used .push() here.
  InvitedPeople.push("Bakhtawar");
  
  //printing the new guest list to make sure that changing have made.
  console.log(InvitedPeople);
  
  //compose third invitiation and send them to the people i invite.
  console.log("Hello, " + InvitedPeople[0] + ", I cordially invite you to the dinner");
  console.log("Hello, " + InvitedPeople[1] + ", I cordially invite you to the dinner");
  console.log("Hello, " + InvitedPeople[2] + ", I cordially invite you to the dinner");
  console.log("Hello, " + InvitedPeople[3] + ", I cordially invite you to the dinner");
  console.log("Hello, " + InvitedPeople[4] + ", I cordially invite you to the dinner");
  console.log("Hello, " + InvitedPeople[5] + ", I cordially invite you to the dinner");
  
  
  //Add a new line that prints a message saying that you can invite only two people for dinner.
  console.log("Oops! The bigger dinner table won't arrive on time so I can invite only two people for dinner");
  
  
  //• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
  InvitedPeople.pop();
  InvitedPeople.pop();
  InvitedPeople.pop();
  InvitedPeople.pop();
  
  
  // print a message to that person letting them know you’re sorry you can’t invite them to dinner.
  console.log("I'm o sorry, " + InvitedPeople[2] + ", I can't invite you to the dinner");
  console.log("I'm o sorry, " + InvitedPeople[3] + ", I can't invite you to the dinner");
  console.log("I'm o sorry, " + InvitedPeople[4] + ", I can't invite you to the dinner");
  console.log("I'm o sorry, " + InvitedPeople[5] + ", I can't invite you to the dinner");
  
  
  //• Print a message to each of the two people still on your list, letting them know they’re still invited.
  console.log("Hello, " + InvitedPeople[0] + ", You're still invited to the dinner");
  console.log("Hello, " + InvitedPeople[1] + ", You're still invited you to the dinner");
  
  //• Remove the last two names from your list, so you have an empty list. 
  InvitedPeople.pop();
  InvitedPeople.pop();
  
  
  //  Print your list to make sure you actually have an empty list at the end of your program. */
  console.log(InvitedPeople);

  console.log(InvitedPeople.length);
  