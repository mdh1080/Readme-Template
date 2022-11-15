const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe the project",
    },
    {
      type: "input",
      name: "Installation",
      message: "What is the installation instructions?",
    },
    { type: "input",
      name: "usage",
      message: "How to use the web application?",
    },
    { type: "input",
      name: "credits",
      message: "List collaborators and third party assets.",
    },
    { type: "input",
      name: "license",
      message: "What is the type of the license?",
    }
  ])
 
  .then((answers) => {
    console.log(answers),
    fs.writeFileSync("README.md", `



# ${answers.title}

* [Description](#description)

* [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage 
${answers.usage}

## Credits
 ${answers.credits}

## License
[![GitHub License](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://github.com/mdh1080/challenge-9)

`
      )
  })