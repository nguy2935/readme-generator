// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is thte title of the project?",
        name: "Title"
    }, {
        type "input", 
        message: "What is the project about? Give a detailed description."
        name: "Description"
    }, {
        type: "input",
        message: "Table of Contents"
        name: "Table of Contents"
    }, {
        type: "input",
        message: "How do you install your app?"
        name: "Installation"
    }, {
        type: "input",
        message: "How do you use your app?"
        name: "Usage"
    }, {
        type: "list"
        message: "What license did you use?",
        choices: ['MIT License']
        name: "License"
        Contributing 
        Tests 
        Questions
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        
    })
}
fs.writeFile(`./$(fileName.toLowerCase().split(' '))`)


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
