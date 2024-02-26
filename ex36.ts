// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirts(size:string , text:string){
    console.log(`The ${size} size shirt ${text}.`);
}

make_shirts("small" , "My fav Shirt");
make_shirts("large" , "is for you");
make_shirts("medium" , "mygirl")