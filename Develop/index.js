// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require ("inquirer");
const generateREADME = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
function promptUser(){   
 return inquirer
.prompt([
// project title
    {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
},

// usage
{
    type: "confirm",
    name: "usage",
    message: "Do you want to provide user useage information?", 
},
{
    type: "input",
    name: "github",
    message: "What is your github UserName?",
},
 
{
    type: "input",
    name: "email",
    message: "what is your email address?",
},
// description 
{
    type: "input",
    name: "description",
    message: "Desription of your project ?", 
},
//Install
{
    type: "input",
    name: "install",
    message: "Do you have any installation for your project?", 
},

{
    type: "input",
    name: "installNotes",
    message: "What are the steps required to install your project?", 
},

// credit 
{
    type: "confirm",
    name: "credit",
    message: " Do you want to add any credit to your repo?",
},

//contribution 
{
    type: "input ",
    name: "contribution",
    message: " any contribution rule about repo? ",  
},
// Test 
{
    type: "input",
    name: "test",
    message: "Do you want to add any instruction for running test ?",
},
// License
{
    type: "checkbox",
    name: "license ",
    choices: [
        "GNU GENERAL PUBLIC LICENSE",
        "MIT License",]
},

])}



////function generateREADME(answers){
    // return `# ${answers.project.title}
    // #### Table of Content 
    // 1. [Usage Information](#GithubUserName-email)
    // 3. [Description](#project-desription)
    // 4. [Installation Instruction](#Installation-instruction)
    // 5. [Credit](#credit)
    // 6. [Contribution](#Contributor-guidelines)
    // 7. [Test](#test-Instrution)
    // 8. [License](#license)
    // 9. [Question](#question)

    // ## Usage Information
    // *${answers.usage}
    // *${answers.github}
    // *${answers.email}
    // ## Description
    // *${answers.description}
    // ## Installation Instruction
    // *${answers.install}
    // *${answers.installNotes}
    // ## Credit
    // *${answers.credit}
    // ## Contribution
    // *${answers.contribution}
    // ## Test
    // *${answers.test}
    // ## License
    // *License under the ${answers.license}
    // ## Questions
    // * For additional question about the project please contact to ${answers.email}
    // *Follow my work on GitHub at ${answers.github}`;
  //}
promptUser()
.then(function(answers){
    const readme = generateREADME(answers);
    return fs.writeFileSync("README.md", readme);
})
.then(function() {
    console.log("README.md has been created!");
})
.catch(function(err){
    console.log(err);
});
