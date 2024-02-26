// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_Shirts(size:string , text:string){
    console.log("Large sized shirt says I am not the type of your Script");
    console.log("Medium sized shirt says let's help Fellows")
    console.log(`The ${size} size shirt ${text}.`);
}

// make_Shirts("xSmall" , "TypeScript is LaV");
make_Shirts("xLarge" , "Chota bhai JS \n Bara bhai TS")