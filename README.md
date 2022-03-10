# Professional README Generator

# Licensing:

# Description
- This application is to be used to generate a high-quality and professional README with a consistent format depending on a list of questions that the user will answer in their command line using Node.js

# Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#Usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# User Story
* AS A developer
    * I WANT a README generator
        * SO THAT I can quickly create a professional README for a new project

# Acceptance Criteria
* GIVEN a command-line application that accepts user input
    * WHEN I am prompted for information about my application repository
        * THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    * WHEN I enter my project title
        * THEN this is displayed as the title of the README
    * WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        * THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * WHEN I choose a license for my application from a list of options
        * THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    * WHEN I enter my GitHub username
        * THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    * WHEN I enter my email address
        * THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    * WHEN I click on the links in the Table of Contents
        * THEN I am taken to the corresponding section of the README

# Installation
- Clone the repository from GitHub and download & install Node
- To generate a README, you will need to type ``` npm install `` into the terminal. This will install inquirer and file system module, so that the application is able to run when prompt to create a README.md.

# Usage
- Use the command ``` node index.js ``` into the terminal command line and the inquirer package will be prompted for your README section.

# Contributing

# Tests
- ``` npm test ``` is used to test
# Questions
- If you have any questions, you can reach out to me at nguy2935@umn.edu or see more of my github projects at nguy2935
