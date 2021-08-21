const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (responses) =>
  `# ${responses.title}

  ![Github license](https://img.shields.io/badge/license-${responses.license}-blue)

## Table of Contents
1.  [Description](#description)
2.  [Installation](#insatllation)
3.  [Usage](#usage)
4.  [Contibution](#contribution)
5.  [Test](#test)
6.  [Questions](#questions)
7.  [License](#license)
        
## [Description](#description)
    ${responses.description}

## Installation (#installation)
<a name='insatllation'></a>
    ${responses.installation}

## [Usage](#usage)
    ${responses.usage}

## [Contribution](#contribution)
    The individuals that contributed to this project are: 
    ${responses.contributors}

## [Test](#test)
    The testing used for this application
    ${responses.test}

## [Questions](questions)
    If you have any questions, feel free to reach out to me via GitHub:
    ${responses.github}
    
    or you may also send me an email at: 
    ${responses.email}

## [license](#license)
    This application is licensed under: 
    ${responses.license}`;

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
      message: 'Who all contributed to this project?',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'test',
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
