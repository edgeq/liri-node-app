//At the top of the `liri.js` file, write the code you need to grab the data from keys.js.
var request = require('request');
var keys = require('./keys.js');
// console.log(twitter);
//Then store the keys in a variable.
var twitterKeys = keys.twitterKeys;
var spotifyKeys = keys.spotifyKeys;
 //console.log(twitterKeys); returns an object

// individual keys
// var twitterKey = twitter.consumer_key;
// console.log("twitter key: " + twitterKey);
// var twitterSecret = twitter.consumer_secret;
// console.log("twitter secret: " + twitterSecret);
// var twitterAccessToken = twitter.access_token_key;
// console.log("twitter access token: " + twitterAccessToken);
// var twitterTokenSecret = twitter.access_token_secret;
// console.log("twitter acess token secret: " + twitterTokenSecret);

//===================//

//8. Make it so liri.js can take in one of the following commands:
  // * `my-tweets` * `spotify-this-song` * `movie-this` * `do-what-it-says`

  var iTermInput = process.argv[2]
  var inputArray = ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"];
   //What each command should do:
   /*if (iTermInput[0]){
        console.log(show last 20 tweets);
          Twitter NPM documentation for searching tweets
        console.log(show when created);
      }*/

      if (iTermInput === inputArray[0]){
        var Twitter = require('twitter');
        var client = new Twitter(twitterKeys);
        var params = {screen_name: 'edgeriffs'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
          if (!error) {
            for (var i = 0; i <= 19; i++) {
              console.log("==========");
              console.log(tweets[i].created_at);
              console.log(tweets[i].text);
              console.log("==========");
              console.log("\r");
            }
          }
        });
        console.log("you tweeted..." + "on this date");

      } else if(iTermInput === inputArray[1]){


        var spotifySong = process.argv[3];
        var Spotify = require('node-spotify-api');

        var spotify = new Spotify(spotifyKeys);

        spotify.search({ type: 'track', query: spotifySong, limit: 1}, function(err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }
          if (spotifySong == ''){
            console.log('put something')
          }
          /*conosle.log(Artist) * console.log(song's name) * conzole.log(song preview link) * console.log(album) */
          console.log(data.tracks.items[0].artists[0].name);
          console.log(data.tracks.items[0].name);
          console.log(data.tracks.items[0].preview_url)
          console.log(data.tracks.items[0].uri);
          console.log(data.tracks.items[0].album.name);

        });

        console.log("spotify song...");
      } else if(iTermInput === inputArray[2]){
        /*
        else if (iTermInput[2]) {
          console.log(Title of Movie / Year / RatingIMDB / RatingRT / Country / Language / Plot / Actors);

          if (no movie){
            Mr. Nobody
          }
        }*/
        console.log("OMDB pull...");
      } else if (iTermInput === inputArray[3]){
        console.log("run text file...");
      } else {
        console.log("please use a valid command")
      };


      /*else if(iTermInput[3]){
        fs.readFile("random.txt", "utf8", function(){
          write randomTxt file as process.argv[2] in terminal
        }
      }
      */












