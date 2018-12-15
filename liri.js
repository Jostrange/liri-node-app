    require("dotenv").config();
    const keys = require('./keys');
    var Spotify = require('node-spotify-api');
    const moment = require('moment');
    const request = require('request');
    const fs = require('fs');


display = function () {
    console.log(data.name.images)
};

searchSpotify = function (query) {
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: query, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
    
        var artist = data.tracks.items[0].album.artists[0].name;
        var song = data.tracks.items[0].name;
        var preview = data.tracks.items[0].preview_url;
        var album = data.tracks.items[0].album.name;
        console.log(`name: ${artist}\nsong: ${song}\npreview: ${preview}\nalbum: ${album}`);

    });

}

checkIfCommandIsSupported = function (commandToCheck) {
    var supportedCommands = ['concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'];
    var isSupported = supportedCommands.includes(commandToCheck)
    return isSupported
}

searchBands = function (Artists) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + Artists + "/events?app_id=codingbootcamp"
    console.log(queryUrl);

    request(queryUrl, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }

        var event = body[0];
        if (event) {         
            console.log(`Venue:${event.venue.name}`);
           
            console.log(`Location:${event.venue.city}`);
            
            console.log(`Date:${event.datetime}`);
        } else {
            console.log("The Sign");
        }


    });

}

searchMovies = function (movieToSearchFor) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieToSearchFor + "&APIKEY=835d4083"
    console.log("searching movies");


    request(queryUrl, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        

        var title = body;
        if (title) {
            // var movieTitle = title;
            console.log(`Movie Title: ${title}`);
            var yearRelease = moment(title.Year).format("MM/DD/YYYY");
            console.log(`Date: ${yearRelease}`);
            // var rating = title.Ratings[0].Value;
            console.log(`IMDB Rating: ${title.Ratings[0].Value}`);
            // var rTRating = title.Ratings[1].Value;
            console.log(`Rotten Tomatoes Rating: ${title.Ratings[1].Value}`);
            // var country = title.Country;
            console.log(`Country: ${title.Country}`);
            // var language = title.Language;
            console.log(`Language: ${title.Language}`);
            // var plot = title.Plot;
            console.log(`Plot: ${title.Plot}`);
            // var cast = title.Actors;
            console.log(`Cast: ${title.Actor}`);
        } else {
            console.log(`If you haven't watched "Mr.Nobody" then you should! http://www.imdb.com/title/tt0485947/`);
            console.log("It's on Netflix!");
        }

    });


}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", (error, content) => {
            // if an error occurs, log the error to the console
        if (error) {
            return console.log(error);
        }

        // split content into an array where the first element is the command and the second is the search term
        const contentArr = content.trim().split(",");

        // remove double quotations from the search term
        searchTerm = contentArr[1].replace("\"", "");

        // perform command
        runCommand(contentArr[0], searchTerm);
    });
}
runCommand = function(command, query){
     //command supported do stuff
     switch (command) {
         case "spotify-this-song":
             searchSpotify(query)
             break
         case "concert-this":
             searchBands(query)
             break
         case "movie-this":
             searchMovies(query)
             break
         case "do-what-it-says":
             doWhatItSays(query)
             break
     }
}
parseAndRunCommand = function () {
    console.log(keys.spotify.id);

    var command = process.argv[2]
    console.log(command)

    var query = process.argv[3]
    console.log(query)

    if (checkIfCommandIsSupported(command)) {
       runCommand(command, query);

    }
    else {
        console.log("command not supported");
    }

}
parseAndRunCommand();









