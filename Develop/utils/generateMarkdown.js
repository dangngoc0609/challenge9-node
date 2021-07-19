// TODO: Create a function that returns a license badge based on which license is passed in

const Choices = require("inquirer/lib/objects/choices");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  #### Table of Content 
  1. [Usage Information](#GithubUserName-email)
  3. [Description](#project-desription)
  4. [Installation Instruction](#Installation-instruction)
  5. [Credit](#credit)
  6. [Contribution](#Contributor-guidelines)
  7. [Test](#test-Instrution)
  8. [License](#license)
  9. [Question](#question)

  ## Usage Information
  *${answers.usage}
  *${answers.github}
  *${answers.email}
  ## Description
  *${answers.description}
  ## Installation Instruction
  *${answers.install}
  *${answers.installNotes}
  ## Credit
  *${answers.credit}
  ## Contribution
  *${answers.contribution}
  ## Test
  *${answers.test}
  ## License
  *${answers.license}
  ## Questions
  * For additional question about the project please contact to ${answers.email}
  *Follow my work on GitHub at ${answers.github}`;


}

module.exports = generateMarkdown;
