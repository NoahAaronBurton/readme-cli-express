const inquirer = require('inquirer');
const chalk = require('chalk');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const log = console.log;


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
    {
        type: 'rawlist',
        message: 'Which kind of license would you like to use?',
        default: 'MIT',
        choices: [
            {name: 'MIT', value: 'MIT'},
            {name: 'ISC', value: 'ISC'},
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter the Copyright year. A date range is also acceptable:',
        name: 'licenseYear',
    },
    {
        type: 'input',
        message: 'Enter the Copyright Holder(s):',
        name : 'copyrightHolder',
    },
    {
        type: 'confirm', 
        message: 'Would you like to add a section with Contribution Guidelines? Fork instructions will automatically be added. You may include additional text in this section.',
        name: 'contribReq',
    },
    {
        type: 'input',
        message: 'Enter your Contribution Instructions (an empty input is acceptable):',
        name: 'contribDetails',
        when: (answers) => answers.contribReq === true,
    },
    {
        type: 'confirm',
        message: `Would you like to add a section for Tests?`,
        name: 'testReq',
    },
    {
        type: 'input',
        message: 'Enter your testing instructions:',
        name: 'testDetails',
        when: (answers) => answers.testReq === true,
    },
    {
        type: 'confirm',
        message: 'Would you like to add a Questions/Contact Me section? This is where you can add your contact information.',
        name: 'questionsReq',
    },
    {
        type: 'input',
        message: 'Enter your GitHub Username:',
        name: 'githubUsername',
        when: (answers) => (answers.questionsReq === true),
    },
    {
        type: 'input',
        message: 'Enter the email address you would like to be contacted at:',
        name: 'userEmail',
        when: (answers) => (answers.questionsReq === true),
    },
    {
        type: 'confirm',
        message: 'Would you like to add a Credits section?',
        name: 'creditsReq',
    },
    {
        type: 'number',
        message: 'How many reference slots would you like to add? \n Note: Go into the document after README is generated and enter the respective information \n Credit Slots:',
        name: 'creditsSlots',
        when: (answers) => (answers.creditsReq === true),
    },
   
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) { // w3 schools helped me with this err check
            console.error('Error writing to file:', err);
          } else {
            log(chalk.bgGreen('Data written to file successfully. Go check Develop/utils/README.md to view your file!'));
          }
    });
}



function init() {
    const welcomeTitle = log(chalk.bgCyanBright('All aboard the READ.ME Express \n Complete the following prompts to generate your READ.ME: \n'));
};

// Function call to initialize app
init();

inquirer
    .prompt(questions)
    .then(function (data) {
        console.log('this is the value for number of slots: ' + data.creditsSlots);
       const markdown= generateMarkdown(data);
        writeToFile('README.md', markdown);

        
        
    })
    .catch((error) => { // this block taken from inquirer documentation
        if (error.isTtyError) {
            console.log('Prompt couldnt be rendered in the current environment... \n')
        } else {
            console.log('Something went wrong... \n')
          
        }
      });