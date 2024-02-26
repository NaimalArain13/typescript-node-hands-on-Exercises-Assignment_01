/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 */


let myName = "Naimal";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//Creating a function to title case a string
function titleCase(sentence:string): string{

//break the sentence in words and convert those words in lowercase
    let words = sentence.toLowerCase().split(" ");

//converting words into uppercase
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);

    }
//join words back to the sentence
    return words.join(' ');
}
//calling function
console.log(titleCase(myName));


//creating function to title case a word
function TitleCaseWord(word:string): string{
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

//calling function
console.log(TitleCaseWord("kamran"));