const inquirer = require('inquirer');
const chalk = require('chalk');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const log = console.log;

function init() {
    const welcomeTitle = log(chalk.bgCyanBright('All aboard the READ.ME Express \n Complete the following prompts to generate your READ.ME: \n'));
};

// Function call to initialize app
init();

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your Project?',
            name: 'title',
        },
    ])
    .then((answers) => {
        console.log(answers);
         const title = answers.title;
         console.log(title);
        
        
    })
    .catch((error) => { // this block taken from inquirer documentation
        if (error.isTtyError) {
            console.log('Tty error')
          // Prompt couldn't be rendered in the current environment
        } else {
            console.log('error msg')
          // Something else went wrong
        }
      });