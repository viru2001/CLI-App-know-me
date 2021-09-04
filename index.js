const readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;

const questions = [
    {
        question : "where do i live ? ",
        answer : "Mumbai"
    },
     {
        question : "which is my favourite sport ? ",
        answer : "Cricket"
    },
     {
        question : "In which state my hometown located ? ",
        answer : "Maharashtra"
    },
     {
        question : " Which is my fav Youtube Channel ? ",
        answer : "Traversey Media"
    },
     {
        question : "which is my favourite genre of music ? ",
        answer : "classical"
    }
]

const highScores = [
    {
        name : "Viresh",
        score : 5
    },
    {
        name : "Abhishek",
        score : 4
    }
]

const welcome = () =>{
    let name = readlineSync.question("What is your name ? ")
    const welcomeMsg = "Welcome " + chalk.yellow.bold(name.toUpperCase()) + " to HOW WELL DO YOU KNOW ME ";
    console.log(welcomeMsg);
    console.log("every correct answer give you +1 score");
}

const play = (question , answer)=>{
    let styledQuestion = chalk.rgb(255, 214, 153)(question)
    let userAnswer = readlineSync.question(styledQuestion);
    if(userAnswer.toLowerCase() === answer.toLowerCase()){
        score = score + 1;
        console.log(chalk.green("Right !!!"));
    } 
    else{
        console.log(chalk.red("Wrong !!!"));
    }
    console.log("Your Current Score : " + chalk.magenta(score));
    console.log("---------------------------------------------------")
}

const game = ()=>{
    questions.map( (element)=>{
        play(element.question,element.answer)
    })
}

const displayScores = () =>{
    console.log(chalk.bgRed("YAY! , You Scored : " + score))
    console.log("---------------------------------------------------")
    console.log("Check out the high scores ")
    console.log("If you broke any of the records, send me the screenshot, I will update it in the leaderboard.")
    highScores.map(element =>console.log(element.name + " : "+element.score))
}


welcome()
game()
displayScores()