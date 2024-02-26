// Cities: Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(city:string, country:string = "Pakistan"){

// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
    console.log(`${city} is in ${country}`);
}
// Call your function for three different cities, at least one of which is not in the default country.
describe_city("Hyderabad" ,);
describe_city("Lahore" , "Paksitan");
describe_city("Tokyo" , "London");
describe_city("Dehli" , "India");
