
// dependency for inquirer npm package
var inquirer = require("inquirer");
var players = 0  
// constructor function used to create programmers objects
function Players(name, position, offense, defense, goodGame, badGame) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = goodGame;
    this.badGame = badGame;
}

// creates the printInfo method and applies it to all programmer objects
players.prototype.printInfo = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\noffense: " + this.offense + "\ndefense: " + this.defense + "\ngoodGame:" + this.goodGame + "n\badGame" + this.badGame);
};

// variable we will use to hold our programmers
var players = [];

var askQuestion = function () {
    // if statement to ensure that our questions are only asked five times
    if (players.length < 2) {
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your current position?"

            },
            {
                name: "offense",
                message: "What is your current position?"

            },
            {
                name: "defense",
                message: "What is your current position?"

            },

            
     
    ])
    .then(function (answers) {
                // initializes the variable newProgrammer to be a programmer object which will take
                // in all of the user's answers to the questions above
                var newPlayer = new player(
                    answers.name,
                    answers.position,
                    answers.offense,
                    answers.defense);
                // printInfo method is run to show that the newProgrammer object was successfully created and filled
                newPlayer.printInfo();
                // add one to count to increment our recursive loop by one
                players.push(newPlayer);
                // run the askquestion function again so as to either end the loop or ask the questions again
                askQuestion();
            });
        // else statement which prints "all questions asked" to the console
        // when the code has been run five times
    }
    else {
        console.log("All questions asked:");
        console.log(newPlayers);
    }
};

// call askquestion to run our code
askQuestion();




