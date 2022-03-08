// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt(
    {
        type: 'input',
        name: 'Title',
        message: 'What is thte title of the project?',
    }, {
        type: 'input', 
        name: 'Description',
        message: 'What is the project about? Give a detailed description.'
    }, {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents'
    }, {
        type:'"input',
        name: 'Installation',
        message: 'How did you install your app?'
    }, {
        type: 'input',
        name: 'Usage',
        message: 'How do you use your app?'
    }, {
        type: 'list'
        name: "License"
        message: 'Which license did you use?'
        choices: ['Apache License', 'MIT License']
    }, {
        type: 'input',
        name: 'Contributing',
        message: 'How can other developers contirbute to your project?'
    }, {
        type: 'input'
        name: 'Tests',
        message: 'How to run your application? How to test it?',
    }
        Questions
    }
  ]);
};

questions().then( answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile(`./$(fileName.toLowerCase().split(' '))`)


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
