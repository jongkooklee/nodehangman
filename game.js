// dependency for inquirer npm package
var inquirer = require("inquirer");

var word = require("./word.js");
var letters = require("./letters.js");


function startGame () {
   var playWord = word.wordbank[Math.floor(Math.random()*word.wordbank.length)];
   

}

startGame();

var questions = [
    {
        name: "Guess",
        type: "input",
        message: "Guess a Letter!"
    }
]



// inquirer.prompt([
//     {
//         name: "nameinput",
//         type: "input",
//         message: "What is your name?"
//     },
//     {
//         name: "pokemon",
//         type: "list",
//         message: "Choose your Pokemon",
//         choices: ["Bulbasaur", "Charmander", "Squirtle"]
//     }
// ])
//     .then(function(answer){
//         console.log(answer)
//     })