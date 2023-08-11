const inquirer = require('inquirer');
const chalk = require('chalk');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// import checkbox, { Separator } from '@inquirer/checkbox';
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a short description for your Project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter a short paragraph about the purpose of your Project:',
        name: 'purpose',
    },
    {
        type: 'confirm',
        message: 'Do you need to provide installation instructions for you Project?',
        default: false,
        name: 'installReq',
        
    },
    {
        type: 'input',
        message: 'Describe the Installation Process of your Project:',
        name: 'installDetails',
        when: (answers) => answers.installReq === true,

    },
    {
        type: 'confirm',
        message: 'Do you need to include Usage Instructions?',
        default: false,
        name: 'usageReq',
        
    },
    {
        type: 'input',
        message: 'Describe Usage Instructions',
        name: 'usageDetails',
        when: (answers) => answers.usageReq === true,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) { // w3 schools helped me with this err check
            console.error('Error writing to file:', err);
          } else {
            console.log('Data written to file successfully. Go check Develop/utils/README.md to view your file!');
          }
    });
}

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
        console.log('this is the value for installReq: ' + data.installReq);
       const markdown= generateMarkdown(data);
        // console.log('this came from the generate md function: ' 
        // + data.title);
        writeToFile('README.md', markdown);

        
        
    })
    .catch((error) => { // this block taken from inquirer documentation
        if (error.isTtyError) {
            console.log('Prompt couldnt be rendered in the current environment... \n')
        } else {
            console.log('Something went wrong... \n')
          
        }
      });