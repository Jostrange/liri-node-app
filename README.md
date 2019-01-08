

## LIRI - Language Interpretation and Recognition Interface

This is a comman line interface application built with Node.js. It collects user input to query Bandsintown for events, OMDB for movies and Spotify for songs.

## How to use?

Clone this repository onto your computer.
Run 'npm install' in GitBash/Terminal/Command Line in order to install all npm API calls needed.
Acquire a Spotify ID and Secret in order to access the Spotify API and store in a .env file in your .gitignore folder.
Run the commands below:
node liri.js spotify-this-song <'song name'>
node liri.js concert-this <'band or artist name'>
node liri.js movie-this <'name of movie'>
node liri.js do-what-it says

#  How does it work?

### Enter the commands below to learn more about your favorite media.

### Enter "movie-this" as a command and you will have the following information returned:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
   
[![kjjk](https://i.imgur.com/wHK6EvZ.jpg "kjjk")](https://i.imgur.com/wHK6EvZ.jpg "kjjk")

# If no movie is entered Mr. Nobody will appear as default

[![Defailt-Movie-This](https://i.imgur.com/SwUsqu1.jpg "Defailt-Movie-This")](https://i.imgur.com/SwUsqu1.jpgp:// "Defailt-Movie-This")


# Enter "spotify-this-song" to see:

   * Artist(s)
   * The song's name
   * A preview link of the song from Spotify
   * The album that the song is from
[![Spotify-This-Song](https://i.imgur.com/xO55wcP.jpg "Spotify-This-Song")](https://i.imgur.com/xO55wcP.jpg "Spotify-This-Song")

# If no song is entered in the command line, then it will default to The Sign by Ace of Base

[![Default-song](https://i.imgur.com/aqnjDqy.jpg "Default-song")](https://i.imgur.com/aqnjDqy.jpg "Default-song")


# Enter "concert-this" to see:
   * Name of the venue
   * Venue location
   * Date of the Event 

[![Concert-This](https://i.imgur.com/5j2bDUW.jpg "Concert-This")](https://i.imgur.com/5j2bDUW.jpg "Concert-This")

# Enter do-what-it-says  and "I Want it That Way" will appear
[![Do-what-it-says](https://i.imgur.com/PeuoycT.jpg "Do-what-it-says")](https://i.imgur.com/PeuoycT.jpg "Do-what-it-says")
