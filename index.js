// REQUIRED NPM DEPENDENCIES - chalk, readline-sync
const chalk = require("chalk");
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What's your name ? ");

console.log(chalk `Welcome {yellow.bold ${userName}} to {red.bgWhite.italic.bold The Ultimate Marvel Quiz} !`);
startGame();

//play function
function play(question, options, answer) {
  console.log(`   ${question}`);
  for (let i = 0; i < options.length; i++) {
    console.log(`   ${options[i]}`);
  }
  let userAnswer = readlineSync.question("");

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.greenBright("-- Correct :) --"));
    score += 1;
  } else {
    console.log(chalk.redBright("--Incoreect :(--"));
    console.log("The correct answer is : " + answer);
  }
  console.log("\nCurrent Score: " + score);
  console.log("----------------\n");
}

function startGame() {
  let questions = [
    {
      question: "What is Thor's axe's name ?",
      options: ["a. Mjolnir", "b. Stormbreaker", "c. ThunderBringer"],
      answer: "b",
    },
    {
      question: "What is Ant-Man's real name ?",
      options: ["a. Scott Lang", "b. Scott Pym", "c. Bucky Stark"],
      answer: "a",
    },
    {
      question: "Who is the actor that plays Bruce Banner ?",
      options: ["a. Jeremy Renner", "b. Chris Hemsworth", "c. Mark Ruffalo"],
      answer: "c",
    },
  ];

  let highScores = [
    {
      name: "Stephen",
      score: 2,
    },
    {
      name: "Tony",
      score: 1,
    },
  ];

  for (let i = 0; i < questions.length; i++) {
    let continueKey = readlineSync.question(
      " Press e to exit, or any other key to continue...\n"
    );
    if (continueKey.toLowerCase() === "e") {
      break;
    }
    play(questions[i].question, questions[i].options, questions[i].answer);
  }

  console.log(`\nYour Final Score : ${score}\n`);

  for (let i = 0; i < highScores.length; i++) {
    if (score > highScores[i].score) {
      console.log(chalk `You beat {yellowBright ${highScores[i].name}'s} score !`);
    } else if (score === highScores[i].score) {
      console.log(chalk `You matched {yellowBright ${highScores[i].name}'s} score !`);
    }
  }
}
