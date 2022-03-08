// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ` ![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license !== 'None' ? `* [License](license)`:''
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== `None`) {
    return (
      ` # License
      This project is license under the ${license} license
      `
    )
  }
  return ``
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ![GitHub License](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)
  }
  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.test}

  ## License
  This project is license under ${data.license}
  ${renderLicenseBadge(license)}

  ## Questions
  If you have any questions, contact me at ${data.email}. You can view more projects at https://github.com/${data.github}.
  `;
}

module.exports = generateMarkdown;
