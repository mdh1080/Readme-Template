const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe the project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Steps to install project?",
    },
    { type: "input",
      name: "usage",
      message: "Instructions and examples for use?",
    },
    { type: "input",
      name: "credits",
      message: "List collaborators and third party assets.",
    },
    { type: "list",
      name: "license",
      message: "What is the type of the license?",
      choices: ["Apache", "GNU", "Public", "MIT", "Mozilla"],
    },
    { type: "input",
      name: "features",
      message: "What are specific features of the project?",
    },
    { type: "input",
      name: "contributing",
      message: "How can others contribute to the project?",
    },
    { type: "input",
      name: "tests",
      message: "What are the tests for the project?",
    },
    { type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    { type: "input",
      name: "email",
      message: "What is your email address?",
    }

  ])
 
  .then((answers) => {
    console.log(answers),
    fs.writeFileSync("README.md", `

# ${answers.title}  

![image](https://img.shields.io/badge/license-${answers.license}-blue)

## Description
${answers.description}

## Table of Contents
* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Credits](#usage)

* [License](#license)

* [Features](#features)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${answers.installation}

## Usage 
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}

## Features
${answers.features}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
### GitHub username: ${answers.username}
### GitHub Profile: https://github.com/${answers.username}
I can be contacted by email at: ${answers.email} if you have any questions. `)


  } );
