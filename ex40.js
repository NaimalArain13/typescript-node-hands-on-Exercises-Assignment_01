"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. 
function make_album(artistName, albumTitle, numtrack) {
    // The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
    let myAlbum = {
        artistName: artistName,
        albumTitle: albumTitle,
        numtrack: numtrack
    };
    return myAlbum;
}
// Use the function to make three dictionaries representing different albums. 
let album_1 = make_album("Naimal", "Entertainment", 6);
let album_2 = make_album("Abdul Samad Zia", "Wedding");
let album_3 = make_album("Pictoria", "Thriller", 2);
let album_4 = make_album("Picturing", "Asthetic", 3);
// Print each return value to show that Objects are storing the album information correctly.
console.log(album_1);
console.log(album_2);
console.log(album_3);
console.log(album_4);
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.
