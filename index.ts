#! /usr/bin/env node

//import the inquirer module, which is the command line interface for node.js

import inquirer from "inquirer";

//import chalk

import chalk from "chalk";

console.log(chalk.yellowBright.underline("WELLCOME ............MY WORD COUNTER PROJECT"));

console.log(chalk.blueBright.underline("CREATED BY HUZAIFA QURESHI*"));

//declare a coustant answer and assigned it to the result of inquirer.prompt function

const answers: {
    Sentence: string,
}= await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.bgGreenBright("Enter your sentence to count the word!")
    }
])

const words = answers.Sentence.trim().split(" ")

//print the array of words to the console
console.log(words);

//print the word count of the sentence to the console
console.log(chalk.greenBright(`Your sentence word count is ${words.length}`));

console.log (chalk.bgBlackBright.underline("THE END"));