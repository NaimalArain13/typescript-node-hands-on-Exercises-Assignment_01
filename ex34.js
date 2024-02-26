"use strict";
// Pizzas: Think of at least three kinds of your favorite pizza. 
//Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let MyFavPizzaFlavour = ["Tikka", "Fajita", "Kababish"];
for (let i = 0; i < MyFavPizzaFlavour.length; i++) {
    console.log(MyFavPizzaFlavour[i]);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
for (let i = 0; i < MyFavPizzaFlavour.length; i++) {
    console.log("I really like to have " + MyFavPizzaFlavour[i] + " with my friends");
}
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//such as I really love pizza!
console.log("My love for is indescribable.\n My favourite food is pizza because this looks so yummy, and crispy and so cheesy in taste. \n I am very foodie. I love to eat and cook pizza. \n The food gives us energy. \n I love to eat Pizza");
