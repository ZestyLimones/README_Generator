// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (responses) =>
  `# ${responses.title}
https://img.shields.io/static/v1?label=license&message=MIT&color=blue


## Table of Contents
1.  [Description](#description)
2.  [Installation](#insatllation)
3.  [Usage](#usage)
4.  [Contibution](#contributions)
5.  [Test](#test)
6.  [Questions](#questions)
        
 ## [Description](#description)
    ${responses.desription}

  ## [Documenation](#documentation)
  <a name='documentation'></a>
  added in some info for the documenation piece 

  ### Installation
  <a name='insatllation'></a>











  here is the end`;

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
      name: 'installation-information',
    },
    {
      type: 'input',
      message: 'What is the purpose of this application?',
      name: 'usage-information',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contribution-guidelines',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'test-instructions',
    },
    {
      type: 'list',
      message: 'What type of license would you like to use?',
      choices: [
        'Academic Free License v3.0',
        'Boost Software License 1.0',
        'ISC',
        'MIT',
        'PostgreSQL License',
        'none',
      ],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github-username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((responses) => {
    console.log(responses);
    const readmeContent = generateReadme(responses);

    fs.writeFile('README.md', readmeContent, (err) => {
      err
        ? console.log(err)
        : console.log('Successfully created a README with user input!');
    });
  });
