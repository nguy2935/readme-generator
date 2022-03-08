// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const markdownGenerator = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = () => {
    // inquirer to prompt questions to the user
    return inquirer.prompt(
    {
        type: 'input',
        name: 'Title',
        message: 'What is thte title of the project?',
    }, {
        type: 'input', 
        name: 'Description',
        message: 'What is the project about? Give a detailed description.',
    }, {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents',
    }, {
        type:'"input',
        name: 'Installation',
        message: 'How did you install your app?',
    }, {
        type: 'input',
        name: 'Usage',
        message: 'How do you use your app?',
    }, {
        type: 'input',
        name: 'Contributing',
        message: 'How can other developers contirbute to your project?',
    }, {
        type: 'input',
        name: 'Tests',
        message: 'How to run your application? What command would you run your test?',
    }, {
        type: 'list',
        name: "License",
        message: 'Which license did you use?',
        choices: ['Apache', 'MIT', 'GNU', 'None'],
    }, {
        type: 'input',
        name: 'user_name',
        message: 'What is your name?',
    }, {
        type: 'input',
        name: 'github_username',
        message: 'What is your GitHub username?',
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
    },
  );
};

//questions().then( answers => console.log(answers));

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README.md file has been successfully created!")
    });
}

const writeFileAsync = util.promisify(writeToFile);

questions()
.then(answers => {
    return markdownGenerator(answers);
})

.then(data => {
    return writeToFile(data);
})

// errors to catch
.catch(err => {
    console.log(err)
})

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
