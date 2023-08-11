const inquirer = require('inquirer');
const chalk = require('chalk');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const log = console.log;

function init() {
    const welcomeTitle = log(chalk.bgCyanBright('All aboard the READ.ME Express \n Complete the following prompts to generate your READ.ME: \n'));
};

// Function call to initialize app
init();
// to do: finish questions
inquirer
    .prompt(questions)
    .then(function (data) {
       const markdown= generateMarkdown(data);
        console.log('this came from the generate md function: ' 
        + data.title);
        fs.appendFile('README.md', markdown, (err) => {
            if (err) { // w3 schools helped me with this err check
                console.error('Error writing to file:', err);
              } else {
                console.log('Data written to file successfully.');
              }
        });

        // to do: after questions are finsihed, tell user to check utils folder for their README
        
    })
    .catch((error) => { // this block taken from inquirer documentation
        if (error.isTtyError) {
            console.log('Prompt couldnt be rendered in the current environment... \n')
        } else {
            console.log('Something went wrong... \n')
          
        }
      });