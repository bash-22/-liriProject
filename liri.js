require("dotenv").config();

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  
//   id:"8d7ffd6206eb49f8a74d5e592705f76d",
//   secret:"c232a3b3dd314e5b85ca9f77b108f225"
});
 var request = require('request');

 



var userinput = process.argv;


if(userinput[2] == "spotify-this"){
    var song = userinput.slice(3, userinput.length).join(' ');
       
    if (song.length === 0){
        song = "the sign ace of base";
    }
    spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
        
       
      console.log("Song Name : " + data.tracks.items[0].name); 
      console.log( "Artist Name:" + data.tracks.items[0].artists[0].name);
      console.log("Preview URL : " + data.tracks.items[0].preview_url); 
      console.log("Album name : " + data.tracks.items[0].album.name); 
    //   console.log("Artist name : " + data.tracks.items[0].artists[5]);

      });
    } 
      
   
else if (userinput[2] == "movie-this"){
    var movie = userinput.slice(3, userinput.length).join(' ');
        if(movie.length === 0){
            movie = "mr nobody";
            console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");

            console.log("It's on Netflix!");
        }else{
                apikey =  process.env.Omdb_Api_key;
        request("http://www.omdbapi.com/?apikey=4c1396e8&t=" + movie + "&y=&plot=short", function(error, response, body){
      
            var tomatoRatings = JSON.parse(body).Ratings[1].Value;
            console.log("Movie Title:"  +  JSON.parse(body).Title);
            console.log( "Year movie was released: " +  JSON.parse(body).Year);
            console.log("IMDB movie rating : "  +  JSON.parse(body).imdbRating  +  "(out of 10)" );
            console.log("Rotten Tomatoes rating: "  + tomatoRatings);
            console.log( "Filmed in :"  +  JSON.parse(body).Country);
            console.log("Language:"  +  JSON.parse(body).Language);
            console.log( "Movie plot:"   +  JSON.parse(body).Plot);
            console.log('Actors:'  +  JSON.parse(body).Actors);
            
            
            });
        }
}

