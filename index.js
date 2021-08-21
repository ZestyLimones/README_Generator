const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (responses) =>
  `# ${responses.title}

  ![Github license](https://img.shields.io/badge/license-${responses.license}-blue)

## Table of Contents
1.  [Description](#description)
2.  [Installation](#installation)
3.  [Usage](#usage)
4.  [Contibution](#contribution)
5.  [Test](#test)
6.  [Questions](#questions)
7.  [License](#license)
        
## [Description](#description)
    ${responses.description}

## Installation (#installation)
    ${responses.installation}

## [Usage](#usage)
    ${responses.usage}

## [Contribution](#contribution)
    If others would like to contribute to this project they may ${responses.contribute} the Repo.

## [Test](#test)
    The testing used for this application
     ${responses.test}

## [Questions](questions)
    If you have any questions, feel free to reach out to me via GitHub: ${responses.github}
    
    or you may also send me an email at: ${responses.email}

## [license](#license)
    This application is licensed under: ${responses.license}`;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please describe your application.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the instation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the purpose of this application?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How may others contribute to this project',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'What command should be used to run tests?',
      name: 'test',
      default: 'npm test',
    },
    {
      type: 'list',
      message: 'What type of license would you like to use?',
      choices: [
        'Academic.Free.License',
        'Boost.Software.License',
        'ISC',
        'MIT',
        'PostgreSQL.License',
      ],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((responses) => {
    const readmeContent = generateReadme(responses);

    fs.writeFile('./Demo/README.md', readmeContent, (err) => {
      err
        ? console.log(err)
        : console.log('Successfully created a README with user input!');
    });
  });
