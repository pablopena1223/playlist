/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["El Nino De La Tuna", "Eres Divina", "A Mis Enemigos", "Mente En Blanco" ];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
var images_links = ["https://images-na.ssl-images-amazon.com/images/I/51MraqrcZRL._SS500.jpg", "https://images-na.ssl-images-amazon.com/images/I/51uj8%2BvHTVL._SS500.jpg", "https://images-na.ssl-images-amazon.com/images/I/51oC-hjEd1L._SS500.jpg", "https://images-na.ssl-images-amazon.com/images/I/51w48P7YZlL._SS500.jpg"];

var artists = ["Roberto Tapia", "Patrulla 81", "Valentin Elizalde", "Voz De Mando"];

var song_lengths = ["217", "207", "183", "220"];

var links = ["https://www.youtube.com/watch?v=qV04HIhTEuw", "https://www.youtube.com/watch?v=9kFn7xv18aE", "https://www.youtube.com/watch?v=jBU9cbrbrn0", "https://www.youtube.com/watch?v=zU3p_yTtcfw" ];
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
songs.forEach(function(song){
        $("#songs").append("<p>" + song + "</p>");
});

images_links.forEach(function(imageslink){
        $("#images").append("<img src=" + imageslink + ">");
});

artists.forEach(function(artist){
        $("#artists").append("<p>" + artist + "</p>");
});

song_lengths.forEach(function(songlength){
        $("#lengths").append("<p>" + songlength + "</p>");
});

links.forEach(function(link){
        $("#links").append("<a href=" + link + "target='_blank'" + ">" + "Listen" + "</a>");
});


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.

}

function displaySongInfo(){
    
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
