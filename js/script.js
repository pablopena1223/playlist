/* global $ */

// BELOW Update the songs array with four of your favorites songs.

// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song

// var songs = ["El Nino De La Tuna", "Eres Divina", "A Mis Enemigos", "Mente En Blanco" ];

// var images_links = ["https://images-na.ssl-images-amazon.com/images/I/51MraqrcZRL._SS500.jpg", "https://images-na.ssl-images-amazon.com/images/I/51uj8%2BvHTVL._SS500.jpg", "https://images-na.ssl-images-amazon.com/images/I/51oC-hjEd1L._SS500.jpg", "https://images-na.ssl-images-amazon.com/images/I/51w48P7YZlL._SS500.jpg"];

// var artists = ["Roberto Tapia", "Patrulla 81", "Valentin Elizalde", "Voz De Mando"];

// var song_lengths = ["217", "207", "183", "220"];

// var links = ["https://www.youtube.com/watch?v=qV04HIhTEuw", "https://www.youtube.com/watch?v=9kFn7xv18aE", "https://www.youtube.com/watch?v=jBU9cbrbrn0", "https://www.youtube.com/watch?v=zU3p_yTtcfw" ];

// Make sure they match the same order as your array above


 var playlist =[
     {
    song: "El Nino De La Tuna",
    images_link: "https://images-na.ssl-images-amazon.com/images/I/51MraqrcZRL._SS500.jpg",
    artist: "Roberto Tapia",
    song_length: "217",
    link: "https://www.youtube.com/watch?v=qV04HIhTEuw",
    },
{
song: "Eres Divina",
images_link: "https://images-na.ssl-images-amazon.com/images/I/51uj8%2BvHTVL._SS500.jpg",
artist: "Patrulla 81",
song_length: "207",
link: "https://www.youtube.com/watch?v=9kFn7xv18aE",
},
    {
    song: "A Mis Enemigos",
    images_link: "https://images-na.ssl-images-amazon.com/images/I/51oC-hjEd1L._SS500.jpg",
    artist: "Valentin Elizalde",
    song_length: "183",
    link: "https://www.youtube.com/watch?v=jBU9cbrbrn0",
    },
{
song: "Mente En Blanco",
images_link: "https://images-na.ssl-images-amazon.com/images/I/51w48P7YZlL._SS500.jpg",
artist: "Voz De Mando",
song_length: "220",
link: "https://www.youtube.com/watch?v=zU3p_yTtcfw",
},

];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var songName = $('#song').val();
    var imageURL = $('#image').val();
    var artistName = $('#artist').val();
    var lengthOfSong = $('#length').val();
    var linkURL = $('#link').val();
    
    var newplaylistitem ={
    song: songName,
    images_link: imageURL,
    artist: artistName,
    song_length: lengthOfSong,
    link: linkURL,
    };
    
    playlist.push(newplaylistitem);

    // songs.push(songName);
    // images_links.push(imageURL);
    // artists.push(artistName);
    // song_lengths.push(lengthOfSong);
    // links.push(linkURL);
}

function displaySongInfo(){
    playlist.forEach(function(person){
        $("#songs").append("<p>" + person.song + "</p>");
        $("#images").append("<img src=" + person.images_link + ">");
        $("#artists").append("<p>" + person.artist + "</p>");
        $("#lengths").append("<p>" + person.song_length + "</p>");
        $("#links").append("<a href=" + '"' + person.link + '"' + "target=_blank" + ">" + "Listen" + "</a>");
});
    
//     songs.forEach(function(song){
//         $("#songs").append("<p>" + song + "</p>");
// });
    
//     images_links.forEach(function(imageslink){
//         $("#images").append("<img src=" + imageslink + ">");
// });
    
//     artists.forEach(function(artist){
//         $("#artists").append("<p>" + artist + "</p>");
// });
    
//     song_lengths.forEach(function(songlength){
//         $("#lengths").append("<p>" + songlength + "</p>");
// });
    
//     links.forEach(function(link){
//         $("#links").append("<a href=" + '"' + link + '"' + "target=_blank" + ">" + "Listen" + "</a>");
// });
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
